import './App.css';
// import Cars from './components/Cars';
import { useState, useEffect } from 'react'
import Header from './components/Header'



function App() {

  const [cars, setCars] = useState([])


  useEffect(() => {
    const getCars = async () => {
      const carsFromServer = await fetchCars()
      setCars(carsFromServer)
    }

    getCars()
  }, [])

  

  // Fetch Tasks
  const fetchCars = async () => {
    const res = await fetch('/api/cars')
    .then(response => response.json())
    .then(data => {
      console.log(data);
       // Do something with the received data
    })
    .catch(error => {
      console.error('Error:', error);
    });

    const data = res.data;
    return data;
  }

  return (
    <div>
      <Header />
      {console.log(cars)}
      {/* <Cars cars={cars}/> */}
    </div>
  );
}

export default App;
