import LandingPageHeader from "./(components)/LandingPageHeader";
import SecondPartLanding from "./(components)/SecondPartLanding";

export default function Home() {
  return (
    <div className="bg-[url('/BgPatterns.jpg')] bg-contain  overflow-hidden">
      <div className=" relative z-10 h-screen">
        <LandingPageHeader />
      </div>
      <SecondPartLanding />
    </div>
  );
}
