import React from "react";
import { MdBook } from "react-icons/md";

export const CourseCard = ({
  data={},
  onClick={}
}) => {
  return (
    <div className="bg-white rounded-lg shadow p-2 flex flex-col gap-2 relative cursor-pointer hover:shadow-md" onClick={onClick}>
      <div className="h-52 w-full overflow-hidden bg-[#F7F7F7]">
        <img
          src={data.imgSrc}
          alt="Course Image"
          className="w-full h-full object-contain"
        />
      </div>
      <div className="p-2">
        <h5 className="font-medium text-lg">{data.title}</h5>
        <div className="flex justify-between items-center mt-2">
          <span className="bg-[#f1e6cc] flex items-center gap-2 px-2 py-1 rounded text-[#D7A026]">
            <MdBook /> {data.chapters} Chapters
          </span>
          <span className="border-b-4 border-green-800">{data.price}</span>
        </div>
      </div>
      {data.isFree && (
        <span className="absolute bg-goldenrod left-0 top-0 text-white px-2 font-bold capitalize rounded-br-lg bg-green-700">
          Free
        </span>
      )}
    </div>
  );
};
