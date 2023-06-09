import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './pages/MainPage';
import BlogDetail from './pages/BlogDetail';
import PropertySearchTool from "./pages/PropertySearchTool";

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route index element={<MainPage />} />
          <Route path="/blog-detail/:id" element={<BlogDetail />} />
          <Route path="/property-search" element={<PropertySearchTool/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
