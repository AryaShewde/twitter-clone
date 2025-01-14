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
        { id: 1, title: 'Trending in Global News', hash: '#WorldPolitics', posts: '150K posts' },
        { id: 2, title: 'Breaking News', hash: '#EconomicCrisis2025', posts: '200K posts' },
        { id: 3, title: 'Technology News', hash: '#AIRevolution', posts: '300K posts' },
        { id: 4, title: 'Trending in USA', hash: '#USPresidentialElection2025', posts: '500K posts' },
        { id: 5, title: 'Global News', hash: '#ClimateChange2025', posts: '400K posts' },
        { id: 6, title: 'Breaking News', hash: '#StockMarketCrash', posts: '350K posts' },
        { id: 7, title: 'Trending in Europe', hash: '#BrexitDeal2025', posts: '150K posts' },
        { id: 8, title: 'Technology News', hash: '#QuantumComputing2025', posts: '100K posts' },
        { id: 9, title: 'Politics News', hash: '#GlobalDiplomacy2025', posts: '120K posts' },
        { id: 10, title: 'Global News', hash: '#TechInnovation2025', posts: '200K posts' },
        { id: 11, title: 'Business News', hash: '#BigTechMergers', posts: '250K posts' },
        { id: 12, title: 'Trending in Asia', hash: '#ChinaTradeDeal2025', posts: '300K posts' },
        { id: 13, title: 'Breaking News', hash: '#GlobalPandemicResponse', posts: '600K posts' },
        { id: 14, title: 'Trending in Africa', hash: '#AfricaClimateAction', posts: '90K posts' },
        { id: 15, title: 'Trending in Tech', hash: '#5GTechnology2025', posts: '50K posts' },
        { id: 16, title: 'Trending in Politics', hash: '#UNGeneralAssembly2025', posts: '70K posts' },
    ];
    return (
        <div className="p-4 border-[1px] border-borderGray flex flex-col gap-4">
            <h1 className="text-textGrayLight">
                <Search />
            </h1>
            <div className='px-0 pt-4 flex w-[calc(100vw-109px)] md:w-full justify-around gap-6 text-textGray font-bold border-b-[1px] border-borderGray overflow-x-scroll scrollbar-hide'>
                <Link className="pb-0 flex text-xs md:w-fit w-[50px] whitespace-nowrap md:pb-2 md:text-base items-center" href="/explore/foryou">For You</Link>
                <Link className="pb-0 flex text-xs md:w-fit w-[50px] md:pb-2 md:text-base items-center" href="/explore/trending">Trending</Link>
                <Link className="pb-0 flex text-xs md:w-fit w-[32px] md:pb-2 md:text-base items-center text-white border-b-4 border-iconBlue" href="/explore/news">News</Link>
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
