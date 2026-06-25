import Header from "../_components/header";
import HeroSection from "../_components/hero";
import Search from "../_components/search"
import Services from "../_components/services";
import Doctor from "../_components/doctor";
import Footer from "../_components/footer";
function HomePage(){
    return(
        <>
        <Header/>
     <HeroSection/>
     <Search/>
     <Doctor/>
    <Services/>
    <Footer/>
        </>
    )
}
export default  HomePage