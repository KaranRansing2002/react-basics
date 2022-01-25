import logo from './logo.svg';
import './App.css';
import Us from './components/Us'
import Us1 from './components/Us1';
import Us2 from './components/Us2';
import Us3 from './components/Us3';
import context from './components/context';
import {useState} from 'react';
import Parent1 from './components/Parent1';
import Parent2 from './components/Parent2';
import Parent3 from './components/Parent3';

function App() {
  const [theme,setTheme]=useState(false);
  return (
    <context.Provider value={theme}>
      <button onClick={()=>setTheme(!theme)}>Change Theme</button>
      <Parent1/>
      <Parent2/>
      <Parent3/>
    </context.Provider>
  );
}

export default App;
