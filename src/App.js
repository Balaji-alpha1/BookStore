import logo from './logo.svg';
import './App.css';
import axios from 'axios'

function App() {

  useEffect(()=>{
    axios.get('https://8a8zekrutl.execute-api.ap-south-1.amazonaws.com/prod/books').then((res)=>{
      console.log(res)
    })
  },[])
  
  return (
    <div className="App">
      Testing the data
    </div>
  );
}

export default App;
