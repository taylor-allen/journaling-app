import React from "react";
import useGlobalReducer from "../../hooks/useGlobalReducer";
import { Link } from "react-router-dom";

export function Home() {
  const { store, dispatch } = useGlobalReducer();
  return (
    <>
      <div
        onClick={() =>
          dispatch({
            type: "SET_MESSAGE",
            payload: "Goodbye, stars!",
          })
        }
        className="bg-green-200 p-4 rounded-xl"
      >
        {store.message}
      </div>
      <Link to={"/test"}>
        <button className="bg-blue-200 p-4 rounded-xl mt-4">
          Go to Test Page
        </button>
      </Link>
    </>
  );
}

export default Home;
