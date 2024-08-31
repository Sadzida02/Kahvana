import Image from "next/image";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Services from "./components/Services";
import WhyChooseUs from "./components/WhyChooseUs";
import Services2 from "./components/Services2";
import Trusted from "./components/Trusted";
import Form from "./components/Form";
import Footer from "./components/Footer";
import Hvala from "./components/Hvala";
import Trusted2 from "./components/Trusted2";

export default function Page() {
  return (
    <main>
      <Banner></Banner>
      <Navbar></Navbar>
      <Home></Home>
      <Services></Services>
      <WhyChooseUs></WhyChooseUs>
      <Trusted></Trusted>
      <Trusted2></Trusted2>
      <Services2></Services2>
      <Form></Form>
      <Hvala></Hvala>
      <Footer></Footer>
    </main>
    
  );
}
