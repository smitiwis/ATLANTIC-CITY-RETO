import { useAuthStore } from "../store/authStore";

export const useAuth = () => {
  const { user, isAuthenticated, isLoading, login, logout, setLoading } = useAuthStore();

  const loginUser = async (usuario: string) => {
    setLoading(true);
    try {
      const userData = { id: "1", usuario };
      login(userData);
      return true;
    } catch (error) {
      console.error("Error al hacer login:", error);
      return false;
    } finally {
      setLoading(false);
    }
  };

  return {
    user,
    isAuthenticated,
    isLoading,
    loginUser,
    logout,
  };
};
