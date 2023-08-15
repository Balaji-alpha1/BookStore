import logo from './logo.svg';
import './App.css';

function App() {

  useEffect(()=>{
    fetch('https://8a8zekrutl.execute-api.ap-south-1.amazonaws.com/prod/books',{
      method: 'GET'
    }).then((res)=>{
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
