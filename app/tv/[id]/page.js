"use client"
import React, { useEffect, useState, Suspense} from 'react'
import axios from '../../../utils/axios'
import Link from 'next/link'
import Nav from '@/app/component/Nav'

const page = ({params}) => {

  const [movie, setmovie] = useState([])
  const [genres, setgenres] = useState([])
  const [country, setcountry] = useState([])
  const [creww, setcreww] = useState([])
  const urll = "https://www.themoviedb.org/t/p/w300_and_h450_bestv2/"
  const background = "https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/"
  const [url, seturl] = useState(	urll)


    const getSingle = async ()=>{
      const {data} = await axios.get(`/tv/${params.id}?api_key=b66939d4f30a0c82419ffe7f977d0768&language=en-US&append_to_response=credits`)
      const {credits} = data.created_by
      // console.log(data)
      // console.log(data.imdb_id)
      setgenres(data.genres)
      setcountry(data.production_countries)
      setmovie(data)
      setcreww(data.created_by)
  
    }
    // console.log(creww)

    useEffect(()=>{
      getSingle()
    },[page])

  return (
    <div>
      
      <Nav/>
      <div className='movie-page'>

        <div className='drop-downs'>
          <span>Overview ▼</span>
          <span>Media ▼</span>
          <span>Fandom ▼</span>
          <span>Share ▼</span>
        </div>

        <Suspense fallback={<img src="https://assets-v2.lottiefiles.com/a/cabde958-1161-11ee-8968-5f3465a74a92/DvR3lan0J9.gif" alt="" />}>
        
        <div className='main-poster'>
          <div className='main-img'><img src={background+movie.backdrop_path} alt="" /></div>
          <div className='left-img'>
             <img src={url+movie.poster_path} alt="" />
          </div>
          
          <div className='main-poster-right'>
            <div className='right-title'>
              <div className='right-title-top'>
                <h1>{movie.name} <span> ({movie.last_air_date})</span></h1>
                  <span>{movie.release_date} 
                  {country.map((index)=>(

                  <span key={index.name}> ({ index.iso_3166_1 }) </span> 
                  ))}
                  • 
                {genres.map((index)=>(
                 <span key={index.id}> {index.name}, </span> 
                 ))}</span>
              </div>
              <div className='icons'>
                <div className='rating'>
                  <h4>{Math.floor(movie.vote_average * 10)}<sup>%</sup></h4>
                </div>
                <h4 style={{lineHeight : '23px' , display: 'flex', alignItems:'center'}}>User <br /> Score</h4>

                <div className='listt'><img src="https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-159-thumbnails-list-white-c260ea972eebf812289fd3c41d0d2c1dff33ecbcd62be13fba8eeaf9de173789.svg" alt="" /></div>
                <div className='listt'><img src="https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-13-heart-white-28d2cc2d6418c5047efcfd2438bfc5d109192671263c270993c05f130cc4584e.svg" alt="" /></div>
                <div className='listt'><img src="https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-73-bookmark-white-432e98d550b7e4c80b06272c49475b0db85a60f6fae450420713004b3c9d3ffd.svg" alt="" /></div>
                <div className='listt'><img src="https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-49-star-white-5c85220678b312aea9599d5f12ad858a9e7df226de51ef8b6b699023ffeda5fa.svg" alt="" /></div>
                <h4 style={{display: 'flex', alignItems:'center'}}> ▶  Play Trailer</h4>


              </div>
              <div className='short' style={{marginTop:'20px', marginBottom: '10px'}}> <i>{movie.tagline}</i></div>
              <div className='overview'>
                <h3>Overview</h3>
                <span  style={{lineHeight : '22px',display: 'block' , fontSize:'16px'}}>{movie.overview}</span>
              </div>
              <div className='cast'>
                {creww.slice(0,6).map((index)=>(
                  <div className='artist' key={index.id}>

                    
                  <h4>{index.name}</h4>
                  <span>Creator</span>
                </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
        </Suspense>
      </div>


    </div>
  )
}

export default page