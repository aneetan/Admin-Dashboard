 import React, { useRef, useState, type ChangeEvent } from 'react'
 
 interface ImageProps {
  onImageUpload: (file: File) => void;
  maxSize?: number;
 }
 
 const ImageUpload = ({onImageUpload, maxSize = 5* 1024*1024}: ImageProps) => { //default 5MB
    const [previewUrl, setPreviewUrl] = useState<string|null>(null);
    const [error, setError] = useState<string|null>(null);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleFileChange = (e:ChangeEvent<HTMLInputElement>) => {
      setError(null);

      //check for empty files
      if(!e.target.files || e.target.files.length === 0){
        setError("Please select an image");
        return;
      }

      const file = e.target.files[0];

      if(file.size > maxSize){
        setError(`File is too large. Maximum size is ${maxSize / 1024 / 1024}MB`);
        return;
      }

      const reader = new FileReader();
      reader.onload = () => {
        setPreviewUrl(reader.result as string);
      };
      reader.readAsDataURL(file);

      onImageUpload(file);
    }

    const triggerFileInput = () => {
      fileInputRef.current?.click(); //opens file picker
      setPreviewUrl(null);
    }

    return (
      <div className="space-y-4 w-[60%]">
        <input
          type="file"
          ref={fileInputRef}
          onChange={handleFileChange}
          accept="image/png, image/jpeg"
          className="hidden"
        />

        <div
          className={`border-2 border-dashed rounded-lg p-6 text-center cursor-pointer transition-colors ${
            error ? 'border-red-500 bg-red-50' : previewUrl ? 'border-green-500 bg-green-50' : 'border-gray-300 hover:border-[var(--primary-color)]'
          }`}
          onClick={triggerFileInput}
        >
          {previewUrl ? (
            <div className="flex flex-col items-center">
              <img
                src={previewUrl}
                alt="Preview"
                className="max-h-64 max-w-full rounded-md mb-2"
              />
              <p className="text-sm text-gray-600">Click to change image</p>
            </div>
          ) : (
            <div className="flex flex-col items-center">
              <svg
                className="w-12 h-12 text-gray-400 mb-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              <p className="text-sm text-gray-600">
                Click to select an image
              </p>
            </div>
          )}
        </div>

      {error && (
        <p className="text-red-500 text-sm">{error}</p>
      )}
    </div>
    )
 }
 
 export default ImageUpload
 