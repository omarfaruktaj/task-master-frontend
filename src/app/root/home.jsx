import AboutUs from "../../components/home/about-us";
import Banner from "../../components/home/banner";
import FAQs from "../../components/home/faqs";
import Features from "../../components/home/features";
import Testimonials from "../../components/home/testimonials";
import Works from "../../components/home/works";

export default function Home() {
  return (
    <div>
      <Banner />
      <Features />
      <Works />
      <Testimonials />
      <AboutUs />
      <FAQs />
    </div>
  );
}
