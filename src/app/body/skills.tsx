import {
    Card,
    CardContent,
    CardFooter,
} from '@/components/ui/card';
import { SiPython, SiJavascript, SiReact, SiCplusplus, SiSqlite, SiDjango, SiQt, SiGit, SiGithub, SiLinux } from "react-icons/si"; 
import { DiNodejs } from "react-icons/di";

const skills = [
    { name: 'Python', icon: <SiPython className="text-4xl "/> },
    { name: 'JavaScript', icon: <SiJavascript className="text-4xl "/> }, 
    { name: 'C++', icon: <SiCplusplus className="text-4xl "/> },
    { name: 'SQL', icon: <SiSqlite className="text-4xl "/> },
    { name: 'Django', icon: <SiDjango  className="text-4xl "/> },
    { name: 'React', icon: <SiReact className="text-4xl "/> },
    { name: 'Node.js', icon: <DiNodejs className="text-4xl "/> },
    { name: 'Qt', icon: <SiQt className="text-4xl "/> },
    { name: 'Git', icon: <SiGit className="text-4xl "/> },
    { name: 'GitHub', icon: <SiGithub className="text-4xl "/>},
    { name: 'Linux', icon: <SiLinux className="text-4xl "/>},

];

const Skills = () => {
    return (
        <div className="flex flex-col justify-center items-center p-8 text-left">
            <h2 className="text-4xl font-bold mb-8 underline">Skills</h2>
            <p className="max-w-2xl mb-8 text-center">
                Als enthusiastischer Entwickler widme ich mich dem kontinuierlichen Lernen und der Vertiefung meiner technischen Fähigkeiten in einer Vielzahl von Programmiersprachen und Tools.
            </p>
            <div className="flex flex-wrap justify-center gap-4 max-w-6xl mb-8">
            {skills.map((skill) => (
                <Card key={skill.name} className='items-center pt-6 w-32 h-32'>
                    <CardContent className='flex justify-center items-center p-0 pb-2'>
                        {skill.icon}
                    </CardContent>
                    <CardFooter className="flex justify-center items-center w-full pt-2">
                        <p className="text-center font-semibold">{skill.name}</p>
                    </CardFooter>
                </Card>
            ))}
            </div>
            <p className="max-w-2xl mb-8 mt-8 text-center">
                Ich betrachte das Lernen als eine nie endende Reise, auf der ich ständig neue Technologien und Methoden erkunde, um mein Verständnis und meine Fähigkeiten in der Softwareentwicklung zu erweitern.
            </p>
        </div>
    );
}

export default Skills;
