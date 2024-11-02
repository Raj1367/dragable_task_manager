import { useEffect, useState } from 'react';
import "./App.css"
import Progressbar from './Progressbar';
import { Prev } from 'react-bootstrap/esm/PageItem';
function App() {

  const [progress, setPorgress] = useState(0)

  useEffect(() => {
    const time = setInterval(() => {
      if (progress < 100) {
        setPorgress((prev) => prev + 1)
      }
    }, 1000);

    return () => {
      clearInterval(time)
    }

  }, [progress])



  console.log(progress)

  return (
    <div className="App">
      <Progressbar progress={progress} color={"red"} />
    </div>
  );
}

export default App;
