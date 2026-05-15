<script setup lang="ts">
import type { Course } from "~/types/api";

const route = useRoute();
const api = useApi();
const auth = useAuth();
const course = ref<Course | null>(null);
const error = ref("");
const checkoutMessage = ref("");

try {
  course.value = await api.getCourse(String(route.params.slug));
} catch (err: any) {
  error.value = err?.data?.error || err?.message || "Failed to load course";
}

const enroll = async () => {
  if (!course.value) return;
  checkoutMessage.value = "";
  try {
    if (!auth.isLoggedIn.value) {
      checkoutMessage.value = "Login first, then start checkout.";
      return;
    }
    const session = await api.startCheckout(course.value.id);
    await api.confirmEnrollment(course.value.id);
    checkoutMessage.value = `Mock checkout completed: ${session.id}`;
  } catch (err: any) {
    checkoutMessage.value = err?.data?.error || err?.message || "Checkout failed";
  }
};
</script>

<template>
  <main style="padding: 24px; max-width: 900px; margin: 0 auto;">
    <p v-if="error" style="color: #b91c1c;">{{ error }}</p>
    <article v-else-if="course" style="background: #fff; border: 1px solid #e5e7eb; padding: 24px;">
      <h1 style="margin: 0 0 10px;">{{ course.title }}</h1>
      <p style="color: #374151; margin: 0 0 20px;">{{ course.subtitle }}</p>
      <p style="margin: 0 0 20px;">{{ course.description }}</p>
      <p style="font-weight: 700; font-size: 22px;">${{ (course.price_cents / 100).toFixed(2) }}</p>
      <button style="background: #7c3aed; color: #fff; border: 0; padding: 12px 18px;" @click="enroll">
        Enroll with mock checkout
      </button>
      <p v-if="checkoutMessage" style="margin-top: 14px;">{{ checkoutMessage }}</p>
    </article>
  </main>
</template>

