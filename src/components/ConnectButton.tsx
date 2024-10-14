import { Button } from "@chakra-ui/react";
import { useWeb3Modal, useWeb3ModalAccount } from "@web3modal/ethers/react";

export default function ConnectButton() {
  const { open } = useWeb3Modal();
  const { isConnected } = useWeb3ModalAccount();

  return (
    <>
      {isConnected ? (
        <w3m-button size="sm" />
      ) : (
        <Button
          bg={'#9333ea'}
          borderRadius={"100rem"}
          border={"none"}
          p={'1rem 2rem'}
          color={"#fff"}
          transition={"all .5s ease-in-out"}
          w={"150px"}
          _hover={{
            bg: "#7e22ce",
            border: "none",
          }}
          _focus={{ outline: "none" }}
          onClick={() => open()}
          className="font-suse"
        >
          Connect Wallet
        </Button>
      )}
    </>
  );
}
