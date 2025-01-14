import { NextResponse } from 'next/server';
import { imagekit } from '@/utils';

interface ImageKitFile {
  fileId: string;
  customMetadata: {
    description?: string;
  };
}

export async function GET() {
  try {
    // Fetch the file list from ImageKit
    const response = await imagekit.listFiles({
      path: "posts"
    });

    // Ensuring we handle both files and folders correctly and map only to ImageKitFile
    const files: ImageKitFile[] = response.fileList.map((file) => ({
      fileId: file.fileId,
      customMetadata: {
        description: file.customMetadata?.description || "No description", // Default value if description is missing
      },
    }));

    return NextResponse.json({ fileData: files });
  } catch (error: unknown) {
    return NextResponse.json(
      { error: 'Failed to fetch files' },
      { status: 500 }
    );
  }
}
