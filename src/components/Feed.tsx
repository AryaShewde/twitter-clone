"use client"
import { useState, useEffect } from "react";
import Post from "./Post";

// Function to fetch file IDs from your API
const fetchFileIds = async (): Promise<{ fileData: { fileId: string; description: string }[] }> => {
  try {
    const response = await fetch(`https://twitter-clone-azure-eta.vercel.app/api/getImageFileIds`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching file IDs:", error);
    return { fileData: [] };
  }
};

// Feed component (client-side only)
const Feed = () => {
  const [fileData, setFileData] = useState<{ fileId: string; description: string }[]>([]); // State to store file data

  // Fetch data when the component mounts
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchFileIds();
      setFileData(data.fileData); // Set the fetched data into state
    };
    fetchData(); // Call fetchData once when the component is mounted
  }, []); // Empty dependency array ensures it runs only once

  // Render the posts
  return (
    <div>
      {fileData.length === 0 ? (
        <div className="text-center p-4">Data not found</div>
      ) : (
        fileData.slice().reverse().map((filesubdata) => (
          <Post key={filesubdata.fileId} id={filesubdata.fileId} desc={filesubdata.description} />
        ))
      )}
    </div>
  );
};

export default Feed;
