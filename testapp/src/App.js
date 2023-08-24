import logo from './logo.svg';
import './App.css';
import NavBar from './component/NavBar';
import HomeCarousels from './component/HomeCarousels';
import ImageCard from './component/ImageCard';
import data from './component/data';

function App() {
  return (
    <div>
      <NavBar />
      <HomeCarousels/>
 <div className='img1'>
  {data.map((item)=>{
    return <ImageCard title={item.title} imgurl={item.imgurl} desc={item.desc}/>
  }
  )}
 </div>
    </div>
  );
}

export default App;
