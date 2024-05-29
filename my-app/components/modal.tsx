"use client";
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Image from "next/image"
import { ReactNode } from "react";

interface ModalProps {
  children?: ReactNode;
  onClose?: () => void;
}

export function Modal({ children, onClose }: ModalProps) {
    return (
        <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-white/50 backdrop-blur-md shadow-sm">
            <div className="container mx-auto p-4 bg-white rounded-lg">
                <h1 className="text-2xl font-bold mb-4">Unauthorized access</h1>
                {children}
                {onClose && <Button onClick={onClose}>Close</Button>}
            </div>
        </div>
    )
}