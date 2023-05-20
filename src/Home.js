import React from 'react'
import './App.css'
import Dashboard from './Dashboard'

function Home({user}){

    return(
        <div className="home">
            <Dashboard user={user} />
        </div>
    )
}export default Home