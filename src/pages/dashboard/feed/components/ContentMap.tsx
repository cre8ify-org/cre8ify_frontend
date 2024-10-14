import { useMemo, useState } from "react";
import Content from "./Content";
import useFetchFreeContent from "../../../../hooks/useFetchFreeContent";
import { Grid, Spinner } from "@chakra-ui/react";
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

const ContentMap = () => {
  const { data: contentItems = [], loading, error } = useFetchFreeContent();
  const [fullContent, setFullContent] = useState(contentItems);
  const [id, setId] = useState<ContentItem | undefined>(
    (fullContent as ContentItem[])[0]
  );

  const [contentId, setContentId] = useState(Number(""));
  console.log(contentId)

  const like = useLike();
  const disLike = useDisLike();
  const deleteContent = useDelete();

  const reversedContentItems = useMemo(() => {
    return (contentItems as ContentItem[]).reverse();
  }, [contentItems]);

  console.log(reversedContentItems)

  if (loading) return <div><Spinner /></div>;
  if (error) return <div>Error: {error}</div>;

  const handleFullContent = (e: any) => {
    setId(e);

    setFullContent((prev) => prev);
  };

  const handleLike = (e: any) => {
    setContentId(e);

    like(e);
  };

  const handleDisLike = (e: any) => {
    setContentId(e);

    disLike(e);
  };

  const handleDelete = (e: any) => {
    setContentId(e);

    deleteContent(e);
  };

  return (
    <Grid templateColumns={["repeat(1, 1fr)","repeat(1, 1fr)","repeat(2, 1fr)","repeat(2, 1fr)"]} gap={6}>
      {(contentItems as ContentItem[])
      .reverse()
      .map((item, index) => (
        <Content
          handleFullContent={handleFullContent}
          id={id}
          key={index}
          item={item}
          handleLike={handleLike}
          handleDisLike={handleDisLike}
          handleDelete={handleDelete}
        />
      ))}
    </Grid>
  );
};

export default ContentMap;
