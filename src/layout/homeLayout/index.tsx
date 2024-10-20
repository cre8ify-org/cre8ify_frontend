import { Link, useNavigate } from 'react-router-dom'
import { Box, Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerOverlay, Flex, Icon, useDisclosure } from '@chakra-ui/react'
// import { Avatar } from '@chakra-ui/react'
// import { Bell, Menu } from 'lucide-react'
import ConnectButton from "../../components/ConnectButton";
import { NavLink } from "react-router-dom";
import { Footer } from "../../pages/landingPage/home/components/Footer";
import { HiMenuAlt4 } from "react-icons/hi";

export default function HomeLayout(props: any) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navigate = useNavigate()
  
  return (
    <Box>
      <header className="border-b border-gray-800 p-4 bg-black fixed w-full z-50">
        <div className="mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-4">
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
          </div>
          <nav className="hidden md:flex space-x-6 font-suse">
            <NavLink to="/" className="text-white py-1 px-1 transition-all hover:text-[#9333ea]">Home</NavLink>
            <NavLink to="/about-us" className="text-white py-1 px-1 transition-all hover:text-[#9333ea]">About</NavLink>
            <NavLink to="/contact" className="text-white py-1 px-1 transition-all hover:text-[#9333ea]">Contact</NavLink>
            <NavLink to="/faq" className="text-white py-1 px-1 transition-all hover:text-[#9333ea]">FAQ</NavLink>
          </nav>
          <Box display={["none", "none", "block"]}>
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
            onClick={() => {
              navigate('/explore')
            }}
            className="font-suse"
            >
              Launch App
            </Button>
          </Box>
          <Box
            display={["block", "block", "none"]}
            onClick={onOpen}
            cursor={"pointer"}
          >
            <Icon as={HiMenuAlt4} fontSize={"2rem"} color={'white'} />
          </Box>
          <Drawer placement={"right"} onClose={onClose} isOpen={isOpen}>
            <DrawerOverlay />
            <DrawerContent bg={"#111827"} className="font">
              <DrawerCloseButton
                fontSize={"1.2rem"}
                _focus={{ outline: "none" }}
                color={'white'}
              />
              <DrawerBody
                display={"flex"}
                flexDirection={"column"}
                justifyContent={"center"}
                gap={"5rem"}
                alignItems={"center"}
              >
                <Flex gap={"2rem"} direction={"column"} align={"center"}>
                  <NavLink to="/" className="text-white font-suse py-1 px-1 transition-all hover:text-[#8b5cf6]">Home</NavLink>
                  <NavLink to="/about-us" className="text-white font-suse py-1 px-1 transition-all hover:text-[#8b5cf6]">About</NavLink>
                  <NavLink to="/profile" className="text-white font-suse py-1 px-1 transition-all hover:text-[#8b5cf6]">Profile</NavLink>
                  <NavLink to="/contact" className="text-white font-suse py-1 px-1 transition-all hover:text-[#8b5cf6]">Contact</NavLink>
                  <NavLink to="/faq" className="text-white font-suse py-1 px-1 transition-all hover:text-[#8b5cf6]">FAQ</NavLink>
                </Flex>
                <Box>
                  <ConnectButton />
                </Box>
              </DrawerBody>
            </DrawerContent>
          </Drawer>
          {/* <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon">
              <Bell className="h-5 w-5 text-white" />
            </Button>
            <Avatar name='McDavid Ojukwu' />
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-6 w-6 text-white" />
            </Button>
          </div> */}
        </div>
      </header>

      <Box className='font-suse'>
        {props.children}
      </Box>

      <Footer />
    </Box>
  )
}