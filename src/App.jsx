import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Footer from './components/footer';
import Section1 from './components/section1';
import FAQ from './components/FAQ';
import Grid from './components/grid'
export default function App() {

  return (
    
     <div className='app'>
      <Navbar></Navbar>
      <Hero></Hero>
     <Section1></Section1>
      <FAQ></FAQ>
      <Footer></Footer>
     

     </div>
    
  );
}
