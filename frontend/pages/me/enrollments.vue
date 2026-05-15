<script setup lang="ts">
import type { Enrollment } from "~/types/api";

const api = useApi();
const auth = useAuth();
const items = ref<Enrollment[]>([]);
const loading = ref(true);
const error = ref("");

if (!auth.isLoggedIn.value) {
  loading.value = false;
  error.value = "Login to view your enrollments.";
} else {
  try {
    const result = await api.listEnrollments();
    items.value = result.items;
  } catch (err: any) {
    error.value = err?.data?.error || err?.message || "Failed to load enrollments";
  } finally {
    loading.value = false;
  }
}
</script>

<template>
  <main style="padding: 24px; max-width: 900px; margin: 0 auto;">
    <h1 style="margin: 0 0 16px;">My Learning</h1>

    <p v-if="loading">Loading...</p>
    <p v-else-if="error" style="color: #b91c1c;">{{ error }}</p>
    <ul v-else style="background: #fff; border: 1px solid #e5e7eb; padding: 16px 20px; margin: 0;">
      <li v-for="item in items" :key="item.id" style="margin: 0 0 8px;">
        Enrollment {{ item.id }} for course {{ item.course_id }}
      </li>
      <li v-if="items.length === 0">No enrollments yet.</li>
    </ul>
  </main>
</template>

