'use client'
import React,{useState, useEffect, Suspense} from 'react'
import Link from 'next/link'
import axios from "../utils/axios"
import Nav from './component/Nav'


const page = () => {
  const right = "-15%"
  const btnColor = "white"
  const btnDark = "#032541"
  const [darkColor, setdarkColor] = useState(btnDark)
  const [Color, setColor] = useState(btnColor)
  const [move, setmove] = useState(right)
  const [desider, setdesider] = useState(1)
  const [today, settoday] = useState([])
  const [week, setweek] = useState([])
  const urll = "	https://www.themoviedb.org/t/p/w220_and_h330_face/"
  const [url, seturl] = useState(	urll)


  const floatToRight = ()=>{
    if(desider === 1){
      const right = "40%"
      setmove(right)
      const newColor = "#032541"
      setColor(newColor)
      const white = "white"
      setdarkColor(white)
      setdesider(2)
    }
  }
  const floatToLeft = ()=>{
    if(desider === 2){
      const right = "-15%"
      setmove(right)
      const newColor = "white"
      setColor(newColor)
      const white = "#032541"
      setdarkColor(white)
      setdesider(1)
    }
  }

  const todaypost = async ()=>{
    try {
      const {data} = await axios.get('/trending/all/day?api_key=b66939d4f30a0c82419ffe7f977d0768')
      settoday(data.results)
      // console.log(data)
    } catch (error) {
      console.log(error)
    }
  }

  const weekpost = async ()=>{
    try {
      const {data} = await axios.get('/trending/all/week?api_key=b66939d4f30a0c82419ffe7f977d0768')
      setweek(data.results)
      // console.log(data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    todaypost()
    weekpost()
    // console.log(today)
  }, [page])

  return (
    <div id='main'>

        <Nav/>

        <div id='main-2'>
          <div id='searcher'>
            <div id='heading'>
              <h1>Welcome.</h1>
              <span>Millions of movies, TV shows and people to discover. Explore now.</span>
            </div>
            <form action="">
              <input id="search" type="search" name="" placeholder='search for a movies, tv shows, person......' />
              <input id="search-button" type="submit" value="Search" />
            </form>
          </div>
        
        <div id='page-1'>
          <div className='header'>
              <p>Trending</p>
              <div className='selector'>
                <div className='float' style={{left: move}}></div>
                <span 
                  id='left-btn' 
                  onClick={floatToLeft}
                    style={{color: Color}}
                >Today</span>

                <span
                  id='right-btn' 
                  onClick={floatToRight}
                    style={{color: darkColor}}
                  >This week</span>
              </div>
          </div>

        <Suspense fallback={<h3>loading..</h3>}>
          <div id='scroller'>
      {desider === 1 ? 
        today.length > 0 && today.map((index)=>(
          <Link id='main-link'key={index.id} href={`/${index.media_type}/${index.id}`}>
          <div className='cards' key={index.id}>
          <img src={url+index.poster_path} alt="" />
          <div className='rating'><h4>{Math.floor(index.vote_average * 10)}<sup>%</sup></h4></div>
          <div className='title'>
          <h4>{index.name}{index.title}</h4>
          <span style={{opacity : '0.7'}}>{index.first_air_date}{index.release_date}</span>
          </div>
          </div>
          </Link>
          ))
        :
        week.length > 0 && week.map((index)=>(
          <Link id='main-link'key={index.id} href={`/${index.media_type}/${index.id}`}>
          <div className='cards' key={index.id}>
          <img src={url+index.poster_path} alt="" />
          <div className='rating'><h4>{Math.floor(index.vote_average * 10)}<sup>%</sup></h4></div>
          <div className='title'>
          <h4>{index.name}{index.title}</h4>
          <span style={{opacity : '0.7'}}>{index.first_air_date}{index.release_date}</span>
          </div>
          </div>
          </Link>
          ))
        }

            
            {/* <div className='cards'>
              <img src="" alt="" />
              <div className='title'>
                <h4>I Am Groot</h4>
                <span>Aug 10, 2022</span>
              </div>
            </div> */}

          </div>
          </Suspense>
        </div>
          
        </div>

    </div>
  )
}

export default page