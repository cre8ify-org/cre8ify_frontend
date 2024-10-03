import HomeLayout from '../../../layout/homeLayout'
import { Button, InputGroup, InputLeftElement } from '@chakra-ui/react'
import { Input } from '@chakra-ui/react'
import { Avatar } from '@chakra-ui/react'
import { PlusCircle, Users, Zap, ChevronRight, Search } from 'lucide-react'

export default function HomePage() {
  return (
    <HomeLayout>
      <div className="min-h-screen bg-black text-white flex flex-col font-suse">
        <main className="flex-grow">
          {/* Hero Section */}
          <section className="bg-gradient-to-r from-[#230735] to-black py-20">
            <div className="max-w-[1100px] mx-auto px-4 flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0">
                <h1 className="text-5xl md:text-6xl font-bold mb-6 font-lato">Revolutionize Your <br /> Content Creation</h1>
                <p className="text-xl mb-8 max-w-2xl">Unleash your creativity, own your work, and connect directly with your audience on the world's first decentralized content platform.</p>
                <div className="w-full">
                  <Button bg={'#9333ea'} borderRadius={"100rem"} border={"none"} display={'inline-flex'} p={'1.7rem 2rem'} color={"#fff"} transition={"all .5s ease-in-out"} w={"250px"} _hover={{ bg: "#7e22ce", border: "none" }} _focus={{ outline: "none" }} className="font-suse">Launch App</Button>
                </div>
              </div>
              <div className="md:w-1/2">
                <svg viewBox="0 0 200 200" className="w-full max-w-md mx-auto">
                  <defs>
                    <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" style={{ stopColor: '#4C1D95', stopOpacity: 1 }} />
                      <stop offset="100%" style={{ stopColor: '#9333ea', stopOpacity: 1 }} />
                    </linearGradient>
                  </defs>
                  <circle cx="100" cy="100" r="80" fill="url(#grad1)" />
                  <path d="M100 50 L150 150 L50 150 Z" fill="white" opacity="0.2" />
                  <circle cx="100" cy="100" r="40" fill="white" opacity="0.3" />
                  <text x="100" y="105" fontFamily="Arial" fontSize="24" fill="white" textAnchor="middle" className='font-suse'>Cre8ify</text>
                </svg>
              </div>
            </div>
          </section>

          {/* Featured Content */}
          <section className="py-16">
            <div className="max-w-[1100px] mx-auto px-4">
              <h2 className="text-3xl font-bold mb-8 font-lato">Trending Creations</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  {
                    title: "The Future of AI in Art",
                    description: "An in-depth exploration of how artificial intelligence is reshaping the art world.",
                    creator: "AIArtist",
                    image: "/images/fc-1.webp "
                  },
                  {
                    title: "Decentralized Finance Explained",
                    description: "A comprehensive guide to understanding the revolutionary world of DeFi.",
                    creator: "CryptoGuru",
                    image: "/images/fc-2.webp"
                  },
                  {
                    title: "Mindfulness in the Digital Age",
                    description: "Discover techniques for maintaining mental clarity in our hyper-connected world.",
                    creator: "ZenMaster",
                    image: "/images/fc-3.webp"
                  }
                ].map((item, index) => (
                  <div key={index} className="bg-gray-900 rounded-lg overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-4">
                      <h3 className="font-semibold mb-2">{item.title}</h3>
                      <p className="text-sm text-gray-400 mb-4">
                        {item.description}
                      </p>
                      <div className="flex justify-between items-center">
                        <div className="flex items-center space-x-2">
                          <Avatar className="w-6 h-6" />
                          <span className="text-sm text-gray-400">{item.creator}</span>
                        </div>
                        <Button variant="ghost" size="sm" color={'#edf2f7'} _hover={{ color: '#000', bg: '#edf2f7' }}>
                          View <ChevronRight className="ml-1 h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* How It Works */}
          <section className="bg-gray-900 py-16">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold mb-12 text-center font-lato">How Cre8ify Works</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="bg-[#9333ea] rounded-full w-[86.4px] h-[86.4px] flex items-center justify-center mx-auto mb-4">
                    <PlusCircle className="h-[38.4px] w-[38.4px]" />
                  </div>
                  <h3 className="font-semibold mb-2">Create & Upload</h3>
                  <p className="text-gray-400">Craft your unique content and upload it to our decentralized network, ensuring your work remains truly yours.</p>
                </div>
                <div className="text-center">
                  <div className="bg-[#9333ea] rounded-full w-[86.4px] h-[86.4px] flex items-center justify-center mx-auto mb-4">
                    <Users className="h-[38.4px] w-[38.4px]" />
                  </div>
                  <h3 className="font-semibold mb-2">Connect & Engage</h3>
                  <p className="text-gray-400">Build a direct relationship with your audience, free from intermediaries and algorithmic gatekeepers.</p>
                </div>
                <div className="text-center">
                <div className="bg-[#9333ea] rounded-full w-[86.4px] h-[86.4px] flex items-center justify-center mx-auto mb-4">
                    <Zap className="h-[38.4px] w-[38.4px]" />
                  </div>
                  <h3 className="font-semibold mb-2">Earn & Grow</h3>
                  <p className="text-gray-400">Monetize your content fairly and transparently, with smart contracts ensuring you get paid for your valuable contributions.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Search Section */}
          <section className="py-16">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold mb-8 text-center font-lato">Discover Amazing Content</h2>
              <div className="max-w-2xl mx-auto relative flex items-center">
                <InputGroup>
                  <InputLeftElement pointerEvents='none'>
                    <Search className="text-gray-400" />
                  </InputLeftElement>
                  <Input 
                  className="pl-10 bg-gray-900 border-gray-800 focus:border-purple-600 text-white" 
                  placeholder="Search for creators, topics, or content..." 
                  _focus={{ boxShadow: 'none', outline: 'none', border: '1px solid #9333ea' }}
                />
                </InputGroup>
              </div>
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <Button variant="outline" size="sm" color={'white'} _hover={{ color: "#1A202C", bg: "#edf2f7" }}>NFT Art</Button>
                <Button variant="outline" size="sm" color={'white'} _hover={{ color: "#1A202C", bg: "#edf2f7" }}>Crypto Education</Button>
                <Button variant="outline" size="sm" color={'white'} _hover={{ color: "#1A202C", bg: "#edf2f7" }}>Web3 Development</Button>
                <Button variant="outline" size="sm" color={'white'} _hover={{ color: "#1A202C", bg: "#edf2f7" }}>Decentralized Finance</Button>
                <Button variant="outline" size="sm" color={'white'} _hover={{ color: "#1A202C", bg: "#edf2f7" }}>Blockchain Gaming</Button>
              </div>
            </div>
          </section>

          {/* Call to Action */}
          <section className="py-16 bg-gradient-to-r from-[#230735] to-black">
            <div className="max-w-[1100px] mx-auto px-4 flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0">
                <h2 className="text-5xl font-bold mb-6 font-lato">Ready to Revolutionize Your Content Creation?</h2>
                <p className="text-xl mb-8 max-w-2xl">Join our community of forward-thinking creators and start sharing your vision with the world.</p>
                <div className="w-full">
                  <Button bg={'#9333ea'} borderRadius={"100rem"} border={"none"} display={'inline-flex'} p={'1.7rem 2rem'} color={"#fff"} transition={"all .5s ease-in-out"} w={"250px"} _hover={{ bg: "#7e22ce", border: "none" }} _focus={{ outline: "none" }} className="font-suse">Launch App</Button>
                </div>
              </div>
              <div className="md:w-1/2">
                <svg viewBox="0 0 200 200" className="w-full max-w-md mx-auto">
                  <defs>
                    <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" style={{ stopColor: '#4C1D95', stopOpacity: 1 }} />
                      <stop offset="100%" style={{ stopColor: '#9333ea', stopOpacity: 1 }} />
                    </linearGradient>
                  </defs>
                  <rect x="40" y="40" width="120" height="120" rx="20" fill="url(#grad2)" />
                  <circle cx="100" cy="100" r="30" fill="white" opacity="0.3" />
                  <path d="M85 100 L105 85 L105 115 Z" fill="white" />
                </svg>
              </div>
            </div>
          </section>
        </main>
      </div>
    </HomeLayout>
  )
}