<template>
  <div style="font-family: Arial, sans-serif; min-height: 100vh; background: #f8fafc;">
    <header style="background: #111827; color: #fff; padding: 14px 24px;">
      <nav style="display: flex; gap: 16px; align-items: center;">
        <NuxtLink to="/" style="color: #fff; text-decoration: none; font-weight: 700;">LearnHub</NuxtLink>
        <NuxtLink to="/courses" style="color: #e5e7eb; text-decoration: none;">Courses</NuxtLink>
        <NuxtLink to="/auth/login" style="color: #e5e7eb; text-decoration: none;">Login</NuxtLink>
        <NuxtLink to="/auth/register" style="color: #e5e7eb; text-decoration: none;">Register</NuxtLink>
        <NuxtLink to="/instructor" style="color: #e5e7eb; text-decoration: none;">Instructor</NuxtLink>
        <NuxtLink to="/me/enrollments" style="color: #e5e7eb; text-decoration: none;">My Learning</NuxtLink>
      </nav>
    </header>
    <NuxtPage />
  </div>
</template>
