import { u as useNuxtApp, d as useRuntimeConfig } from "../server.mjs";
import { toRef, isRef } from "vue";
const useStateKeyPrefix = "$s";
function useState(...args) {
  const autoKey = typeof args[args.length - 1] === "string" ? args.pop() : void 0;
  if (typeof args[0] !== "string") {
    args.unshift(autoKey);
  }
  const [_key, init] = args;
  if (!_key || typeof _key !== "string") {
    throw new TypeError("[nuxt] [useState] key must be a string: " + _key);
  }
  if (init !== void 0 && typeof init !== "function") {
    throw new Error("[nuxt] [useState] init must be a function: " + init);
  }
  const key = useStateKeyPrefix + _key;
  const nuxtApp = useNuxtApp();
  const state = toRef(nuxtApp.payload.state, key);
  if (state.value === void 0 && init) {
    const initialValue = init();
    if (isRef(initialValue)) {
      nuxtApp.payload.state[key] = initialValue;
      return initialValue;
    }
    state.value = initialValue;
  }
  return state;
}
function useApi() {
  const config = useRuntimeConfig();
  const token = useState("authToken", () => null);
  const baseURL = config.apiInternalBaseUrl;
  const request = async (path, options = {}) => {
    const headers = {
      ...options.headers
    };
    if (token.value) {
      headers.Authorization = `Bearer ${token.value}`;
    }
    return await $fetch(path, {
      baseURL,
      ...options,
      headers
    });
  };
  return {
    register: (payload) => request("/auth/register", { method: "POST", body: payload }),
    login: (payload) => request("/auth/login", { method: "POST", body: payload }),
    listCourses: () => request("/courses"),
    getCourse: (slug) => request(`/courses/${slug}`),
    createCourse: (payload) => request("/courses", { method: "POST", body: payload }),
    startCheckout: (courseId) => request("/checkout/session", {
      method: "POST",
      body: { course_id: courseId }
    }),
    confirmEnrollment: (courseId) => request("/enrollments/confirm", {
      method: "POST",
      body: { course_id: courseId }
    }),
    listEnrollments: () => request("/me/enrollments")
  };
}
export {
  useState as a,
  useApi as u
};
//# sourceMappingURL=useApi-Cm3TNErY.js.map
