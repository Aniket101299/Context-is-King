import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Form1 } from './Pages/Form1';
import { Form2 } from './Pages/Form2';
import { Home } from './Pages/Home';
import { Users } from './Pages/Users';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/registration/one" element={<Form1/>}></Route>
        <Route path="/registration/two" element={<Form2/>}></Route>
        <Route path="/users" element={<Users/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
