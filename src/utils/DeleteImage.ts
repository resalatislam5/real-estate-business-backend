import { unlink } from "fs/promises";
import * as path from "path";

export const DeleteImage = async (filePath: string) => {
  try {
    // Normalize path and resolve from project root
    const normalizedPath = path.normalize(filePath);

    // Join with actual directory (not /dist!)
    const resolvedPath = path.join(process.cwd(), normalizedPath);

    await unlink(resolvedPath);
    console.log(`✅ Deleted file: ${resolvedPath}`);
  } catch (e: any) {
    console.error(`❌ Error deleting file: ${e.message}`);
  }
};
