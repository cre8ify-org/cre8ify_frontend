import { Button, Input, Textarea } from '@chakra-ui/react'
import { Mail, MapPin, Phone, Github, MessageCircle, Video, Calendar } from 'lucide-react'
import HomeLayout from '../../../layout/homeLayout'
import { Link } from 'react-router-dom'
import { ComingSoonModal } from '../../../components/ComingSoonModal'
import { useState } from 'react'

export default function ContactPage() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <HomeLayout>
      <div className="min-h-screen bg-black text-white flex flex-col font-suse">
        <main className="flex-grow">
          {/* Hero Section */}
          <section className="bg-gradient-to-r from-[#230735] relative to-black pb-16 pt-32 text-center">
            <div className="container mx-auto px-4">
              <h1 className="text-5xl md:text-7xl font-bold mb-6 font-lato">Get in Touch</h1>
              <p className="text-xl mb-8 max-w-2xl mx-auto">We're here to support your creative journey. Reach out with any questions, ideas, or feedback.</p>
            </div>
            <div className="md:w-1/2 absolute bottom-[.1rem] -right-[5rem] lg:bottom-[2rem] lg:-right-[10rem]">
            <svg viewBox="0 0 200 200" className="w-[40%] max-w-md mx-auto">
              <defs>
                <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{ stopColor: '#4C1D95', stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: '#9333ea', stopOpacity: 1 }} />
                </linearGradient>
              </defs>
              <circle cx="100" cy="100" r="40" fill="url(#grad1)" />
              <g transform="translate(70, 70) scale(0.3)">
                <path d="M70 80 L100 110 L130 80 L150 60 L100 60 L50 60 L70 80" fill="none" stroke="white" stroke-width="6" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M50 60 L100 110 L150 60 L150 140 L50 140 L50 60" fill="none" stroke="white" stroke-width="6" stroke-linecap="round" stroke-linejoin="round" />
              </g>
            </svg>
            </div>
          </section>
          {/* Contact Options */}
          <section className="py-16">
            <div className="max-w-[1100px] mx-auto px-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                <div className="bg-gray-900 rounded-lg p-6 text-center">
                  <div className="bg-purple-600 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                    <MessageCircle className="h-10 w-10" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Chat Support</h3>
                  <p className="text-gray-400 mb-4">Get instant answers from our AI-powered chatbot or connect with a human agent.</p>
                  <Button className="w-full">Start Chat</Button>
                </div>
                <div className="bg-gray-900 rounded-lg p-6 text-center">
                  <div className="bg-purple-600 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                    <Video className="h-10 w-10" />
                  </div>

                  <h3 className="text-xl font-semibold mb-2">Video Call</h3>
                  <p className="text-gray-400 mb-4">Schedule a face-to-face video call with our support team for personalized assistance.</p>
                  <Button onClick={() => setIsModalOpen(true)} className="w-full">Book a Call</Button>
                </div>
                <div className="bg-gray-900 rounded-lg p-6 text-center">
                  <div className="bg-purple-600 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                    <Calendar className="h-10 w-10" />
                  </div>

                  <h3 className="text-xl font-semibold mb-2">Creator Workshop</h3>
                  <p className="text-gray-400 mb-4">Join our weekly workshops to learn tips, tricks, and best practices.</p>
                  <Button onClick={() => setIsModalOpen(true)} className="w-full">View Schedule</Button>
                </div>
              </div>
            </div>
          </section>

          {/* Contact Form and Info */}
          <section className="py-16 bg-gray-900">
            <div className="max-w-[1100px] mx-auto px-4">
              <div className="flex flex-col md:flex-row gap-12">
                {/* Contact Form */}
                <div className="flex-1">
                  <h2 className="text-3xl font-bold mb-6 font-lato">Send Us a Message</h2>
                  <form className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
                      <Input id="name" placeholder="Your Name"  className="bg-gray-800 border-gray-700 text-white" />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                      <Input id="email" type="email" placeholder="your@email.com" className="bg-gray-800 border-gray-700 text-white" />
                    </div>
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium mb-2">Subject</label>
                      <Input id="subject" placeholder="What's this about?" className="bg-gray-800 border-gray-700 text-white" />
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                      <Textarea id="message" placeholder="Your message here..." className="h-32 bg-gray-800 border-gray-700 text-white" />
                    </div>
                    <Button className="w-full bg-purple-600 hover:bg-purple-700">Send Message</Button>
                  </form>
                </div>

                {/* Contact Info */}
                <div className="flex-1">
                  <h2 className="text-3xl font-bold mb-6 font-lato">Contact Information</h2>
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <MapPin className="w-6 h-6 text-purple-600" />
                      <div>
                        <h3 className="font-semibold">Address</h3>
                        <p className="text-gray-400">123 Decentralized Avenue, Crypto City, CC 12345</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <Phone className="w-6 h-6 text-purple-600" />
                      <div>
                        <h3 className="font-semibold">Phone</h3>
                        <p className="text-gray-400">+1 (555) 123-4567</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <Mail className="w-6 h-6 text-purple-600" />
                      <div>
                        <h3 className="font-semibold">Email</h3>
                        <p className="text-gray-400">support@decentcreate.com</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-12">
                    <h3 className="text-xl font-semibold mb-4 font-lato">Connect With Us</h3>
                    <div className="flex space-x-4">
                      <a href="#" className="text-gray-400 hover:text-white transition-colors">
                        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                        </svg>
                      </a>
                      <a href="#" className="text-gray-400 hover:text-white transition-colors">
                        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                        </svg>
                      </a>
                      <a href="#" className="text-gray-400 hover:text-white transition-colors">
                        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                        </svg>
                      </a>
                      <a href="#" className="text-gray-400 hover:text-white transition-colors">
                        <Github className="h-6 w-6" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* FAQ Teaser */}
          <section className="py-16">
            <div className="container mx-auto px-4 text-center">
              <h2 className="text-3xl font-bold mb-6 font-lato">Frequently Asked Questions</h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto">Can't find the answer you're looking for? Check out our comprehensive FAQ section.</p>
              <Link to={'/faq'} className="bg-purple-600 hover:bg-purple-700 text-lg py-4 px-8 rounded">
                View FAQs
              </Link>
            </div>
          </section>
        </main>
      </div>
      <ComingSoonModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </HomeLayout>  
  )
}