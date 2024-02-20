'use client';

import {
    Card,
    CardContent,
    CardFooter,
} from '@/components/ui/card';
import React from 'react';
import { motion } from 'framer-motion';
import { SiPython, SiJavascript, SiReact, SiCplusplus, SiSqlite, SiDjango, SiQt, SiGit, SiGithub, SiLinux } from "react-icons/si";
import { DiNodejs } from "react-icons/di";

const skills = [
    { name: 'Python', icon: <SiPython className="text-4xl" /> },
    { name: 'JavaScript', icon: <SiJavascript className="text-4xl" /> },
    { name: 'C++', icon: <SiCplusplus className="text-4xl" /> },
    { name: 'SQL', icon: <SiSqlite className="text-4xl" /> },
    { name: 'Django', icon: <SiDjango className="text-4xl" /> },
    { name: 'React', icon: <SiReact className="text-4xl" /> },
    { name: 'Node.js', icon: <DiNodejs className="text-4xl" /> },
    { name: 'Qt', icon: <SiQt className="text-4xl" /> },
    { name: 'Git', icon: <SiGit className="text-4xl" /> },
    { name: 'GitHub', icon: <SiGithub className="text-4xl" /> },
    { name: 'Linux', icon: <SiLinux className="text-4xl" /> },
];

const Skills = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                delayChildren: 0.5, 
                staggerChildren: 0.2, 
            },
        },
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: (i : number) => ({
            y: 0,
            opacity: 1,
            transition: {
                delay: i * 0.5, 
                duration: 1.0,
            },
        }),
    };

    return (
        <motion.div
            className="flex flex-col justify-center items-center p-8 text-center"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            <motion.h2 className="text-4xl font-bold mb-8 underline" variants={itemVariants} custom={0}>
                Skills
            </motion.h2>
            <motion.p className="max-w-2xl mb-8 text-center" variants={itemVariants} custom={1}>
            Als enthusiastischer Entwickler widme ich mich dem kontinuierlichen Lernen und der Vertiefung meiner technischen Fähigkeiten in einer Vielzahl von Programmiersprachen und Tools.
            </motion.p>
            <motion.div
                className="flex flex-wrap justify-center gap-4 max-w-6xl mb-8"
                variants={containerVariants} 
            >
                {skills.map((skill, index) => (
                    <motion.div key={skill.name} variants={itemVariants} 
                    >
                        <Card className='items-center pt-6 w-32 h-32'>
                            <CardContent className='flex justify-center items-center p-0 pb-2'>
                                {skill.icon}
                            </CardContent>
                            <CardFooter className="flex justify-center items-center w-full pt-2">
                                <p className="text-center font-semibold">{skill.name}</p>
                            </CardFooter>
                        </Card>
                    </motion.div>
                ))}
            </motion.div>
            <motion.p className="max-w-2xl mb-8 mt-8 text-center" variants={itemVariants} custom={skills.length + 2}>
            Ich betrachte das Lernen als eine nie endende Reise, auf der ich ständig neue Technologien und Methoden erkunde, um mein Verständnis und meine Fähigkeiten in der Softwareentwicklung zu erweitern.
            </motion.p>
        </motion.div>
    );
}

export default Skills;
