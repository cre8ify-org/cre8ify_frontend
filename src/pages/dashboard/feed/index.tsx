import DashboardLayout from "../../../layout/dashboardLayout";
import ContentMap from "./components/ContentMap";
import { Search } from "lucide-react";
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { CreateContentModal } from "./components/CreateModal";

const Feed = () => {
  return (
    <DashboardLayout>
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold font-lato">Discover Creative Content</h2>
        <CreateContentModal />
      </div>
      <InputGroup>
        <InputLeftElement pointerEvents='none'>
          <Search className="text-[#9ca3af]" />
        </InputLeftElement>
        <Input type='tel' placeholder='Content, Creator' />
      </InputGroup>
            
      <ContentMap />
    </DashboardLayout>
  );
};

export default Feed;
