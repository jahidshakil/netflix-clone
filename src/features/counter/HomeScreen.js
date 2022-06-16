import React from 'react'
import Banner from './Banner'
import './HomeScreen.css'
import Navbar from './Navbar'
import requests from './Request'
import Row from './Row'


const HomeScreen = () => {
  return (
      <div className='home-screen'>
      <Navbar />
      <Banner />
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