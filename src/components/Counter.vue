<script lang="ts" setup>
const count = ref(0);
</script>

<template>
  <button @click="count++">{{ count }}</button>
</template>
