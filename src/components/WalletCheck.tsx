import React, { useEffect } from 'react'
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Text,
  useDisclosure,
  VStack,
  useColorModeValue,
  Box,
} from '@chakra-ui/react'
import { useWeb3Modal } from '@web3modal/ethers/react'
import { useWeb3ModalAccount } from '@web3modal/ethers/react'

export const WalletCheck: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { open } = useWeb3Modal()
  const { address, isConnected } = useWeb3ModalAccount()

  useEffect(() => {
    if (isConnected === false) {
      onOpen()
    } else {
        onClose()
    }
  }, [isConnected, onOpen, onClose])

  const handleConnect = async () => {
    await open()
  }

  const bgGradient = useColorModeValue('linear(to-br, #230735, black)', 'linear(to-br, #230735, black)')
  const textColor = useColorModeValue('#edf2f7', '#edf2f7')
  const buttonBg = useColorModeValue('#9333ea', '#9333ea')
  const buttonColor = useColorModeValue('#edf2f7', '#edf2f7')

  return (
    <>
      {isOpen && (
        <Box
          position="fixed"
          top="0"
          left="0"
          right="0"
          bottom="0"
          bg="rgba(0, 0, 0, 0.5)"
          backdropFilter="blur(10px)"
          zIndex="overlay"
        />
      )}
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        isCentered
        closeOnOverlayClick={false}
        motionPreset="slideInBottom"
      >
        <ModalOverlay bg="transparent" />
        <ModalContent
          bgGradient={bgGradient}
          color={textColor}
          boxShadow="xl"
          borderRadius="xl"
          p={6}
          maxW="400px"
          mx={4}
          className='font-suse'
        >
          <ModalHeader fontSize="2xl" fontWeight="bold" textAlign="center" className='font-lato'>
            Connect Your Wallet
          </ModalHeader>
          <ModalBody>
            <VStack spacing={6}>
              <Text textAlign="center">
                To access the full features of our platform, please connect your wallet.
              </Text>
              <Box
                bg={useColorModeValue('blackAlpha.500', 'blackAlpha.500')}
                p={4}
                borderRadius="md"
                width="100%"
              >
                <Text fontWeight="bold" mb={2}>
                  Current status: {isConnected ? 'Connected' : 'Not connected'}
                </Text>
                {address && (
                  <Text fontSize="sm">
                    Connected address: {address.slice(0, 6)}...{address.slice(-4)}
                  </Text>
                )}
              </Box>
            </VStack>
          </ModalBody>
          <ModalFooter justifyContent="center">
            <Button
              bg={buttonBg}
              color={buttonColor}
              _hover={{ bg: useColorModeValue('#7e22ce', '#7e22ce') }}
              onClick={handleConnect}
              size="lg"
              width="100%"
              fontWeight="bold"
              boxShadow="md"
              _active={{ transform: 'scale(0.98)' }}
            >
              Connect Wallet
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}