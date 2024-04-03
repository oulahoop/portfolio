<template>
    <div class="projects-container" id="projects">
        <BigTitle title="Projets Personnels"></BigTitle>
        <div class="projects">
            <div class="project" v-for="project in projects" :key="project.id">
                <img :src="project.img" alt="project.name"  />
                <div class="project-info">
                    <h1>{{ project.name }}</h1>
                    <p>{{ project.description }}</p>
                    <div class="stacks">
                        <Stack v-for="stack in project.stacks" :key="stack" :stack="stack" size="small"/>
                    </div>
                    <div class="project-links">
                        <a class="button" :href="project.github" target="_blank">Github</a>
                        <a class="button" v-if="project.link" :href="project.link" target="_blank">Voir le projet</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .projects-container {
        background-color: #151515;
        padding: 100px 10%;
    }

    .projects {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        grid-template-rows: 1fr;
        flex-wrap: wrap;
        gap: 20px;
        align-items: center;
        justify-content: center;
    }

    @media screen and (max-width: 1700px) {
        .projects {
            grid-template-columns: repeat(3, 1fr);
        }
    }

    @media screen and (max-width: 1200px) {
        .projects {
            grid-template-columns: repeat(2, 1fr);
        }
    }

    @media screen and (max-width: 800px) {
        .projects {
            grid-template-columns: 1fr;
        }
    }

    .project {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        background-color: #151515;
        padding: 20px;
        border-radius: 10px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
        width: 300px;
    }

    .project img {
        width: 100%;
        width: 300px;
        height: 300px;
        object-fit: cover;
        border-radius: 10px;
    }

    .project-info {
        margin-top: 20px;
        text-align: center;
    }

    .project-info h1 {
        font-size: 1.5rem;
        color: #01ccff;
    }

    .project-info p {
        font-size: 1.2rem;
        text-align: justify;
    }

    .project-links {
        margin-top: 20px;
        display: flex;
        justify-content: center;
        gap: 20px;
    }

    .stacks {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        gap: 20px;
        margin: 20px 0;
    }

</style>

<script setup>
import { ref } from 'vue';


const projects = ref([
    {
        id: 1,
        name: 'Mizuka',
        description: "Bot Discord pour la gestion et fidèlisation d'un serveur de plus de 40 000 membres",
        img: '/portfolio/img/projects/mizuka.png',
        github: 'https://github.com/oulahoop/bot',
        link: 'https://discord.gg/friends',
        stacks: [
            {
                name: "Java",
                icon: "logos:java"
            },
            {
                name: "Mongodb",
                icon: "logos:mongodb"
            },
            {
                name: "Github",
                icon: "logos:github-icon"
            }
        ]
    },
    {
        id: 2,
        name: 'ACrous The Time',
        description: "Application d'affichage pour les emplois du temps des étudiants, professeurs et salles de l'IUT de Nantes",
        img: '/portfolio/img/projects/acrousthetime.png',
        github: 'https://github.com/gugustinette/acrousthetime',
        link: 'https://acrousthetime.gugustinette.com/',
        stacks: [
            {
                name: "Spring",
                icon: "logos:spring-icon"
            },
            {
                name: "Android",
                icon: "logos:android-icon"
            },
            {
                name: "Next.js",
                icon: "logos:nextjs-icon"
            }
        ]
    },
    {
        id: 3,
        name: 'FTP over HTTP',
        description: 'API REST permettant de gérer un serveur FTP depuis des requêtes HTTP',
        img: '/portfolio/img/projects/ftp-over-http.png',
        github: 'https://github.com/oulahoop/FTP-over-HTTP',
        stacks: [
            {
                name: "CodeIgniter",
                icon: "logos:codeigniter"
            },
            {
                name: "PHP",
                icon: "logos:php"
            },
            {
                name: "Github",
                icon: "logos:github-icon"
            }
        ]
    },
    {
        id: 4,
        name: 'Chatting API',
        description: "API REST pour un système de chat discord-like réalisé en Laravel 10",
        img: '/portfolio/img/projects/chatting-api.png',
        github: 'https://github.com/oulahoop/Chatting-API',
        stacks: [
            {
                name: "Laravel",
                icon: "logos:laravel"
            },
            {
                name: "Github",
                icon: "logos:github-icon"
            }
        ]
    }
]);
</script>