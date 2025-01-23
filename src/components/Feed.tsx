import Post from "./Post"

const fetchFileIds = async (): Promise<{ fileData: { fileId: string; description: string }[] }> => {
  try {
    const response = await fetch(`${process.env.FETCH_URL}/api/getImageFileIds`, {
      cache: "no-store",
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching file IDs:", error);
    return { fileData: [] };
  }
};

const Feed = async () => {
  const data = await fetchFileIds();
  if (!data.fileData || data.fileData.length === 0) {
    return <div className="text-center p-4">Data not found</div>;
  }
  return (
    <div className=''>
      {data.fileData.slice().reverse().map((filesubdata) => (
        <Post key={filesubdata.fileId} id={filesubdata.fileId} desc={filesubdata.description} />
      ))}
    </div>
  )
}

export default Feed;