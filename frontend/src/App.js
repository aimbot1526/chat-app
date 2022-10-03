import { useCallback, useEffect, useState } from 'react';
import './App.css';
import LoginAndSignUp from './components/LognAndSignUp';
import { getHello } from './services/TestService';

function App() {
  const [data, dataSet] = useState([]);
  
  const updateState = useCallback(async () => {
    const res = await getHello();
    dataSet(res);
  }, []);
  
  useEffect(() => {
    setInterval(updateState, 2000);
    // fetchData();
  }, [updateState]);

  return (
    <>
      <h1>{data.myhope}</h1>
      {/* <LoginAndSignUp /> */}
    </>
  );
}

export default App;
// async function fetchData()  {
  //   let res = await getHello();
  //   dataSet(res);
  // }