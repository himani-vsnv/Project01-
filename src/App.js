import Header from './component/Hearder/Header';
import AllRoute from './component/Routing/AllRout';
import SliderPage from './component/Slider/Slider';
import "./App.css";
import { Box } from '@mui/material';
import ElectronicCard from './component/Cards/Electronics';
import FashionCard from './component/Cards/Fashion/Fashion';

function App() {
  return (
    <Box 
    // sx={{width:"100vw", maxWidth:"100vw", paddingX:"24px"}}
    >
      <AllRoute/>
      <Header/>
      <SliderPage/>
      <ElectronicCard/>
      <FashionCard/>
    </Box>
  );
}

export default App;
