
import './App.css';
import Navbar from './components/navbar';
import QuotePage from "./components/quotePage/quote";
import Footer from "./components/footer";


function App() {
  return (
    <div className='App'>
      <Navbar></Navbar>
      <QuotePage></QuotePage>
      <Footer></Footer>
      </div>   
  );
}

export default App;
