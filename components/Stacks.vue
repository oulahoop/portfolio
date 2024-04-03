<template>
    <div class="stack-container">
        <h1>Front-End</h1>
        <div class="stacks">
            <Stack v-for="stack in stacksFront" :key="stack" :stack="stack" />
        </div>
    </div>

    <div class="stack-container">
        <h1>Back-End</h1>
        <div class="stacks">
            <Stack v-for="stack in stacksBack" :key="stack" :stack="stack" />
        </div>
    </div>

    <div class="stack-container">
        <h1>Autres</h1>
        <div class="stacks">
            <Stack v-for="stack in stacksOther" :key="stack" :stack="stack" />
        </div>
    </div>
</template>

<style scoped>
.stack-container {
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
}

h1 {
    font-size: 2rem;
    color: white;
    margin-bottom: 20px;
}

.stacks {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 20px;
}

</style>

<script setup>

const stacksFront = [
    {
        name: "HTML",
        icon: "logos:html-5"
    },
    {
        name: "CSS",
        icon: "logos:css-3"
    },
    {
        name: "JavaScript",
        icon: "logos:javascript"
    },
    {
        name: "TypeScript",
        icon: "logos:typescript-icon"
    },
    {
        name: "Vue",
        icon: "logos:vue"
    },
    {
        name: "Nuxt",
        icon: "logos:nuxt-icon"
    },
    {
        name: "Angular",
        icon: "logos:angular-icon"
    },
    {
        name: "SASS",
        icon: "logos:sass"
    },
    {
        name: "WordPress",
        icon: "logos:wordpress-icon"
    }
];

const stacksBack = [
    {
        name: "PHP",
        icon: "logos:php"
    },
    {
        name: "Laravel",
        icon: "logos:laravel"
    },
    {
        name: "Symfony",
        icon: "logos:symfony"
    },
    {
        name: "Java",
        icon: "logos:java"
    },
    {
        name: "Spring",
        icon: "logos:spring"
    },
    {
        name: "NodeJS",
        icon: "logos:nodejs"
    },
    {
        name: "MongoDB",
        icon: "logos:mongodb-icon"
    },
    {
        name: "SQL",
        icon: "material-symbols:database"
    }
];

const stacksOther = [
    {
        name: "GIT",
        icon: "logos:git"
    },
    {
        name: "Docker",
        icon: "logos:docker"
    },
    {
        name: "Github",
        icon: "logos:github"
    },
    {
        name: "Gitlab",
        icon: "logos:gitlab"
    },
    {
        name: "Figma",
        icon: "logos:figma"
    },
    {
        name: "Apache",
        icon: "logos:apache"
    },
    {
        name: "Linux",
        icon: "logos:linux-tux"
    },
    {
        name: "Windows",
        icon: "logos:microsoft-windows-icon"
    },
    {
        name: "MacOS",
        icon: "logos:macosx"
    }
];



</script>