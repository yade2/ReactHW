import React from 'react'
import './style.css'
import Reviews from './reviews'
import Sidebar from './sidebar'
import Ratings from './ratings'
import Analysis from './analysis'
import WebsiteVisitors from './websitevisitors'

function App () {
  return (
    <div className="body">
        <Sidebar />
        <Reviews number="222"/>
        <Ratings number="321"/>
        <Analysis number1="500" number2="600" number3="1,234"/>
        <WebsiteVisitors number="10"/>

    </div>
  
    
  );
}

export default App;
