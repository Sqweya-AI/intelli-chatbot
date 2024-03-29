import { CardTitle, CardHeader, CardContent, Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { JSX, SVGProps } from "react"
import { Navbar } from "@/components/navbar"

export function Pricing() {
  return (
    <div key="1" className="bg-[#f8f9fa] min-h-screen">
      <div className="container mx-auto px-4">
        <Navbar />      
        <nav className="flex justify-center items-center py-4">
          <div className="flex items-center space-x-6">
            <button className="text-gray-600 hover:text-gray-900" onClick={undefined}>
              Monthly Billing
            </button>
            <button className="text-gray-600 hover:text-gray-900" onClick={undefined}>
              Annual Billing
            </button>
          </div>
        </nav>
        <header className="text-center py-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Affordable and flexible pricing designed for growing businesses
          </h1>
        </header>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="w-full">
            <CardHeader>
              <CardTitle>Basic Plan</CardTitle>
              <p className="text-3xl font-semibold text-gray-800">
                $50
                <span className="text-lg">Per Month{"\n"}</span>
              </p>
              <p className="text-sm text-gray-500">10% off for annual subscription</p>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600 mb-6">Intelli helps you see how many more days you need...</p>
              <Button className="w-full mb-2 bg-black text-white">Choose Plan</Button>
              <Button className="w-full" variant="ghost">
                Learn More
              </Button>
              <ul className="mt-4 space-y-2">
                <li className="flex items-center">
                  <CheckIcon className="text-green-500 mr-2" />
                  1 Voice Assistant
                </li>
                <li className="flex items-center">
                  <CheckIcon className="text-green-500 mr-2" />
                  Reports from calls
                </li>
                <li className="flex items-center">
                  <CheckIcon className="text-green-500 mr-2" />
                  Transcription from calls
                </li>
                <li className="flex items-center">
                  <CheckIcon className="text-green-500 mr-2" />
                  3 Voices to choose from
                </li>
                <li className="flex items-center">
                  <CheckIcon className="text-green-500 mr-2" />
                  Fine-tune Voice Assistant
                </li>
              </ul>
            </CardContent>
          </Card>
          <Card className="w-full">
            <CardHeader>
              <CardTitle>Premium Plan</CardTitle>
              <p className="text-3xl font-semibold text-gray-800">
                $100
                <span className="text-lg">Per Month{"\n"}</span>
              </p>
              <p className="text-sm text-gray-500">12% off for yearly subscription</p>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600 mb-6">Intelli helps you see how many more days you need...</p>
              <Button className="w-full mb-2 bg-black text-white">Choose Plan</Button>
              <Button className="w-full" variant="ghost">
                Learn More
              </Button>
              <ul className="mt-4 space-y-2">
                <li className="flex items-center">
                  <CheckIcon className="text-green-500 mr-2" />
                  3 Voice Assistants
                </li>
                <li className="flex items-center">
                  <CheckIcon className="text-green-500 mr-2" />
                  Comprehensive Insights from calls
                </li>
                <li className="flex items-center">
                  <CheckIcon className="text-green-500 mr-2" />
                  Option to listen to audio recordings
                </li>
                <li className="flex items-center">
                  <CheckIcon className="text-green-500 mr-2" />
                  6 Voices to choose from
                </li>
                <li className="flex items-center">
                  <CheckIcon className="text-green-500 mr-2" />
                  Fine-tune Voice Assistant
                </li>
              </ul>
            </CardContent>
          </Card>
          <Card className="w-full">
            <CardHeader>
              <CardTitle>Enterprise Plan</CardTitle>
              <p className="text-3xl font-semibold text-gray-800">
                Pay as you go
                <span className="text-lg">{"\n"}</span>
              </p>
              <p className="text-sm text-gray-500">Plan start from 12 months</p>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600 mb-6">Intelli helps you see how many more days you need...</p>
              <Button className="w-full mb-2 bg-black text-white">Choose Plan</Button>
              <Button className="w-full" variant="ghost">
                Learn More
              </Button>
              <ul className="mt-4 space-y-2">
                <li className="flex items-center">
                  <CheckIcon className="text-green-500 mr-2" />
                  All the features in Premium
                </li>
                <li className="flex items-center">
                  <CheckIcon className="text-green-500 mr-2" />
                  On-premise Installation
                </li>
                <li className="flex items-center">
                  <CheckIcon className="text-green-500 mr-2" />
                  Option to whitelabel
                </li>
                <li className="flex items-center">
                  <CheckIcon className="text-green-500 mr-2" />
                  Integration with OTAs & Current CRMs
                </li>
                <li className="flex items-center">
                  <CheckIcon className="text-green-500 mr-2" />
                  Personalize voice assistant with an actual human cloned voice.
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>      
      </div>      
    </div>
  )
}


function CheckIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
      <polyline points="20 6 9 17 4 12" />
    </svg>
  )
}
