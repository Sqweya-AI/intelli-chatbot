/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/3Ou93NEzRjT
 */


export function Home() {
  return (
    <div className="relative">
      <Navbar />
      <main className="pt-16" 
      >
      
        <section className="container mx-auto mt-8 px-4">        
          <h1 className="text-3xl font-thin text-center text-grey-400">Intelli Concierge</h1>
          <p className="mt-4 text-center text-6xl font-bold text-blue-600 mb-8 bg-clip-text bg-gradient-to-r from-blue-500 to-teal-400">Automate customer support responses.</p>
          <p className="text-center text-lg font-bold font-medium text-gray-800">
            Improve customer experience by automating responses to frequently asked questions. Handle responses across 3 different channels seamlessly with
            one platform. All this power is available at an affordable price.
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
              src="/Demo.svg"
              style={{
                aspectRatio: "800/400",
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
