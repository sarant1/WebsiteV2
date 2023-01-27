import { Navbar } from '../components/navbar';
import { Footer } from '../components/footer';

export const Contactme = () => {
    return (
        <div>
            <div className="bg-redrock bg-cover h-screen text-center">
                <Navbar />
                <div className="Container border-black border-solid border-2 m-4 mt-24 md:inline-block rounded-lg shadow-xl md:p-10 text-center">
                    <h1 className="flex justify-center p-3 mt-2 text-4xl font-bold">Get In Touch</h1>
                    <div className="flex justify-center flex-col items-center mt-4">
                        <h3 className="mb-4">Linkedin: https://www.linkedin.com/in/samuel-arant-1999sl/</h3>
                        <h3 className="mb-4">Phone: 813-732-7281</h3>
                        <h3 className="mb-4">Email: samuel.arant10@gmail.com</h3>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}