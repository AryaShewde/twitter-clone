import Link from "next/link";
import Image from "./Image";
import NextImage from "next/image";

const menuList = [
  {
    id: 1,
    name: "Home",
    link: "/",
    icon: "home.svg",
  },
  {
    id: 2,
    name: "Explore",
    link: "/explore/foryou",
    icon: "explore.svg",
  },
  {
    id: 3,
    name: "Notification",
    link: "/notification/all",
    icon: "notification.svg",
  },
  {
    id: 4,
    name: "Messages",
    link: "/messages",
    icon: "message.svg",
  },
  {
    id: 5,
    name: "Bookmarks",
    link: "/bookmarks",
    icon: "bookmark.svg",
  },
  {
    id: 6,
    name: "Communities",
    link: "/communities",
    icon: "community.svg",
  },
  {
    id: 7,
    name: "Premium",
    link: "/premium",
    icon: "logo.jpg",
  },
  {
    id: 8,
    name: "Verified Orgs",
    link: "/",
    icon: "job.svg",
  },
  {
    id: 9,
    name: "Profile",
    link: "/username",
    icon: "profile.svg",
  },
  {
    id: 10,
    name: "More",
    link: "/",
    icon: "more.svg",
  },
];

const LeftBar = () => {
  return (
    <div className="h-screen sticky top-0 flex flex-col justify-between pt-2 pb-8 overflow-y-scroll scrollbar-hide">
      <div className="flex flex-col gap-4 text-lg items-center xxl:items-start">
        <Link href="/" className="rounded-full hover:bg-[#181818]">
          <NextImage src="/svg/logo.jpg" alt="logo" width={34} height={34} />
        </Link>
        <div className="flex flex-col gap-4">
          {menuList.map((item) => (
            <div key={item.id}>
              {item.name == "Premium" ?
                <Link
                  href={item.link}
                  className="p-2 rounded-full hover:bg-[#181818] flex items-center gap-4"
                >
                  <Image
                    path={`svg/${item.icon}`}
                    alt={item.name}
                    w={24}
                    h={24}
                  />
                  <span className="hidden xxl:inline">{item.name}</span>
                </Link>
                :
                <Link
                  href={item.link}
                  className={`p-2 rounded-full hover:bg-[#181818] flex items-center gap-4`}
                >
                  <Image
                    path={`icons/${item.icon}`}
                    alt={item.name}
                    w={24}
                    h={24}
                  />
                  <span className="hidden xxl:inline">{item.name}</span>
                </Link>
              }
            </div>
          ))}
        </div>
        <Link
          href="/compose/post"
          className="bg-white text-black rounded-full w-12 h-12 flex items-center justify-center xxl:hidden"
        >
          <Image path="icons/post.svg" alt="new post" w={24} h={24} />
        </Link>
        <Link
          href="/compose/post"
          className="hidden xxl:block bg-white text-black rounded-full font-bold py-2 px-20"
        >
          Post
        </Link>
      </div>
      <div className="flex items-center justify-between mt-2">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 relative rounded-full overflow-hidden">
            <NextImage src="/general/avatar.png" alt="profile pic" width={100} height={100} />
          </div>
          <div className="hidden xxl:flex flex-col">
            <span className="font-bold">User name</span>
            <span className="text-sm text-textGray">@username</span>
          </div>
        </div>
        <div className="hidden xxl:block cursor-pointer font-bold">...</div>
      </div>
    </div>
  );
};

export default LeftBar;
