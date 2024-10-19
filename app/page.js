import Faq from "./(components)/Faq";
import Footer from "./(components)/Footer";
import LandingPageHeader from "./(components)/LandingPageHeader";
import SecondPartLanding from "./(components)/SecondPartLanding";
import ThirdPartLanding from "./(components)/ThirdPartLanding";
export const runtime = "edge";

export default function Home() {
  return (
    <div className="bg-[url('/BgPatterns.jpg')] bg-contain  overflow-hidden">
      <div className=" relative z-10 h-screen">
        <LandingPageHeader />
      </div>
      <div className="max-w-7xl px-8 md:mx-auto">
        <SecondPartLanding />
        <ThirdPartLanding />
        <Faq />
      </div>
      <Footer />
    </div>
  );
}
