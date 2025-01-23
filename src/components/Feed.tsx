'use client';

import { useEffect, useState } from 'react';
import Post from './Post';

const Feed = () => {
  const [fileData, setFileData] = useState<{ fileId: string; description: string }[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchFileIds = async () => {
      try {
        const response = await fetch('https://twitter-clone-azure-eta.vercel.app/api/getImageFileIds');
        if (!response.ok) throw new Error('Failed to fetch data');
        const data = await response.json();
        setFileData(data.fileData || []);
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message || 'Something went wrong');
        } else {
          setError('Something went wrong');
        }
      } finally {
        setIsLoading(false);
      }
    };

    fetchFileIds();
  }, []);

  if (isLoading) {
    return <div className="text-center p-4">Loading...</div>;
  }

  if (error) {
    return <div className="text-center p-4 text-red-500">Error: {error}</div>;
  }

  if (!fileData || fileData.length === 0) {
    return <div className="text-center p-4">Data not found</div>;
  }

  return (
    <div className="">
      {fileData
        .slice()
        .reverse()
        .map((filesubdata) => (
          <Post key={filesubdata.fileId} id={filesubdata.fileId} desc={filesubdata.description} />
        ))}
    </div>
  );
};

export default Feed;
