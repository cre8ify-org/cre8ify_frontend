import {
  Box,
  Flex,
  Image,
  Text,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  useDisclosure,
  Icon,
  // Menu,
  // MenuButton,
  // MenuList,
  // MenuItem,
  Button,
  // Grid,
  // InputGroup,
  // InputLeftElement,
  // Input,
  Avatar,
  // Heading,
  VStack,
} from "@chakra-ui/react";
import { SetStateAction, useEffect, useState } from "react";
import { FaThumbsUp, FaThumbsDown } from "react-icons/fa";
// import { HiDotsHorizontal, HiSearch } from "react-icons/hi";
import { ChevronRight, Trash2 } from "lucide-react";
import useGetUserDetails from "../../../../hooks/useGetUserDetails";

const Content = ({
  item,
  id,
  handleFullContent,
  handleLike,
  handleDisLike,
  handleDelete,
}: any) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [timestamp, setTimestamp] = useState(item.dateCreated);
  const [timeAgo, setTimeAgo] = useState<SetStateAction<any>>(null);
  const { data: userDetails } = useGetUserDetails();

  // console.log(item)

  useEffect(() => {
    const currentTime = Math.floor(Date.now() / 1000);
    const elapsedTime = currentTime - Number(timestamp);

    const getTimeAgo = (elapsedTime: any) => {
      const minute = 60;
      const hour = 60 * minute;
      const day = 24 * hour;
      const week = 7 * day;
      const month = 30 * day;
      const year = 365 * day;

      if (elapsedTime < minute) {
        return "Just now";
      } else if (elapsedTime < hour) {
        const minutes = Math.floor(elapsedTime / minute);
        return `${minutes} minute${minutes > 1 ? "s" : ""} ago`;
      } else if (elapsedTime < day) {
        const hours = Math.floor(elapsedTime / hour);
        return `${hours} hour${hours > 1 ? "s" : ""} ago`;
      } else if (elapsedTime < week) {
        const days = Math.floor(elapsedTime / day);
        return `${days} day${days > 1 ? "s" : ""} ago`;
      } else if (elapsedTime < month) {
        const weeks = Math.floor(elapsedTime / week);
        return `${weeks} week${weeks > 1 ? "s" : ""} ago`;
      } else if (elapsedTime < year) {
        const months = Math.floor(elapsedTime / month);
        return `${months} month${months > 1 ? "s" : ""} ago`;
      } else {
        const years = Math.floor(elapsedTime / year);
        return `${years} year${years > 1 ? "s" : ""} ago`;
      }
    };

    setTimeAgo(getTimeAgo(elapsedTime));
    setTimestamp((prevTime: any) => prevTime);
  }, [timestamp]);

  return (
    <Box>
      <Box className="bg-gray-900" borderRadius="lg" overflow="hidden">
            <Flex justify="space-between" align="center" p={4}>
              <Flex align="center" gap={2}>
                <Avatar src={`https://${item.creatorImage}`} size="sm" />
                <Text fontSize="sm" color="gray.400">
                  {item.creatorProfile}
                </Text>
              </Flex>
              {userDetails?.walletAddress === item.creator ?  <Button colorScheme="red" bg="transparent" color={'#FF3B30'} _hover={{ bg: "transparent" }} onClick={() => handleDelete(Number(item.id))}>
                <Trash2 />
              </Button> :  <Button
                variant="ghost"
                size="sm"
                color={'#edf2f7'}
                bg={'transparent'}
                _hover={{ bg: 'transparent' }}
              >
                Follow
              </Button>}
            </Flex>
          {item.ipfsHash === 'aqua-abundant-catshark-806.mypinata.cloud/ipfs/' ? '' : <Image
            src={`https://${item.ipfsHash}`}
            alt="Content preview"
            objectFit="cover"
            h="200px"
            w="100%"
          />}
          <VStack align="stretch" p={4} spacing={4}>
            <Text fontSize="sm" color="gray.300">
              {item.title}
            </Text>
            <Flex justify="space-between" align="center">
              <Button
                variant="ghost"
                size="sm"
                rightIcon={<ChevronRight size={16} />}
                onClick={() => {
                  onOpen();
                  handleFullContent(item);
                }}
                bg={'#edf2f7'}
              >
                View
              </Button>
            </Flex>
            <Flex justify="space-between" align="center">
              <Flex gap={4} color={'#edf2f7'}>
                <Flex
                  align="center"
                  gap={1}
                  cursor="pointer"
                  onClick={() => handleLike(Number(item.id))}
                >
                  <Icon as={FaThumbsUp} />
                  <Text>{Number(item?.likes)}</Text>
                </Flex>
                <Flex
                  align="center"
                  gap={1}
                  cursor="pointer"
                  onClick={() => handleDisLike(Number(item.id))}
                >
                  <Icon as={FaThumbsDown} />
                  <Text>{Number(item?.dislikes)}</Text>
                </Flex>
              </Flex>
              <Text fontSize="sm" className="text-purple-600">
                {timeAgo}
              </Text>
            </Flex>
          </VStack>
        </Box>

      <Modal isCentered isOpen={isOpen} onClose={onClose}>
        <ModalOverlay bg="blackAlpha.300" backdropFilter="blur(10px)" className="font-suse" />
        <ModalContent bg="gray.900">
          <ModalBody>
            <VStack align="stretch" spacing={4}>
              <Text fontSize="sm" color="gray.300">
                {id?.title}
              </Text>
              {item.contentType === "image" && (
                <Image
                  src={`https://${id?.ipfsHash}`}
                  alt="Content Image"
                  objectFit="cover"
                  borderRadius="md"
                />
              )}
              {item.contentType === "video" && (
                <Box as="video" controls width="100%">
                  <source src={`https://${id?.ipfsHash}`} />
                </Box>
              )}
              {item.contentType === "audio" && (
                <Box as="audio" controls width="100%">
                  <source src={`https://${id?.ipfsHash}`} />
                </Box>
              )}
            </VStack>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default Content;