'use client';

import { useEffect, useState } from 'react';
// import Post from './Post';

const Feed = () => {
  const [fileData, setFileData] = useState<{ fileId: string; description: string }[]>([]);

  useEffect(() => {
    const fetchFileIds = async () => {
      try {
        const response = await fetch(`https://twitter-clone-a4spcfl90-arya-shewdes-projects.vercel.app/api/getImageFileIds`);
        const data = await response.json();
        setFileData(data.fileData || []);
      } catch (err) {
        if (err instanceof Error) {
          console.log(err.message || 'Something went wrong');
        } else {
          console.log('Something went wrong');
        }
      }
    };

    fetchFileIds();
  }, [fileData.length]);

  return (
    <div className="">
      {fileData
        .slice()
        .reverse()
        .map((filesubdata) => (
          // <Post key={filesubdata.fileId} id={filesubdata.fileId} desc={filesubdata.description} />
          <div>
            <h1>{filesubdata.fileId}</h1>
            <h1>{filesubdata.description}</h1>
          </div>
        ))}
    </div>
  );
};

export default Feed;
