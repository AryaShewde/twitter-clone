import Feed from '@/components/Feed'
import Share from '@/components/Share'
import Link from 'next/link'

const PopularTags = () => {
    return (
        <div className="">
            <div className='px-4 pt-4 flex justify-around text-textGray font-bold border-b-[1px] border-borderGray'>
                <Link className="pb-3 flex items-center" href="/">For you</Link>
                <Link className="pb-3 flex items-center text-white border-b-4 border-iconBlue" href="/following">Following</Link>
            </div>
            <Share />
            <Feed />
        </div>
    )
}

export default PopularTags
