import { Avatar, Box, Button, Flex, Icon, Input, InputGroup, InputLeftElement, Text } from "@chakra-ui/react";
import { menu } from "../../constants/data.ts";
import { Link, NavLink, useNavigate } from "react-router-dom";
import "../../App.css";
import ConnectButton from "../../components/ConnectButton.tsx";
import { useWeb3ModalAccount } from "@web3modal/ethers/react";
import ProfileDetails from "../../components/ProfileDetails.tsx";
import { TrendingUp, Users, Zap } from "lucide-react";
interface DashboardLayoutProps {
  children: React.ReactNode;
}

const DashboardLayout = (props: DashboardLayoutProps) => {
  const { address } = useWeb3ModalAccount();

  return (
    <Box className="font-suse">
      {/* Header */}
      <div>
        <header className="border-b border-gray-800 p-4 fixed w-full bg-black z-10">
          <div className="container mx-auto flex justify-between items-center">
            <Link to="/" className="flex items-center space-x-1">
                <svg
                  className="w-10 h-10"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 2L2 7L12 12L22 7L12 2Z"
                    stroke="#9333ea"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M2 17L12 22L22 17"
                    stroke="#9333ea"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M2 12L12 17L22 12"
                    stroke="#9333ea"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span className="text-2xl font-suse font-bold text-white">Cre8ify</span>
              </Link>
            <nav className="hidden md:flex space-x-4">
              <NavLink to={"/explore"} className="text-white py-1 px-1 transition-all hover:text-[#9333ea]">Explore</NavLink>
              <NavLink to={"/"} className="text-white py-1 px-1 transition-all hover:text-[#9333ea]">Create</NavLink>
              <NavLink to={"/"} className="text-white py-1 px-1 transition-all hover:text-[#9333ea]">Learn</NavLink>
            </nav>
            <div className="flex items-center space-x-4">
              {/* <Button variant="ghost" size="icon" _hover={{ bg: 'transparent' }}>
                <Bell className="h-5 w-5 text-white" />
              </Button> */}
              <ConnectButton />

              <Link to={`/${address}`}>
                <ProfileDetails />
              </Link>
            </div>
          </div>
        </header>
      </div>
      {/* Main Content */}
      <main className="flex-grow container mx-auto py-8 px-4 lg:px-12 pt-[7rem]">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Sidebar */}
          <aside className="w-full md:w-64 space-y-6 relative md:fixed lg:fixed">
            <div className="bg-gray-900 rounded-lg p-4 space-y-4">
              <h2 className="text-lg font-semibold font-lato text-white">Platform Stats</h2>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-400">Active Users</span>
                <span className="text-purple-600 font-medium">24.5k</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-400">Total Content</span>
                <span className="text-purple-600 font-medium">103.2k</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-400">Tokens Distributed</span>
                <span className="text-purple-600 font-medium">1.2M</span>
              </div>
            </div>
            <nav className="space-y-2">
              <a href="#" className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors">
                <TrendingUp className="h-5 w-5" />
                <span>Trending</span>
              </a>
              <a href="#" className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors">
                <Users className="h-5 w-5" />
                <span>Communities</span>
              </a>
              <a href="#" className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors">
                <Zap className="h-5 w-5" />
                <span>Challenges</span>
              </a>
            </nav>
          </aside>

          {/* Content Area */}
          <div className="flex-grow space-y-8 md:pl-[18rem] lg:pl-[18rem]">
            {props.children}
          </div>
        </div>
      </main>
    </Box>
  );
};

export default DashboardLayout;
