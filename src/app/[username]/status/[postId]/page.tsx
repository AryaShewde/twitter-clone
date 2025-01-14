"use client";  // Ensure you're using the client-side version

// import { useEffect, useState } from "react";
import Comments from "@/components/Comments";
import Image from "@/components/Image";
// import SinglePost from "@/components/SinglePost";
import Link from "next/link";

// Define a type for the file data
// interface FileDetail {
//   fileId: string;
//   description: string;
// }

// Fetch function to get file data
// const fetchFileIds = async (): Promise<{ fileData: FileDetail[] }> => {
//   try {
//     const response = await fetch("http://localhost:3000/api/getImageFileIds");
//     const data = await response.json();
//     return data;
//   } catch (error) {
//     console.error("Error fetching file IDs:", error);
//     return { fileData: [] };
//   }
// };

// Correctly typed page component for App Router (params passed by Next.js automatically)
// const StatusPage = ({ params }: { params: { postId: string } }) => {
const StatusPage = () => {
  // const { postId } = params;  // Accessing the postId from params
  // const [fileDetail, setFileDetail] = useState<FileDetail | null>(null);

  // // Use useEffect to handle side-effects like data fetching
  // useEffect(() => {
  //   const fetchData = async () => {
  //     const data = await fetchFileIds();
  //     const foundFileDetail = data.fileData.find((file) => file.fileId === postId);
  //     setFileDetail(foundFileDetail || null);
  //   };
  //   fetchData();
  // }, [postId]);

  // if (!fileDetail) {
  //   return <div>Loading...</div>; // Show loading state while data is fetched
  // }

  return (
    <div>
      <div className="flex items-center gap-8 sticky top-0 backdrop-blur-md p-4 z-10 bg-[#00000084]">
        <Link href="/">
          <Image path="icons/back.svg" alt="back" w={24} h={24} />
        </Link>
        <h1 className="font-bold text-lg">Post</h1>
      </div>
      {/* <SinglePost id={postId} desc={fileDetail?.description} type="status" /> */}
      <Comments />
    </div>
  );
};

export default StatusPage;
