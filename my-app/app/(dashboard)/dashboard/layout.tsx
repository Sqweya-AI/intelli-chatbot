"use client";
import Header from "@/components/layout/header";
import Sidebar from "@/components/layout/sidebar";
import type { Metadata } from "next";
<<<<<<< Updated upstream:my-app/app/(dashboard)/dashboard/layout.tsx
=======
import { Toaster } from "sonner";
import { useState, useEffect } from "react";
import useAuth from "@/lib/auth/useAuth";
import {Modal} from "@/components/modal"; // Import the Modal component
>>>>>>> Stashed changes:my-app/app/dashboard/layout.tsx

export const metadata: Metadata = {
  title: "Intelli Dashboard",
  description: "This is your home for intuitive customer support.",
};

<<<<<<< Updated upstream:my-app/app/(dashboard)/dashboard/layout.tsx
=======
export const viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

>>>>>>> Stashed changes:my-app/app/dashboard/layout.tsx
export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { user, isLoading } = useAuth();
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (!isLoading && !user) {
      setShowModal(true);
    }
  }, [isLoading, user]);

  return (
<<<<<<< Updated upstream:my-app/app/(dashboard)/dashboard/layout.tsx
    <>
      <Header />
      <div className="flex h-screen">
        <Sidebar />
        <main className="w-full pt-16">{children}</main>
      </div>
    </>
=======
    <div suppressHydrationWarning>
      <Toaster position="top-right" />
      {user && (
        <>
          <Header />
          <div className="flex h-screen">
            <Sidebar />
            <main className="w-full pt-16">{children}</main>
          </div>
        </>
      )}
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <div className="p-4">
            <h2 className="text-xl font-bold mb-2">Unauthorized Access</h2>
            <p>You must be logged in to access this page.</p>
          </div>
        </Modal>
      )}
    </div>
>>>>>>> Stashed changes:my-app/app/dashboard/layout.tsx
  );
}