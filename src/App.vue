<template>
  <Header />

  <main>
    <Layout>
      <RouterView />
    </Layout>
  </main>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router';
import Header from "@/preview/components/general/Header.vue";
import Layout from "@/preview/components/general/Layout.vue";
</script>

