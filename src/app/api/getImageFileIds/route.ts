import { NextResponse } from 'next/server';
import { imagekit } from '@/utils';

interface ImageKitFile {
  fileId: string;
  customMetadata?: {
    description?: string; 
  };
}

// export async function GET() {
//   try {
//     const files: ImageKitFile[] = await imagekit.listFiles({
//       path: "posts"
//     });
//     const fileData = files.map((file) => ({
//       fileId: file.fileId,
//       description: file.customMetadata?.description || "No description",
//     }));
//     return NextResponse.json({ fileData });
//   } catch (error: unknown) {
//     return NextResponse.json(
//       { error: 'Failed to fetch files' },
//       { status: 500 }
//     );
//   }
// }

export async function GET() {
  try {
    // Fetch files from ImageKit
    const response = await imagekit.listFiles({
      path: "posts"
    });

    // Filter out any non-file objects (e.g., folders) and ensure the result matches ImageKitFile
    const files: ImageKitFile[] = response.items.filter((item): item is ImageKitFile => {
      return (item as ImageKitFile).fileId !== undefined;
    });

    const fileData = files.map((file) => ({
      fileId: file.fileId,
      description: file.customMetadata?.description || "No description",
    }));

    return NextResponse.json({ fileData });
  } catch (error: unknown) {
    return NextResponse.json(
      { error: 'Failed to fetch files' },
      { status: 500 }
    );
  }
}

