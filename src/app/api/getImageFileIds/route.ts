import { NextResponse } from 'next/server';
import { imagekit } from '@/utils';

// Interface for the file and folder objects returned by ImageKit
interface FileObject {
  fileId: string;
  customMetadata?: { description?: string };
}

interface FolderObject {
  folderId: string;
  folderName: string;
  // FolderObject may not have customMetadata, so it is optional
  customMetadata?: { description?: string };
}

// ImageKit's response from the listFiles API
interface ListFilesResponse extends Array<FileObject | FolderObject> {
  $ResponseMetadata: ResponseMetadata; // Metadata for the response
}

// Response metadata interface (includes pagination info)
interface ResponseMetadata {
  totalCount: number;
  nextCursor?: string;
}

// Our desired response format for files
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

    // Check if fileList is present in the response and handle both files and folders
    const files: ImageKitFile[] = response.map((item) => {
      if ('fileId' in item) {
        // Handle FileObject
        return {
          fileId: item.fileId,
          customMetadata: {
            description: typeof item.customMetadata?.description === 'string' ? item.customMetadata.description : "No description",
          },
        };
      } else {
        // Handle FolderObject (which doesn't have customMetadata)
        return {
          fileId: item.folderId, // Use folderId as fileId in this case
          customMetadata: {
            description: "No description", // Default to "No description"
          },
        };
      }
    });

    return NextResponse.json({ fileData: files });
  } catch (error: unknown) {
    return NextResponse.json(
      { error: 'Failed to fetch files' },
      { status: 500 }
    );
  }
}
