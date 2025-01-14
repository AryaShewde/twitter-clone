import Link from "next/link";

const PopularTags = () => {
    return (
        <div className="p-4 border-[1px] h-full border-borderGray flex flex-col gap-4">
            <h1 className="text-textGrayLight text-xl font-bold">
                Notifications
            </h1>
            <div className='px-0 pt-4 flex justify-around text-textGray font-bold border-b-[1px] border-borderGray'>
                <Link className="pb-2 flex items-center text-white border-b-4 border-iconBlue" href="/notification/all">All</Link>
                <Link className="pb-2 flex items-center" href="/notification/verified">Verified</Link>
                <Link className="pb-2 flex items-center" href="/notification/mentions">Mentions</Link>
            </div>
            <div className="flex flex-col w-full md:w-9/12 mx-auto p-1 md:p-5">
                <h1 className="md:text-3xl text-xl font-extrabold">Nothing to see here — yet</h1>
                <span className="mt-2 text-gray-500">When someone mentions you, youll find it here.</span>
            </div>
        </div>
    );
};

export default PopularTags;
