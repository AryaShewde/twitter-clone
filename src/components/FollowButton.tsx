"use client"
import React, { useState } from 'react'

const FollowButton = () => {
    const [followStatus, setFollowStatus] = useState<boolean>(true);
    const handlefollow = ()=>{
        setFollowStatus(!followStatus)
    }
    return (
        <button className="py-1 px-4 font-semibold bg-white text-black rounded-full" onClick={handlefollow}>{followStatus? "Follow": "Following"}</button>
    )
}

export default FollowButton
