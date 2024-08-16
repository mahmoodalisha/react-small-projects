//useState hook is used to manage the state and update and re render
//useEffect hook is used during component mounting when life cycle of that component changes
//fetching data from API using useEffect hook
//When you use useState, it creates a state variable and a function to update that variable. Whenever you call the update function, React knows that the component's state has changed and re-renders the component to reflect that change.
import React, { useEffect, useState } from 'react';
const MyComponent = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.example.com/data');
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error('Error fetching data:', error);
        // Handle error state if needed
      }
    };
    fetchData(); //By calling fetchData() inside useEffect, you trigger the data fetching process when the component mounts.
  }, []); // Empty dependency array ensures this runs only once, after initial render

  return <div>{data ? JSON.stringify(data) : 'Loading...'}</div>;
};
export default MyComponent;






//useEffect hook for setting up timers
import React, { useEffect, useState } from 'react';
const MyComponent2 = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCount(prevCount => prevCount + 1);
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []); // Empty dependency array ensures this runs only once, after initial render
    return <div>Count: {count}</div>;
};




//useEffect hook for manual DOM manipulation
import React, { useEffect, useRef } from 'react';
const MyComponent3 = () => {
  const divRef = useRef(null);

  useEffect(() => {
    if (divRef.current) {
      divRef.current.style.backgroundColor = 'yellow';
    }
  }, []); // Empty dependency array ensures this runs only once, after initial render
    return <div ref={divRef}>This div has a yellow background.</div>;
};




//useState hook
const MyComponent4 = () => {
  const [count,setCount] = useState(0)
  useEffect(()=>{
    console.log("Count got updated")
  }, [count]);  //jab bhi useState ka count chalega, useEffect chalega, useEffect ke dependency array me count hai
}
return (
  <button onClick={()=>{setCount(count+1)}}>update</button>
)


//another use of useState and useEffect hook
const MyComponent5 = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(()=> {
    console.log("app component is mounting")
  }, [])  
}
return(
  {isVisible ? <MyComponent5 /> : <></>}   //if it is visible, render the component or else do not render anything
  <button onClick={() => {}}></button>
)
