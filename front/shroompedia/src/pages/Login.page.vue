<template>
    <n-card>
        <n-tabs v-model:value="activeTab" type="line" animated>
            <n-tab-pane name="login" tab="Connexion">
                <LoginFormComponent @switch-to-register="activeTab = 'register'"/>
            </n-tab-pane>
            <n-tab-pane name="register" tab="Inscription">
                <RegisterFormComponent @switch-to-login="activeTab = 'login'"/>
            </n-tab-pane>
        </n-tabs>
    </n-card>
</template>


<script lang="ts" setup>
    import { ref } from "vue";
    import LoginFormComponent from "../components/auth/LoginForm.component.vue"
    import RegisterFormComponent from "../components/auth/RegisterForm.component.vue"

    const activeTab = ref("login");

</script>


<style scoped>

</style>