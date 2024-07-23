import { createContext, useEffect, useReducer } from "react";
import { reducer } from "./reducer";
import axios from "axios";

const AppContext = createContext();

const API = "https://dummyapi.online/api/products";

const initialState = {
  name: "",
  image: "",
  paragraph: "",
  services: [],
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const updateHomePage = (name, img, para) => {
    return dispatch({
      type: "HOME_UPDATE",
      payload: {
        name: name,
        image: img,
        paragraph: para,
      },
    });
  };

  const updateAboutPage = (name, img, para) => {
    return dispatch({
      type: "ABOUT_UPDATE",
      payload: {
        name: name,
        image: img,
        paragraph: para,
      },
    });
  };

  // to get Api data

  const getServices = async (url) => {
    try {
      const { data } = await axios.get(url);
      // console.log(data);
      dispatch({ type: "GET_SERVICES", payload: data });
    } catch (error) {
      console.log(error);
    }
  };

  // call the API

  useEffect(() => {
    getServices(API);
  }, []);

  return (
    <AppContext.Provider value={{ ...state, updateAboutPage, updateHomePage }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
