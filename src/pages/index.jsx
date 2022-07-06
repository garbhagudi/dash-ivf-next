import Banner from "sections/home/banner";
import OtherServices from "sections/home/other-services";
import Calculators from "sections/home/calculators";
import TeamSection from "sections/home/our-team";
import Testimonials from "sections/home/testimonials";
import WhyUs from "sections/home/why-us";
import VideoOne from "sections/home/video-one";
import CallToAction from "sections/home/subscribe-us";

export default function Home() {
  return (
    <div>
      <Banner />
      <OtherServices />
      <Calculators />
      <TeamSection />
      <Testimonials />
      <WhyUs />
      <VideoOne />
      <CallToAction />
    </div>
  );
}
