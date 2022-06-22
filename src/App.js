import './App.css';
import Sidebar from './Components/Sidebar';
import Navbar from './Components/Navbar';
import Orders from './Components/Orders';
import TrackBoard from './Components/TrackBoard';
import Overview from './Components/Overview';
import { StateContext } from './Contexts/ContextProvider';
import { useContext } from 'react';

function App() {
  const {activeMenu} = useContext(StateContext);
  return (
    <div className='App'>
    <Sidebar />
    <div className={activeMenu ? 'dashboard-w-menu' : 'dashboard-wo-menu'}>
      <Navbar />
      <Orders />  
      <div className='bott-board'>
        <TrackBoard />
        <Overview />
      </div>
    </div>
    </div>
  );
}

export default App;
