import { Route, Routes } from 'react-router-dom';
import { Header } from './components/Header/Header';
import RegisterPage from './components/Login/SignUp';
import LoginPage from './components/Login/Login';
import NewsPage from './pages/NewsPage';
import NotFound from './pages/NotFound';
import Welcome from './pages/Welcome';
import Mint from './pages/Mint/Mint';
import './App.css';

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route  path="/" element={<Welcome />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/news" element={<NewsPage />} />
        <Route path="/mint" element={<Mint />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  )
}

export default App;
