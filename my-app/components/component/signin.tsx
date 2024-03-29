"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { signInWithEmail } from "@/lib/firebase/auth";
import { toast } from 'sonner';
import Image from "next/image"
import { CardTitle } from "@/components/ui/card"
import logo from "@/public/Logo.svg"

export default function Signin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await signInWithEmail(email, password);
      toast.success('You are authenticated.');
      router.push('/dashboard');
    } catch (error) {
      toast.error('You are not authenticated. Please try again.');
    }
  };

  return (
    <div className="flex min-h-screen flex-col bg-[#E6F4FF]">
      <div className="mx-auto my-auto w-full max-w-md rounded-lg shadow-md bg-white p-8">
      <CardTitle className="flex items-center justify-center">
  <Image alt="Intelli Logo" src={logo} />
</CardTitle>
        <h1 className="text-center text-2xl font-semibold">Welcome back to Intelli</h1>
        <form className="mt-4 space-y-6" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm font-medium text-gray-700" htmlFor="email">
              Work Email
            </label>
            <Input id="email" placeholder="youremail@company.com" type="email" value={email} onChange={e => setEmail(e.target.value)} />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700" htmlFor="password">
              Password
            </label>
            <Input id="password" placeholder="**********" type="password" value={password} onChange={e => setPassword(e.target.value)} />
          </div>
          <Button className="w-full  bg-blue-600 text-white" variant="default" type="submit">
            Login
          </Button>
        </form>
        <div className="mt-4 text-center">
          <span className="text-sm text-gray-500">Don&apos;t have an account? </span>
          <a className="text-sm font-medium text-blue-600" href="/auth/register">
            Create One
          </a>
        </div>
      </div>
    </div>
  )
}
