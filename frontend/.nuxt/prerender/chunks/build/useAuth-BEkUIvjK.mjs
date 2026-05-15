import { a as useState } from './useApi-Cm3TNErY.mjs';
import { computed } from 'file:///app/node_modules/vue/index.mjs';

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
    isInstructor: computed(() => {
      var _a;
      return ((_a = currentUser.value) == null ? void 0 : _a.role) === "instructor";
    }),
    setSession,
    clearSession
  };
}

export { useAuth as u };
//# sourceMappingURL=useAuth-BEkUIvjK.mjs.map
