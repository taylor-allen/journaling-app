import React from "react";
import { JournalForm } from "../components/JournalForm";
import { Chatbox } from "../components/Chatbox";

export const Journal = () => {
  return (
    <div className="flex w-full h-[calc(100vh-4rem)] pt-16">
      <div className="w-[60%] p-4 overflow-auto">
        <h1 className="text-2xl font-bold mb-4">Journal Page</h1>
        <JournalForm />
      </div>
      <div className="w-[40%] flex flex-col items-stretch h-full">
        <div className="h-[10vh] min-h-[60px] max-h-[120px] bg-white p-4 shadow flex items-center sticky top-16 z-10">
          <span className="font-semibold">Prompt text here</span>
        </div>
        <div className="flex-1 bg-gray-100 p-4 shadow overflow-auto max-h-[calc(90vh-4rem-16px)]">
          <Chatbox />
        </div>
      </div>
    </div>
  );
};
