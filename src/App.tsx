import HeroImage from "./components/HeroImage";
import Invitation from "./components/Invitation";
import SecondaryImage from "./components/SecondaryImage";
import ImageAccordion from "./components/ImageAccordion";
import EventTimeline from "./components/EventTimeline";
import MapEmbed from "./components/MapEmbed";
import SharePictures from "./components/SharePictures";
import Footer from "./components/Footer";
import Countdown from "./components/Countdown";
import JoinUs from "./components/JoinUs";
import Gallery from "./components/Gallery";
import { Toaster } from "sonner";

function App() {
  return(
    <div className="w-full flex justify-center">
    <div className="lg:w-1/2 p-3 overflow-hidden">
      <HeroImage />
      <Invitation />
      <SecondaryImage />
      <ImageAccordion />
      <EventTimeline />
      <MapEmbed />
      <Countdown targetDate="2026-02-14T13:00:00" />
      <JoinUs />
      <SharePictures />
      <Gallery />
      <Footer />
    </div>
    <Toaster />
    </div>
  )
}

export default App
