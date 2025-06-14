export const initialStore = () => {
  return {
    message: "Hello, World!",
    sidebar: false,
  };
};

export default function storeReducer(store, action = {}) {
  switch (action.type) {
    case "SET_MESSAGE":
      return {
        ...store,
        message: action.payload,
      };
    case "TOGGLE_SIDEBAR":
      return {
        ...store,
        sidebar: !store.sidebar,
      };
    default:
      return store;
  }
}
