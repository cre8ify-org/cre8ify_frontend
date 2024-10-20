import { useEffect, useState, useRef } from 'react'
import {
  Box,
  Container,
  Flex,
  Text,
  VStack,
  useColorModeValue,
//   useToast,
} from '@chakra-ui/react'
import { motion, useAnimation } from 'framer-motion'
// import { keyframes } from '@emotion/react'
import DashboardLayout from '../../layout/dashboardLayout'

// const float = keyframes`
//   0% { transform: translateY(0px) rotate(0deg); }
//   50% { transform: translateY(-20px) rotate(5deg); }
//   100% { transform: translateY(0px) rotate(0deg); }
// `

// const pulse = keyframes`
//   0% { transform: scale(1); }
//   50% { transform: scale(1.05); }
//   100% { transform: scale(1); }
// `

const ComingSoonPage = () => {
//   const [email, setEmail] = useState('')
  const [countdown, setCountdown] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 })
//   const toast = useToast()
  const controls = useAnimation()
  const constraintsRef = useRef(null)

  const bgGradient = useColorModeValue('linear(to-r, #230735, black)', 'linear(to-r, #230735, black)')
//   const floatAnimation = `${float} 6s ease-in-out infinite`
//   const pulseAnimation = `${pulse} 2s ease-in-out infinite`

  useEffect(() => {
    const targetDate = new Date('2024-12-31T23:59:59').getTime()

    const interval = setInterval(() => {
      const now = new Date().getTime()
      const distance = targetDate - now

      setCountdown({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      })

      if (distance < 0) {
        clearInterval(interval)
        setCountdown({ days: 0, hours: 0, minutes: 0, seconds: 0 })
      }
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    controls.start({
      y: [0, -10, 0],
      transition: { duration: 2, repeat: Infinity, ease: "easeInOut" }
    })
  }, [controls])

  return (
    <DashboardLayout>
        <Box bgGradient={bgGradient} color="white" overflow="hidden" className='rounded-lg' >
            <Container maxW="container.xl">
                <Flex direction={{ base: 'column', lg: 'row' }} align="center" justify="space-between">
                <VStack align={{ base: 'center', lg: 'start' }} spacing={8}>
                    <h1 className='font-suse text-6xl font-bold text-center lg:text-left'>
                    This Feature of
                    <Text as="span" bgGradient="linear(to-r, #9333ea, pink.400)" bgClip="text" display="block">
                        Cre8ify
                    </Text>
                    Is Coming
                    </h1>
                    <Text fontSize="xl" maxW="lg" textAlign={{ base: 'center', lg: 'left' }}>
                    Join us in revolutionizing the way creators own, share, and monetize their work. Be the first to know when we launch this Feature!
                    </Text>
                    <Flex justify="center">
                {Object.entries(countdown).map(([unit, value]) => (
                    <VStack key={unit} mx={4}>
                    <Box
                        bg="whiteAlpha.200"
                        borderRadius="md"
                        p={4}
                        minW="80px"
                        textAlign="center"
                        position="relative"
                        overflow="hidden"
                        _after={{
                        content: '""',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        background: 'linear-gradient(45deg, transparent 40%, rgba(255,255,255,0.1) 50%, transparent 60%)',
                        transform: 'translateX(-100%)',
                        animation: 'shimmer 3s infinite',
                        }}
                    >
                        <Text fontSize="3xl" fontWeight="bold">
                        {value}
                        </Text>
                    </Box>
                    <Text fontSize="sm" textTransform="uppercase">
                        {unit}
                    </Text>
                    </VStack>
                ))}
                </Flex>
                    {/* <Box as="form" onSubmit={handleSubmit} w="full" maxW="md">
                    <Flex>
                        <Input
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        bg="whiteAlpha.200"
                        border="none"
                        _placeholder={{ color: 'whiteAlpha.500' }}
                        mr={2}
                        />
                        <Button
                        type="submit"
                        colorScheme="purple"
                        px={8}
                        animation={pulseAnimation}
                        >
                        Join Waitlist
                        </Button>
                    </Flex>
                    </Box>
                    <Flex>
                    {[
                        { icon: FaTwitter, label: 'Twitter', link: 'https://twitter.com' },
                        { icon: FaDiscord, label: 'Discord', link: 'https://discord.com' },
                        { icon: FaMedium, label: 'Medium', link: 'https://medium.com' },
                    ].map((social, index) => (
                        <Tooltip key={index} label={`Follow us on ${social.label}`} placement="top">
                        <IconButton
                            as="a"
                            href={social.link}
                            aria-label={social.label}
                            icon={<social.icon />}
                            variant="ghost"
                            colorScheme="purple"
                            fontSize="20px"
                            mr={4}
                            target="_blank"
                            rel="noopener noreferrer"
                        />
                        </Tooltip>
                    ))}
                    </Flex> */}
                </VStack>
                <Box
                    ref={constraintsRef}
                    w={{ base: 'full', lg: '50%' }}
                    h="600px"
                    position="relative"
                >
                    <motion.div
                    animate={controls}
                    style={{
                        width: '100%',
                        height: '100%',
                        position: 'absolute',
                    }}
                    >
                    <svg viewBox="0 0 200 200" width="100%" height="100%">
                        <defs>
                        <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#4C1D95" stopOpacity="1" />
                            <stop offset="100%" stopColor="#9333ea" stopOpacity="1" />
                        </linearGradient>
                        <filter id="glow">
                            <feGaussianBlur stdDeviation="3.5" result="coloredBlur"/>
                            <feMerge>
                            <feMergeNode in="coloredBlur"/>
                            <feMergeNode in="SourceGraphic"/>
                            </feMerge>
                        </filter>
                        </defs>
                        <circle cx="100" cy="100" r="80" fill="url(#grad1)" filter="url(#glow)" />
                        <path
                        d="M100,30 L120,80 L170,80 L130,110 L150,160 L100,130 L50,160 L70,110 L30,80 L80,80 Z"
                        fill="white"
                        opacity="0.2"
                        />
                        <text x="100" y="115" className='font-suse' fontSize="16" fill="white" textAnchor="middle" filter="url(#glow)">
                        Cre8ify
                        </text>
                    </svg>
                    </motion.div>
                    {[...Array(20)].map((_, index) => (
                    <motion.div
                        key={index}
                        style={{
                        position: 'absolute',
                        top: Math.random() * 100 + '%',
                        left: Math.random() * 100 + '%',
                        width: Math.random() * 10 + 5 + 'px',
                        height: Math.random() * 10 + 5 + 'px',
                        borderRadius: '50%',
                        backgroundColor: 'rgba(139, 92, 246, 0.5)',
                        }}
                        animate={{
                        y: [0, -30, 0],
                        opacity: [0, 1, 0],
                        }}
                        transition={{
                        duration: Math.random() * 2 + 1,
                        repeat: Infinity,
                        ease: "easeInOut",
                        }}
                    />
                    ))}
                </Box>
                </Flex>
            </Container>
    </Box>
    </DashboardLayout>
  )
}

export default ComingSoonPage