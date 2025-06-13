export const initialStore = () => {
  return {
    message: "Hello, World!",
  };
};

export default function storeReducer(store, action = {}) {
  switch (action.type) {
    case "SET_MESSAGE":
      return {
        ...store,
        message: action.payload,
      };
    default:
      return store;
  }
}
