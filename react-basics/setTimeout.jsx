import { useState, useEffect } from 'react';

function App() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount((prevCount) => {
      const newCount = prevCount + 1;
      setTimeout(() => {
        alert(newCount);
      }, 3000);
      return newCount;
    });
  };

  return (
    <div>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
}

export default App;
/*So, the sequence of events and outputs is:

Click the button.
The count state is scheduled to update to 1.
After 3 seconds, the alert shows 0 because that was the value of count when setTimeout was called.
The first alert (scheduled by the first click) will still display 0 after 3 seconds.
The second alert (scheduled by the second click) will display 1 after 3 seconds.*/