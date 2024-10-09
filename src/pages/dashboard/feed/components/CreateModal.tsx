import useCreateFreeContent from "../../../../hooks/useCreateFreeContent";
import { ChangeEvent, useState } from "react";
import useGetUserDetails from "../../../../hooks/useGetUserDetails";
import "../../../../App.css";
// import useCreateExclContent from "../../../../hooks/useCreateExclContent";
import useCheckRegUser from "../../../../hooks/useCheckRegUser";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  VStack,
  FormControl,
//   FormLabel,
  Input,
  Textarea,
//   Box,
  Text,
  useColorModeValue,
  Icon,
  Img,
  Flex,
  Box,
  useDisclosure,
} from '@chakra-ui/react'
// import { Upload } from 'lucide-react'
import { FaImage, FaMusic } from "react-icons/fa";
import { RiFileVideoFill } from "react-icons/ri";
import { PlusCircle } from "lucide-react";

export const CreateContentModal = () => {
    const [title, setTitle] = useState<string>("");
    const [ipfsHash, setIpfsHash] = useState<string>("");
    const [contentType, setContentType] = useState("");
    const { data: userDetails } = useGetUserDetails();
    // const [exclusive, setExclusive] = useState(false);
    const regUser = useCheckRegUser();
    console.log(regUser);

    const OverlayOne = () => (
        <ModalOverlay bg="blackAlpha.300" backdropFilter="blur(10px)" />
      );
    
      const { isOpen, onOpen, onClose } = useDisclosure();
      const [overlay, setOverlay] = useState(<OverlayOne />);

  const bgColor = useColorModeValue('#111827', 'gray.800')
  const borderColor = useColorModeValue('gray.700', 'gray.600')

  const handleCaption = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setTitle(e.target.value);
    // console.log(title);
  };

  const changeHandler = async (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const selectedFile = e.target.files[0];
      await handleSubmission(selectedFile);

      const fileExtension = selectedFile.name.split(".").pop();
      setContentType(fileExtension || "");
    }
  };

  const handleSubmission = async (fileToUpload: string | Blob) => {
    try {
      const formData = new FormData();
      formData.append("file", fileToUpload);
      const metadata = JSON.stringify({
        name: "File name",
      });
      formData.append("pinataMetadata", metadata);

      const options = JSON.stringify({
        cidVersion: 0,
      });
      formData.append("pinataOptions", options);

      const res = await fetch(
        "https://api.pinata.cloud/pinning/pinFileToIPFS",
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${import.meta.env.VITE_PINATA_JWT}`,
          },
          body: formData,
        }
      );

      const resData = await res.json();

      console.log(resData)

      setIpfsHash(resData.IpfsHash);
      console.log(resData.IpfsHash);
    } catch (e) {
      // console.log(e);
      alert("Trouble uploading file");
    }
  };

  const handleCreateFreeContent = useCreateFreeContent(
    title,
    `${import.meta.env.VITE_GATEWAY_URL}/ipfs/${ipfsHash}`,
    contentType,
    userDetails?.username || "",
    userDetails?.profileImage || "" // Use optional chaining to access username
  );

  return (
    <Box>
        <Button 
        onClick={() => {
            setOverlay(<OverlayOne />);
            onOpen();
        }}
        className="bg-purple-600 hover:bg-purple-700">
            <PlusCircle className="mr-2 h-4 w-4" /> Create
        </Button>
        <Modal isOpen={isOpen} onClose={onClose} size="xl">
            {overlay}
            <ModalContent bg={bgColor} color="white" className="font-suse" mx={'0.5rem'}>
                <ModalHeader borderBottom="1px" borderColor={borderColor} className="font-lato">Create New Content</ModalHeader>
                <ModalCloseButton />
                <form>
                    <ModalBody>
                        <VStack spacing={6} align="stretch">
                            <FormControl>
                                <Textarea
                                placeholder="What's on your mind"
                                value={title}
                                onChange={handleCaption}
                                bg="transparent"
                                border="none"
                                _focus={{ boxShadow: '0 0 0 1px purple.500', border: 'none', outline: 'none' }}
                                rows={4}
                                resize={"none"}
                                />
                            </FormControl>

                            <FormControl>
                                {(contentType === "mp4" ||
                                    contentType === "avi" ||
                                    contentType === "mov") && (
                                    <video width={"500"} controls>
                                    <source
                                        src={`https://${
                                        import.meta.env.VITE_GATEWAY_URL
                                        }/ipfs/${ipfsHash}`}
                                    />
                                    </video>
                                )}
                                {(contentType === "jpeg" ||
                                    contentType === "jpg" ||
                                    contentType === "png" ||
                                    contentType === "gif") && (
                                    <Img
                                    src={`https://${
                                        import.meta.env.VITE_GATEWAY_URL
                                    }/ipfs/${ipfsHash}`}
                                    alt="image"
                                    w={"300px"}
                                    h={"300px"}
                                    objectFit={"cover"}
                                    borderRadius={".5rem"}
                                    />
                                )}
                                {(contentType === "mp3" ||
                                    contentType === "wav" ||
                                    contentType === "ogg") && (
                                    <audio controls>
                                    <source
                                        src={`https://${
                                        import.meta.env.VITE_GATEWAY_URL
                                        }/ipfs/${ipfsHash}`}
                                    />
                                    Your browser does not support the audio element.
                                    </audio>
                                )}

                                <Flex gap={"1rem"}>
                                    <Flex>
                                    <Input
                                        onChange={changeHandler}
                                        accept="image/jpg, image/jpeg, image/png, image/gif"
                                        type="file"
                                        border={"none"}
                                        id="image"
                                        hidden
                                    />
                                    <Flex align={"end"} justify={"space-between"}>
                                        <label style={{ cursor: "pointer" }} htmlFor="image">
                                        <Flex
                                            color={"#B7B7B6"}
                                            align={"center"}
                                            gap={".2rem"}
                                        >
                                            <Icon as={FaImage} fontSize={".7rem"} />
                                            <Text fontSize={".8rem"}>Photo</Text>
                                        </Flex>
                                        </label>
                                    </Flex>
                                    </Flex>
                                    <Flex>
                                    <Input
                                        onChange={changeHandler}
                                        accept="video/mp4, video/avi, video/mov"
                                        type="file"
                                        border={"none"}
                                        id="video"
                                        hidden
                                    />
                                    <Flex align={"end"} justify={"space-between"}>
                                        <label style={{ cursor: "pointer" }} htmlFor="video">
                                        <Flex
                                            color={"#B7B7B6"}
                                            align={"center"}
                                            gap={".2rem"}
                                        >
                                            <Icon as={RiFileVideoFill} fontSize={".8rem"} />
                                            <Text fontSize={".8rem"}>Video</Text>
                                        </Flex>
                                        </label>
                                    </Flex>
                                    </Flex>
                                    <Flex>
                                    <Input
                                        onChange={changeHandler}
                                        accept="audio/mp3, audio/wav, audio/ogg"
                                        type="file"
                                        border={"none"}
                                        id="audio"
                                        hidden
                                    />
                                    <Flex align={"end"} justify={"space-between"}>
                                        <label style={{ cursor: "pointer" }} htmlFor="audio">
                                        <Flex
                                            color={"#B7B7B6"}
                                            align={"center"}
                                            gap={".2rem"}
                                        >
                                            <Icon as={FaMusic} fontSize={".7rem"} />
                                            <Text fontSize={".8rem"}>Audio</Text>
                                        </Flex>
                                        </label>
                                    </Flex>
                                    </Flex>
                                </Flex>
                            </FormControl>
                        </VStack>
                    </ModalBody>

                    <ModalFooter borderTop="1px" borderColor={borderColor}>
                        <Button bg={'#9333ea'} _hover={{ bg: '#7e22ce' }} color={'#edf2f7'} onClick={() => {handleCreateFreeContent()}}>
                            Create Content
                        </Button>
                    </ModalFooter>
                </form>
            </ModalContent>
        </Modal>
    </Box>
  )
}