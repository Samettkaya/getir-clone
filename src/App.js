
import './App.css';
import { Banner } from './components/Banner';
import { Campaigns } from './components/Campaigns';
import { Categories } from './components/Categories';
import { Favorites } from './components/Favorites';
import { Footer } from './components/Footer';
import {Header} from './components/Header';
import { HeroSection } from './components/HeroSection';
import { MobileApp } from './components/MobileApp';
import {useWindowWidth} from '@react-hook/window-size'

function App() {
  const windowWidth = useWindowWidth()
  return (
    <div className='bg-[#fafafa]'>
      <Header></Header>
     { windowWidth < 768 && <Campaigns/>}
      <HeroSection></HeroSection>
      <Categories></Categories>
      {windowWidth>=768 && <Campaigns/>}
      <Favorites></Favorites>
      <MobileApp></MobileApp>
      <Banner></Banner>
      <Footer></Footer>
    </div>
  );
}

export default App;
