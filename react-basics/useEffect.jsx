import {useState, useEffect} from React;
const App = () => {
    const [count, setCount] = useState(0);
    useEffect(()=> {
        setCount(count+1);
        console.log(count) //when i console count, it will be 0 as setCount is asynchronous, it does not directly use the initial value
    },[])
}
//why is react asynchronous in case of setState?
//to avoid unnecessary re-renders. f setState were synchronous, the state would be updated immediately after each call, resulting in the state being incremented twice, leading to an incorrect final state.