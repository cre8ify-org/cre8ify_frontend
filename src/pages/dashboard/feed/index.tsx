import DashboardLayout from "../../../layout/dashboardLayout";
import FreeContentMap from "./components/ContentMap";
import MyFreeContentMap from "./components/MyFreeContentMap";
import { Search } from "lucide-react";
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { CreateContentModal } from "./components/CreateModal";
import { useWeb3ModalAccount } from "@web3modal/ethers/react";

const Feed = () => {
  const {address} = useWeb3ModalAccount()
  return (
    <DashboardLayout>
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold font-lato">Discover Creative Content</h2>
        <CreateContentModal />
      </div>
      <InputGroup>
        <InputLeftElement pointerEvents='none'>
          <Search color='gray.300' />
        </InputLeftElement>
        <Input type='tel' placeholder='Phone number' />
      </InputGroup>
            
      <FreeContentMap />
      <MyFreeContentMap userAddress={address} />
    </DashboardLayout>
  );
};

export default Feed;
