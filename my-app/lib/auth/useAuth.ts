// useAuth.ts
import { useState, useEffect } from 'react';
import auth from '@/lib/auth/authService';

interface User {
  photoURL: string | null;
  displayName: string | null;
  email: string | null;
  firstName: string | null;
  companyName: string | null;
}

const useAuth = () => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        setIsLoading(true);
        const profile = await auth.getProfile();
        setUser(profile);
      } catch (error) {
        console.error('Error fetching user profile:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProfile();
  }, []);

  const signOut = async () => {
    try {
      await auth.logout();
      setUser(null);
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  return { user, isLoading, signOut };
};

export default useAuth;