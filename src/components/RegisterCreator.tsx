import { ChangeEvent, useEffect, useState } from 'react'
import {
  Button,
  Flex,
  Text,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  FormLabel,
  Input,
  FormControl,
  Image,
  Box,
  useDisclosure,
  VStack,
  useColorModeValue,
  Icon,
} from "@chakra-ui/react"
import { FaImage } from "react-icons/fa"
import { useWeb3ModalAccount } from "@web3modal/ethers/react"
import useRegister from "../hooks/useRegister"
import useCheckRegUser from '../hooks/useCheckRegUser'

export const RegisterCreator = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [username, setUsername] = useState<string>("")
  const [cid, setCid] = useState<string>("")
  const regUser = useCheckRegUser()

  useEffect(() => {
    if (regUser === false) {
      onOpen()
    } else {
      onClose()
    }
  }, [regUser, onOpen, onClose])

  const { address } = useWeb3ModalAccount()

  const handleRegister = useRegister(
    username,
    `${import.meta.env.VITE_GATEWAY_URL}/ipfs/${cid}`
  )

  const changeHandler = async (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const selectedFile = e.target.files[0]
      await handleSubmission(selectedFile)
    }
  }

  const handleSubmission = async (fileToUpload: string | Blob) => {
    try {
      const formData = new FormData()
      formData.append("file", fileToUpload)
      const metadata = JSON.stringify({
        name: "File name",
      })
      formData.append("pinataMetadata", metadata)

      const options = JSON.stringify({
        cidVersion: 0,
      })
      formData.append("pinataOptions", options)

      const res = await fetch(
        "https://api.pinata.cloud/pinning/pinFileToIPFS",
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${import.meta.env.VITE_PINATA_JWT}`,
          },
          body: formData,
        }
      )

      const resData = await res.json()

      setCid(resData.IpfsHash)
      console.log(resData.IpfsHash)
    } catch (e) {
      console.log(e)
      alert("Trouble uploading file")
    }
  }

  const bgGradient = useColorModeValue('linear(to-br, #230735, black)', 'linear(to-br, #230735, black)')
  const inputBg = useColorModeValue('transparent  ', 'transparent')

  return (
    <Box>
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
        motionPreset="slideInBottom">
        <ModalOverlay />
        <ModalContent bgGradient={bgGradient} className='font-suse'>
          <ModalHeader className='font-lato'>Create your account</ModalHeader>
          <ModalBody>
            <VStack spacing={4}>
              <FormControl>
                <Input
                  type="file"
                  id="selectFile"
                  onChange={changeHandler}
                  accept="image/png, image/jpeg, image/JPG, image/avif, img/svg"
                  hidden
                />
                <FormLabel htmlFor="selectFile" w={'200px'} cursor="pointer">
                  <Flex
                    borderRadius="md"
                    align="center"
                    justify="center"
                    bg={inputBg}
                    w="200px"
                    h="200px"
                    border="2px dashed"
                    borderColor="gray.300"
                  >
                    {cid ? (
                      <Image
                        src={`https://${import.meta.env.VITE_GATEWAY_URL}/ipfs/${cid}`}
                        alt="Profile"
                        objectFit="cover"
                        w="full"
                        h="full"
                        borderRadius="md"
                      />
                    ) : (
                      <VStack>
                        <Icon as={FaImage} fontSize="3xl" />
                        <Text>Upload Profile Image</Text>
                      </VStack>
                    )}
                  </Flex>
                </FormLabel>
              </FormControl>
              <FormControl isRequired>
                <FormLabel>Username</FormLabel>
                <Input
                  placeholder="Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  bg={inputBg}
                />
              </FormControl>
              <FormControl>
                <FormLabel>Address</FormLabel>
                <Input value={address || ''} isReadOnly bg={inputBg} />
              </FormControl>
            </VStack>
          </ModalBody>
          <ModalFooter>
            <Button
              bg={'#9333ea'}
              _hover={{ bg: "#7e22ce" }}
              color={'#edf2f7'}
              onClick={() => {
                handleRegister()
              }}
            >
              Register
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  )
}