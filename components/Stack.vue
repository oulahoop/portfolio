<template>
    <div class="stack" :class="size">
        <Icon :name="stack.icon" color="white" class="margin" />
        <p>{{ stack.name }}</p>
    </div>
</template>

<style scoped>

.stack {
    width: 100px;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: #050505;
    border-radius: 10px;
}

.stack .margin {
    margin: 5px 0;
}

.stack:hover {
    background-color: #020202;
    transition: background-color 0.3s;
    margin-top: -10px;
}

.stack p {
    font-size: 1.2rem;
    color: #00a6ce;
    text-align: center;
    margin: 5px 0;
}

.stack.small {
    width: 75px;
    height: 75px;
}

.stack.small p {
    font-size: 0.8rem;
}

</style>

<script setup>

const props = defineProps({
    stack: Object,
    size: String
});

</script>