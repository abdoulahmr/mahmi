import Navbar from '../components/navbar';
import Hero from '../components/hero';
import SectionOne from './home/section-one';
import SectionTwo from './home/section-two';
import SectionThree from './home/section-three';
import SectionFour from './home/section-four';
import SectionFive from './home/section-five';
import SectionSix from './home/section-six';
import SectionSeven from './home/section-seven';
import SectionEight from './home/section-eight';
import Footer from '../components/footer';

function Home() {
    return (
        <>
            <Navbar />
            <Hero />
            <SectionOne />
            <SectionTwo />
            <SectionThree />
            <SectionFour />
            <SectionFive />
            <SectionSix />
            <SectionSeven />
            <SectionEight />
            <Footer />
        </>
    );
}

export default Home;