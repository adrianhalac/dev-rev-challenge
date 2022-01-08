import './App.css';
import axios from 'axios';
import BubbleGraph from './components/BubbleGraph';
import { useState, useEffect } from 'react';

function App() {
  const [data, setData] = useState(null);

  // useEffect fetches data on first component mount
  useEffect(() => {
    axios
      .get(`https://mocki.io/v1/18936d28-2f79-4840-b146-5622e8ad1e77`)
      .then((res) => setData(res.data))
      .catch((err) => setData('ERROR'));
  }, []);

  if (!data) return <div className="Loading">Loading data...</div>; // show loading while fecthing the data

  if (data === 'ERROR')
    return <div className="Loading">Error loading data.</div>; // show error if data fetch error

  return (
    <div className="App">
      <BubbleGraph // Bubble graph component
        data={data}
        yName="salary" // you can specify which data points are to be plotted
        xName="compratio" // I chose headcount as the bubble size (z-axis)
        zName="headcount" // allows to work with any 3 dimensional data set
        xPrecision={20} // you can pick number of axes ticks
        yPrecision={10}
        initXScale={2} // you can pick axes scaling
        initYScale={2}
        scaleButtons={true} // you can chose if you want axis scaling buttons
      />
    </div>
  );
}

export default App;
