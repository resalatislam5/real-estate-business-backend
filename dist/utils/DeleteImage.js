"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteImage = void 0;
const promises_1 = require("fs/promises");
const path = require("path");
const DeleteImage = async (filePath) => {
    try {
        const normalizedPath = path.normalize(filePath);
        const resolvedPath = path.join(process.cwd(), normalizedPath);
        await (0, promises_1.unlink)(resolvedPath);
        console.log(`✅ Deleted file: ${resolvedPath}`);
    }
    catch (e) {
        console.error(`❌ Error deleting file: ${e.message}`);
    }
};
exports.DeleteImage = DeleteImage;
//# sourceMappingURL=DeleteImage.js.map