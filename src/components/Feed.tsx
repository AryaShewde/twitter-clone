"use client"
import { useState, useEffect } from "react";
import Post from "./Post";

// Function to fetch file IDs from your API
const fetchFileIds = async (): Promise<{ fileData: { fileId: string; description: string }[] }> => {
  try {
    const response = await fetch('https://twitter-clone-azure-eta.vercel.app/api/getImageFileIds');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching file IDs:", error);
    return { fileData: [] };
  }
};

// Feed component (client-side only, no props used)
const Feed = () => {
  const [fileData, setFileData] = useState<{ fileId: string; description: string }[]>([]); // State to store file data
  const [loading, setLoading] = useState<boolean>(true); // State to track loading status
  const [error, setError] = useState<string | null>(null); // State to handle errors

  // Fetch data when the component mounts (client-side)
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchFileIds();
        setFileData(data.fileData); // Update the state with fetched data
      } catch (error) {
        setError("Failed to load data.");
      } finally {
        setLoading(false); // Set loading to false once data is fetched
      }
    };

    fetchData(); // Trigger data fetching
  }, []); // Empty dependency array ensures this runs only once after the component mounts

  // If loading, display a loading message
  if (loading) {
    return <div className="text-center p-4">Loading...</div>;
  }

  // If there's an error, display an error message
  if (error) {
    return <div className="text-center p-4">{error}</div>;
  }

  // If no data is found, display a "not found" message
  if (!fileData || fileData.length === 0) {
    return <div className="text-center p-4">Data not found</div>;
  }

  // Render the posts if data is available
  return (
    <div>
      {fileData.slice().reverse().map((filesubdata) => (
        <Post key={filesubdata.fileId} id={filesubdata.fileId} desc={filesubdata.description} />
      ))}
    </div>
  );
};

export default Feed;
