import { 
  MainBox,
  AbsoluteBackground, 
  LineStaticNew
} from "./styles";

import { Wrapper } from "../../globalStyles";
import HeaderMain from "../../components/Header/HeaderMain";
import Heading from "./Components/Heading/Heading";
import Lines from "../../components/Lines/Lines";
import Welcome from "./Components/Welcome/Welcome";
import WeDoing from "./Components/WeDoing/WeDoing";
import Tariffs from "./Components/Tariffs/Tariffs";
import Team from "./Components/Team/Team";
import LinkBanner from "./Components/LinkBanner/LinkBanner";
import BlogForMain from "../../components/BlogForMain/BlogForMain";
import Trust from "./Components/Trust/Trust";
import ApplicationMenu from "./Components/ApplicationMenu/ApplicationMenu";
import Footer from "../../components/Footer/Footer";


// import CasesForMain from "../../components/CasesForMain/CasesForMain";
// import Education from "./Components/Education/Education";
// import Services from "../../components/Services/Services";
// import Internship from "./Components/Internship/Internship";

import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const MainPage = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    if (pathname === "/contacts") {
      document.getElementById("footer")?.scrollIntoView({ behavior: "smooth" });
    }
  }, [pathname]);

  return (
    <MainBox>
      
      <HeaderMain />
       
      {/* Статичная линия прозапас: */}
      {/* <LineStaticNew />   */}   
   
       <AbsoluteBackground>  
        <Lines/>    {/*адаптив анимированной линии сделан с костылями - куча медиаправил*/}
      </AbsoluteBackground>  
   
      <Wrapper>
        <Heading />
        <Welcome />
        <WeDoing /> 
        <Tariffs />
        {/*<Services />*/}
        {/*<CasesForMain />*/}
        <Team />
        <LinkBanner />
        <BlogForMain showText={false} />
        {/* <Education /> */}
        {/*<Internship /> */}
        <Trust />
        <ApplicationMenu />
      </Wrapper>
      <Footer />
    </MainBox>
  );
};

export default MainPage;
