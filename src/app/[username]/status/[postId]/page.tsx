"use client"

import Comments from "@/components/Comments";
import Image from "@/components/Image";
import SinglePost from "@/components/SinglePost";
import Link from "next/link";
import React, { useEffect, useState } from "react";

// Define a type for the file data
interface FileDetail {
  fileId: string;
  description: string;
}

const fetchFileIds = async (): Promise<{ fileData: FileDetail[] }> => {
  try {
    const response = await fetch("http://localhost:3000/api/getImageFileIds");
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching file IDs:", error);
    return { fileData: [] };
  }
};

// Define the Params interface for the route parameter
interface Params {
  params: {
    postId: string;
  };
}

const StatusPage = ({ params }: Params) => {
  const { postId } = params;
  const [fileDetail, setFileDetail] = useState<FileDetail | null>(null); // Specify FileDetail or null type

  // Use effect to fetch data when component mounts
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchFileIds();
      const foundFileDetail = data.fileData.find((file) => file.fileId === postId);
      setFileDetail(foundFileDetail || null); // Set `null` if no file detail is found
    };
    fetchData();
  }, [postId]); // Run this effect when postId changes

  if (!fileDetail) {
    return <div>Loading...</div>; // Show loading state while data is fetched
  }

  return (
    <div>
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
