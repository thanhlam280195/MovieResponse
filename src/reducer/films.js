import { FETCH_LIST_MOVIE } from "../constants/filmConstant";
export const initialState = {
  listMovie: [],
};

const products = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_LIST_MOVIE:
      //not have api get detail data, so save list movie on localStorage
      localStorage.setItem("LIST_MOVE", JSON.stringify(action.listMovie));
      return { ...state, listMovie: action.listMovie };
    default:
      return { ...state };
  }
};

export default products;
