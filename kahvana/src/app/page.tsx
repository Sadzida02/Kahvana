import Image from "next/image";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Services from "./components/Services";
import WhyChooseUs from "./components/WhyChooseUs";

export default function Page() {
  return (
    <main>
      <Banner></Banner>
      <Navbar></Navbar>
      <Home></Home>
      <Services></Services>
      <WhyChooseUs></WhyChooseUs>
      

    </main>
    
  );
}
