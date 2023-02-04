import Featured from "../../components/featured/featured";
import FeaturedProperties from "../../components/featureproperties/featureproperty";
import Header from "../../components/header/header";
import Mail from "../../components/maillist/maillist";
import Footer from "../../components/footer/footer"
import Featuredtype from "../../components/featuredType/featuredtype";

const Home =()=>{
    return(
        <>
        <Header/>
        <Featured/>
        <Featuredtype/>
        {/* <FeaturedProperties/> */}
        <Mail/>
        <Footer/>
        </>
    )
    
}
export default Home;