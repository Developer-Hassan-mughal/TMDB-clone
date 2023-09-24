'use client'
import React, {useEffect, useState} from 'react'
import axios  from '../../../utils/axios'
import Link from 'next/link'
import Nav from '@/app/component/Nav'

const page = ({params}) => {
  const [movies, setmovies] = useState([])
  const urll = "https://www.themoviedb.org/t/p/w220_and_h330_face/"
  const [url, seturl] = useState(	urll)

  const getMovies = async ()=>{

    const {data} = await axios.get(`/movie/${params.id}?api_key=b66939d4f30a0c82419ffe7f977d0768`)
    setmovies(data.results)
  }
  // console.log(movies)

  useEffect(() => {
    getMovies()
  }, [page])



  return (
    <>
        <Nav/>
        
      <div className='movies-main'>
        {/* <div className='left-1'>

        </div> */}
      <div id='scroller-2'>
      {movies.length > 0 && movies.map((index)=>(
        
        <Link id='main-link'key={index.id} href={`/movie/${index.id}`}>
          <div className='cards-2' key={index.id}>
            <img src={url+index.poster_path} alt="" />
            <div className='rating'><h4>{Math.floor(index.vote_average * 10)}<sup>%</sup></h4></div>
            <div className='title'>
              <h4>{index.name}{index.title}</h4>
              <span style={{opacity : '0.7'}}>{index.first_air_date}{index.release_date}</span>
            </div>
          </div>
        </Link>
      ))}
        </div>
      </div>


    </>
  )
}

export default page