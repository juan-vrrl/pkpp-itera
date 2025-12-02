"use client";

import { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import Image from "next/image";
import { X, Upload } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "react-toastify";

interface ImageFile {
  file?: File;
  preview: string;
  url?: string; // For existing images from database
}

interface ImageUploadProps {
  value: ImageFile[];
  onChange: (files: ImageFile[]) => void;
  maxImages?: number;
}

export function ImageUpload({ value = [], onChange, maxImages = 5 }: ImageUploadProps) {

  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      if (value.length >= maxImages) {
        toast.error(`Maksimal ${maxImages} gambar`);
        return;
      }

      const remainingSlots = maxImages - value.length;
      const filesToAdd = acceptedFiles.slice(0, remainingSlots);

      const newImageFiles: ImageFile[] = filesToAdd.map((file) => ({
        file,
        preview: URL.createObjectURL(file),
      }));

      onChange([...value, ...newImageFiles]);
      toast.success(`${filesToAdd.length} gambar ditambahkan`);
    },
    [value, onChange, maxImages]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      "image/*": [".png", ".jpg", ".jpeg", ".webp"],
    },
    maxSize: 5 * 1024 * 1024, // 5MB
    disabled: value.length >= maxImages,
  });

  const removeImage = (index: number) => {
    const imageFile = value[index];
    
    // Revoke preview URL to free memory if it's a new file
    if (imageFile.preview && imageFile.file) {
      URL.revokeObjectURL(imageFile.preview);
    }
    
    const newImages = value.filter((_, i) => i !== index);
    onChange(newImages);
  };

  return (
    <div className="space-y-4">
      {/* Upload Zone */}
      {value.length < maxImages && (
        <div
          {...getRootProps()}
          className={`
            border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-colors
            ${isDragActive ? "border-red-500 bg-red-50" : "border-gray-300 hover:border-red-400"}
          `}
        >
          <input {...getInputProps()} />
          <div className="flex flex-col items-center gap-2">
            <Upload className="w-12 h-12 text-gray-400" />
            <p className="text-sm text-gray-600">
              {isDragActive
                ? "Lepaskan file di sini"
                : "Drag & drop gambar atau klik untuk memilih"}
            </p>
            <p className="text-xs text-gray-500">
              PNG, JPG, JPEG, WEBP (Maks. 5MB per file)
            </p>
            <p className="text-xs text-gray-500">
              {value.length} / {maxImages} gambar
            </p>
            <p className="text-xs text-yellow-600 font-medium">
              Gambar akan diupload saat Anda menyimpan postingan
            </p>
          </div>
        </div>
      )}

      {/* Image Preview Grid */}
      {value.length > 0 && (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {value.map((imageFile, index) => (
            <div
              key={index}
              className="relative aspect-square rounded-lg overflow-hidden border border-gray-200 group"
            >
              <Image
                src={imageFile.preview}
                alt={`Upload ${index + 1}`}
                fill
                className="object-cover"
                unoptimized={!!imageFile.file} // Use unoptimized for local previews
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <Button
                  type="button"
                  variant="destructive"
                  size="sm"
                  onClick={() => removeImage(index)}
                  className="bg-red-600 hover:bg-red-700"
                >
                  <X className="w-4 h-4 mr-1" />
                  Hapus
                </Button>
              </div>
              {index === 0 && (
                <div className="absolute top-2 left-2 bg-blue-600 text-white text-xs px-2 py-1 rounded">
                  Utama
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
