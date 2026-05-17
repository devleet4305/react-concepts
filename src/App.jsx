
import './App.css'
import user from './components/user';

const promiseData = fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json());

function App() {


  return (
    <div>
      <user>promiseData ={promiseData}</user>
    </div>
  )
}

export default App
