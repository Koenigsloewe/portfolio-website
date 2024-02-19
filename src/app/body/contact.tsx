"use client";

import * as zod from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { Github } from 'lucide-react';
import { Mail } from 'lucide-react';

import Image from "next/image";
import Link from "next/link";

import { motion } from 'framer-motion';

import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const formSchema = zod.object({
    name: zod.string().nonempty("Name muss angegeben werden"),
    email: zod.string().email("Ungültige E-Mail-Adresse"),
    message: zod
        .string()
        .min(10, "Nachricht muss mindestens 10 Zeichen lang sein"),
});

const Contact = () => {
    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            email: "",
            message: "",
        },
    });

    const handleSubmit = () => {
        console.log();
    };

const h1Variants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            type: "easeInOut",
            duration: 1.0,
        },
    },
};

    return (
        <div className="flex flex-col justify-center items-center p-8 text-left min-h-screen">
            <h2 className="text-4xl font-bold mb-8 underline">Kontakt</h2>
            <p className="max-w-2xl mb-8 text-center">
                Haben Sie Fragen, Ideen oder möchten Sie einfach nur Hallo sagen? Ich
                freue mich darauf, von Ihnen zu hören!
            </p>
            <div className="flex flex-col md:flex-row justify-evenly w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <Link href="mailto:ThithuSiva@protonmail.com">
                    <div className="flex items-center justify-center mb-4 md:mb-0 md:mr-4">
                        <Button variant="ghost" className="flex items-center">
                            <Mail className="mr-2" />ThithuSiva@protonmail.com
                        </Button>
                    </div>
                </Link>
                <Link href="https://github.com/Koenigsloewe">
                    <div className="flex items-center justify-center">
                        <Button variant="ghost" className="flex items-center">
                            <Github className="mr-2" />Github
                        </Button>
                    </div>
                </Link>
            </div>

            <Form {...form}>
                <form
                    onSubmit={form.handleSubmit(handleSubmit)}
                    className="w-full max-w-4xl"
                >
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0 text-left">
                            <FormField
                                control={form.control}
                                name="name"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Dein Name:</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Dein Name" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>
                        <div className="w-full md:w-1/2 px-3">
                            <FormField
                                control={form.control}
                                name="email"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Email Adresse:</FormLabel>
                                        <FormControl>
                                            <Input
                                                placeholder="Email Adresse"
                                                type="email"
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>
                    </div>
                    <div className="mb-6">
                        <FormField
                            control={form.control}
                            name="message"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Nachricht:</FormLabel>
                                    <FormControl>
                                        <Textarea
                                            placeholder="Deine Nachricht"
                                            {...field}
                                            className="w-full h-msg resize-none"
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>
                    <div className="text-center">
                        <Button type="submit">Absenden</Button>
                    </div>
                </form>
            </Form>
        </div>
    );
};

export default Contact;
