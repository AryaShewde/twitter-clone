"use client"
import Comments from "@/components/Comments";
import Image from "@/components/Image";
import SinglePost from "@/components/SinglePost";
import Link from "next/link";
import React from "react";

// Fetch data function remains the same
const fetchFileIds = async (): Promise<{ fileData: { fileId: string; description: string }[] }> => {
  try {
    const response = await fetch("http://localhost:3000/api/getImageFileIds");
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching file IDs:", error);
    return { fileData: [] };
  }
};

// Remove async here, as `params` is already provided synchronously
interface Params {
  params: {
    postId: string;
  };
}

const StatusPage = ({ params }: Params) => {
  const { postId } = params; // No need for `await`, `params` is already available
  const [fileDetail, setFileDetail] = React.useState<any>(null);

  // Use effect to fetch data when component mounts
  React.useEffect(() => {
    const fetchData = async () => {
      const data = await fetchFileIds();
      const foundFileDetail = data.fileData.find((file) => file.fileId === postId);
      setFileDetail(foundFileDetail);
    };
    fetchData();
  }, [postId]);

  if (!fileDetail) {
    return <div>Loading...</div>; // Show loading state while data is fetched
  }

  return (
    <div className="">
      <div className="flex items-center gap-8 sticky top-0 backdrop-blur-md p-4 z-10 bg-[#00000084]">
        <Link href="/">
          <Image path="icons/back.svg" alt="back" w={24} h={24} />
        </Link>
        <h1 className="font-bold text-lg">Post</h1>
      </div>
      <SinglePost id={postId} desc={fileDetail?.description} type="status" />
      <Comments />
    </div>
  );
};

export default StatusPage;
