"use client"
/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/3Ou93NEzRjT
 */
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Navbar } from "@/components/navbar";
import {
  CardTitle,
  CardDescription,
  CardContent,
  Card,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Features from "@/components/component/features";
import Image from "next/image";
import demoImage from "@/public/Demo.svg";
import mendiata from "@/public/mendiata.jpeg";
import labadi from "@/public/Labadi-logo.jpeg";
import aquasafari from "@/public/Aqua-Safari-Logo.jpeg";
import kempinski from "@/public/Kempiski.jpeg";
import accraCity from "@/public/accracity-logo.jpeg";
import movenpick from "@/public/movenpick.jpeg";
import pinkImage from "@/public/pink.png";
import yellowImage from "@/public/yello.png";
import Pie from "@/public/piechart.png";

import Reviews from "@/components/component/reviews";

export function Home() {
  return (
    <div className="relative">
      <Navbar />
      <main className="pt-16">
        <section className="container mx-auto mt-8 px-4">
          <h1 className="text-3xl font-thin text-center text-grey-400">
            Intelli Concierge
          </h1>
          <p className="mt-4 text-center text-6xl font-bold text-blue-600 mb-8 bg-clip-text bg-gradient-to-r from-blue-500 to-teal-400">
            Automate customer support responses.
          </p>
          <p className="text-center text-lg font-bold font-medium text-gray-800">
            Improve customer experience by automating responses to frequently
            asked questions. Handle responses across 3 different channels
            seamlessly with one platform. All this power is available at an
            affordable price.
          </p>
          <div className="mt-6 flex flex-col items-center space-y-2 sm:flex-row sm:justify-center sm:space-x-4">
            <Button className="px-6 py-3 text-md font-medium text-white bg-gray-800 rounded-md shadow-sm hover:bg-gray-900">
              <a href="/demo">See it on your website</a>
            </Button>
            <Button className="px-6 py-3 text-md font-medium text-white bg-blue-600 rounded-md shadow-sm hover:bg-blue-700">
              <a href="/dashboard">Create an Assistant</a>
            </Button>
          </div>

          <div className="mx-auto">
            <Image alt="Preview Demo" className="mx-auto" src={demoImage} />
          </div>
        </section>
        <section className="bg-gray-100 py-12 text-center  shadow-lg rounded-xl">
          <div className="container mx-auto px-4 border">
            <h2 className="text-3xl font-bold text-center text-blue-600">
              Brands that Love Us
            </h2>

            <div className="py-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-6 gap-4">
              <Image
                alt="La Palm Royal Beach Hotel"
                className="rounded-lg"
                src={aquasafari}
              />
              <Image
                alt="Mendiata Hotel"
                className="rounded-lg"
                src={mendiata}
                height={120}
              />
              <Image
                alt="Labadi Beach Hotel"
                className="rounded-lg"
                src={labadi}
              />
              <Image alt="Kempinski" className="rounded-lg" src={kempinski} />
              <Image
                alt="Accra City Hotel"
                className="rounded-lg"
                src={accraCity}
              />
              <Image
                alt="Movenpick Hotel"
                className="rounded-lg"
                src={movenpick}
              />
            </div>
          </div>
        </section>
        <section className="py-12 text-center"></section>
        <section className="py-12 relative">
          <Image
            alt="Bg Pink"
            className="absolute top-1/2 right-0 transform -translate-y-1/2 w-60 h-60 bg-cover bg-center filter blur-md z-0"
            style={{ backgroundImage: `url(${pinkImage})` }}
            src={pinkImage}
          />
          <div className="flex justify-center mb-4">
            <Badge>Use Cases</Badge>
          </div>
          <div className="container mx-auto px-4">
            <h2 className="text-6xl font-bold text-center">
              How Hotels use Intelli
            </h2>
            <div className="mt-20 grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-8">
              <Card className="bg-[#007fff] bg-opacity-35">
                <CardContent className="p-6 space-y-2 backdrop-blur-lg rounded-lg">
                  <div className="text-sm">
                    <CardTitle>Weekly & Monthly Insights:</CardTitle>
                  </div>
                  <div>
                    <p className="text-sm font-medium">
                      Elevate Report Quality, Minimize Time Investment
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-[#ACD4FF] bg-opacity-85">
                <Image
                  alt="Swift AI Responses"
                  className="absolute transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-cover bg-center filter blur-sm z-0"
                  style={{ backgroundImage: `url(${yellowImage})` }}
                  src={yellowImage}
                />
                <CardContent className="p-6 space-y-2 backdrop-blur-lg rounded-lg">
                  <div className="text-sm">
                    <CardTitle>Swift Responses to Inquiries:</CardTitle>
                  </div>
                  <div>
                    <p className="text-sm font-medium">
                      Instantly Address Questions with your company Data
                    </p>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-[#027EFE] bg-opacity-60">
                <CardContent className="p-6 space-y-2 backdrop-blur-lg rounded-lg">
                  <div className="text-sm">
                    <CardTitle>Effective Escalation Management:</CardTitle>
                  </div>
                  <div>
                    <p className="text-sm font-medium">
                      Empower Teams, Managers, and hotel departments with access
                      to issues escalated beyond the assistant.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section className="py-12 ">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center">
              What advantages does our software offer?
            </h2>
            
            <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-1">
              <Features />
              <div>
                <h3 className="text-xl font-semibold">
                  Manage your customer service efficiently, save time
                </h3>
                <ul className="mt-2 list-disc pl-5 text-sm">
                  <li>Streamline Support Processes for Swift Resolution</li>
                  <li>Optimize Resources</li>
                  <li>Utilize Advanced Algorithms</li>
                  <li>Integrate with existing tools and platforms</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold">
                  Optimize your operations by reducing expenses
                </h3>
                <ul className="mt-2 list-disc pl-5 text-sm">
                  <li>Cut down on manpower</li>
                  <li>Reduce overhead costs</li>
                  <li>Minimize training expenses</li>
                  <li>Maintain high-quality service and reduce delays</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-gray-100 py-12  shadow-lg rounded-xl p-4">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center">
              What Our Customers Say
            </h2>
            <div className="mt-6 flex justify-center space-x-4">
              <Reviews />
            </div>
          </div>
        </section>
        <section className="py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center">
              Frequently Asked Questions
            </h2>
            
            <div className="mt-8 max-w-2xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger>Can I have multiple employees on the same plan?</AccordionTrigger>
        <AccordionContent>
        Ofcourse, you can have multiple departments from front office to marketing and sales to social media even reservations join your team/organisation
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>How is my usage calculated?</AccordionTrigger>
        <AccordionContent>
          Your usage is calculated based on the number of interactions of your customers with the assistant. This includes the number of messages sent and received.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>What payment methods are allowed?</AccordionTrigger>
        <AccordionContent>
        We embrace the global nature of business and hence use Credit
                  cards. If in the near future more payment methods are added,
                  we shall issue a statement informing you of the change.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
              
            </div>
            <div className="mt-8 text-center">
              <Button variant="outline">View more</Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}