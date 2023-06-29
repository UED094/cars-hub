import './App.css';
import CarList from './components/CarList';
// import Cars from './components/Cars';
import Header from './components/Header'



function App() {



  // const url = "http://127.0.0.1:8000/" + 'api/cars/';



  return (
    <div>
      <Header />
      <CarList />
    </div>
  );
}

export default App;
