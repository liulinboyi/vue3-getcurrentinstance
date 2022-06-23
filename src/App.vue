<script setup>
import { ref } from 'vue'
import FileUploadHelper from './test.ts'

const file = new FileUploadHelper();
const msg = ref('Hello World!')
</script>

<template>
  <h1>{{ msg }}</h1>
  <input v-model="msg">
</template>
