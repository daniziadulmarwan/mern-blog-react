const initialState = {
  dataBlogs: [],
  name: "Faiha",
};

const globalReducer = (state = initialState, action) => {
  if (action.type === "UPDATE_NAME") {
    return {
      ...state,
      name: "Faiha Zhafiratul Marwa",
    };
  }

  return state;
};

export default globalReducer;
