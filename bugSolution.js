```javascript
import { useState, useEffect } from 'react';

function MyComponent() {
  const [count, setCount] = useState(0);
  const [isActive, setIsActive] = useState(true);

  useEffect(() => {
    let cleanup = () => {
      console.log('Cleanup!');
    };
    if (isActive) {
      // This effect runs after every render
      console.log('Count:', count);
      return cleanup; // Return the cleanup function
    } else {
      cleanup();
      return () => { };
    }
  }, [count, isActive]); // Only re-run the effect if 'count' changes

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
      <button onClick={()=> setIsActive(!isActive)}>Toggle Active</button>
    </div>
  );
}
export default MyComponent;
```