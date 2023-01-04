import logo from './logo.svg';
import './App.css';
import StarRating from './components/StarRating';

function App() {
  return (
    <div className="App">
      <h3>Full Stack Code Interview</h3>
      <StarRating of={5}/>
    </div>
  );
}

export default App;
