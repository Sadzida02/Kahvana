import Image from "next/image";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";

export default function Page() {
  return (
    <main>
      <Banner></Banner>
      <Navbar></Navbar>
      <Home></Home>
      

    </main>
    
  );
}
