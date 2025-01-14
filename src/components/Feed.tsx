import Post from "./Post"

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

const Feed = async () => {
  const data = await fetchFileIds();
  return (
    <div className=''>
      {data.fileData.slice().reverse().map((filesubdata) => (
        <Post key={filesubdata.fileId} id={filesubdata.fileId} desc={filesubdata.description} />
      ))}
    </div>
  )
}

export default Feed;