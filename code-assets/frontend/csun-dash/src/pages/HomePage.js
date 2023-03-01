import Header from '../components/Header'
import Footer from '../components/Footer'
import LandingPageSection from '../components/LandingPageSection';

function HomePage() {
    return (
        <div style={{ backgroundColor: "#000000", height: '100vh' }}>
            <Header></Header>
            <LandingPageSection></LandingPageSection>
            <Footer></Footer>
        </div>
    )
}

export default HomePage;