import React, { useState } from "react";
import { JournalDropdown } from "./JournalFormDropdown";

export const JournalForm = () => {
  const [entry, setEntry] = useState({
    title: "",
    content: "",
    date: new Date().toISOString().split("T")[0],
  });
  const [dropdown, setSropdown] = useState(false);
  return (
    <>
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <JournalDropdown
          entry={entry}
          dropdown={dropdown}
          setDropdown={setSropdown}
        />
        <div className="mb-4">
          <input
            type="text"
            id="title"
            value={entry.title}
            onChange={(e) => setEntry({ ...entry, title: e.target.value })}
            placeholder="Title"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-4xl"
          />
        </div>
        <div className="mb-4">
          <textarea
            rows={20}
            id="content"
            placeholder="Today I..."
            value={entry.content}
            onChange={(e) => setEntry({ ...entry, content: e.target.value })}
            className="shadow appearance-none border-0 rounded w-full py-2 px-3 
                      text-gray-700 leading-tight focus:outline-none 
                        focus:shadow-outline 
                        bg-[repeating-linear-gradient(to_bottom,transparent,transparent_26px,#33d_27px)]
                        bg-local"
          />
        </div>
      </form>
    </>
  );
};
