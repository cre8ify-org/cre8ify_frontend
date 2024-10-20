import {
  Avatar,
  Box,
  Flex,
  Spinner,
  Text,
} from "@chakra-ui/react";
import useGetUserDetails from "../hooks/useGetUserDetails";
import { useWeb3ModalAccount } from "@web3modal/ethers/react";

const ProfileDetails = () => {
  const { address } = useWeb3ModalAccount();
  const { data: userDetails, loading, error } = useGetUserDetails(address);
  error;

  return (
    <Box className="font-suse">
      <Box>
        <Box
          bg={"transparent"}
          px={".5rem"}
          py={".5rem"}
          w={"165px"}
          borderRadius={"100rem"}
          cursor={"pointer"}
        >
          {loading ? <Spinner/> : (
            <Flex alignItems={"center"} gap={".4rem"}>
              {userDetails?.profileImage && (
                <Avatar name={userDetails?.username} src={`https://${userDetails?.profileImage}`} />
              )}
              <Text fontSize={"1rem"} fontWeight={"500"}>
                {userDetails?.username}{" "}
              </Text>
            </Flex>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default ProfileDetails;
