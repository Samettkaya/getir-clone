
import './App.css';
import { Categories } from './components/Categories';
import Header from './components/Header';
import { HeroSection } from './components/HeroSection';

function App() {
  return (
    <div>
      <Header></Header>
      <HeroSection></HeroSection>
      <Categories></Categories>
    </div>
  );
}

export default App;
