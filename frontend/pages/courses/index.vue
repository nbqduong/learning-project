<script setup lang="ts">
import type { Course } from "~/types/api";

const api = useApi();
const courses = ref<Course[]>([]);
const loading = ref(true);
const error = ref("");

try {
  const result = await api.listCourses();
  courses.value = result.items;
} catch (err: any) {
  error.value = err?.data?.error || err?.message || "Failed to load courses";
} finally {
  loading.value = false;
}
</script>

<template>
  <main style="padding: 24px; max-width: 1100px; margin: 0 auto;">
    <h1 style="margin: 0 0 16px;">Course Catalog</h1>

    <p v-if="loading">Loading...</p>
    <p v-else-if="error" style="color: #b91c1c;">{{ error }}</p>
    <div v-else style="display: grid; grid-template-columns: repeat(auto-fill, minmax(260px, 1fr)); gap: 14px;">
      <article
        v-for="course in courses"
        :key="course.id"
        style="background: #fff; border: 1px solid #e5e7eb; padding: 14px;"
      >
        <h2 style="font-size: 18px; margin: 0 0 8px;">{{ course.title }}</h2>
        <p style="color: #4b5563; margin: 0 0 12px;">{{ course.subtitle }}</p>
        <p style="font-weight: 700; margin: 0 0 14px;">${{ (course.price_cents / 100).toFixed(2) }}</p>
        <NuxtLink :to="`/courses/${course.slug}`" style="text-decoration: none;">View course</NuxtLink>
      </article>
    </div>
  </main>
</template>

