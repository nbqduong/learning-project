<template>
  <main style="padding: 40px 24px; max-width: 1100px; margin: 0 auto;">
    <section style="padding: 32px; background: #fff; border: 1px solid #e5e7eb;">
      <h1 style="margin: 0 0 16px; font-size: 34px;">Build and sell practical courses</h1>
      <p style="margin: 0 0 20px; max-width: 680px; color: #374151;">
        A marketplace baseline for instructors and students, with Nuxt on the frontend, Go on the backend,
        and provider adapters ready for video streaming and split payments.
      </p>
      <div style="display: flex; gap: 12px; flex-wrap: wrap;">
        <NuxtLink to="/courses" style="background: #7c3aed; color: #fff; padding: 12px 18px; text-decoration: none;">
          Browse courses
        </NuxtLink>
        <NuxtLink to="/instructor" style="background: #111827; color: #fff; padding: 12px 18px; text-decoration: none;">
          Instructor dashboard
        </NuxtLink>
      </div>
    </section>
  </main>
</template>
