import { useState, useEffect } from "react";
import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { CardContent, Card } from "@/components/ui/card"
import { JSX, SVGProps } from "react"
import { Navbar } from "@/components/navbar"
import Image from "next/image"


export function Article() {
    <div className="bg-white min-h-screen relative py-14">
      <div className="container mx-auto px-4">
      <Navbar />
      <header className="container mx-auto my-12 text-center">
        <h1 className="text-5xl font-bold text-left text-blue-600 mb-20">
          Access all the resources to enhance the growth of your business
        </h1>
        <div className="flex justify-center space-x-8 mb-12">
          <Link className="border-b-2 border-blue-500 pb-2" href="#">
            Articles
          </Link>
          <Link className="hover:text-blue-500 pb-2" href="#">
            Videos
          </Link>
          <Link className="hover:text-blue-500 pb-2" href="#">
            Courses
          </Link>
        </div>
        <div className="flex justify-center space-x-4">
          <div className="relative">
            <Input className="pl-10" placeholder="Search for article" type="text" />
            <SearchIcon className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
          <div className="flex items-center">
            <Checkbox id="date-filter" />
            <label className="text-sm font-medium leading-none ml-2" htmlFor="date-filter">
              Filter by Date
            </label>
          </div>
        </div>
      </header>
      <section className="container mx-auto grid grid-cols-3 gap-8 pb-12">
        <Card>
          <CardContent className="p-4">
            <Image
              alt="Article Image"
              className="object-cover rounded-lg w-full h-full"
              height={200}
              src="/placeholder.svg"
              style={{
                aspectRatio: "300/200",
                objectFit: "cover",
              }}
              width={300}
            />
            <div className="mt-4">
              <h3 className="text-lg font-semibold">Article Title 1</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">Description for Article 1</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <Image
              alt="Article Image"
              className="object-cover rounded-lg w-full h-full"
              height={200}
              src="/placeholder.svg"
              style={{
                aspectRatio: "300/200",
                objectFit: "cover",
              }}
              width={300}
            />
            <div className="mt-4">
              <h3 className="text-lg font-semibold">Article Title 2</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">Description for Article 2</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <Image
              alt="Article Image"
              className="object-cover rounded-lg w-full h-full"
              height={200}
              src="/placeholder.svg"
              style={{
                aspectRatio: "300/200",
                objectFit: "cover",
              }}
              width={300}
            />
            <div className="mt-4">
              <h3 className="text-lg font-semibold">Article Title 3</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">Description for Article 3</p>
            </div>
          </CardContent>
        </Card>
      </section>
      </div>
    </div>

}

function SearchIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="11" cy="11" r="8" />
        <path d="m21 21-4.3-4.3" />
      </svg>
    )
  }