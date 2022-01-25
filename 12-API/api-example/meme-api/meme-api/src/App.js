import logo from './logo.svg';
import './App.css';
import memeCard from '../components/memeCard'


function App() {

    const [memes, setMemes] = useState([]);


    useEffect(() => {
      fetch('https://api.imgflip.com/get_memes')
      .then(res => res.json())
      .then(res => setMemes(res.messages))
    }, [])

  return (
    <div className="App">
      {memes.map(meme => <memeCard key={meme} meme={meme}/>)}
    </div>
  );

  }
export default App;
