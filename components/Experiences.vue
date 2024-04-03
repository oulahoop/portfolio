<template>
    <div class="experiences-container" id="experiences">
        <!-- My pasts jobs -->
        <BigTitle title="Experiences"></BigTitle>
        <div class="experiences">
            <div class="experience" v-for="experience in experiences" :key="experience.id">
                <h1>{{ experience.title }}</h1>
                <div class="experience-date-entreprise">
                    <p>{{ experience.date }}</p>
                    <p>{{ experience.entreprise }}</p>
                </div>
                <p>{{ experience.description }}</p>

                <div class="stacks">
                    <Stack v-for="stack in experience.stacks" :key="stack" :stack="stack" />
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .experiences-container {
        background-color: #101010;
        padding: 100px 10%;
    }

    .experiences {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: row;
        flex-wrap: wrap;
        gap: 20px;
    }

    .experience {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        background-color: #151515;
        padding: 20px 20%;
        border-radius: 10px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
        width: 100%;
    }

    .experience h1 {
        font-size: 1.8rem;
        margin: 10px 0;
        color: #01ccff;
    }

    .experience > p {
        font-size: 1.2rem;
        margin-bottom: 20px;
        text-align: center;
    }

    .experience-date-entreprise {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 30px;
        width: 100%;
    }

    .experience-date-entreprise p {
        font-size: 1.1rem;
        color: #ffffffaa;
    }

    .stacks {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        gap: 20px;
    }

    .stack {
        width: 100px;
        height: 100px;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        flex-direction: column;
        background-color: #050505;
        border-radius: 10px;
    }
    
    .stack:hover {
        background-color: #020202;
        transition: background-color 0.3s;
        margin-top: -10px;
    }
</style>

<script setup>
import { ref } from 'vue'

const experiences = ref([
    {
        id: 0,
        title: 'Développeur Full Stack',
        date: '2023 - Aujourd\'hui',
        entreprise: 'Gus Corp',
        description: "Développement de l'application Ama permettant la création d'applications.",
        stacks: [
            {
                name: 'Vue.js',
                icon: 'logos:vue'
            },
            {
                name: 'Laravel',
                icon: 'logos:laravel'
            },
            {
                name: 'PHP',
                icon: 'logos:php'
            },
            {
                name: 'TypeScript',
                icon: 'logos:javascript'
            },
            {
                name: 'CSS',
                icon: 'logos:css-3'
            },
            {
                name: 'HTML',
                icon: 'logos:html-5'
            },
            {
                name: 'Figma',
                icon: 'logos:figma'
            }
        ]
    },
    {
        id: 1,
        title: 'Développeur Full Stack Alternant',
        date: '2022 - 2023',
        entreprise: 'Dotnet SAS',
        description: "Refonte du logiciel de paie Fiche-Paie.net d'une version PHP native à une versione Angular/Symfony.",
        stacks: [
            {
                name: 'Angular',
                icon: 'logos:angular-icon'
            },
            {
                name: 'Symfony',
                icon: 'logos:symfony'
            },
            {
                name: 'PHP',
                icon: 'logos:php'
            },
            {
                name: 'JavaScript',
                icon: 'logos:javascript'
            },
            {
                name: 'CSS',
                icon: 'logos:css-3'
            },
            {
                name: 'HTML',
                icon: 'logos:html-5'
            },
            {
                name: 'Figma',
                icon: 'logos:figma'
            }
        ]
    },
    {
        id: 2,
        title: 'Développeur Full Stack Stagiaire',
        date: '2022 - 2022',
        entreprise: 'Dotnet SAS',
        description: "10 semaines de stage avec pour mission la création d'un plugin WordPress permettant la vente de formations en ligne sur le site creation-entreprise.io et la refonte visuelle du site.",
        stacks: [
            {
                name: 'WordPress',
                icon: 'logos:wordpress-icon'
            },
            {
                name: 'PHP',
                icon: 'logos:php'
            },
            {
                name: 'JavaScript',
                icon: 'logos:javascript'
            },
            {
                name: 'CSS',
                icon: 'logos:css-3'
            },
            {
                name: 'HTML',
                icon: 'logos:html-5'
            },
            {
                name: 'Figma',
                icon: 'logos:figma'
            }
        ]
    }
])
</script>