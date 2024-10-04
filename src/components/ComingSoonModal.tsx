import { useState, useEffect } from 'react'
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
  // Button,
  VStack,
  // Heading,
  Text,
  // Input,
  HStack,
  Box,
  useColorModeValue,
} from '@chakra-ui/react'
import { keyframes, css } from '@emotion/react'

const pulse = keyframes`
  0% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(139, 92, 246, 0.7); }
  70% { transform: scale(1); box-shadow: 0 0 0 10px rgba(139, 92, 246, 0); }
  100% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(139, 92, 246, 0); }
`

const pulseAnimation = css`
  animation: ${pulse} 2s infinite;
`

export const ComingSoonModal = ({ isOpen, onClose }: any) => {
  // const [email, setEmail] = useState('')
  const [days, setDays] = useState(0)
  const [hours, setHours] = useState(0)
  const [minutes, setMinutes] = useState(0)
  const [seconds, setSeconds] = useState(0)

  // const bgGradient = useColorModeValue('linear(to-br, #230735, black)', 'linear(to-br, purple.900, black)')
  const glowColor = useColorModeValue('purple.400', 'purple.300')

  useEffect(() => {
    const target = new Date('2024-12-31T23:59:59')

    const interval = setInterval(() => {
      const now = new Date()
      const difference = target.getTime() - now.getTime()

      const d = Math.floor(difference / (1000 * 60 * 60 * 24))
      setDays(d)

      const h = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      setHours(h)

      const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
      setMinutes(m)

      const s = Math.floor((difference % (1000 * 60)) / 1000)
      setSeconds(s)
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  // const handleSubmit = (e: any) => {
  //   e.preventDefault()
  //   // Handle email submission logic here
  //   console.log('Submitted email:', email)
  //   setEmail('')
  // }

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="xl" isCentered>
      <ModalOverlay backdropFilter="blur(10px)" />
      <ModalContent
        // bgGradient={bgGradient}
        bg={'#111827'}
        borderRadius="xl"
        boxShadow={`0 0 20px ${glowColor}`}
        color="white"
        p={6}
        className='font-suse'
      >
        <ModalCloseButton />
        <ModalBody>
          <VStack spacing={8} align="stretch">
            <Box position="relative" height="150px" mb={4}>
              <svg viewBox="0 0 200 100" width="100%" height="100%">
                <defs>
                  <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#4C1D95" stopOpacity="1" />
                    <stop offset="100%" stopColor="#8B5CF6" stopOpacity="1" />
                  </linearGradient>
                </defs>
                <path
                  d="M0,50 Q50,0 100,50 Q150,100 200,50"
                  fill="none"
                  stroke="url(#grad1)"
                  strokeWidth="4"
                >
                  <animate
                    attributeName="d"
                    values="M0,50 Q50,0 100,50 Q150,100 200,50;M0,50 Q50,100 100,50 Q150,0 200,50;M0,50 Q50,0 100,50 Q150,100 200,50"
                    dur="10s"
                    repeatCount="indefinite"
                  />
                </path>
                <text x="100" y="50" className='font-suse font-semibold' fontSize="24" fill="white" textAnchor="middle" dominantBaseline="middle">
                  Cre8ify
                </text>
              </svg>
            </Box>

            <h2 className='font-suse text-center text-5xl font-bold'>
              Coming Soon
            </h2>

            <HStack justify="center" spacing={4}>
              {[
                { label: 'Days', value: days },
                { label: 'Hours', value: hours },
                { label: 'Minutes', value: minutes },
                { label: 'Seconds', value: seconds },
              ].map((item) => (
                <VStack key={item.label} spacing={2}>
                  <Box
                    bg="whiteAlpha.200"
                    borderRadius="md"
                    p={3}
                    minW="70px"
                    textAlign="center"
                    css={pulseAnimation}
                  >
                    <Text fontSize="2xl" fontWeight="bold">
                      {item.value}
                    </Text>
                  </Box>
                  <Text fontSize="sm">{item.label}</Text>
                </VStack>
              ))}
            </HStack>

            {/* <form onSubmit={handleSubmit}>
              <HStack>
                <Input
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  bg="whiteAlpha.200"
                  border="none"
                  _placeholder={{ color: 'whiteAlpha.500' }}
                  _focus={{ boxShadow: `0 0 0 1px ${glowColor}` }}
                />
                <Button type="submit" colorScheme="purple">
                  Notify Me
                </Button>
              </HStack>
            </form> */}
          </VStack>
        </ModalBody>
      </ModalContent>
    </Modal>
  )
}