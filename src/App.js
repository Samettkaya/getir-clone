
import './App.css';
import { Campaigns } from './components/Campaigns';
import { Categories } from './components/Categories';
import Header from './components/Header';
import { HeroSection } from './components/HeroSection';

function App() {
  return (
    <div className='bg-[#fafafa]'>
      <Header></Header>
      <HeroSection></HeroSection>
      <Categories></Categories>
      <Campaigns></Campaigns>
    </div>
  );
}

export default App;
