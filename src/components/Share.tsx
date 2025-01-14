"use client";

import React, { useEffect, useState } from "react";
import Image from "./Image";
import NextImage from "next/image";
import { shareAction } from "@/actions";
import ImageEditor from "./ImageEditor";

const Share = () => {
  const [media, setMedia] = useState<File | null>(null);
  const [description, setDescription] = useState<string>("");
  const [isEditorOpen, setIsEditorOpen] = useState(false);
  const [settings, setSettings] = useState<{
    type: "original" | "wide" | "square";
    sensitive: boolean;
  }>({
    type: "original",
    sensitive: false,
  });
  const [isRender, setIsRender] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsRender(true);
  }, []);

  if (!isRender) {
    return null;
  }

  const handleMediaChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setMedia(e.target.files[0]);
    }
  };

  const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!media) {
      alert("Please upload an image or video.");
      return;
    }

    const formData = new FormData();
    formData.append("file", media);
    formData.append("desc", description);

    try {
      setIsLoading(true);
      await shareAction(formData, settings);
      setMedia(null);
      setDescription("");
      await new Promise(() => setTimeout(() => {
        alert("Post shared successfully!");
        window.location.reload();
      }, 5000));
      setIsLoading(false);
    } catch (error) {
      console.error("Failed to share post:", error);
      setIsLoading(false);
      alert("Failed to share post.");
    }
  };

  const previewURL = media ? URL.createObjectURL(media) : null;

  return (
    <form
      className="p-4 flex gap-4"
      onSubmit={handleFormSubmit}
    >
      <div className="relative w-10 h-10 rounded-full overflow-hidden">
        <NextImage src="/general/avatar.png" alt="profile pic" width={100} height={100} />
      </div>
      <div className="flex-1 flex flex-col gap-4">
        <input
          type="text"
          name="desc"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="What is happening?!"
          className="bg-transparent outline-none placeholder:text-textGray text-xl w-full"
          required
        />
        {media?.type.includes("image") && previewURL && (
          <div className="relative rounded-xl overflow-hidden">
            <NextImage
              src={previewURL}
              alt=""
              width={600}
              height={600}
              className={`w-full ${settings.type === "original"
                ? "h-full object-contain"
                : settings.type === "square"
                  ? "aspect-square object-cover"
                  : "aspect-video object-cover"
                }`}
            />
            <div
              className="absolute top-2 left-2 bg-black bg-opacity-50 text-white py-1 px-4 rounded-full font-bold text-sm cursor-pointer"
              onClick={() => setIsEditorOpen(true)}
            >
              Edit
            </div>
            <div
              className="absolute top-2 right-2 bg-black bg-opacity-50 text-white h-8 w-8 flex items-center justify-center rounded-full cursor-pointer font-bold text-sm"
              onClick={() => setMedia(null)}
            >
              X
            </div>
          </div>
        )}
        {media?.type.includes("video") && previewURL && (
          <div className="relative">
            <video src={previewURL} controls />
            <div
              className="absolute top-2 right-2 bg-black bg-opacity-50 text-white h-8 w-8 flex items-center justify-center rounded-full cursor-pointer font-bold text-sm"
              onClick={() => setMedia(null)}
            >
              X
            </div>
          </div>
        )}
        {isEditorOpen && previewURL && (
          <ImageEditor
            onClose={() => setIsEditorOpen(false)}
            previewURL={previewURL}
            settings={settings}
            setSettings={setSettings}
          />
        )}
        <div className="flex items-center justify-between gap-4 flex-wrap">
          <div className="flex gap-2 md:gap-4 flex-wrap">
            <input
              type="file"
              name="file"
              onChange={handleMediaChange}
              className="hidden"
              id="file"
              accept="image/*,video/*"
            />
            <label htmlFor="file">
              <Image
                path="icons/image.svg"
                alt=""
                w={20}
                h={20}
                className="cursor-pointer"
              />
            </label>
            <Image
              path="icons/gif.svg"
              alt=""
              w={20}
              h={20}
              className="cursor-pointer"
            />
            <Image
              path="icons/poll.svg"
              alt=""
              w={20}
              h={20}
              className="cursor-pointer"
            />
            <Image
              path="icons/emoji.svg"
              alt=""
              w={20}
              h={20}
              className="cursor-pointer"
            />
            <Image
              path="icons/schedule.svg"
              alt=""
              w={20}
              h={20}
              className="cursor-pointer"
            />
            <Image
              path="icons/location.svg"
              alt=""
              w={20}
              h={20}
              className="cursor-pointer"
            />
          </div>
          <button type="submit" className="bg-white text-black font-bold rounded-full py-0 md:py-2 px-4" disabled={isLoading}>
            {isLoading? <NextImage src={"/svg/loading.gif"} alt="..." width={30} height={30} /> : "Post"}
          </button>
        </div>
      </div>
    </form>
  );
};

export default Share;
