<script setup lang="ts">
import type { Role } from "~/types/api";

const api = useApi();
const router = useRouter();

const email = ref("");
const password = ref("");
const fullName = ref("");
const role = ref<Role>("student");
const error = ref("");

const submit = async () => {
  error.value = "";
  try {
    await api.register({
      email: email.value,
      password: password.value,
      full_name: fullName.value,
      role: role.value,
    });
    router.push("/auth/login");
  } catch (err: any) {
    error.value = err?.data?.error || err?.message || "Register failed";
  }
};
</script>

<template>
  <main style="padding: 24px; max-width: 560px; margin: 0 auto;">
    <h1 style="margin: 0 0 16px;">Create account</h1>
    <form style="display: grid; gap: 12px; background: #fff; border: 1px solid #e5e7eb; padding: 16px;" @submit.prevent="submit">
      <input v-model="fullName" placeholder="Full name" style="padding: 10px;" />
      <input v-model="email" placeholder="Email" type="email" style="padding: 10px;" />
      <input v-model="password" placeholder="Password" type="password" style="padding: 10px;" />
      <select v-model="role" style="padding: 10px;">
        <option value="student">Student</option>
        <option value="instructor">Instructor</option>
      </select>
      <button style="background: #7c3aed; color: #fff; border: 0; padding: 11px;">Register</button>
      <p v-if="error" style="color: #b91c1c; margin: 0;">{{ error }}</p>
    </form>
  </main>
</template>

