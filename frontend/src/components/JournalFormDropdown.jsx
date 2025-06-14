import React from "react";

export const JournalDropdown = ({ entry, dropdown, setDropdown }) => {
  return (
    <div className="flex flex-row py-2 px-4 mb-4 items-center justify-between bg-gray-100 rounded shadow min-h-[60px] h-[60px]">
      <button
        type="button"
        className="bg-blue-500 text-white px-4 py-2 rounded font-bold mr-2 transition-all duration-300"
        onClick={() => setDropdown(!dropdown)}
      >
        {dropdown ? "<" : ">"}
      </button>
      <div
        className={`transition-transform duration-500 ease-in-out flex-1 flex justify-end ${
          dropdown
            ? "translate-x-0 opacity-100"
            : "-translate-x-full opacity-0 pointer-events-none"
        }`}
      >
        <button
          type="button"
          className="bg-blue-500 text-white px-4 py-2 rounded"
          onClick={() => console.log(entry.content)}
        >
          Save Entry
        </button>
      </div>
    </div>
  );
};
