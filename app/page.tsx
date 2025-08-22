import { Mail, Linkedin } from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen bg-[#F2F2F2] text-[#0B0C11]">
      {/* Header */}
      <header className="flex justify-between items-center p-6 md:p-8 lg:p-16">
        <div className="font-normal text-base md:text-lg text-[#0B0C11] tracking-tight">Steven Chen</div>
        <div className="flex space-x-5">
          <a
            href="mailto:steven.chen@sloan.mit.edu"
            className="text-[#0B0C11] hover:text-[#0B0C11]/80 transition-colors"
          >
            <Mail className="w-5 h-5 text-[#0B0C11]" />
          </a>
          <a
            href="https://www.linkedin.com/in/schen08"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#0B0C11] hover:text-[#0B0C11]/80 transition-colors"
          >
            <Linkedin className="w-5 h-5 text-[#0B0C11]" />
          </a>
        </div>
      </header>

      {/* Main Content */}
      <main className="px-6 md:px-8 lg:px-16 py-24 md:py-32 lg:py-36">
        <div className="max-w-5xl">
          <div className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-[#0B0C11] tracking-tight mb-6 space-y-4">
            <div className="flex items-center">
              <span className="text-base md:text-lg lg:text-xl xl:text-2xl inline-block align-middle mr-4">🚀</span>
              Entrepreneur
            </div>
            <div className="flex items-center">
              <span className="text-base md:text-lg lg:text-xl xl:text-2xl inline-block align-middle mr-4">💡</span>
              Product Enthusiast
            </div>
            <div className="flex items-center">
              <span className="text-base md:text-lg lg:text-xl xl:text-2xl inline-block align-middle mr-4">👼</span>
              Angel Investor
            </div>
            <div className="flex items-center">
              <span className="text-base md:text-lg lg:text-xl xl:text-2xl inline-block align-middle mr-4">🇹🇼</span>
              Taiwanese American Advocate
            </div>
            <div className="flex items-center">
              <span className="text-base md:text-lg lg:text-xl xl:text-2xl inline-block align-middle mr-4">🎻</span>
              Violinist
            </div>
          </div>
        </div>
      </main>

      {/* About Section */}
      <section className="px-6 md:px-8 lg:px-16 py-0">
        <div className="max-w-4xl">
          <div className="text-base md:text-lg text-[#0B0C11] space-y-8 leading-relaxed font-light">
            <p>
              I thrive at the intersection of technology, business, and community. My journey spans scaling startups
              from idea to acquisition, angel investing in bold founders, and building communities that champion
              Taiwanese and Asian American voices. Alongside my work in consumer goods and technology, I carry a deep
              appreciation for the arts having played the violin for 30+ years.
            </p>
            <p>
              Diverse experiences and perspectives fuel innovation, foster creativity, and make life more enjoyable.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
