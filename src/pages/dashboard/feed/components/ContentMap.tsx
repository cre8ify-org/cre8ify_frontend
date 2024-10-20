import React, { useMemo, useState } from "react";
import Content from "./Content";
import MasonryGrid from "./MasonryGrid";
import useFetchFreeContent from "../../../../hooks/useFetchFreeContent";
import { Box, Spinner } from "@chakra-ui/react";
import useLike from "../../../../hooks/useLike";
import useDisLike from "../../../../hooks/useDisLike";
import useDelete from "../../../../hooks/useDelete";

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

const ContentMap: React.FC = () => {
  const { data: contentItems = [], loading, error } = useFetchFreeContent();
  const [fullContent, setFullContent] = useState<ContentItem[]>(contentItems as ContentItem[]);
  const [id, setId] = useState<ContentItem | undefined>(fullContent[0]);

  const [contentId, setContentId] = useState<number | null>(null);
  contentId;

  const like = useLike();
  const disLike = useDisLike();
  const deleteContent = useDelete();

  const reversedContentItems = useMemo(() => {
    return [...(contentItems as ContentItem[])].reverse();
  }, [contentItems]);

  if (loading) return <Box display="flex" justifyContent="center" alignItems="center" height="100vh"><Spinner /></Box>;
  if (error) return <Box textAlign="center" color="red.500">Error: {error}</Box>;

  const handleFullContent = (e: ContentItem) => {
    setId(e);
    setFullContent((prev) => [...prev]);
  };

  const handleLike = (e: number) => {
    setContentId(e);
    like(e);
  };

  const handleDisLike = (e: number) => {
    setContentId(e);
    disLike(e);
  };

  const handleDelete = (e: number) => {
    setContentId(e);
    deleteContent(e);
  };

  return (
    <MasonryGrid columnCount={{ base: 1, md: 2, lg: 2 }}>
      {reversedContentItems.map((item, index) => (
        <Box key={index} mb={6}>
          <Content
            handleFullContent={handleFullContent}
            id={id}
            item={item}
            handleLike={handleLike}
            handleDisLike={handleDisLike}
            handleDelete={handleDelete}
          />
        </Box>
      ))}
    </MasonryGrid>
  );
};

export default ContentMap;