import React from "react";
import useGlobalReducer from "../../hooks/useGlobalReducer";
import { Link } from "react-router-dom";

export default function Sidebar() {
  const { store, dispatch } = useGlobalReducer();
  const sidebarOpen = store.sidebar;

  return (
    <>
      <div
        className="fixed left-0 z-30 bg-gray-800 transition-all duration-300"
        style={{
          top: "4rem",
          height: "calc(100vh - 4rem)",
          width: sidebarOpen ? "20%" : "0",
        }}
      >
        {sidebarOpen && (
          <div className="h-full flex flex-col">
            <div className="flex-1 overflow-y-auto p-4">
              <h2 className="text-white text-lg font-semibold mb-4">SideBar</h2>
              <Link to="/journal" className="block text-white mb-2">
                <button
                  onClick={() => dispatch({ type: "TOGGLE_SIDEBAR" })}
                  className="w-full text-left bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded"
                >
                  Create
                </button>
              </Link>
            </div>
            <button
              className="absolute right-0 top-1/2 -translate-y-1/2 bg-blue-500 text-white px-2 py-1 rounded-l"
              onClick={() => dispatch({ type: "TOGGLE_SIDEBAR" })}
            >
              &lt;
            </button>
          </div>
        )}
      </div>
      {!sidebarOpen && (
        <button
          className="fixed left-0 top-1/2 -translate-y-1/2 z-40 bg-blue-500 text-white px-2 py-1 rounded-r"
          onClick={() => dispatch({ type: "TOGGLE_SIDEBAR" })}
        >
          &gt;
        </button>
      )}
    </>
  );
}
