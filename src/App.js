import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './component/Navbar';
import Home from './component/Home';
import Popup from './component/popup';
import { loadDataThunk } from './redux/Data_Reducer';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadDataThunk());
  }, []);

  const [theme, setTheme] = useState('default');
  const [name, setName] = useState({ name: null });

  const handleName = (e) => {
    if (e.target.hasAttribute('alt')) {
      setName({ name: e.target.alt });
    }
  };

  const handleTheme = () => {
    if (theme === 'default') {
      setTheme('white');
    } else {
      setTheme('default');
    }
  };

  return (
    <>
      <BrowserRouter>
        <Navbar theme={theme} themeSwitch={handleTheme} />
        <Routes>
          <Route path="/" element={<Home theme={theme} handleName={handleName} />} />
          <Route path="/:name" element={<Popup name={name.name} theme={theme} />} />
        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;
