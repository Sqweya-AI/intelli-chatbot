// auth.ts or auth.js
import axios from 'axios';

const baseUrl = 'https://intelli-python-backend.onrender.com';

export async function login(email: string, password: string): Promise<boolean> {
  try {
    const response = await axios.post(`${baseUrl}/auth/login/`, { email, password });
    const { access_token, refresh_token } = response.data;

    // Store the access token and refresh token in a secure way (e.g., cookies or in-memory storage on the server-side)
    localStorage.setItem('accessToken', access_token);
    localStorage.setItem('refreshToken', refresh_token);

    return true;
  } catch (error) {
    console.error('Login failed:', error);
    return false;
  }
}

export function logout() {
  // Remove the access token and refresh token from storage
  localStorage.removeItem('accessToken');
  localStorage.removeItem('refreshToken');
}

export function checkAuthStatus(): boolean {
  const accessToken = localStorage.getItem('accessToken');
  return !!accessToken; // Return true if an access token exists, false otherwise
}