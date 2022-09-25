import React from "react";
import { movies } from "./Movies.jsx";
import NavItems from "./NavItems.jsx";
import Movie from "./Movie.jsx";
import List from "./List.jsx";
import { BrowserRouter } from "react-router-dom";
import TopRated from "./TopRated.jsx";
import Picks from "./Picks.jsx";
import { Link, Outlet } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="mx-[5rem] py-6 max-w-[750px] divide-y divide-slate-100 rounded-2xl mt-[1rem] shadow-2xl">
        <NavItems/>
        <List>
          {movies.map((movie) => (
          <Movie key={movie.id} movie={movie}/>
          ))}
        </List>
      </div>
    </BrowserRouter>
  );
}

export default App;
