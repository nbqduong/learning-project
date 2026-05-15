<script setup lang="ts">
const api = useApi();
const auth = useAuth();
const router = useRouter();

const email = ref("");
const password = ref("");
const error = ref("");

const submit = async () => {
  error.value = "";
  try {
    const result = await api.login({
      email: email.value,
      password: password.value,
    });
    auth.setSession(result.token, result.user);
    router.push("/courses");
  } catch (err: any) {
    error.value = err?.data?.error || err?.message || "Login failed";
  }
};
</script>

<template>
  <main style="padding: 24px; max-width: 560px; margin: 0 auto;">
    <h1 style="margin: 0 0 16px;">Sign in</h1>
    <form style="display: grid; gap: 12px; background: #fff; border: 1px solid #e5e7eb; padding: 16px;" @submit.prevent="submit">
      <input v-model="email" placeholder="Email" type="email" style="padding: 10px;" />
      <input v-model="password" placeholder="Password" type="password" style="padding: 10px;" />
      <button style="background: #111827; color: #fff; border: 0; padding: 11px;">Login</button>
      <p v-if="error" style="color: #b91c1c; margin: 0;">{{ error }}</p>
      <p style="margin: 0; color: #4b5563;">Demo instructor: instructor@example.com / password</p>
    </form>
  </main>
</template>

