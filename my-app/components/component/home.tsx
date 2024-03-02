/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/3Ou93NEzRjT
 */


export function Home() {
  return (
    <div className="relative">
      <div className="fixed top-0 left-0 right-0 z-10 bg-white/70 backdrop-blur-md">
        <div className="container mx-auto flex items-center justify-between px-4 py-2">
          <div>
            <img alt="Intelli Concierge" className="h-8" src="/Logo.svg" />
          </div>
          <nav className="flex space-x-4">
            <a className="text-gray-600 hover:text-gray-900" href="#">
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
              href="#"
            >
              Log In
            </a>
            <a
              className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md shadow-sm hover:bg-blue-700"
              href="#"
            >
              Get Started
            </a>
          </div>
        </div>
      </div>
      <main className="pt-16">
        <section className="container mx-auto mt-8 px-4">
          <h1 className="text-5xl font-bold text-center text-blue-600">Intelli Concierge</h1>
          <p className="mt-4 text-xl text-center text-gray-600">Speed up customer inquiry responses by 83%.</p>
          <p className="mt-2 text-center text-gray-500">
            Enhance your customer support effortlessly and affordably. Manage and respond to over 150 queries with
            finesse.
          </p>
          <div className="mt-6 flex justify-center space-x-4">
            <a
              className="px-6 py-3 text-sm font-medium text-white bg-blue-600 rounded-md shadow-sm hover:bg-blue-700"
              href="#"
            >
              Test a voice assistant
            </a>
            <a
              className="px-6 py-3 text-sm font-medium text-blue-600 border border-gray-200 border-blue-600 rounded-md shadow-sm hover:bg-blue-50 dark:border-gray-800"
              href="#"
            >
              Create a Voice Assistant
            </a>
          </div>
          <div className="mt-12">
            <img
              alt="Dashboard preview"
              className="mx-auto"
              height="400"
              src="/placeholder.svg"
              style={{
                aspectRatio: "800/400",
                objectFit: "cover",
              }}
              width="800"
            />
          </div>
        </section>
        <section className="bg-gray-100 py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-blue-600">Brands that Love Us</h2>
            <div className="mt-8 grid grid-cols-2 gap-8 md:grid-cols-4">
              <div className="flex justify-center">
                <img
                  alt="Brand logo"
                  className="h-12"
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
          </div>
        </section>
        <section className="container mx-auto my-12 px-4">
          <h2 className="text-3xl font-bold text-center text-blue-600">How Hotels use Intelli</h2>
          <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-3">
            <div>
              <h3 className="text-xl font-semibold text-blue-600">Feature Title</h3>
              <p className="mt-2 text-gray-500">
                Feature description goes here. It's a brief explanation of the benefit or feature.
              </p>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-gray-800 py-4">
        <div className="container mx-auto px-4">
          <p className="text-sm text-center text-gray-400">Need help? Get in touch with us.</p>
          <p className="mt-2 text-xs text-center text-gray-500">
            Terms of Use | Privacy Notice | Data Policy | Socials | © IntelliConcierge 2024
          </p>
        </div>
      </footer>
    </div>
  )
}
