import React from "react";
import useGlobalReducer from "../../hooks/useGlobalReducer";

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
    </>
  );
}

export default Home;
