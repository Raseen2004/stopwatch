import { useEffect, useState } from 'react';
import Footer from './Footer';

function App() {

  const [time, setTime] = useState(0); 
  const [timerOn, setTimeOn] = useState(false)

  useEffect(() => {
    let interval = null;

    if(timerOn) {
      interval = setInterval(() => {
        setTime(prevTime => prevTime + 10)
      }, 10)
    }
    else {
      clearInterval(interval)
    }

    return () => clearInterval(interval)

  }, [timerOn])

  return (
    <div className="text-center flex flex-col items-center justify-center h-screen">
      <div className="bg-black p-8 rounded-3xl w-[320px]">
        <h1 className="text-3xl font-semibold mb-4 text-yellow-500">Stopwatch</h1>
        <div className="text-3xl text-white font-semibold mt-5">
          <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
          <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}:</span>
          <span>{("0" + ((time / 10) % 100)).slice(-2)}</span>
        </div>
        <div className="mt-3 text-center font-medium">
          {/* Start btn */}
          {!timerOn && time === 0 && (
            <button className='bg-blue-700 hover:bg-blue-800 hover:scale-105 duration-300 text-white m-3 px-6 py-2 rounded-md' onClick={() => setTimeOn(true)}>Start</button>
          )}
          {/* stop btn */}
          {timerOn && (
          <button className='bg-blue-700 hover:bg-blue-800 text-white m-3 px-6 py-2 rounded-md hover:scale-105 duration-300' onClick={() => setTimeOn(false)}>Stop</button>
          )}
          {/* resume btn */}
          {!timerOn && time !== 0 && (
            <button className='bg-blue-700 hover:bg-blue-800 text-white m-3 px-6 py-2 rounded-md hover:scale-105 duration-300' onClick={() => setTimeOn(true)}>Resume</button>
          )}
          {/* reset btn */}
          {!timerOn && time > 0 && (
            <button className='bg-blue-700 hover:bg-blue-800 text-white m-3 px-6 py-2 rounded-md hover:scale-105 duration-300' onClick={() => setTime(0)}>Reset</button>
          )}
        </div>
      </div>
      <footer>
        <Footer />
      </footer>
    </div>
    
  );
}

export default App;
