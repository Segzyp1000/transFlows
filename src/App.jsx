import Navbar from "./component/Navbar";
import Showcase from "./component/Showcase";
import Service from "./component/Service";
import Delivery from "./component/Delivery";
import Transportation from "./component/Transportation";
import Testimonial from "./component/Testimonial";
import Why from "./component/Why";
import Team from "./component/Team";
import Contact from "./component/Contact";
import News from "./component/News";
import Footer from "./component/Footer";

export default function App() {
  return (
    <div>
      <Navbar />
      <Showcase />
      <Service />
      <Delivery />
      <Transportation />
      <Testimonial />
      <Why />
      <Team />
      <Contact />
      <News />
      <Footer />
    </div>
  );
}
