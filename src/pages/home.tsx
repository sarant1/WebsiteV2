import { Navbar } from '../components/navbar'
import { Hero } from '../components/hero'
import { Footer } from '../components/footer'
import { Projects } from '../components/projects'
import { Resume } from '../components/resume'




export const Home = () => {
    return (
        <div className="">
            <Navbar />
            <Hero />
            <Projects />
            <Resume />
            <Footer />
        </div>
    );
}