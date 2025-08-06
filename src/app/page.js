import Hero from "./components/Hero";
import Counter from "./components/Counter";
import Video from "./components/Video";
import Testimonial from "./components/Testimonial";
import Footer from "./components/Footer"
import FloatingWhatsappWrapper from './components/FloatingWhatsappWrapper'; // Import the new wrapper


export default function Home() {
  return (
    <>
<Hero/>
<Counter/>
<Video/>
<Testimonial/>
<Footer/>
<FloatingWhatsappWrapper />



    </>
  );
}
