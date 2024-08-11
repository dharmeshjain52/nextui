import Cards from "./Components/Cards";
import { HoverCards } from "./Components/HoverCards";
import MainDisplay from "./Components/MainDisplay";
import { MovingCards } from "./Components/MovingCards";
import { StickyScrollRevealDemo } from "./Components/StickyScrollReveal";
import {Spotlight} from "./Components/ui/Spotlight";
import { WavyToolTip } from "./Components/WavyToolTip";
import Footer from './Components/Footer'
export default function Home() {
  return (
    <main className="min-h-screen bg-black antialiased">
     <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      <MainDisplay/>
      <Cards/>
      <StickyScrollRevealDemo/>
      <MovingCards/>
      <HoverCards/>
      <WavyToolTip/>
      <Footer/>
    </main>  
  );
}
