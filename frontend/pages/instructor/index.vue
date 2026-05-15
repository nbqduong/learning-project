<script setup lang="ts">
const api = useApi();
const auth = useAuth();

const title = ref("");
const subtitle = ref("");
const description = ref("");
const price = ref(0);
const published = ref(true);
const resultMessage = ref("");

const submit = async () => {
  resultMessage.value = "";
  try {
    if (!auth.isLoggedIn.value) {
      resultMessage.value = "Login as an instructor first.";
      return;
    }
    const course = await api.createCourse({
      title: title.value,
      subtitle: subtitle.value,
      description: description.value,
      price_cents: Math.round(price.value * 100),
      published: published.value,
    });
    resultMessage.value = `Course created: ${course.title}`;
    title.value = "";
    subtitle.value = "";
    description.value = "";
    price.value = 0;
  } catch (err: any) {
    resultMessage.value = err?.data?.error || err?.message || "Create course failed";
  }
};
</script>

<template>
  <main style="padding: 24px; max-width: 760px; margin: 0 auto;">
    <h1 style="margin: 0 0 16px;">Instructor Dashboard</h1>
    <p style="margin: 0 0 16px; color: #4b5563;">
      Use an instructor account to create a published course. Video upload is still adapter-backed placeholder logic.
    </p>
    <form style="display: grid; gap: 12px; background: #fff; border: 1px solid #e5e7eb; padding: 16px;" @submit.prevent="submit">
      <input v-model="title" placeholder="Course title" style="padding: 10px;" />
      <input v-model="subtitle" placeholder="Subtitle" style="padding: 10px;" />
      <textarea v-model="description" placeholder="Description" rows="5" style="padding: 10px;" />
      <input v-model.number="price" type="number" min="0" step="0.01" placeholder="Price in USD" style="padding: 10px;" />
      <label style="display: flex; gap: 8px; align-items: center;">
        <input v-model="published" type="checkbox" />
        Publish immediately
      </label>
      <button style="background: #111827; color: #fff; border: 0; padding: 11px;">Create course</button>
      <p v-if="resultMessage" style="margin: 0;">{{ resultMessage }}</p>
    </form>
  </main>
</template>

