import { Navbar } from "../components/navbar";
import { Hero } from "../components/hero";
import { Footer } from "../components/footer";
import { Resume } from "../components/resume";
import { Projects } from "../components/Projects";

export const Home = () => {
  return (
    <div>
      <div className="bg-slate-300 flex justify-center">
        <div className="xl:w-4/6">
          <Navbar />
          <Hero />
          <Projects />
          <Resume />
          <Footer />
        </div>
      </div>
    </div>
  );
};
