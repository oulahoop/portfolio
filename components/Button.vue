<template>
    <button class="btn" @click="onClick">
        <slot></slot>
    </button>
</template>

<style scoped>
    .btn {
        padding: 10px 20px;
        background-color: #01ccff;
        color: white;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        font-size: 1.2rem;
    }

    .btn:hover {
        background-color: #00a6ce;
    }

    .btn:active {
        background-color: #018db8;
    }

    .btn:focus {
        outline: none;
    }

    .btn:disabled {
        background-color: #ccc;
        cursor: not-allowed;
    }

    .btn:disabled:hover {
        background-color: #ccc;
    }

    .btn:disabled:active {
        background-color: #ccc;
    }

    .btn:disabled:focus {
        outline: none;
    }

</style>

<script>
</script>