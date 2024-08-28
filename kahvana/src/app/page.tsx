import Image from "next/image";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Services from "./components/Services";
import Trusted from "./components/Trusted";
import Form from "./components/Form";
import Footer from "./components/Footer";

export default function Page() {
  return (
    <main>
      <Banner></Banner>
      <Navbar></Navbar>
      <Home></Home>
      <Services></Services>
      <Trusted></Trusted>
      <Form></Form>
      <Footer></Footer>
      

    </main>
    
  );
}
