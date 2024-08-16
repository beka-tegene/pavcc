import React, { useState, useRef } from "react";
import { Controller } from "react-hook-form";
import { FaCloudUploadAlt, FaFilePdf, FaFileAlt } from "react-icons/fa";

export const FileInput = ({ label, name, control, rules = {}, ...props }) => {
  const [preview, setPreview] = useState(null);
  const [fileType, setFileType] = useState(null);
  const inputRef = useRef(null);

  const handleFileChange = (file) => {
    if (file) {
      setFileType(file.type);
      if (file.type.startsWith('image/')) {
        setPreview(URL.createObjectURL(file));
      } else {
        setPreview(null);
      }
      return file;
    }
    return null;
  };

  const handleDrop = (e, field) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file) {
      setFileType(file.type);
      if (file.type.startsWith('image/')) {
        setPreview(URL.createObjectURL(file));
      } else {
        setPreview(null);
      }
      field.onChange(file);
      inputRef.current.files = e.dataTransfer.files;
    }
  };

  return (
    <div
      className="flex flex-col gap-1 h-[300px] w-full"
      onDragOver={(e) => e.preventDefault()}
      onDrop={(e) => handleDrop(e, field)}
    >
      {label && (
        <label htmlFor={name} className="text-gray-600 font-medium">
          {label}
        </label>
      )}
      <Controller
        name={name}
        control={control}
        rules={rules}
        render={({ field, fieldState }) => (
          <div className="flex flex-col items-start h-full w-full overflow-hidden">
            <input
              type="file"
              id={name}
              ref={inputRef}
              {...props}
              onChange={(e) => {
                const file = e.target.files[0];
                field.onChange(handleFileChange(file));
              }}
              className="hidden"
            />
            <div
              className="overflow-hidden border-[3px] border-dotted h-full w-full p-4 border-gray-400 rounded-lg flex flex-col items-center justify-center"
              onDragOver={(e) => e.preventDefault()}
              onDrop={(e) => handleDrop(e, field)}
            >
              {!preview  && (
                <>
                  <FaCloudUploadAlt size={50} className="text-gray-300" />
                  <p className="font-semibold text-gray-400 text-center">
                    Drag & Drop to Upload File
                  </p>
                  <span className="text-sm text-gray-400">or</span>
                  <button
                    type="button"
                    onClick={() => inputRef.current.click()}
                    className="bg-[#90CDF4] text-white py-2 px-8 rounded"
                  >
                    Browse
                  </button>
                </>
              )}
              {preview && fileType.startsWith('image/') && (
                <div className="w-full h-full overflow-hidden">
                  <img
                    src={preview}
                    alt="Preview" 
                    className="w-full h-full object-contain rounded-lg"
                  />
                </div>
              )}
              {fileType && !fileType.startsWith('image/') && (
                <div className="w-full h-full flex flex-col items-center justify-center">
                  {fileType === 'application/pdf' ? (
                    <FaFilePdf size={50} className="text-gray-300" />
                  ) : (
                    <FaFileAlt size={50} className="text-gray-300" />
                  )}
                  <p className="font-semibold text-gray-400 text-center">
                    {fileType === 'application/pdf'
                      ? 'PDF File'
                      : 'File Uploaded'}
                  </p>
                </div>
              )}
            </div>
            {fieldState.error && (
              <span className="font-light text-sm text-red-700">
                {fieldState.error.message}
              </span>
            )}
          </div>
        )}
      />
    </div>
  );
};
