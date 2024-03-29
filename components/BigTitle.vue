<template>
    <div class="section-title">
        <h1>{{ title }}</h1>
    </div>
</template>

<style scoped>
    .section-title {
        text-align: center;
        margin: 20px 0;
    }

    .section-title h1 {
        font-size: 3rem;
        color: #01ccff;
        margin-bottom: 50px;
    }

    .section-title h1::after {
        content: '';
        display: block;
        width: 200px;
        height: 2px;
        background-color: #01ccff;
        margin: 25px auto;
    }
</style>

<script>
export default {
    props: {
        title: String
    }
}
</script>