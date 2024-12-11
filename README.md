# React 19 useEffect Cleanup Issue

This repository demonstrates a problem with the `useEffect` cleanup function in React 19.  The expected behavior is that the cleanup function should be called when the component unmounts or when the effect is replaced with a new one. However, in this case, the cleanup function's `console.log` statement is not being executed.

## Steps to Reproduce

1. Clone this repository.
2. Run `npm install`.
3. Run `npm start`.
4. Observe the console output.  Click the button multiple times and then unmount the component (by navigating away or refreshing).  The expected 'Cleanup!' message will not appear.

## Solution

The solution involves ensuring that the dependency array for the useEffect hook is correctly defined and that there are no other issues interfering with the cleanup function's execution.  See `bugSolution.js` for a possible fix.  This issue might be related to specific scenarios or interactions with other parts of the app and may need further investigation.