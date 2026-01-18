<template>
    <n-form>
        <n-form-item path="email" label="Email">
            <n-input v-model:value="email" placeholder="Entrez votre email"></n-input>
        </n-form-item>
        <n-form-item path="password" label="Mot de passe">
            <n-input
                v-model:value="password"
                type="password"
                placeholder="Entrez votre mot de passe"
                show-password-on="click">
            </n-input>
        </n-form-item>
        <n-button @click="login" type="primary" block>
            Se connecter
        </n-button>
        <p>Pas de compte ? <a href="#" @click="$emit('switchToRegister')">S'inscrire</a></p>
    </n-form>
</template>




<script setup lang="ts">
    import { ref } from "vue";
    import type { User } from "../../types/common.type";
    import { useMessage } from "naive-ui";
    import { useRouter } from "vue-router";
    import { useUserStore } from "../../stores/user.store";

    const router = useRouter();

    const email = ref("");
    const password = ref("");
    const username = ref("");

    const message = useMessage();
    const userStore = useUserStore();

    const login = async () => {
        const user: User = {
            username: username.value,
            email: email.value,
            password: password.value
        }

        try {
            await userStore.login(user);
            message.success("Connexion réussie");
            router.push("/shrooms");
        } catch (error: any) {
            message.error("Erreur");
            console.log(error.message);
        }
    }
</script>




<style scoped>

</style>