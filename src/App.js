import { Routes, Route } from 'react-router-dom';
import './App.css';
import Chart from './Components/Dashboard.js/Chart';
import Intensity from './Components/Dashboard.js/Intensity';
import LikeHood from './Components/Dashboard.js/LikeHood';
import Source from './Components/Dashboard.js/Source';

function App() {
  return (
    <div >
   
     <Routes>
     <Route path='/' element={<Chart></Chart>}>
          <Route index element={<Intensity></Intensity>}></Route>
          <Route path='likeHood' element={<LikeHood></LikeHood>}></Route>
          <Route path='source' element={<Source></Source>}></Route>
     </Route>
     </Routes>
    </div>
  );
}

export default App;
