<template>
    <nav class="header">
        <div class="header-left">
            <img src="/img/logo.png" alt="Logo" class="logo">
        </div>

        <div class="header-right">
            <ul>
                <li><a href="#about">À Propos</a></li>
                <li><a href="#experiences">Expériences</a></li>
                <li><a href="#projects">Projets</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </div>  
    </nav>

    <div class="entry-header">
        <div class="entry-header-content">
            <p>Bonjour, je suis</p>
            <h1>Maël Caubere</h1>
            <Typed :options="options">
                <h2>Développeur <span class="typing"></span></h2> 
            </Typed>
        </div>
        
        <div class="entry-header-image">
            <img src="/img/tortue.png">
        </div>
    </div>

</template>

<style lang="scss" scoped>
    .header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 20px;
        background-color: #222;
        color: white;
    }

    .header-left {
        display: flex;
        align-items: center;
    }

    .logo {
        width: 75px;
        height: 75px;
        padding: 10px;  
    }

    .header-right ul {
        display: flex;
        list-style: none;
    }

    .header-right ul li {
        margin: 0 10px;
    }

    .header-right ul li a {
        color: white;
        text-decoration: none;
        font-size: 1.2em;
    }

    .header-right ul li a:hover {
        color: #01ccff;
    }

    .header-right ul li a::after {
        content: '';
        display: block;
        width: 0;
        height: 2px;
        background-color: #01ccff;
        transition: width 0.3s;
    }

    .header-right ul li a:hover::after {
        width: 100%;
    }

    .entry-header {
        margin: 10%;
        display: flex;
        align-items: center;
        justify-content: space-around;
    }

    .entry-header-content {
        display: flex;
        justify-content: center;
        align-items: flex-start;
        flex-direction: column;
    }

    .entry-header h1 {
        font-size: 4em;
    }

    .entry-header h2 {
        font-size: 2.5em;
        color: #01ccff;
    }

    .entry-header p {
        font-size: 1.2em;
    }

    .entry-header h2 span {
        color: #01ccff;
    }

    .entry-header h2 .typed-cursor {
        color: white;
    }

    .entry-header-image {
        display: flex;
        justify-content: flex-end;
        align-items: flex-end;
    }

    .entry-header-image img {
        width: 200px;
        height: 200px;
    }

    .scroll-down {
        position: absolute;
        bottom: 20px;
        left: 50%;
        transform: translateX(-50%);
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .chevron-down {
        font-size: 2em;
        color: white;
        text-decoration: none;
        transform: rotate(-90deg);
    }
</style>

<script setup lang="ts">
import { Typed } from "@duskmoon/vue3-typed-js";
import type { TypedOptions } from "@duskmoon/vue3-typed-js";

const options: TypedOptions = {
    strings: ["web", "full-stack", "back-end"],
    loop: true,
    typeSpeed: 60,
    backSpeed: 60,
    backDelay: 2000,
};
</script>