"use server";

import { imagekit } from "./utils";

export const shareAction = async (
  formData: FormData,
  settings: { type: "original" | "wide" | "square"; sensitive: boolean }
) => {
  const file = formData.get("file") as File;
  const desc = formData.get("desc") as string;

  if (!file) {
    throw new Error("No file provided");
  }

  const bytes = await file.arrayBuffer();
  const buffer = Buffer.from(bytes);

  const transformation = `w-600, ${settings.type === "square"
      ? "ar-1-1"
      : settings.type === "wide"
        ? "ar-16-9"
        : ""
    }`;

  return new Promise<void>((resolve, reject) => {
    imagekit.upload(
      {
        file: buffer,
        fileName: file.name,
        folder: "/posts",
        ...(file.type.includes("image") && {
          transformation: {
            pre: transformation,
          },
        }),
        customMetadata: {
          sensitive: settings.sensitive,
          type: settings.type,
          description: desc || "",
        },
      },
      function (error, result) {
        if (error) {
          console.error("ImageKit upload failed:", error);
          reject(error);
        } else {
          console.log("ImageKit upload successful:", result);
          resolve();
        }
      }
    );
  });
};