/**
 * Type definitions for Firebase Storage upload function
 */

export interface UploadProgressCallback {
  (progress: number): void;
}

export declare function uploadImageToFirebase(
  file: File,
  folder?: string,
  onProgress?: UploadProgressCallback | null
): Promise<string>;

export declare function deleteImageFromFirebase(imagePath: string): Promise<void>;

export declare const db: any;
export declare const auth: any;
export declare const storage: any;
