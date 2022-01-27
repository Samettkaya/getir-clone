
import './App.css';
import { Campaigns } from './components/Campaigns';
import { Categories } from './components/Categories';
import { Favorites } from './components/Favorites';
import {Header} from './components/Header';
import { HeroSection } from './components/HeroSection';

function App() {
  return (
    <div className='bg-[#fafafa]'>
      <Header></Header>
      <HeroSection></HeroSection>
      <Categories></Categories>
      <Campaigns></Campaigns>
      <Favorites></Favorites>
    </div>
  );
}

export default App;
