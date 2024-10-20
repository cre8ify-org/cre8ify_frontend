import { Avatar, Button, Tabs, TabList, Tab, TabPanels, TabPanel } from "@chakra-ui/react"
import { Zap, ChevronRight, Edit } from 'lucide-react'
import { Link, useParams } from 'react-router-dom'
import ConnectButton from '../../../components/ConnectButton'
import ProfileDetails from '../../../components/ProfileDetails'
import useGetUserDetails from "../../../hooks/useGetUserDetails"
import useCheckRegUser from "../../../hooks/useCheckRegUser"
import { ComingSoonModal } from '../../../components/ComingSoonModal'
import { useState } from "react"
import { RegisterCreator } from "../../../components/RegisterCreator"
import { WalletCheck } from "../../../components/WalletCheck"

const ProfilePage: React.FC = () => {
  const regUser = useCheckRegUser()
  const { address } = useParams<{ address: string }>();
  const [isModalOpen, setIsModalOpen] = useState(false)
  
  const {data: userDetails} = useGetUserDetails(address)

  const shortenAddress = (chars = 4) => {
    return `${userDetails?.walletAddress.substring(0, chars + 2)}...${userDetails?.walletAddress.substring(userDetails?.walletAddress.length - chars)}`
  }
  
  return (
    <div className="min-h-screen bg-black text-white flex flex-col font-suse">
      {/* Header (same as HomePage) */}
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
              <Link to={"/explore"} className="text-white py-1 px-1 transition-all hover:text-[#9333ea]">Explore</Link>
              {/* <Link to={"/"} className="text-white py-1 px-1 transition-all hover:text-[#9333ea]">Create</Link> */}
              <Link to={"/coming-soon"} className="text-white py-1 px-1 transition-all hover:text-[#9333ea]">Learn</Link>
            </nav>
            <div className="flex items-center space-x-4">
              <ConnectButton />

              {regUser === false ? <RegisterCreator /> : null}

              {regUser === false || regUser === null ? null : <Link to={`/profile/${address}`}>
                <ProfileDetails />
              </Link>}
            </div>
          </div>
        </header>
      </div>

      {/* Main Content */}
      <main className="flex-grow container mx-auto py-8 px-4 lg:px-12 pt-[7rem]">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Profile Sidebar */}
          <aside className="w-full md:w-1/3 space-y-6">
            <div className="bg-gray-900 rounded-lg p-6 text-center">
              <Avatar name={userDetails?.username} src={`https://${userDetails?.profileImage}`} className="w-32 h-32 mx-auto mb-4" />
              <h2 className="text-2xl font-bold mb-2 font-lato">{shortenAddress()}</h2>
              <p className="text-gray-400 mb-4 lowercase">{`@${userDetails?.username}`}</p>
              <Button onClick={() => setIsModalOpen(true)} className="w-full mb-4">
                <Edit className="mr-2 h-4 w-4" /> Edit Profile
              </Button>
              <div className="flex justify-around text-sm">
                <div>
                  <p className="font-bold">1.2K</p>
                  <p className="text-gray-400">Followers</p>
                </div>
                <div>
                  <p className="font-bold">500</p>
                  <p className="text-gray-400">Following</p>
                </div>
                <div>
                  <p className="font-bold">50</p>
                  <p className="text-gray-400">Creations</p>
                </div>
              </div>
            </div>
            <div className="bg-gray-900 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-4 font-lato">About Me</h3>
              <p className="text-gray-400">
                Passionate content creator specializing in digital art and animation. Always exploring new creative frontiers.
              </p>
            </div>
          </aside>

          {/* Content Tabs */}
          <div className="flex-grow">
            <Tabs variant='solid-rounded' colorScheme="white" defaultValue="creations">
                <TabList className="w-full bg-gray-900 p-1 rounded-lg">
                    <Tab value="creations" className="flex-1">Creations</Tab>
                    <Tab value="collections" className="flex-1">Collections</Tab>
                    <Tab value="activity" className="flex-1">Activity</Tab>
                </TabList>
                <TabPanels>
                    <TabPanel>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                        {[1, 2, 3, 4].map((item) => (
                            <div key={item} className="bg-gray-900 rounded-lg overflow-hidden">
                            <img
                                src={`/placeholder.svg?height=200&width=400`}
                                alt="Content preview"
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-4">
                                <h3 className="font-semibold mb-2">Amazing Creation Title</h3>
                                <p className="text-sm text-gray-400 mb-4">
                                A brief description of this amazing piece of content created on our platform.
                                </p>
                                <div className="flex justify-between items-center">
                                <span className="text-sm text-gray-400">2 days ago</span>
                                <Button variant="ghost" size="sm">
                                    View <ChevronRight className="ml-1 h-4 w-4" />
                                </Button>
                                </div>
                            </div>
                            </div>
                        ))}
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                        {[1, 2].map((item) => (
                            <div key={item} className="bg-gray-900 rounded-lg p-4">
                            <h3 className="font-semibold mb-2">Collection Name</h3>
                            <p className="text-sm text-gray-400 mb-4">
                                A collection of curated content on a specific theme or topic.
                            </p>
                            <div className="flex justify-between items-center">
                                <span className="text-sm text-gray-400">10 items</span>
                                <Button variant="ghost" size="sm">
                                View Collection <ChevronRight className="ml-1 h-4 w-4" />
                                </Button>
                            </div>
                            </div>
                        ))}
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className="space-y-4 mt-6">
                        {[1, 2, 3, 4].map((item) => (
                            <div key={item} className="bg-gray-900 rounded-lg p-4 flex items-center">
                            <div className="bg-purple-600 rounded-full p-2 mr-4">
                                <Zap className="h-4 w-4" />
                            </div>
                            <div>
                                <p className="font-semibold">New Creation Published</p>
                                <p className="text-sm text-gray-400">You published "Amazing Creation Title" 2 days ago</p>
                            </div>
                            </div>
                        ))}
                        </div>
                    </TabPanel>
                </TabPanels>
            </Tabs>
          </div>
        </div>
      </main>
      <ComingSoonModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} featureName={''} />
      <WalletCheck />
    </div>
  )
}

export default ProfilePage;