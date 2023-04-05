
import {Routes,Route} from 'react-router-dom';
import { Horizontalbar } from './Horizontalbar';
import './App.css'
import { Verticalbar } from './Verticalbar';
import { Dashboard } from './Dashboard';
import { Student } from './Student';
import { Teacher } from './Teacher';

export default function App() {
  return (
<div className="App">
      
       <div className='a'><Horizontalbar/>
       <div className='mainvr'>
      <Verticalbar/>
      <Routes>
      <Route path='/' element={ <Dashboard/> }></Route>
      <Route path='/student' element={<Student/> }></Route>
      <Route path='/teacher' element={<Teacher/> }></Route>
      </Routes>
    </div>
           <br/>
    </div> 
</div>
  )
}


