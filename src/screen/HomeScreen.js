import React from 'react'
import Banner from '../features/counter/Banner'
import './HomeScreen.css'
import Navbar from '../features/counter/Navbar'
import requests from '../features/counter/Request'
import Row from '../features/counter/Row'


const HomeScreen = () => {
  return (
      <div className='home-screen'>
      <Navbar />
      <Banner />
      <Row title="NETFLIX ORIGINAL" fetchUrl={requests.fetchNetflixOriginals} isLarge />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated}/>
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies}/>
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies}/>
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies}/>
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentariesMovies}/>
    </div>
  )
}

export default HomeScreen