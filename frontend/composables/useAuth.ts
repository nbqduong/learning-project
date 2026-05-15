import type { User } from "~/types/api";

export function useAuth() {
  const token = useState<string | null>("authToken", () => null);
  const currentUser = useState<User | null>("currentUser", () => null);

  const setSession = (nextToken: string, user: User) => {
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
    clearSession,
  };
}

