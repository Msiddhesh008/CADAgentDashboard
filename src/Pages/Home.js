import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Home = () => {
    // Define state to store the fetched data
    const [data, setData] = useState([]);
    const [list, setList ] = useState("")
    const [ check, setCheck ] = useState(false)

    useEffect(() => {
      axios.get('http://localhost:3000/list')
        .then((response) => {
          console.log(response.data);
          setData(response.data);
        })
        .catch((error) => {
          console.error('Error fetching data:', error);
        });
    }, []); 


  
  const id = () => {
    const timestamp = new Date().getTime(); 
    const randomValue = Math.random().toString(36).substr(2, 5); 
    return `${timestamp}-${randomValue}`;
  };
  
  
  const generateTimestamp = () => {
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    const twelveHourFormat = hours % 12 || 12; // Convert 0 to 12 for 12 AM
  
    // const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const formattedTime = `${twelveHourFormat}:${String(minutes).padStart(2, '0')} ${ampm}`;
    const timestamp = `${day}-${month} ${formattedTime}`;
  
    return timestamp;
  }


  const handleChange = (e) => {
    setList(e.target.value);
  };



  

const handleSubmit = async (e) => {
  e.preventDefault();

  const newTaskData = {
    id: id(),
    disc: list,
    timestamp: generateTimestamp(),
    completed: check,
  };

  try {
    // Make a POST request to your Express server
    const response = await axios.post('http://localhost:3000/list', newTaskData);
    console.log(response.data); // Log the response from the server
    
    // Update the data state with the new item
    setData([...data, newTaskData]);
  } catch (error) {
    console.error(error);
  }
  setList("");
  setCheck(false);
};



  return (
    <div className='home'>
    <h1>Todos</h1>
      <form onSubmit={handleSubmit}>
        <div className="input-cnt">
        <input
          type="text"
          name="list"
          value={list}
          onChange={handleChange}
        />
        <button type='submit'>Add</button>
        </div>
      </form>

      <div className='list-cnt'>
        {data.map((ele) =>(
        <div key={ele.id} className='list'>
          <h3>{ele.timestamp}</h3>
          <h2>{ele.disc}</h2>
        </div>
      ))}
      </div>

    </div>
  )
}

export default Home

