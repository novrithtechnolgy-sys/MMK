import Navbar from "../components/Navbar";
import AboutUs from "../components/About/About";
import WorkBlendSection from "../components/About/WorkBlendSection";
import MissionSection from "../components/About/MissionSection";
import WhyClientsTrustUs from "../components/About/WhyClientsTrustUs";

export default function About() {
    return (
        <>
            <Navbar />
            <AboutUs />
            <WorkBlendSection />
            <MissionSection/>
            <WhyClientsTrustUs/>
        </>
    );
}