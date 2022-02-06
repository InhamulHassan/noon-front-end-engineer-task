import { createContext, useReducer, useContext, useEffect } from "react";

const LikedPostsStateContext = createContext();
const LikedPostsDispatchContext = createContext();

const initialState = {
  likedPosts: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_LIKED_POST":
      return { ...state, ...action.payload };
    default:
      throw new Error(`Unknown action: ${action.type}`);
  }
};

export const LikedPostsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    getLikedPosts();
  }, []);

  const setLikedPosts = (payload) => dispatch({ type: "SET_LIKED_POST", payload });

  const getLikedPosts = () => {
    try {
      let likedPostsArray = localStorage.getItem("ideaa-liked-posts")
        ? JSON.parse(localStorage.getItem("ideaa-liked-posts") || "{}")
        : [];

      setLikedPosts(likedPostsArray);
    } catch (err) {
      console.log("Unable to get liked posts", err);
    }
  };

  return (
    <LikedPostsDispatchContext.Provider value={{ setLikedPosts }}>
      <LikedPostsStateContext.Provider value={state}> {children} </LikedPostsStateContext.Provider>{" "}
    </LikedPostsDispatchContext.Provider>
  );
};

export const useLikedPostsState = () => useContext(LikedPostsStateContext);
export const useLikedPostsDispatch = () => useContext(LikedPostsDispatchContext);
