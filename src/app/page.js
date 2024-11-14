import Image from "next/image";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import NavButtons from "./components/NavButtons";
import Menu from "./components/Menu";

export default function Home() {
  return (
    <> 
    <div><Navbar/></div>
   <div><Hero/></div>
   <div><NavButtons/></div>
   <div><Menu/></div>
   </>
   
  );
}
