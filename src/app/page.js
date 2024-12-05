import Image from "next/image";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div >
      <nav>
        <Navbar />
      </nav>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
