import { Navbar } from "../components/navbar";
import { Hero } from "../components/hero";
import { Footer } from "../components/footer";
import { Resume } from "../components/resume";
import { Projects } from "../components/Projects";

export const Home = () => {
  return (
    <div className="">
      <div className="bg-slate-600">
        <Navbar />
      </div>
      <Hero />
      <Projects />
      <Resume />
      <Footer />
    </div>
  );
};
