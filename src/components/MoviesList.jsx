import React, { useEffect, useState } from "react";
import PageWrapper from "./PageWrapper";
import Movie from "./Movie";
import Pagination from "./Pagination";

const MoviesList = () => {
  const URL ="https://lucasmoy.dev/data/react/peliculas.json";
  const TOTAL_IN_ONE_PAGE = 7;
  const [currentPage, setCurrentPage] = useState(1);
  const [movies, setMovies] = useState([]);

  const searchMovies = async () => {
    try {
      const response = await fetch(URL);
      //console.log(response.status);
      if(response.status === 200)
        setMovies(await response.json());
    } catch (error) {
      console.log(error);
    }
  };
  
  let moviesByPage = movies.slice(
    (currentPage - 1) * TOTAL_IN_ONE_PAGE,
    currentPage * TOTAL_IN_ONE_PAGE
  );

  const getTotalOfPages = () => Math.ceil(movies.length / TOTAL_IN_ONE_PAGE);

  useEffect(() => {
    searchMovies();
  }, []);

  return (
    <PageWrapper moviesFound={movies.length}>
      {moviesByPage.map((movie) => (
        <Movie
          title={movie.titulo}
          rate={movie.calificacion}
          duration={movie.duracion}
          director={movie.director}
          actors={movie.actores}
          date={movie.fecha}
          img={movie.img}
        >
          {movie.descripcion}
        </Movie>
      ))}
      <Pagination
        currentPage={currentPage}
        total={getTotalOfPages()}
        onChange={(page) => setCurrentPage(page)}
      />
    </PageWrapper>
  );
};

export default MoviesList;
