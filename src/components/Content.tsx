

import { MovieCard } from './MovieCard'; 

interface Props {
  MovieProps: Array<{
    imdbID: string;
    Title: string;
    Poster: string;
    Ratings: Array<{
      Source: string;
      Value: string;
    }>;
    Runtime: string;
  }>
  GenreResponseProps: {
    id: number;
  name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
  title: string;
  }
}
export function Content(props:Props) {
  return(
    <>
    <header>
    <span className="category">Categoria:<span> {props.GenreResponseProps.title}</span></span>
  </header>
  <main>
      <div className="movies-list">
        {props.MovieProps.map(movie => (
          <MovieCard key ={movie.imdbID} title={movie.Title} poster={movie.Poster} runtime={movie.Runtime} rating={movie.Ratings[0].Value} />
        ))} 
      </div>
    </main>
    </>
  )
  
}