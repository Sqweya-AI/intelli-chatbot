import React, { Suspense } from "react";
import { useUser } from "@clerk/nextjs";

import Link from "next/link";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
  Activity,
  CreditCard,
  DollarSign,
  Users,
  LucideIcon
} from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

// Define the props interface for StatCard
interface StatCardProps {
  title: string;
  value: string;
  change: string;
  icon: LucideIcon;
  href: string;
}

type ChatSession = {
  id: number;
  customer_number: string;
  updated_at: string;
};

// Client Component for rendering the card
function StatCard({ title, value, change, icon: Icon, href }: StatCardProps) {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Link href={href}>
            <Card className="hover:bg-accent transition-colors duration-200">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">{title}</CardTitle>
                <Icon className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{value}</div>
                <p className="text-xs text-muted-foreground">{change}</p>
              </CardContent>
            </Card>
          </Link>
        </TooltipTrigger>
        <TooltipContent>
          <p>Click to see conversations</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}

// Skeleton loader for StatCard
function StatCardSkeleton() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <Skeleton className="h-4 w-[100px]" />
        <Skeleton className="h-4 w-4 rounded-full" />
      </CardHeader>
      <CardContent>
        <Skeleton className="h-8 w-[100px] mb-2" />
        <Skeleton className="h-3 w-[60px]" />
      </CardContent>
    </Card>
  );
}

async function getConversationStats() {
  try {
    const res = await fetch(`${API_BASE_URL}/appservice/list/`, { cache: 'no-store' });
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }
    return await res.json();
  } catch (error) {
    console.error("Failed to fetch conversation stats:", error);
    return null;
  }
}

// Async component to fetch and render stats
async function StatsCards() {
  const stats = await getConversationStats();

  return (
    <>
      <StatCard
        title="Whatsapp Conversations"
        value={`${stats?.whatsapp?.answered ?? 0} conversations`}
        change={`${stats?.whatsapp?.change ?? '0%'} from last month`}
        icon={DollarSign}
        href="/dashboard/conversations/whatsapp"
      />
      <StatCard
        title="Website Widget Conversations"
        value={`${stats?.chatbot?.count ?? 0} conversations`}
        change={`${stats?.chatbot?.change ?? '0%'} from last month`}
        icon={CreditCard}
        href="/dashboard/conversations/elli"
      />
      <StatCard
        title="Email Assistant Threads"
        value={`${stats?.email?.answered ?? 0} emails `}
        change={`${stats?.email?.change ?? '0%'} from last month`}
        icon={Users}
        href="#"
      />
      <StatCard
        title="Voice Assistant"
        value={`${stats?.voice?.calls ?? 0} calls`}
        change={`${stats?.voice?.change ?? '0'} from yesterday`}
        icon={Activity}
        href="#"
      />
    </>
  );
}

export default function ConversationsPage() {
  return (
    <div className="grid min-h-screen w-full">
      <div className="flex p-4">
        <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
          <div className="border-b">
            <div className="flex h-16 items-center px-4">
              <Breadcrumb className="hidden md:flex">
                <BreadcrumbList>
                  <BreadcrumbItem>
                    <BreadcrumbLink>
                      <Link href="/dashboard">Dashboard</Link>
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <BreadcrumbLink asChild>
                      <Link href="/dashboard/conversations">Conversations</Link>
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                </BreadcrumbList>
              </Breadcrumb>
            </div>
          </div>
          <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
            <Suspense fallback={
              <>
                <StatCardSkeleton />
                <StatCardSkeleton />
                <StatCardSkeleton />
                <StatCardSkeleton />
              </>
            }>
              <StatsCards />
            </Suspense>
          </div>
        </main>
      </div>
    </div>
  );
}