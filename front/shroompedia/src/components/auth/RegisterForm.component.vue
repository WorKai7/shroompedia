<template>
    <!-- Formulaire de register avec champ username, mail, mot de passe et confirmation -->
    <n-form>
        <n-form-item path="username" label="Nom d'utilisateur">
            <n-input :status="inputStatus" v-model:value="username" placeholder="Entrez votre nom d'utilisateur"></n-input>
        </n-form-item>
        <n-form-item path="email" label="Email">
            <n-input :status="inputStatus" v-model:value="email" placeholder="Entrez votre email"></n-input>
        </n-form-item>
        <n-form-item path="password" label="Mot de passe">
            <n-input
                v-model:value="password"
                :status="passInputStatus"
                type="password" 
                placeholder="Entrez votre mot de passe"
                show-password-on="click">
            </n-input>
        </n-form-item>
        <n-form-item path="password" label="Confirmer le mot de passe">
            <n-input
                v-model:value="confirmPassword"
                :status="passInputStatus"
                type="password"
                placeholder="Confirmez votre mot de passe"
                show-password-on="click">
            </n-input>
        </n-form-item>
        <n-button @click="register" type="primary" block>
            S'inscrire
        </n-button>
        <p>Déjà inscrit ? <a href="#" @click="switchToLogin">Se connecter</a></p>
    </n-form>
</template>




<script setup lang="ts">
    import { ref } from 'vue';
    import type { User } from '../../types/common.type';
    import { useUserStore } from '../../stores/user.store';
    import { useMessage } from 'naive-ui';
    
    // Signal pour changer de tab
    const emit = defineEmits(["switchToLogin"]);

    const switchToLogin = () => {
        emit("switchToLogin");
    }

    const username = ref("");
    const email = ref("");
    const password = ref("");
    const confirmPassword = ref("");
    const message = useMessage()
    const passInputStatus = ref("");
    const inputStatus = ref("");

    const userStore = useUserStore();

    // Fonction de register
    const register = () => {
        // Validation des champs
        if (!username.value || !email.value || !password.value) {
            message.error("Veuillez remplir tous les champs")
            inputStatus.value = "error"
            passInputStatus.value = "error";
            return -1
        }

        // Validation des champs mot de passe
        if (password.value !== confirmPassword.value) {
            message.error("Le mot de passe et la confirmation sont différents");
            passInputStatus.value = "error";
            return -1;
        };

        // Préparation de l'objet user
        const user: User = {
            username: username.value,
            email: email.value,
            password: password.value
        }

        // Mise à jour bdd
        try {
            userStore.register(user);
            message.success("Utilisateur créé");
            switchToLogin();
        } catch (error: any) {
            message.error("Erreur");
        }
    }
</script>




<style scoped>

</style>