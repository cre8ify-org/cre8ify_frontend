import { Button } from "@chakra-ui/react"
import { Avatar } from "@chakra-ui/react"
import { Shield, TrendingUp } from 'lucide-react'
import HomeLayout from "../../../layout/homeLayout"

export default function AboutPage() {
  return (
    <HomeLayout>
      <div className="min-h-screen bg-black text-white flex flex-col">
        <main className="flex-grow">
          {/* Hero Section */}
          <section className="bg-gradient-to-r from-[#230735] to-black pb-16 pt-32 text-center relative">
            <div className="container mx-auto px-4">
              <h1 className="text-5xl md:text-7xl font-bold mb-6 font-lato">Redefining Content Creation</h1>
              <p className="text-xl mb-8 max-w-2xl mx-auto">Cre8ify is pioneering the future of decentralized content platforms, empowering creators and revolutionizing digital ownership.</p>
            </div>
            <div className="md:w-1/2 absolute bottom-[.1rem] -right-[5rem] lg:bottom-[2rem] lg:-right-[10rem]">
              <svg viewBox="0 0 200 200" className="w-[30%] max-w-md mx-auto">
                <defs>
                  <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style={{ stopColor: '#4C1D95', stopOpacity: 1 }} />
                    <stop offset="100%" style={{ stopColor: '#9333ea', stopOpacity: 1 }} />
                  </linearGradient>
                </defs>
                <circle cx="100" cy="100" r="50" fill="url(#grad1)" />
                <circle cx="100" cy="100" r="30" fill="white" opacity="0.3" />
                <text x="100" y="105" fontSize="16" fill="white" textAnchor="middle" className="font-suse">Cre8ify</text>
              </svg>
            </div>
          </section>

          {/* Mission Statement */}
          <section className="py-16">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold mb-8 text-center font-lato">Our Mission</h2>
              <p className="text-xl text-center max-w-3xl mx-auto">
                At Cre8ify, we're on a mission to democratize content creation and distribution. We believe in a world where creators have full control over their work, fair compensation is the norm, and audiences can directly support the content they love.
              </p>
            </div>
          </section>

          {/* Key Features */}
          <section className="bg-gray-900 py-16">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold mb-12 text-center font-lato">Why Choose Cre8ify?</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="bg-purple-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <Shield className="h-8 w-8" />
                  </div>
                  <h3 className="font-semibold mb-2">True Ownership</h3>
                  <p className="text-gray-400">Your content, your rules. Blockchain-backed ownership ensures your work remains yours.</p>
                </div>
                <div className="text-center">
                  <div className="bg-purple-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="font-semibold mb-2">Fair Compensation</h3>
                  <p className="text-gray-400">Smart contracts guarantee transparent and immediate payments for your content.</p>
                </div>
                <div className="text-center">
                  <div className="bg-purple-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <h3 className="font-semibold mb-2">Community-Driven</h3>
                  <p className="text-gray-400">Be part of a vibrant ecosystem where creators and audiences thrive together.</p>
                </div>
                <div className="text-center">
                  <div className="bg-purple-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <TrendingUp className="h-8 w-8" />
                  </div>
                  <h3 className="font-semibold mb-2">Unlimited Growth</h3>
                  <p className="text-gray-400">No artificial limits or gatekeepers. Your potential is boundless on our platform.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Team Section */}
          <section className="py-16">
            <div className="max-w-[1100px] mx-auto px-4">
              <h2 className="text-3xl font-bold mb-12 text-center font-lato">Meet Our Visionaries</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  { name: "Victorai Adedayo", role: "Co-Founder & Blockchain Developer", avatar: "/placeholder-user.jpg", bio: "Former Silicon Valley exec turned blockchain enthusiast. Elena's vision drives Cre8ify's mission to empower creators worldwide." },
                  { name: "Adeoluwa Adefokun", role: "Co-Founder & Blockchain Developer", avatar: "/placeholder-user.jpg", bio: "Cryptography expert and full-stack developer. Jamal architects the robust, decentralized infrastructure that powers our platform." },
                  { name: "McDavid Ojukwu", role: "Co-Founder & Frontend Developer", avatar: "/placeholder-user.jpg", bio: "Social media maven and content creator. Aisha ensures our community thrives and creators' voices are heard." },
                  { name: "Nicholas Akura", role: "Co-Founder & Blockchain Developer", avatar: "/placeholder-user.jpg", bio: "Social media maven and content creator. Aisha ensures our community thrives and creators' voices are heard." },
                  { name: "Abigail Nyangasi", role: "Co-Founder & Frontend Developer", avatar: "/placeholder-user.jpg", bio: "Social media maven and content creator. Aisha ensures our community thrives and creators' voices are heard." },
                  { name: "Mubarak Oke", role: "Co-Founder & Blockchain Developer", avatar: "/placeholder-user.jpg", bio: "Social media maven and content creator. Aisha ensures our community thrives and creators' voices are heard." },
                ].map((member, index) => (
                  <div key={index} className="text-center bg-gray-900 rounded-lg py-8 px-8">
                    <Avatar className="mb-4" size={'2xl'} />
                    <h3 className="font-semibold mb-2">{member.name}</h3>
                    <p className="text-purple-500 font-semibold mb-2">{member.role}</p>
                    <p className="text-sm text-gray-400">{member.bio}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Timeline */}
          <section className="bg-gray-900 py-16">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold mb-12 text-center">Our Journey</h2>
              <div className="max-w-3xl mx-auto">
                {[
                  { year: "2021", event: "Cre8ify concept born" },
                  { year: "2022", event: "Seed funding secured, development begins" },
                  { year: "2023", event: "Beta launch with 1,000 creators" },
                  { year: "2024", event: "Full platform launch, DAO implementation" },
                  { year: "2025", event: "1 million creator milestone" },
                ].map((item, index) => (
                  <div key={index} className="flex mb-8 last:mb-0">
                    <div className="flex-shrink-0 w-24 text-right pr-4">
                      <span className="text-[#9333ea] font-bold">{item.year}</span>
                    </div>
                    <div className="flex-grow pl-4 border-l border-purple-600 relative">
                      <svg viewBox="0 0 20 20" className="absolute -left-2.5 w-5 h-5">
                        <circle cx="10" cy="10" r="10" fill="#4C1D95" />
                        <circle cx="10" cy="10" r="4" fill="white" />
                      </svg>
                      <p>{item.event}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Call to Action */}
          <section className="bg-gradient-to-r from-[#230735] to-black py-16">
            <div className="container mx-auto px-4 text-center">
              <h2 className="text-4xl lg:text-5xl font-bold mb-6 font-lato">Be Part of the Revolution</h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto">Join us in reshaping the future of content creation. Whether you're a creator or a supporter, there's a place for you in our ecosystem.</p>
              <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                <Button bg={'#9333ea'} borderRadius={"100rem"} border={"none"} display={'inline-flex'} p={'1.7rem 2rem'} color={"#fff"} transition={"all .5s ease-in-out"} w={"250px"} _hover={{ bg: "#7e22ce", border: "none" }} _focus={{ outline: "none" }} className="font-suse">Start Creating</Button>
                <Button bg={'transparent'} borderRadius={"100rem"} border={"1px solid #9333ea"} display={'inline-flex'} p={'1.7rem 2rem'} color={"#9333ea"} transition={"all .5s ease-in-out"} w={"250px"} _hover={{ bg: "#none" }} _focus={{ outline: "none" }} className="font-suse">Explore Content</Button>
              </div>
            </div>
          </section>
        </main>
     </div>
    </HomeLayout>
  )
}