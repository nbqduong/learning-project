import { a as useState } from "./useApi-Cm3TNErY.js";
import { computed } from "vue";
function useAuth() {
  const token = useState("authToken", () => null);
  const currentUser = useState("currentUser", () => null);
  const setSession = (nextToken, user) => {
    token.value = nextToken;
    currentUser.value = user;
  };
  const clearSession = () => {
    token.value = null;
    currentUser.value = null;
  };
  return {
    token,
    currentUser,
    isLoggedIn: computed(() => Boolean(token.value)),
    isInstructor: computed(() => currentUser.value?.role === "instructor"),
    setSession,
    clearSession
  };
}
export {
  useAuth as u
};
//# sourceMappingURL=useAuth-BEkUIvjK.js.map
