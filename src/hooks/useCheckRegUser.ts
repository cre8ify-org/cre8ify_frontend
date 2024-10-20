import { useEffect } from "react";
import { useWeb3ModalAccount } from "@web3modal/ethers/react";
import { getAuthContract } from "../constants/contract";
import { readOnlyProvider } from "../constants/provider";
import { store } from "../store";

const useCheckRegUser = (): boolean | null => {
  const { address } = useWeb3ModalAccount();

  const {isRegistered, updateIsRegistered} = store();

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const contract = getAuthContract(readOnlyProvider);
        const response = await contract.checkRegisteredUsers(address);
        updateIsRegistered(response);
      } catch (err: any) {
        console.log(err.message);
        
        updateIsRegistered(false);
      }
    };

    if (address) {
      fetchUserDetails();
    }
  }, [address]);

  return isRegistered;
};

export default useCheckRegUser;