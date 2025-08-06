import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

import { BrowserRouter } from 'react-router-dom';
import Footer from './layout/Footer';
import Header from './layout/Header';

function App() {
  return (
    <BrowserRouter>
      <Header />
     
      <Footer />
    </BrowserRouter>
  );
}

export default App;
