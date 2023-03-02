import { Navbar } from "../components/navbar";
import { Hero } from "../components/hero";
import { Footer } from "../components/footer";
import { Resume } from "../components/resume";
import { Projects } from "../components/Projects";
import { Contact } from "../components/Contact";

export const Home = () => {
  return (
    <div>
      <div className="bg-slate-300 flex justify-center">
        <div className="xl:w-4/6">
          <Navbar />
          <section>
            <Hero />
          </section>
          <section id="projects">
            <Projects />
          </section>
          <section id="resume">
            <Resume />
          </section>
          <section id="contact">
            <Contact />
          </section>
          <Footer />
        </div>
      </div>
    </div>
  );
};
