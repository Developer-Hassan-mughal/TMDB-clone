import React from 'react'
import Link from 'next/link'
const Nav = () => {
  return (
    <>
            <div id='nav'>
          <div id='left-nav'>
            <Link href='/'><img src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg" alt="" /></Link>
            <div className='nav-link movie' href="#">Movies
            
              <div className='options'>
                <Link className='opt-links' href='/movies/popular'>Popular</Link>
                <Link  className='opt-links' href="/movies/now_playing">Now Playing</Link>
                <Link  className='opt-links' href="/movies/upcoming">Upcoming</Link>
                <Link  className='opt-links' href="/movies/top_rated">Top Rated</Link>
              </div>
            </div>
            <div className='nav-link' href="#">TV Shows
            <div className='options'>
                <Link className='opt-links' href='/tv_shows/popular'>Popular</Link>
                <Link  className='opt-links' href="/tv_shows/airing_today">Airing Today</Link>
                <Link  className='opt-links' href="/tv_shows/on_the_air">On TV</Link>
                <Link  className='opt-links' href="/tv_shows/top_rated">Top Rated</Link>
              </div>
            </div>
            <div className='nav-link' href="#">People</div>
            <div className='nav-link' href="#">More</div>
          </div>
          <div id='right-nav'>
            <img src="https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-371-plus-white-0bac34f16124808a12ea863b4d9cc6e599dee7c0a80658cfe9ead26939e64517.svg" alt="" />
            <Link className='nav-link' href="#">EN</Link>
            <Link className='nav-link' href="#">Login</Link>
            <Link className='nav-link' href="#">Join TMDB</Link>
            <img src="https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-28-search-blue-177462d06db81ff2a02aa022c1c0be5ba4200d7bd3f51091ed9298980e3a26a1.svg" alt="" />
          </div>
        </div>
    </>
  )
}

export default Nav