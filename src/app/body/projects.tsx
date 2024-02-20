"use client"

import React, { useEffect, useState } from 'react';

import Image from 'next/image';
import Link from 'next/link';

import { motion } from 'framer-motion';

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';

import { Button } from '@/components/ui/button';

const Projects = () => {

    const projects = [
        {
            id: 1,
            projectName: "Audioprep",
            projectDescription: "Audioprep ist ein Tool, das eine Audiodatei für das Voice-Modell-Training KI RVC aufbereited und segmentiert um besser trainieren zu können. Das Tool ist in Python umgesetzt",
            projectImage: "/images/audioprep.png",
            projectLink: "https://github.com/Koenigsloewe/Audioprep"
        },
        {
            id: 2,
            projectName: "AlpineAura E-Commerce",
            projectDescription: "AlpineAura ist ein E-Commerce-Shop für Outdoor-Produkte. Der Shop ist in Python mit Django und SQLite umgesetzt und nutzt die Stripe-API und Paypal für die Zahlungsabwicklung.",
            projectImage: "/images/alpineaura.png",
            projectLink: ""
        },
        {
            id: 3,
            projectName: "Pomodorodex",
            projectDescription: "Pomodorodex ist ein Pomodoro-Timer, der die Arbeitszeit in 25-Minuten-Intervalle gliedert und die Pausenzeiten dazwischen regelt. Zusätzlich bietet es eine To-Do-Liste und Möglichkeiten zur Personalisierung. Das Tool ist in Python programmiert.",
            projectImage: "/images/pomodorodex.png",
            projectLink: "https://github.com/Koenigsloewe/Pomodorodex"
        }
    ];

    const h2Variants = {
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

    const containerVariants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: { x: -50, opacity: 0 },
        visible: (i : number) => ({
            x: 0,
            opacity: 1,
            transition: {
                type: "easeInOut",
                duration: 1.0,
                delay: 1.0 + (i * 0.5),
            },
        }),
    };

    return (
        <div className="flex flex-col justify-center items-center p-8 text-center">
            <motion.h2
                variants={h2Variants}
                initial="hidden"
                animate="visible"
                className="text-4xl font-bold mb-8 underline">
                Meine Projekte
            </motion.h2>
            <motion.div
                className="max-w-6xl mb-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
                variants={containerVariants}
                initial="hidden"
                animate="visible">
                {projects.map((project, index) => (
                    <motion.div
                        key={index}
                        custom={index} // Custom prop for dynamic delay
                        variants={itemVariants}>
                        <Card className="flex flex-col h-full">
                            <CardContent>
                                <CardHeader className='items-center'>
                                    <Image src={project.projectImage} alt={project.projectName} width={500} height={500} layout='responsive' />
                                </CardHeader>
                                <CardTitle className="mb-2 min-h-[48px]">{project.projectName}</CardTitle>
                                <CardDescription className="mb-4 min-h-[96px]">{project.projectDescription}</CardDescription>
                            </CardContent>
                            <CardFooter className="flex justify-center mt-auto">
                                <Link href={project.projectLink} passHref>
                                    <Button>Projekt ansehen</Button>
                                </Link>
                            </CardFooter>
                        </Card>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
};

export default Projects;