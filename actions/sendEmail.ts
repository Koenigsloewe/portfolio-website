"use server";

import { error } from "console";
import { m } from "framer-motion";
import { Resend } from "resend";
import ContactFormEmail from "../email/contact-form-email";
import React from "react";

const resend = new Resend(process.env.RESEND_API_KEY);

const validateString = (value: unknown, length: number) => {
    if (typeof value !== "string" || value.length > length) {
        return false;
    }
    return true;
};

const getErrorMessage = (error: unknown) => {
    let errorMessage: string;

    if (error instanceof Error) {
        errorMessage = error.message;
    } else if (error && typeof error === "object" && "message" in error) {
        errorMessage = String(error.message);
    } else if (typeof error === "string") {
        errorMessage = error;
    } else {
        errorMessage = "Something went wrong";
    }

    return errorMessage;
};

interface ContactFormData {
    name: string;
    email: string;
    message: string;
  }
  
  export const sendEmail = async (formData: ContactFormData) => {
    const { name, email, message } = formData;

    if (!validateString(name, 1000)) {
        return { error: "invalid name" };
    }

    if (!validateString(email, 1000)) {
        return { error: "invalid email" };
    }

    if (!validateString(message, 5000)) {
        return { error: "invalid message" };
    }

    let data;
    try {
        data = await resend.emails.send({
            from: 'Kontaktanfrage von Portfolio Website <onboarding@resend.dev>',
            to: 'thithusiva@protonmail.com',
            subject: `Kontaktanfrage von ${name as string} <${email as string}>,`,
            reply_to: email as string,
            react: React.createElement(ContactFormEmail, {
                name: name as string,
                email: email as string,
                message: message as string
            })
        });
    } catch (error: unknown) {
        return { error: getErrorMessage(error), data: null };
    }
    return { data };
};
