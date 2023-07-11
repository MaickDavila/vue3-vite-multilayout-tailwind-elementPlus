<script setup lang="ts">
const name = ref("Maick");

onMounted(() => {
  console.log("SDSd");
});
</script>

<template>
  <div class="text-2xl font-bold">This is a example Component {{ name }}!</div>
</template>
