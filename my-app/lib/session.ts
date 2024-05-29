// session.ts
import auth from "@/lib/auth/authService";

export async function getCurrentUser() {
  try {
    const session = await auth.login({ email: '', password: '', role: '', is_email_verified: false });
    return session.user;
  } catch (error) {
    console.error('Error getting current user:', error);
    return null;
  }
}