import Comments from "@/components/Comments";
import Image from "@/components/Image";
import SinglePost from "@/components/SinglePost";
import Link from "next/link";

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

type Params = Promise<{ postId: string }>


const Page = async ({ params }: { params: Params }) => {
  const { postId } = await params;
  const data = await fetchFileIds();
  const mainidarray = data.fileData;
  const foundFileDetail = mainidarray.find((file) => file.fileId === postId);

  return (
    <div className="">
      <div className="flex items-center gap-8 sticky top-0 backdrop-blur-md p-4 z-10 bg-[#00000084]">
        <Link href="/">
          <Image path="icons/back.svg" alt="back" w={24} h={24} />
        </Link>
        <h1 className="font-bold text-lg">Post</h1>
      </div>
      <SinglePost id={postId} desc={foundFileDetail?.description || ""} type="status" />
      <Comments />
    </div>
  );
};

export default Page;
