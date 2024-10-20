import useGetRegUsers from '../hooks/useGetRegUsers';
import useFetchFreeContent from '../hooks/useFetchFreeContent';
import { Spinner } from '@chakra-ui/react';
import { toast } from 'react-toastify';

interface ContentItem {
    title: string;
    id: number;
    dateCreated: number;
    creatorProfile: string;
    ipfsHash: string;
    creator: string;
    isDeleted: boolean;
    isMonetized: boolean;
    views: number;
    likes: number;
    dislikes: number;
    shares: number;
    rating: number;
    contentType: string;
    creatorImage: string;
}

const Stats = () => {
    const allUsers = useGetRegUsers();
    const { data: contentItems = [], loading, error } = useFetchFreeContent();
    if(error) {
        toast.error(error)
    }
    return (
        <div className="bg-gray-900 rounded-lg p-4 space-y-4">
            <h2 className="text-lg font-semibold font-lato text-white">Platform Stats</h2>
            {loading ? <Spinner/> : <div>
                <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-400">Active Users</span>
                    <span className="text-purple-600 font-medium">{allUsers.length}</span>
                </div>
                <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-400">Total Content</span>
                    <span className="text-purple-600 font-medium">{(contentItems as ContentItem[]).length}</span>
                </div>
                <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-400">Tokens Distributed</span>
                    <span className="text-purple-600 font-medium">1.2M</span>
                </div>
            </div>}
        </div>
    )
}

export default Stats