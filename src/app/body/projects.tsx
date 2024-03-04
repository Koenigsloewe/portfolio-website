"use client"

import React, { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

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

import projectsData from '@/../public/data/projects.json'

const Projects = () => {

    const reversedProjects = [...projectsData].reverse();

    const [ref, inView] = useInView({
        threshold: 0.2,
        triggerOnce: true,
    });

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
        visible: (i: number) => ({
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
        <div ref={ref} className="flex flex-col justify-center items-center p-8 text-center">
            <motion.h2
                variants={h2Variants}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                className="text-4xl font-bold mb-8 underline">
                Projekte
            </motion.h2>
            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                className="max-w-6xl mb-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {reversedProjects.map((project, index) => (
                    <motion.div
                        key={index}
                        custom={index}
                        variants={itemVariants}>
                        <Card className="flex flex-col h-full transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg">
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