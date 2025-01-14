import NextImage from "next/image";
import Search from "@/components/Search";
import Link from "next/link";

interface Item {
    id: number;
    title: string;
    hash: string;
    posts: string;
}

const PopularTags = () => {
    const items: Item[] = [
        { id: 1, title: 'Trending in India', hash: '#IndiaUnderAttack', posts: '20K posts' },
        { id: 2, title: 'Trending in India', hash: '#China', posts: '15K posts' },
        { id: 3, title: 'Yuzvendra Chahal · Trending', hash: '#YuzvendraChahal', posts: '18K posts' },
        { id: 4, title: 'Trending in India', hash: 'Vidya Balan', posts: '20K posts' },
        { id: 5, title: 'Technology • Trending', hash: 'OpenAI', posts: '20K posts' },
        { id: 6, title: 'Entertainment • Trending', hash: '#Oscars2025', posts: '50K posts' },
        { id: 7, title: 'Sports • Trending', hash: '#IPL2025', posts: '120K posts' },
        { id: 8, title: 'Trending in USA', hash: '#SuperBowl', posts: '75K posts' },
        { id: 9, title: 'Politics • Trending', hash: '#Election2025', posts: '80K posts' },
        { id: 10, title: 'Trending in UK', hash: '#BrexitNews', posts: '45K posts' },
        { id: 11, title: 'Technology • Trending', hash: '#AIRevolution', posts: '60K posts' },
        { id: 12, title: 'Health • Trending', hash: '#MentalHealthMatters', posts: '40K posts' },
        { id: 13, title: 'Entertainment • Trending', hash: '#NewMovieRelease', posts: '55K posts' },
        { id: 14, title: 'Sports • Trending', hash: '#FIFA2025', posts: '90K posts' },
        { id: 15, title: 'Technology • Trending', hash: '#QuantumComputing', posts: '30K posts' },
        { id: 16, title: 'Trending in Canada', hash: '#CanadianPolitics', posts: '25K posts' },
    ];
    return (
        <div className="p-4 border-[1px] border-borderGray flex flex-col gap-4">
            <h1 className="text-textGrayLight">
                <Search />
            </h1>
            <div className='px-0 pt-4 flex w-[calc(100vw-109px)] md:w-full justify-around gap-6 text-textGray font-bold border-b-[1px] border-borderGray overflow-x-scroll scrollbar-hide'>
                <Link className="pb-0 flex text-xs md:w-fit w-[50px] whitespace-nowrap md:pb-2 md:text-base items-center" href="/explore/foryou">For You</Link>
                <Link className="pb-0 flex text-xs md:w-fit w-[50px] md:pb-2 md:text-base items-center text-white border-b-4 border-iconBlue" href="/explore/trending">Trending</Link>
                <Link className="pb-0 flex text-xs md:w-fit w-[32px] md:pb-2 md:text-base items-center" href="/explore/news">News</Link>
                <Link className="pb-0 flex text-xs md:w-fit w-[38px] md:pb-2 md:text-base items-center" href="/explore/sports">Sports</Link>
                <Link className="pb-0 flex text-xs md:w-fit w-[82px] md:pb-2 md:text-base items-center" href="/explore/entertainment">Entertainment</Link>
            </div>
            {items.map((item) => (
                <div className="" key={item.id}>
                    <div className="flex items-center justify-between">
                        <span className="text-textGray text-sm">{item.title}</span>
                        <NextImage src="/icons/infoMore.svg" alt="info" width={16} height={16} />
                    </div>
                    <h2 className="text-textGrayLight font-bold">{item.hash}</h2>
                    <span className="text-textGray text-sm">{item.posts}</span>
                </div>
            ))}
            <Link href="/" className="text-iconBlue">
                Show More
            </Link>
        </div>
    );
};

export default PopularTags;
