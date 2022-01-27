
import './App.css';
import { Banner } from './components/Banner';
import { Campaigns } from './components/Campaigns';
import { Categories } from './components/Categories';
import { Favorites } from './components/Favorites';
import {Header} from './components/Header';
import { HeroSection } from './components/HeroSection';
import { MobileApp } from './components/MobileApp';

function App() {
  return (
    <div className='bg-[#fafafa]'>
      <Header></Header>
      <HeroSection></HeroSection>
      <Categories></Categories>
      <Campaigns></Campaigns>
      <Favorites></Favorites>
      <MobileApp></MobileApp>
      <Banner></Banner>
    </div>
  );
}

export default App;
