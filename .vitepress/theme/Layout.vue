<script setup lang="ts">
import { useData } from "vitepress";

import NotFound from './views/layout/NotFound.vue'
import Home from './views/layout/Home.vue'
import Page from './views/layout/Page.vue'

// https://vitepress.dev/reference/runtime-api#usedata
const { page, frontmatter } = useData();
</script>

<template>
  <NotFound v-if="page.isNotFound" />
  <Home v-if="frontmatter.home" />
  <Page v-else />
  <!-- <Page /> renders <Content /> -->
</template>
