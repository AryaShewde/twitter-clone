import React from 'react';
import { GetServerSideProps } from 'next';
import Post from './Post';

// Function to fetch file IDs from your API
const fetchFileIds = async (): Promise<{ fileData: { fileId: string; description: string }[] }> => {
  try {
    const response = await fetch('https://twitter-clone-azure-eta.vercel.app/api/getImageFileIds');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching file IDs:', error);
    return { fileData: [] };
  }
};

// The Feed component
const Feed = () => {
  // This component does not receive props, and fetches data on each request
  const [fileData, setFileData] = React.useState<{ fileId: string; description: string }[]>([]);

  // Fetch data when the component mounts (client-side)
  React.useEffect(() => {
    const fetchData = async () => {
      const data = await fetchFileIds();
      setFileData(data.fileData);
    };
    fetchData();
  }, []); // Empty dependency array means it only runs once after mount

  if (!fileData || fileData.length === 0) {
    return <div className="text-center p-4">Data not found</div>;
  }

  return (
    <div className="">
      {fileData.slice().reverse().map((filesubdata) => (
        <Post key={filesubdata.fileId} id={filesubdata.fileId} desc={filesubdata.description} />
      ))}
    </div>
  );
};

// Here, we can use `getServerSideProps` for initial data fetching, but we won't pass it as props
export const getServerSideProps: GetServerSideProps = async () => {
  // Fetch the initial data on the server side for the first request
  await fetchFileIds(); // You can also handle this fetch on the server side as needed
  return { props: {} }; // No need to pass any props here, but ensure the page can render
};

export default Feed;
