import { Routes, Route } from 'react-router-dom';

import Home from './routes/home/home';
import Navigation from './routes/navigation/navigation';
import Profile from './routes/profile/profile';

import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="/profile" element={<Profile />} />
      </Route>
    </Routes>
  );
}
export default App;
