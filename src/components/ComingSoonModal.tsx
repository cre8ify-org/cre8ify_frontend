import React from 'react'
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Text,
  VStack,
  useColorModeValue,
} from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { keyframes } from '@emotion/react'

const pulse = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); }
`

interface ComingSoonModalProps {
  isOpen: boolean
  onClose: () => void
  featureName: string
}

export const ComingSoonModal: React.FC<ComingSoonModalProps> = ({ isOpen, onClose }) => {
  const bgGradient = useColorModeValue('linear(to-br, #230735, black)', 'linear(to-br, #230735, black)')
  const pulseAnimation = `${pulse} 2s ease-in-out infinite`

  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay backdropFilter="blur(10px)" />
      <ModalContent
        bgGradient={bgGradient}
        color="white"
        borderRadius="xl"
        p={6}
        className='font-suse'
      >
        <ModalHeader fontSize="2xl" textAlign="center">Coming Soon</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <VStack spacing={6}>
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              <svg width="150" height="150" viewBox="0 0 200 200">
                <defs>
                  <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#4C1D95" stopOpacity="1" />
                    <stop offset="100%" stopColor="#8B5CF6" stopOpacity="1" />
                  </linearGradient>
                </defs>
                <circle cx="100" cy="100" r="90" fill="url(#grad1)" />
                <path
                  d="M100,30 L130,90 L100,150 L70,90 Z"
                  fill="white"
                  opacity="0.2"
                />
                <text x="100" y="105" className='font-suse' fontSize="16" fill="white" textAnchor="middle">
                  Cre8ify
                </text>
              </svg>
            </motion.div>
            <Text fontSize="xl" textAlign="center">
              This Feature is coming soon!
            </Text>
            <Text textAlign="center">
              We're working hard to bring you this exciting new feature. Stay tuned for updates!
            </Text>
          </VStack>
        </ModalBody>
        <ModalFooter justifyContent="center">
          <Button
            bg={'#9333ea'}
            _hover={{ bg: "#7e22ce" }}
            color={'#edf2f7'}
            onClick={onClose}
            size="lg"
            fontWeight="bold"
            px={8}
            animation={pulseAnimation}
          >
            Can't Wait!
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}