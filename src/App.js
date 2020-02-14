import React from 'react';

function App() {
  return (
    <div className="App">
        {Array(5000).fill(null).map((u, i) => <div>div {i}</div>)}
    </div>
  );
}

export default App;
