"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

const PostModal = () => {
  const [prem, setPrem] = useState<boolean>(true)
  const router = useRouter();
  const [plan, setPlan] = useState<{
    type: "Basic" | "Premium" | "Premium+" | "";
  }>({
    type: "",
  });

  const closeModal = () => {
    router.back();
  };

  return (
    <div className="fixed w-full h-full top-0 left-0 z-40 bg-black flex overflow-y-scroll scrollable-element">
      <div className="w-full m-2 mt-0">
        <div className="flex flex-col w-full bg-[radial-gradient(ellipse_at_top,#1f2c3b,_black)] shadow-[0px_0px_59px_#111720c2]">
          <div className="cursor-pointer absolute p-6" onClick={closeModal}>
            X
          </div>
          <h1 className="md:text-6xl text-2xl font-bold text-center m-auto md:mt-40 mt-16 text-white">Upgrade to Premium</h1>
        </div>
        <div className="m-auto w-fit mt-5">
          <p className="w-fit md:text-xl text-base text-center text-gray-400">Enjoy an enhanced experience, exclusive creator tools, top-tier verification and security. <br />
            (For organizations, <span className="underline text-white">sign up here</span>)</p>
        </div>
        <div className="m-auto w-fit md:mt-16 mt-3">
          <div className="w-fit bg-gray-800 flex p-[2px] rounded-full items-center gap-1 m-auto">
            <div className={`px-2 py-1 ${prem && "bg-black"} text-white cursor-pointer rounded-full flex items-center gap-1`} onClick={() => setPrem(true)}>Annual <span className="text-xs px-2 py-[2px] bg-[#00251a] text-white rounded-full">Best Value</span></div>
            <div className={`px-2 py-1 ${!prem && "bg-black"} text-white cursor-pointer rounded-full`} onClick={() => setPrem(false)}>Monthly</div>
          </div>
          <div className="flex gap-8 md:mt-10 mt-5 md:flex-row flex-col text-white">
            {/* Premium plans */}
            <div className={`bg-[#202327] p-[32px] rounded-xl ${plan.type === "Basic" ? "border-2 border-[#1d9bf0]" : "border-none"} min-h-[150px] min-w-[230px] xl:min-w-[330px]`} onClick={() => setPlan({ type: "Basic" })}>
              <div className="flex justify-between">
                <h1 className="text-xl">Basic</h1>
                <div className={`px-[8px] py-[3px] ${plan.type === "Basic" ? "border-none bg-[#1d9bf0]" : "border-2 border-[#71767b] bg-black"} md:block hidden text-sm rounded-full`}>✔</div>
              </div>
              <div className="mt-4 "><span className="text-4xl font-bold">{prem ? "₹215.87" : "₹243.75"}</span> / month</div>
              <div className="mt-2">{prem ? "₹2,590.48 billed annually" : "Billed monthly"} <span className="text-xs px-2 py-[2px] bg-[#00251a] rounded-full">{prem ? "SAVE 11%" : ""}</span></div>
              <div className="text-base text-black rounded-full font-bold bg-white w-full py-1 mt-3 md:hidden block text-center cursor-pointer">Subscribe</div>
              <div className="mt-4 mb-2">✔ Small reply boost</div>
              <div className="mb-2">✔ Encrypted direct messages</div>
              <div className="mb-2">✔ Bookmark folders</div>
              <div className="mb-2">✔ Highlights tab</div>
              <div className="mb-2">✔ Edit post</div>
              <div className="mb-2">✔ Post longer videos</div>
              <div className="mb-2">✔ Longer posts</div>
            </div>
            <div className={`bg-[#202327] p-[32px] rounded-xl ${plan.type === "Premium" ? "border-2 border-[#1d9bf0]" : " border-none"} min-h-[150px] min-w-[230px] xl:min-w-[330px]`} onClick={() => setPlan({ type: "Premium" })}>
              <div className="flex justify-between">
                <h1 className="text-xl">Premium</h1>
                <div className={`px-[8px] py-[3px] ${plan.type === "Premium" ? "border-none bg-[#1d9bf0]" : "border-2 border-[#71767b] bg-black"} md:block hidden text-sm rounded-full`}>✔</div>
              </div>
              <div className="mt-4 "><span className="text-4xl font-bold">{prem ? "₹566.67" : "₹650"}</span> / month</div>
              <div className="mt-2">{prem ? "₹6,800 billed annually" : "Billed monthly"} <span className="text-xs px-2 py-[2px] bg-[#00251a] rounded-full">{prem ? "SAVE 12%" : ""}</span></div>
              <div className="text-base text-black rounded-full font-bold bg-white w-full py-1 mt-3 md:hidden block text-center cursor-pointer">Subscribe</div>
              <div className="mt-4 mb-2 font-bold">Everything in Basic, and</div>
              <div className="mb-2">✔ Half Ads in For You and Following</div>
              <div className="mb-2">✔ Larger reply boost</div>
              <div className="mb-2">✔ Get paid to post</div>
              <div className="mb-2">✔ Checkmark</div>
              <div className="mb-2">✔ Grok with increased limits</div>
              <div className="mb-2">✔ X Pro, Analytics, Media Studio</div>
              <div className="mb-2">✔ Creator Subscriptions</div>
            </div>
            <div className={`bg-[#202327] p-[32px] rounded-xl ${plan.type === "Premium+" ? "border-2 border-[#1d9bf0]" : "border-none"} min-h-[150px] min-w-[230px] xl:min-w-[330px]`} onClick={() => setPlan({ type: "Premium+" })}>
              <div className="flex justify-between">
                <h1 className="text-xl">Premium+</h1>
                <div className={`px-[8px] py-[3px] ${plan.type === "Premium+" ? "border-none bg-[#1d9bf0]" : "border-2 border-[#71767b] bg-black"} md:block hidden text-sm rounded-full`}>✔</div>
              </div>
              <div className="mt-4 "><span className="text-4xl font-bold">{prem ? "₹1,525" : "₹1,750"}</span> / month</div>
              <div className="mt-2">{prem ? "₹18,300 billed annually" : "Billed monthly"} <span className="text-xs px-2 py-[2px] bg-[#00251a] rounded-full">{prem ? "SAVE 12%" : ""}</span></div>
              <div className="text-base text-black rounded-full font-bold bg-white w-full py-1 mt-3 md:hidden block text-center cursor-pointer">Subscribe</div>
              <div className="mt-4 mb-2 font-bold">Everything in Premium, and</div>
              <div className="mb-2">✔ Fully ad-free</div>
              <div className="mb-2">✔ Largest reply boost</div>
              <div className="mb-2">✔ Write Articles</div>
              <div className="mb-2">✔ Radar</div>
            </div>
          </div>
        </div>
        <div className="mx-auto max-w-[980px] w-full mt-16 pb-[300px] text-white">
          <div className="w-full">
            <h1 className="text-2xl font-bold">Compare tiers &amp; features</h1>
            <div className="mt-8 w-full">
              <div className="py-2 w-full flex">
                <div className="w-1/4 font-bold">Enhanced Experience</div>
                <div className="w-1/4 font-bold">Basic</div>
                <div className="w-1/4 font-bold">Premium</div>
                <div className="w-1/4 font-bold">Premium+</div>
              </div>
              <hr className="border-[#202327]" />
              <div className="py-2 w-full flex">
                <div className="w-1/4 text-[#b0b2b5]">Grok with increased limits</div>
                <div className="w-1/4"></div>
                <div className="w-1/4">✔</div>
                <div className="w-1/4">✔</div>
              </div>
              <hr className="border-[#202327]" />
              <div className="py-2 w-full flex">
                <div className="w-1/4 text-[#b0b2b5]">Ads</div>
                <div className="w-1/4">No reduction</div>
                <div className="w-1/4">Half in For You &amp; Following</div>
                <div className="w-1/4">Fully ad-free</div>
              </div>
              <hr className="border-[#202327]" />
              <div className="py-2 w-full flex">
                <div className="w-1/4 text-[#b0b2b5]">Reply boost</div>
                <div className="w-1/4">Smallest</div>
                <div className="w-1/4">Larger</div>
                <div className="w-1/4">Largest</div>
              </div>
              <hr className="border-[#202327]" />
              <div className="py-2 w-full flex">
                <div className="w-1/4 text-[#b0b2b5]">Radar</div>
                <div className="w-1/4"></div>
                <div className="w-1/4"></div>
                <div className="w-1/4">✔</div>
              </div>
              <hr className="border-[#202327]" />
              <div className="py-2 w-full flex">
                <div className="w-1/4 text-[#b0b2b5]">Edit post</div>
                <div className="w-1/4">✔</div>
                <div className="w-1/4">✔</div>
                <div className="w-1/4">✔</div>
              </div>
              <hr className="border-[#202327]" />
              <div className="py-2 w-full flex">
                <div className="w-1/4 text-[#b0b2b5]">Longer posts</div>
                <div className="w-1/4">✔</div>
                <div className="w-1/4">✔</div>
                <div className="w-1/4">✔</div>
              </div>
              <hr className="border-[#202327]" />
              <div className="py-2 w-full flex">
                <div className="w-1/4 text-[#b0b2b5]">Undo post</div>
                <div className="w-1/4">✔</div>
                <div className="w-1/4">✔</div>
                <div className="w-1/4">✔</div>
              </div>
              <hr className="border-[#202327]" />
              <div className="py-2 w-full flex">
                <div className="w-1/4 text-[#b0b2b5]">Top Articles</div>
                <div className="w-1/4">✔</div>
                <div className="w-1/4">✔</div>
                <div className="w-1/4">✔</div>
              </div>
              <hr className="border-[#202327]" />
              <div className="py-2 w-full flex">
                <div className="w-1/4 text-[#b0b2b5]">Background video playback</div>
                <div className="w-1/4">✔</div>
                <div className="w-1/4">✔</div>
                <div className="w-1/4">✔</div>
              </div>
              <hr className="border-[#202327]" />
              <div className="py-2 w-full flex">
                <div className="w-1/4 text-[#b0b2b5]">Download videos</div>
                <div className="w-1/4">✔</div>
                <div className="w-1/4">✔</div>
                <div className="w-1/4">✔</div>
              </div>
              <hr className="border-[#202327]" />
            </div>
            <div className="mt-8 w-full">
              <div className="py-2 w-full flex">
                <div className="w-1/4 font-bold">Creator Hub</div>
                <div className="w-1/4 font-bold">Basic</div>
                <div className="w-1/4 font-bold">Premium</div>
                <div className="w-1/4 font-bold">Premium+</div>
              </div>
              <hr className="border-[#202327]" />
              <div className="py-2 w-full flex">
                <div className="w-1/4 text-[#b0b2b5]">Write Articles</div>
                <div className="w-1/4"></div>
                <div className="w-1/4"></div>
                <div className="w-1/4">✔</div>
              </div>
              <hr className="border-[#202327]" />
              <div className="py-2 w-full flex">
                <div className="w-1/4 text-[#b0b2b5]">Get paid to post</div>
                <div className="w-1/4"></div>
                <div className="w-1/4">✔</div>
                <div className="w-1/4">✔</div>
              </div>
              <hr className="border-[#202327]" />
              <div className="py-2 w-full flex">
                <div className="w-1/4 text-[#b0b2b5]">Creator Subscriptions</div>
                <div className="w-1/4"></div>
                <div className="w-1/4">✔</div>
                <div className="w-1/4">✔</div>
              </div>
              <hr className="border-[#202327]" />
              <div className="py-2 w-full flex">
                <div className="w-1/4 text-[#b0b2b5]">X Pro</div>
                <div className="w-1/4"></div>
                <div className="w-1/4">✔</div>
                <div className="w-1/4">✔</div>
              </div>
              <hr className="border-[#202327]" />
              <div className="py-2 w-full flex">
                <div className="w-1/4 text-[#b0b2b5]">Media Studio</div>
                <div className="w-1/4"></div>
                <div className="w-1/4">✔</div>
                <div className="w-1/4">✔</div>
              </div>
              <hr className="border-[#202327]" />
              <div className="py-2 w-full flex">
                <div className="w-1/4 text-[#b0b2b5]">Analytics</div>
                <div className="w-1/4"></div>
                <div className="w-1/4">✔</div>
                <div className="w-1/4">✔</div>
              </div>
              <hr className="border-[#202327]" />
              <div className="py-2 w-full flex">
                <div className="w-1/4 text-[#b0b2b5]">Post longer videos</div>
                <div className="w-1/4">✔</div>
                <div className="w-1/4">✔</div>
                <div className="w-1/4">✔</div>
              </div>
              <hr className="border-[#202327]" />
            </div>
            <div className="mt-8 w-full">
              <div className="py-2 w-full flex">
                <div className="w-1/4 font-bold">Verification &amp; Security</div>
                <div className="w-1/4 font-bold">Basic</div>
                <div className="w-1/4 font-bold">Premium</div>
                <div className="w-1/4 font-bold">Premium+</div>
              </div>
              <hr className="border-[#202327]" />
              <div className="py-2 w-full flex">
                <div className="w-1/4 text-[#b0b2b5]">Checkmark</div>
                <div className="w-1/4"></div>
                <div className="w-1/4">✔</div>
                <div className="w-1/4">✔</div>
              </div>
              <hr className="border-[#202327]" />
              <div className="py-2 w-full flex">
                <div className="w-1/4 text-[#b0b2b5]">Optional ID verification</div>
                <div className="w-1/4"></div>
                <div className="w-1/4">✔</div>
                <div className="w-1/4">✔</div>
              </div>
              <hr className="border-[#202327]" />
              <div className="py-2 w-full flex">
                <div className="w-1/4 text-[#b0b2b5]">Encrypted direct messages</div>
                <div className="w-1/4">✔</div>
                <div className="w-1/4">✔</div>
                <div className="w-1/4">✔</div>
              </div>
              <hr className="border-[#202327]" />
            </div>
            <div className="mt-8 w-full">
              <div className="py-2 w-full flex">
                <div className="w-1/4 font-bold">Customization</div>
                <div className="w-1/4 font-bold">Basic</div>
                <div className="w-1/4 font-bold">Premium</div>
                <div className="w-1/4 font-bold">Premium+</div>
              </div>
              <hr className="border-[#202327]" />
              <div className="py-2 w-full flex">
                <div className="w-1/4 text-[#b0b2b5]">Highlights tab</div>
                <div className="w-1/4">✔</div>
                <div className="w-1/4">✔</div>
                <div className="w-1/4">✔</div>
              </div>
              <hr className="border-[#202327]" />
              <div className="py-2 w-full flex">
                <div className="w-1/4 text-[#b0b2b5]">Bookmark folders</div>
                <div className="w-1/4">✔</div>
                <div className="w-1/4">✔</div>
                <div className="w-1/4">✔</div>
              </div>
              <hr className="border-[#202327]" />
              <div className="py-2 w-full flex">
                <div className="w-1/4 text-[#b0b2b5]">App icons</div>
                <div className="w-1/4">✔</div>
                <div className="w-1/4">✔</div>
                <div className="w-1/4">✔</div>
              </div>
              <hr className="border-[#202327]" />
              <div className="py-2 w-full flex">
                <div className="w-1/4 text-[#b0b2b5]">Customize navigation</div>
                <div className="w-1/4">✔</div>
                <div className="w-1/4">✔</div>
                <div className="w-1/4">✔</div>
              </div>
              <hr className="border-[#202327]" />
            </div>
          </div>
        </div>
        <div className="fixed xl:flex hidden justify-center bottom-0 left-0 bg-black w-full p-4 border-t border-[#202327] min-h-[100px]">
          <div className="min-w-56 max-w-[475px] mr-4">
            <div className="text-xl text-white">{plan.type}</div>
            <div>
              <div className="mt-4 text-white"><span className="text-4xl font-bold text-white">{prem ? "₹6,800" : "₹650"}</span> / {prem ? "year" : "month"}</div>
              <div className="mt-2 text-white">Billed {prem ? "annually" : "monthly"}</div>
            </div>
          </div>
          <div className="min-w-56 max-w-[475px] w-full mr-4">
            <div className="mb-3 w-full px-4 py-2 hover:cursor-pointer text-center bg-[#1d9bf0] rounded-full font-bold text-white">Subscribe &amp; Pay</div>
            <div className="w-full p-2 border-[1px] border-[#595d62] rounded-md">
              <div className="text-[13px] text-[#949799]">By subscribing, you agree to our <span className="text-white underline">Purchaser Terms of Service</span>. Subscriptions auto-renew until canceled. <span className="text-white underline">Cancel anytime</span>,  at least 24 hours prior to renewal to avoid additional charges. Manage your subscription through the platform you subscribed on.</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostModal;
