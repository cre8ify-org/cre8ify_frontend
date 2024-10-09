import {
  // Button,
  Input,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  InputGroup,
  InputLeftElement,

} from "@chakra-ui/react"
import { Search } from 'lucide-react'
import HomeLayout from "../../../layout/homeLayout"
import { Link } from "react-router-dom"

export default function FAQPage() {
  const faqs = [
    {
      question: "What is Cre8ify?",
      answer: "Cre8ify is a decentralized content creation platform that empowers creators to own, monetize, and distribute their content directly to their audience without intermediaries."
    },
    {
      question: "How does the platform work?",
      answer: "Creators can upload their content to the platform, set their own pricing and distribution terms, and interact directly with their audience. The platform uses blockchain technology to ensure content ownership and fair compensation."
    },
    {
      question: "What types of content can I create on Cre8ify?",
      answer: "Cre8ify supports a wide range of content types including text, images, videos, audio, and even interactive media. Whether you're a writer, artist, musician, or any other type of creator, you can share your work on our platform."
    },
    {
      question: "How do I get paid for my content?",
      answer: "When users access or purchase your content, you receive payment directly in cryptocurrency. The platform takes a small fee to cover operational costs, but the majority of the revenue goes directly to you, the creator."
    },
    {
      question: "Is my content protected on Cre8ify?",
      answer: "Yes, your content is protected through blockchain technology. Each piece of content you upload is associated with your unique digital signature, providing proof of ownership and making unauthorized copying or distribution much more difficult."
    },
    {
      question: "How can I join Cre8ify?",
      answer: "To join Cre8ify, simply sign up for an account on our website. You'll need to create a digital wallet to receive payments. Once your account is set up, you can start uploading and monetizing your content immediately."
    }
  ]

  return (
    <HomeLayout>
      <div className="min-h-screen bg-black text-white flex flex-col font-suse">
        <main className="flex-grow">
          {/* Hero Section */}
          <section className="bg-gradient-to-r from-[#230735] to-black pb-16 pt-32 text-center">
            <div className="container mx-auto px-4">
              <h1 className="text-5xl md:text-7xl font-bold mb-6 font-lato">Frequently Asked Questions</h1>
              <p className="text-xl mb-8 max-w-2xl mx-auto">Find answers to common questions about Cre8ify</p>
            </div>
          </section>

          {/* Search Bar */}
          <section className="py-8">
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
          </section>

          {/* FAQ Accordion */}
          <section className="py-16">
            <div className="container mx-auto px-4">
              <Accordion allowToggle className="w-full max-w-3xl mx-auto">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index}>
                    <h2 className="font-semibold font-lato">
                      <AccordionButton>
                        <Box as='span' flex='1' textAlign='left'>
                          {faq.question}
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                      {faq.answer}
                    </AccordionPanel>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </section>

          {/* Call to Action */}
          <section className="bg-gray-900 py-16">
            <div className="container mx-auto px-4 text-center">
              <h2 className="text-3xl font-bold mb-6 font-lato">Still have questions?</h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto">Our support team is here to help. Reach out to us for personalized assistance.</p>
              <Link to={'/contact'} className="bg-purple-600 hover:bg-purple-700 text-lg py-4 px-8 rounded">
                Contact Support
              </Link>
            </div>
          </section>
        </main>
      </div>
    </HomeLayout>
  )
}