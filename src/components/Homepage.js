import React from 'react'
import NavBar from './Nav/NavBar'
import SearchBar from './SearchBar'
import TrendingTab from './TrendingTab'
import RecommendedTab from './RecommendedTab'

const Homepage = () => {
  return (
    <>
      <NavBar activePage='home' />
      <SearchBar />
      <TrendingTab />
      <RecommendedTab />
    </>
  )
}

export default Homepage