import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Home from './components/Home';
import Header from './components/Header';
import Nav from './components/Nav';
import QR from './components/QR';
import AppRoutes from './routes';
import SignIn from './components/SignIn';
import './App.css'

function App() {
  const [ lightTheme, setLightTheme ] = useState(true);
  const [ loggedIn, setLoggedIn ] = useState(false);

  const students = [
    {
            id: 1,
            name: 'Yaminah Alanis',
            active: true
    },
    {
            id: 2,
            name: 'Joseph Fair',
            active: true
    },
    {
            id: 3,
            name: 'Ravyn Glasper',
            active: true
    },
    {
            id: 4,
            name: 'Susan Goyack',
            active: true
    },
    {
            id: 5,
            name: 'Christopher Hill',
            active: true
    },
    {
            id: 6,
            name: 'Tonysha Holliman',
            active: true
    },
    {
            id: 7,
            name: 'Sidney Hood',
            active: false
    },
    {
            id: 8,
            name: 'Amir Khalil',
            active: true
    },
    {
            id: 9,
            name: 'Paula Winterfeld',
            active: true
    },
    {
            id: 10,
            name: 'Katie Magnuson',
            active: true
    }, 
    {
            id: 11,
            name: 'Marc Morales',
            active: true
    },
    {
            id: 12,
            name: 'Montel Paige',
            active: true
    }
];

  return (
    <>
      <Header>
        <Nav loggedIn={loggedIn} lightTheme={lightTheme} setLightTheme={setLightTheme} />
      </Header>
      {/* <AppRoutes /> */}
      <SignIn />
    </>
  )
}

export default App
