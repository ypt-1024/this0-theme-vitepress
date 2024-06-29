<script setup>
import { useData } from 'vitepress'
// https://vitepress.dev/reference/runtime-api#usedata
const { site } = useData()
</script>

<template>
    <h1>{{ site.title }}</h1>
    <p>{{ site.description }}</p>
    <ul>
        <li><a href="/markdown-examples.html">Markdown Examples</a></li>
        <li><a href="/api-examples.html">API Examples</a></li>
    </ul>
</template>

<style scoped></style>