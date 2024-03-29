<template>
    <div class="projects-container" id="projects">
        <BigTitle title="Projets Personnels"></BigTitle>
        <div class="projects">
            <div class="project" v-for="project in projects" :key="project.id">
                <img :src="project.img" alt="project.name"  />
                <div class="project-info">
                    <h1>{{ project.name }}</h1>
                    <p>{{ project.description }}</p>
                    <div class="project-links">
                        <a :href="project.github" target="_blank">Github</a>
                        <a :href="project.link" target="_blank">Voir le projet</a>
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
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        gap: 20px;
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

    .project-links a {
        padding: 10px 20px;
        background-color: #01ccff;
        color: white;
        border-radius: 5px;
        text-decoration: none;
    }
</style>

<script setup>
import { ref } from 'vue';

const projects = ref([
    {
        id: 1,
        name: 'Mizuka',
        description: "Bot Discord pour la gestion et fidèlisation d'un serveur d'environ 30 000 membres",
        img: '/img/projects/mizuka.png',
        github: 'https://github.com/oulahoop/bot',
        link: 'https://google.com'
    },
    {
        id: 2,
        name: 'Vacances API',
        description: 'API REST pour les vacances scolaires en France',
        img: '/img/projects/vacances-api.png',
        github: 'https://github.com/oulahoop/Vacances-API',
        link: 'https://google.com'
    },
    {
        id: 3,
        name: 'FTP over HTTP',
        description: 'API REST permettant de gérer un serveur FTP depuis des requêtes HTTP',
        img: '/img/projects/ftp-over-http.png',
        github: 'https://github.com/oulahoop/FTP-over-HTTP',
        link: 'https://gus-corp.fr/'
    },
    {
        id: 4,
        name: 'Chatting API',
        description: "API REST pour un système de chat discord-like réalisé en Laravel 10",
        img: '/img/projects/chatting-api.png',
        github: 'https://github.com/oulahoop/Chatting-API',
        link: 'https://google.com'
    }
]);
</script>