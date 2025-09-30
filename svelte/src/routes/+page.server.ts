// +page.server.ts avec Nodemailer (SMTP)
import { fail } from '@sveltejs/kit';
import type { Actions } from './$types';
import nodemailer from 'nodemailer';
import {
    EMAIL_HOST,
    EMAIL_PORT,
    EMAIL_USER,
    EMAIL_PASSWORD,
    EMAIL_TO
} from '$env/static/private';

// Configuration du transporteur
const transporter = nodemailer.createTransport({
    host: EMAIL_HOST, // ex: smtp.gmail.com
    port: parseInt(EMAIL_PORT), // 587 pour TLS, 465 pour SSL
    secure: parseInt(EMAIL_PORT) === 465, // true pour 465, false pour 587
    auth: {
        user: EMAIL_USER, // votre email
        pass: EMAIL_PASSWORD // mot de passe d'application
    }
});

export const actions = {
    default: async ({ request }) => {
        const data = await request.formData();

        const nom = data.get('nom')?.toString();
        const prenom = data.get('prenom')?.toString();
        const email = data.get('email')?.toString();
        const societe = data.get('societe')?.toString();
        const objet = data.get('objet')?.toString();
        const message = data.get('message')?.toString();

        // Validation (même code que précédemment)
        const errors: Record<string, string> = {};

        if (!nom || nom.length < 2) errors.nom = 'Le nom doit contenir au moins 2 caractères';
        if (!prenom || prenom.length < 2) errors.prenom = 'Le prénom doit contenir au moins 2 caractères';
        if (!email || !email.includes('@')) errors.email = 'Email invalide';
        if (!objet || objet.length < 3) errors.objet = 'L\'objet doit contenir au moins 3 caractères';
        if (!message || message.length < 10) errors.message = 'Le message doit contenir au moins 10 caractères';

        if (Object.keys(errors).length > 0) {
            return fail(400, { errors, nom, prenom, email, societe, objet, message });
        }

        // Envoi de l'email
        try {
            await transporter.sendMail({
                from: `"Formulaire Contact" <${EMAIL_USER}>`,
                to: EMAIL_TO,
                replyTo: email,
                subject: `Nouveau contact: ${objet}`,
                html: `
                    <h2>Nouveau message de contact</h2>
                    <p><strong>De:</strong> ${prenom} ${nom}</p>
                    <p><strong>Email:</strong> ${email}</p>
                    ${societe ? `<p><strong>Société:</strong> ${societe}</p>` : ''}
                    <p><strong>Objet:</strong> ${objet}</p>
                    <hr>
                    <p><strong>Message:</strong></p>
                    <p>${message.replace(/\n/g, '<br>')}</p>
                `
            });

            return { success: true };

        } catch (error) {
            console.error('Erreur:', error);
            return fail(500, {
                error: 'Erreur lors de l\'envoi',
                nom, prenom, email, societe, objet, message
            });
        }
    }
} satisfies Actions;

// Fichier .env pour Nodemailer :
// EMAIL_HOST=smtp.gmail.com
// EMAIL_PORT=587
// EMAIL_USER=votre-email@gmail.com
// EMAIL_PASSWORD=votre_mot_de_passe_application
// EMAIL_TO=destination@example.com