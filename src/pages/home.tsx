import { Navbar } from '../components/navbar'
import { Hero } from '../components/hero'
import { Certs } from '../components/certifications'
import { Footer } from '../components/footer'



export const Home = () => {
    return (
        <div>
            <Navbar />
            <Hero />
            <Certs />
            <Footer />
        </div>
    );
}