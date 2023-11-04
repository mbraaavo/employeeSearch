import EmployeeCard from './Components/EmployeeCard';
import NavBar from './Components/NavBar';
import './index.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className='mainSpace'>
      <EmployeeCard />
      </div>
      
    </div>
  );
}

export default App;
