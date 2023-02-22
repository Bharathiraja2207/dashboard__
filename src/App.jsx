import React from 'react'
import './App.css'
import { Dashboard } from './Dashboard';
import { Horizontalbar } from './Horizontalbar';
import { Verticalbar } from './Verticalbar';


export default function App() {
 
 
  return (
    <div className="App">
       <div className='navbar'><Verticalbar/>
           <div className='a'><Horizontalbar/>
           <br/>
                <div><Dashboard/></div>
            </div> 
       </div>
    </div>
  )
}


