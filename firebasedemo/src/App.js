import logo from './logo.svg';
import './App.css';
import Fireauth from './components/Fireauth';
import { auth } from './firebase';
import Firebase from './components/Firebase';
import Firestorage from './components/Firestorage';

function App() {
  return (
    <>
      <Fireauth/>
      <Firestorage/>
    </>
  );
}

export default App;
