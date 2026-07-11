import type {
  AuthCredentials,
  RegisterPayload,
  User,
} from "@/types";

/**
 * Auth service — mock for clone; swap with real API later.
 */
export const authService = {
  async login(
    credentials: AuthCredentials
  ): Promise<{ user: User; token: string }> {
    await delay(400);
    if (!credentials.email || !credentials.password) {
      throw new Error("Email and password are required");
    }
    return {
      user: {
        id: "user-1",
        email: credentials.email,
        firstName: "Cyber",
        lastName: "Customer",
      },
      token: `mock-token-${Date.now()}`,
    };
  },

  async register(
    payload: RegisterPayload
  ): Promise<{ user: User; token: string }> {
    await delay(500);
    return {
      user: {
        id: `user-${Date.now()}`,
        email: payload.email,
        firstName: payload.firstName,
        lastName: payload.lastName,
      },
      token: `mock-token-${Date.now()}`,
    };
  },

  async logout(): Promise<void> {
    await delay(100);
  },

  async me(token: string | null): Promise<User | null> {
    if (!token) return null;
    await delay(200);
    return {
      id: "user-1",
      email: "customer@cyberland.com",
      firstName: "Cyber",
      lastName: "Customer",
    };
  },
};

function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
