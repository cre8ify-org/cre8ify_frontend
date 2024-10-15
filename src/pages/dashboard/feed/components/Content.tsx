import React, { SetStateAction, useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
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
  Button,
  Avatar,
  VStack,
  HStack,
  Tooltip,
  useColorModeValue,
} from "@chakra-ui/react";
import { FaThumbsUp, FaThumbsDown, FaEye, FaUserPlus } from "react-icons/fa";
import { Trash2 } from "lucide-react";
import { useWeb3ModalAccount } from "@web3modal/ethers/react";

interface ContentProps {
  item: {
    id: number;
    title: string;
    creatorImage: string;
    creatorProfile: string;
    dateCreated: number;
    ipfsHash: string;
    creator: string;
    likes: number;
    dislikes: number;
    contentType: string;
  };
  id: any;
  handleFullContent: (item: any) => void;
  handleLike: (id: number) => void;
  handleDisLike: (id: number) => void;
  handleDelete: (id: number) => void;
}

const Content: React.FC<ContentProps> = ({
  item,
  id,
  handleFullContent,
  handleLike,
  handleDisLike,
  handleDelete,
}) => {
  const { address } = useWeb3ModalAccount();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [timestamp, setTimestamp] = useState(item.dateCreated);
  const [timeAgo, setTimeAgo] = useState<SetStateAction<any>>(null);
  const navigate = useNavigate();

  const bgColor = useColorModeValue("#111827", "#111827");
  const textColor = useColorModeValue("gray.100", "gray.200");
  const buttonBg = useColorModeValue("#9333ea", "#9333ea");
  const buttonColor = useColorModeValue("#edf2f7", "#edf2f7");

  useEffect(() => {
    const currentTime = Math.floor(Date.now() / 1000);
    const elapsedTime = currentTime - Number(timestamp);

    const getTimeAgo = (elapsedTime: number): string => {
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

  const handleProfileClick = () => {
    navigate(`/profile/${item.creator}`);
  };

  return (
    <Box bg={bgColor} borderRadius="lg" overflow="hidden" boxShadow="md">
      <Flex justify="space-between" align="center" p={4}>
        <Flex align="center" gap={2} onClick={handleProfileClick} cursor="pointer">
          <Avatar src={`https://${item.creatorImage}`} size="sm" />
          <VStack align="start" spacing={0}>
            <Text fontSize="sm" fontWeight="bold" color={textColor}>
              {item.creatorProfile}
            </Text>
            <Text fontSize="xs" color="gray.500">
              {timeAgo}
            </Text>
          </VStack>
        </Flex>
        {address === item.creator ? (
          <Tooltip placement="top">
            <Button
              bg="blackAlpha.500"
              _hover={{ bg: 'blackAlpha.500' }}
              size="sm"
              colorScheme="red"
              variant="ghost"
              onClick={() => handleDelete(Number(item.id))}
            >
              <Icon as={Trash2} />
            </Button>
          </Tooltip>
        ) : (
          <Tooltip placement="top">
            <Button
              outline="1px solid #9333ea"
              color="#9333ea"
              size="sm"
              leftIcon={<FaUserPlus />}
              variant="outline"
              border="none"
              _hover={{ bg: "#9333ea", color: "#edf2f7" }}
            >
              Follow
            </Button>
          </Tooltip>
        )}
      </Flex>
      {item.ipfsHash !== "aqua-abundant-catshark-806.mypinata.cloud/ipfs/" && (
        <Image
          src={`https://${item.ipfsHash}`}
          alt="Content preview"
          objectFit="cover"
          w="100%"
        />
      )}
      <VStack align="stretch" p={4} spacing={4}>
        <Text noOfLines={2}>{item.title}</Text>
        <HStack justify="space-between" align="center">
          <HStack spacing={4}>
            <Tooltip placement="top">
              <Button
                bg="#edf2f7"
                size="sm"
                variant="ghost"
                leftIcon={<FaThumbsUp />}
                onClick={() => handleLike(Number(item.id))}
              >
                {Number(item?.likes)}
              </Button>
            </Tooltip>
            <Tooltip placement="top">
              <Button
                bg="#edf2f7"
                size="sm"
                variant="ghost"
                leftIcon={<FaThumbsDown />}
                onClick={() => handleDisLike(Number(item.id))}
              >
                {Number(item?.dislikes)}
              </Button>
            </Tooltip>
          </HStack>
          <Tooltip placement="top">
            <Button
              size="sm"
              rightIcon={<FaEye />}
              onClick={() => {
                onOpen();
                handleFullContent(item);
              }}
              bg={buttonBg}
              color={buttonColor}
              _hover={{ bg: useColorModeValue("#7e22ce", "#7e22ce") }}
            >
              View
            </Button>
          </Tooltip>
        </HStack>
      </VStack>

      <Modal isCentered isOpen={isOpen} onClose={onClose} size="md">
        <ModalOverlay bg="blackAlpha.300" backdropFilter="blur(10px)" />
        <ModalContent bg={bgColor} className="font-suse">
          <ModalBody p={6}>
            <VStack align="stretch" spacing={6}>
              <Flex justify="space-between" align="center">
                <Flex align="center" gap={2} onClick={handleProfileClick} cursor="pointer">
                  <Avatar src={`https://${item.creatorImage}`} size="sm" />
                  <VStack align="start" spacing={0}>
                    <Text fontSize="sm" fontWeight="bold" color={textColor}>
                      {item.creatorProfile}
                    </Text>
                    <Text fontSize="xs" color="gray.500">
                      {timeAgo}
                    </Text>
                  </VStack>
                </Flex>
                <HStack>
                  <Button
                    bg="#edf2f7"
                    size="sm"
                    variant="ghost"
                    leftIcon={<FaThumbsUp />}
                    onClick={() => handleLike(Number(item.id))}
                  >
                    {Number(item?.likes)}
                  </Button>
                  <Button
                    bg="#edf2f7"
                    size="sm"
                    variant="ghost"
                    leftIcon={<FaThumbsDown />}
                    onClick={() => handleDisLike(Number(item.id))}
                  >
                    {Number(item?.dislikes)}
                  </Button>
                </HStack>
              </Flex>
              <Text fontSize="lg" color={textColor}>
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