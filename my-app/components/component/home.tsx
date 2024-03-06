/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/3Ou93NEzRjT
 */
import { Button } from "@/components/ui/button"

export function Home() {
  return (
    <div className="relative">
      <div className="fixed top-0 left-0 right-0 z-10 bg-white/50 backdrop-blur-md">
        <div className="container mx-auto flex items-center justify-between px-4 py-2">
          <div>
            <img alt="Intelli Concierge" className="h-16" src="/Logo.svg" />
          </div>
          <nav className="flex space-x-4">
            <a className="bold text-gray-600 hover:text-gray-900" href="#">
              Products
            </a>
            <a className="text-gray-600 hover:text-gray-900" href="#">
              Pricing
            </a>
            <a className="text-gray-600 hover:text-gray-900" href="#">
              Resources
            </a>
            <a className="text-gray-600 hover:text-gray-900" href="#">
              Company
            </a>
          </nav>
          <div className="flex space-x-2">
            <a
              className="px-4 py-2 text-sm font-medium text-gray-600 bg-white rounded-md shadow-sm hover:bg-gray-100"
              href="/auth/login"
            >
              Log In
            </a>
            <a
              className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md shadow-sm hover:bg-blue-700"
              href="/auth/register"
            >
              Get Started
            </a>
          </div>
        </div>
      </div>
      <main className="pt-16">
        <section className="container mx-auto mt-8 px-4">
          <h1 className="text-3xl font-thin text-center text-grey-400">Intelli Concierge</h1>
          <p className="mt-4 text-center text-6xl font-bold text-blue-600 mb-8 bg-clip-text bg-gradient-to-r from-blue-500 to-teal-400">Speed up customer inquiry responses by 83%.</p>
          <p className="text-center text-lg font-bold font-medium text-gray-800">
            Enhance your customer support effortlessly and affordably. Manage and respond to over 150 queries with
            finesse.
          </p>
          <div className="mt-6 flex justify-center space-x-4">
          <Button
          className="px-6 py-3 text-md font-medium text-white bg-gray-800 rounded-md shadow-sm hover:bg-gray-900"
          >
            <a
              href="#"
            >
              Test a voice assistant
            </a>
            
            </Button>
            <Button
          className="px-6 py-3 text-md font-medium text-white bg-blue-600 rounded-md shadow-sm hover:bg-blue-700"
          >
          <a
              href="#"
            >
              Create a Voice Assistant
            </a>
            </Button>
          </div>
          <div className="mx-auto">
          <img
          alt="Dashboard preview"
          className="mx-auto"
          height="400"
          src="/Demo.svg"
          style={{
            aspectRatio: "400/400",
            objectFit: "cover",
          }}
          width="800"
        />

          </div>
        </section>
        <section className="bg-gray-100 py-12 text-center">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-blue-600">Brands that Love Us</h2>
            
            <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
            <img
              alt="Safari"
              className="h-12 w-auto object-contain"
              height="50"
              src="/placeholder.svg"
              style={{
                aspectRatio: "150/50",
                objectFit: "cover",
              }}
              width="150"
            />
            <img
              alt="Marriott Accra"
              className="h-12 w-auto object-contain"
              height="50"
              src="/placeholder.svg"
              style={{
                aspectRatio: "150/50",
                objectFit: "cover",
              }}
              width="150"
            />
            <img
              alt="Mövenpick"
              className="h-12 w-auto object-contain"
              height="50"
              src="/placeholder.svg"
              style={{
                aspectRatio: "150/50",
                objectFit: "cover",
              }}
              width="150"
            />
            <img
              alt="Kempinski"
              className="h-12 w-auto object-contain"
              height="50"
              src="/placeholder.svg"
              style={{
                aspectRatio: "150/50",
                objectFit: "cover",
              }}
              width="150"
            />
            <img
              alt="Holiday Inn"
              className="h-12 w-auto object-contain"
              height="50"
              src="/placeholder.svg"
              style={{
                aspectRatio: "150/50",
                objectFit: "cover",
              }}
              width="150"
            />
            <img
              alt="Ibis"
              className="h-12 w-auto object-contain"
              height="50"
              src="/placeholder.svg"
              style={{
                aspectRatio: "150/50",
                objectFit: "cover",
              }}
              width="150"
            />
          </div>
            </div>
        </section>
        <section className="py-12 text-center">
     
          
        </section>
        <section className="bg-gray-100 py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center">How Hotels use Intelli</h2>
            <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-3">
              <div>
                <div className="mx-auto h-12 w-12" />
                <h3 className="mt-4 text-xl font-semibold">Weekly & Monthly Insights:</h3>
                <p className="mt-2 text-sm">Elevate Report Quality, Minimize Time Investment</p>
              </div>
              <div>
                <div className="mx-auto h-12 w-12" />
                <h3 className="mt-4 text-xl font-semibold">Swift Responses to Inquiries:</h3>
                <p className="mt-2 text-sm">Instantly Address Questions with your company Data</p>
              </div>
              <div>
                <div className="mx-auto h-12 w-12" />
                <h3 className="mt-4 text-xl font-semibold">Effective Escalation Management:</h3>
                <p className="mt-2 text-sm">
                  Empower Teams, Managers, and hotel departments with access to issues escalated beyond the assistant.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full left-0 right-0 bg-gray-800 py-4 ">
        <div className="container ">
          <p className="text-sm text-center text-gray-400">Need help? Get in touch with us.</p>
          <p className="mt-2 text-xs text-center text-gray-500">
            Terms of Use | Privacy Notice | Data Policy | Socials | © IntelliConcierge 2024
          </p>
        </div>
      </footer>
    </div>
  )
}
