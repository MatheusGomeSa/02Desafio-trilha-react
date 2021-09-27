import { Button } from "./Button";
interface Props {
  GenreResponseProps: Array<{
    id: number;
    name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
    title: string;
  }>
  selectedGenreId:number;
  setSelectedGenreId:React.Dispatch<React.SetStateAction<number>>
}

export function SideBar(props:Props) {
  function handleClickButton(id: number) {
    props.setSelectedGenreId(id);
  }
  return(
    <div>
        {props.GenreResponseProps.map(genre => (<Button
          key={String(genre.id)}
          title={genre.title}
          iconName={genre.name}
          onClick={()=>{handleClickButton(genre.id)}}
          selected={props.selectedGenreId === genre.id}
        />))}
    </div>
 );
  
}