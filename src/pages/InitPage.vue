<script setup lang="ts">
const name = ref("");
const router = useRouter();
import { routesConfig } from "../router/routesConfig";

const sayHello = () => {
  ElMessage.success(`Welcome ${name.value}`);
  router.push(routesConfig.Home);
};
</script>

<template>
  <div class="text-center flex flex-col p-5">
    <h1 class="font-bold text-violet-600 text-5xl font-quicksand">Payments</h1>

    <div class="mt-10 flex flex-col gap-5">
      <el-input size="large" v-model="name" placeholder="Ingresa tu nombre" />
      <el-button @click="sayHello" size="large" color="#8B5CF6">
        Ingresar
      </el-button>
    </div>
  </div>
</template>
