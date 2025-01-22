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

// Fetch data server-side before the page is rendered
export const getServerSideProps: GetServerSideProps = async () => {
  const data = await fetchFileIds();

  // Return the fetched data as props
  return {
    props: {
      fileData: data.fileData,
    },
  };
};

// The Feed component which receives the data from server-side props
const Feed = ({ fileData }: { fileData: { fileId: string; description: string }[] }) => {
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

export default Feed;
