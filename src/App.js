import './App.css';
import Nakama from './components/Nakama'

function App() {
  return (
    <div className="App">
      <div className='banner-container'>
        <img className='banner-image' src={require("./images/One_Piece_Logo.svg.png")}/>      
      </div>
      <Nakama />
    </div>
  );
}

export default App;