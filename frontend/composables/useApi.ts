import type { Course, Enrollment, Role, User } from "~/types/api";

type LoginResponse = {
  user: User;
  token: string;
};

type ListResponse<T> = {
  items: T[];
};

export function useApi() {
  const config = useRuntimeConfig();
  const token = useState<string | null>("authToken", () => null);
  const baseURL = import.meta.server ? config.apiInternalBaseUrl : config.public.apiBaseUrl;

  const request = async <T>(path: string, options: any = {}) => {
    const headers: Record<string, string> = {
      ...(options.headers as Record<string, string> | undefined),
    };
    if (token.value) {
      headers.Authorization = `Bearer ${token.value}`;
    }

    return await $fetch<T>(path, {
      baseURL,
      ...options,
      headers,
    });
  };

  return {
    register: (payload: { email: string; password: string; full_name: string; role: Role }) =>
      request<User>("/auth/register", { method: "POST", body: payload }),
    login: (payload: { email: string; password: string }) =>
      request<LoginResponse>("/auth/login", { method: "POST", body: payload }),
    listCourses: () => request<ListResponse<Course>>("/courses"),
    getCourse: (slug: string) => request<Course>(`/courses/${slug}`),
    createCourse: (payload: {
      title: string;
      subtitle: string;
      description: string;
      price_cents: number;
      published: boolean;
    }) => request<Course>("/courses", { method: "POST", body: payload }),
    startCheckout: (courseId: string) =>
      request<{ id: string; url: string }>("/checkout/session", {
        method: "POST",
        body: { course_id: courseId },
      }),
    confirmEnrollment: (courseId: string) =>
      request<Enrollment>("/enrollments/confirm", {
        method: "POST",
        body: { course_id: courseId },
      }),
    listEnrollments: () => request<ListResponse<Enrollment>>("/me/enrollments"),
  };
}
