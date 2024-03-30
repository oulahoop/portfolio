<template>
    <div class="contact" id="contact">
        <BigTitle title="Contact"></BigTitle>

        <div class="contact-content">
            <div class="contact-content-left">
                <h2>Envoyez-moi un message</h2>
                <form @submit.prevent="sendForm()">
                    <input type="text" placeholder="Nom" required v-model="form.name">
                    <input type="email" placeholder="Email" required v-model="form.email">
                    <textarea placeholder="Message" rows="5" required v-model="form.message"></textarea>
                    <div class="h-captcha" data-captcha="true"></div>
                    <button class="button">Envoyer</button>
                </form>
            </div>

            <div class="contact-content-right">
                <h2>Me contacter autrement</h2>
                <Icon @click="redirectToLink('linkedin')" name="logos:linkedin-icon" color="white" />
                <Icon @click="redirectToLink('github')" name="logos:github-icon" color="white" />
                <Icon @click="redirectToLink('twitter')" name="logos:twitter" color="white" />
                <Icon @click="redirectToLink('discord')" name="logos:discord-icon" color="white" />
                <Icon @click="redirectToLink('email')" name="ic:round-email" color="white" />
            </div>
        </div>
    </div>
</template>

<style scoped>
    .contact {
        padding: 100px 0;
        background-color: #222;
    }

    .contact-content {
        display: flex;
        justify-content: center;
        margin: 0 auto;
        gap: 40px;
    }

    .contact-content-left,
    .contact-content-right {
        width: 50%;
    }

    .contact-content-left {
        padding: 0 10%;
    }

    h2 {
        font-size: 2rem;
        color: white;
        margin-bottom: 20px;
    }

    p {
        font-size: 1.2rem;
        color: white;
        margin-bottom: 10px;
    }

    input, textarea {
        padding: 10px;
        margin-bottom: 10px;
        border: none;
        border-radius: 5px;
        color: black;
    }

    .button {
        width: 50%;
    }

    .icon {
        width: 50px;
        height: 50px;
        margin-right: 10px;
    }

    .icon:hover {
        transform: scale(1.1);
    }

    .success, .error {
        padding: 5px 20px;
        margin-top: 10px;
        border-radius: 5px;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .success svg, .error svg {
        cursor: pointer;
    }

    .success {
        background-color: #2d922d;
    }

    .error {
        background-color: #9e3e3e;
    }

    form {
        display: flex;    
        justify-content: center;
        flex-direction: column;
    }

    .contact-content-right svg {
        cursor: pointer;
    }

</style>

<script setup lang="ts">
import { ref } from 'vue';

useHead({
    script: [{ src: 'https://web3forms.com/client/script.js', body: true, async: true, defer: true}]
});

const form = ref({
    name: '',
    email: '',
    message: '',
    access_key: '1e19a485-1003-49f6-88fb-9b51a370eb33'
});

const sendForm = async () => {
    const captcha = document.querySelector('.h-captcha').querySelector('iframe')?.dataset?.hcaptchaResponse ?? null;

    if (!captcha) {
        alert("Veuillez remplir le captcha !\n\nSi aucun captcha n'apparait, vous pouvez me contacter directement sur ma boite mail :)");
        return;
    }

    const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            access_key: form.value.access_key,
            name: form.value.name,
            email: form.value.email,
            message: form.value.message,
        }),
    });

    const result = await response.json();
    
    if (result.success) {
        form.value.name = '';
        form.value.email = '';
        form.value.message = '';
        form.value.access_key = '';
        alert('Message envoyé avec succès');
    } else {
        alert('Erreur lors de l\'envoi du message');
    }
}

const redirectToLink = (link: string) => {
    switch (link) {
        case 'linkedin':
            window.open('https://www.linkedin.com/in/mael-caubere/', '_blank');
            break;
        case 'github':
            window.open('https://github.com/oulahoop', '_blank');
            break;
        case 'twitter':
            window.open('https://twitter.com/blougepvp', '_blank');
            break;
        case 'discord':
            window.open('https://discord.com/invite/friends', '_blank');
            break;
        case 'email':
            window.open('mailto:maelcaubere@hotmail.fr', '_blank');
            break;
    }
}

</script>