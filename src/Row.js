import React ,{useState,useEffect} from 'react'
import axios from './axios'
import './Row.css';
import Youtube from 'react-youtube';
import movieTrailer from 'movie-trailer';
const baseurl='https://image.tmdb.org/t/p/original/';
function Row({title,fetchUrl,isLargeRow}) {
    const [movies, setMovies] = useState([])
    const [trailerUrl,setTrailerUrl]=useState('')
   
    useEffect(()=>{
        // if [],run once when the row loads,and don't run again
     async function fetchData(){
             const request=await axios.get(fetchUrl);
             //https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}&language=en-US
             setMovies(request.data.results)
             return request
            }
      fetchData()
  },[fetchUrl])
    
  const opts={
      height:'390',
      width:'100%',
      plyerVars:{
          // https://developers.google.com/youtube/player_parameters
        autoplay: 1,
      }
  }
  const handleClick=(movie)=>{
    // movieTrailer( 'Lupin')
    // .then( response => console.log( response ) )
    // .catch((error)=>console.log(error))
     if(trailerUrl){
         setTrailerUrl('');
     }else{
         movieTrailer(movie?.name || '')
         .then((url) =>{
             const urlParams=new URLSearchParams(new URL(url).search);
             setTrailerUrl(urlParams.get('v'));
         }).catch((error)=>{
             console.log(error)
         })
     }
  };
    return (
        <div className='Rows'>
            <h2>{title}</h2>
            <div className='row_posters'>
               {/* servals row_poster */}
               {movies.map((movie)=>{
                   return <img 
                        key={movie.id}
                        onClick={()=>handleClick(movie)}
                        className={`row_poster ${ isLargeRow && 'row_posterLarge'}`}
                        src={`${baseurl}${ isLargeRow ? movie.poster_path : movie.backdrop_path}`} 
                        alt={movie.name}/>
               })}
            </div>
           {trailerUrl && <Youtube videoId={trailerUrl} opts={opts} />}
        </div>
    )
}

export default Row
