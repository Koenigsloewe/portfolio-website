"use client"

{/* json-server --watch ./public/data/projects.json --port 4000 */}

import React, { useEffect, useState } from 'react';

import Image from 'next/image';
import Link from 'next/link';

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface Project {
    projectName: string;
    projectDescription: string;
    projectImage: string;
    projectLink: string;
}

const Projects = () => {
    const [projects, setProjects] = useState<Project[]>([]);

    useEffect(() => {
        const fetchProjects = async () => {
            const response = await fetch('http://localhost:4000/projects');
            const projects = await response.json();
            setProjects(projects.reverse());
        };

        fetchProjects().catch(console.error);
    }, []);

    return (
        <div className="flex flex-col justify-center items-center p-8 text-center">
            <h2 className="text-4xl font-bold mb-8 underline">Meine Projekte</h2>
            <div className="max-w-6xl mb-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {projects.map((project, index) => (
                    <Card key={index} className="flex flex-col h-full"> 
                        <CardContent>
                            <CardHeader className='items-center'>
                                <Image src={project.projectImage} alt={project.projectName} width={500} height={500} layout='responsive' />
                            </CardHeader>
                            <CardTitle className="mb-2 min-h-[48px]">{project.projectName}</CardTitle>
                            <CardDescription className="mb-4 min-h-[96px]">{project.projectDescription}</CardDescription>
                        </CardContent>
                        <CardFooter className="flex justify-center mt-auto">
                            <Link href={project.projectLink}>
                                <Button>Projekt ansehen</Button>
                            </Link>
                        </CardFooter>
                    </Card>
                ))}
            </div>
        </div>
    );
};

export default Projects;
