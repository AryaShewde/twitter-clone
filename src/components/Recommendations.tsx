import Link from "next/link";
import NextImage from "next/image";

const Recommendations = () => {
  return (
    <div className="p-4 rounded-2xl border-[1px] border-borderGray flex flex-col gap-4">
      <div className='flex items-center justify-between'>
        <div className='flex items-center gap-2'>
          <div className='relative rounded-full overflow-hidden w-10 h-10'>
            <NextImage src="/general/recommendation1.jpg" alt="profile pic" width={100} height={100} />
          </div>
          <div className=''>
            <h1 className="text-md font-bold">Jeff Bezos</h1>
            <span className="text-textGray text-sm">@JeffBezos</span>
          </div>
        </div>
        <button className="py-1 px-4 font-semibold bg-white text-black rounded-full">Follow</button>
      </div>
      <div className='flex items-center justify-between'>
        <div className='flex items-center gap-2'>
          <div className='relative rounded-full overflow-hidden w-10 h-10'>
            <NextImage src="/general/recommendation2.jpg" alt="profile pic" width={100} height={100} />
          </div>
          <div className=''>
            <h1 className="text-md font-bold">SpaceX</h1>
            <span className="text-textGray text-sm">@SpaceX</span>
          </div>
        </div>
        <button className="py-1 px-4 font-semibold bg-white text-black rounded-full">Follow</button>
      </div>
      <div className='flex items-center justify-between'>
        <div className='flex items-center gap-2'>
          <div className='relative rounded-full overflow-hidden w-10 h-10'>
            <NextImage src="/general/recommendation3.png" alt="profile pic" width={100} height={100} />
          </div>
          <div className=''>
            <h1 className="text-md font-bold">Tesla</h1>
            <span className="text-textGray text-sm">@Tesla</span>
          </div>
        </div>
        <button className="py-1 px-4 font-semibold bg-white text-black rounded-full">Follow</button>
      </div>
      <Link href="/" className="text-iconBlue">
        Show More
      </Link>
    </div>
  );
};

export default Recommendations;
