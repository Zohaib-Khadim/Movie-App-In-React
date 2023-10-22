import axios from "axios";
import { createContext, useEffect, useState } from "react";
import React, { useContext } from "react";

const AppContext = createContext();

 export const API = `http://www.omdbapi.com/?&apikey=a14ac553&`;

const AppProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [movie, setMovie] = useState([]);
  const [isError, setIsError] = useState({ show: "false", msg: "" });
  const [query,setQuery] = useState("titanic");

  const getMovies = async (url) => {
    try {
      const res = await axios.get(url);
      const data = res.data;
      

      if (data.Response === "True") {
        setIsLoading(false);
        setMovie(data.Search);
        setIsError({
          show: "false",
          msg: " ",
        });
        console.log(data.Search)
      } else {
        setIsError({
          show: "true",
          msg: data.Error,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
   let timeOut= setTimeout(()=>{
      getMovies(`${API}&s=${query}`);
    },500)
    return ()=>{
      clearTimeout(timeOut)
    }
  }, [query]);
  if(isLoading){
    return(
    <div className="movies-section ">
        <div className="loading ">Loading...</div>
    </div>
    )
  }
  return (
    <>
      <AppContext.Provider value={{isLoading, isError, movie,query,setQuery}}>
        {children}
      </AppContext.Provider>
    </>
  );
};

const useGlobalContext = () => {
  return useContext(AppContext);
};
export { AppContext, AppProvider, useGlobalContext };