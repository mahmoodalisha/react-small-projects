//to render it on the screen we are using useState hook
//jab ye app component mount hoga, tab posts request fetch hoga, uske liye useEffect hook use hoga
import {useState, useEffect} from 'react'
import {getPosts} from './fetching-data'
function App() {
    useState[DataTransfer,setData] = useState(null)

    useEffect(()=>{
        getPosts().then((posts)=>setData(posts))  //fetching data from API using .then promise and rendering on the screen
    },[])
    return (
        <div>
            {data ? data.map((e)=> <li>{e}</li> ) : <p>No data found</p>}   
        </div>
    ) //if data is there then render it using loop if not then no data is found
}
export default App;

