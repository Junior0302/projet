// import Head from "next/head";
// import Banner from "@/components/Banner/Banner";
// import ContactOne from "@/components/Contact/ContactOne";
// import Roadmap from "@/components/Roadmap/Roadmap";
// import Sales from "@/components/Sales/Sales";
// import TeamOne from "@/components/Team/TeamOne";
// import TopPartners from "@/components/TopPartners/TopPartners";
// import WhitePaper from "@/components/WhitePaper/WhitePaper";
// import WhoWeAre from "@/components/WhoWeAre/WhoWeAre";
// import WhyChooseUs from "@/components/WhyChooseUs/WhyChooseUs";
// import LayoutOne from "@/layouts/LayoutOne";

// export default function Home() {
//   return (
//     <>
//       <Head>
//         <title>Bigtech - ICO & Crypto Landing Page Template</title>
//         <meta name="description" content="" />
//       </Head>

//       <LayoutOne>
//         <main className="fix">
//           <Banner />
//           <WhoWeAre />

//           <TopPartners />
//           <WhyChooseUs />
//           <Sales />

//           <div className="area-bg">
//             <Roadmap />
//             <WhitePaper />
//           </div>

//           <TeamOne />
//           <ContactOne />
//         </main>
//       </LayoutOne>
//     </>
//   );
// }


import Head from "next/head";
import LayoutTwo from "@/layouts/LayoutTwo";
import BannerTwo from "@/components/Banner/BannerTwo";
import CountDownTwo from "@/components/CountDown/CountDownTwo";
import About from "@/components/About/About";
import WhyChooseUsTwo from "@/components/WhyChooseUs/WhyChooseUsTwo";
import CounterArea from "@/components/CounterArea/CounterArea";
import RoadmapTwo from "@/components/Roadmap/RoadmapTwo";
import TeamTwo from "@/components/Team/TeamTwo";
import DownloadArea from "@/components/DownloadArea/DownloadArea";
import Faq from "@/components/Faq/Faq";
import ContactTwo from "@/components/Contact/ContactTwo";
import Newsletter from "@/components/Newsletter/Newsletter";

export default function HomeTwo() {
  return (
    <>
      <Head>
        <title>Bigtech - ICO & Crypto Landing Page Template</title>
        <meta name="description" content="" />
      </Head>

      <LayoutTwo>
        <main>
          <BannerTwo />
          <CountDownTwo />
          <About />
          <WhyChooseUsTwo />
          <CounterArea />
          <RoadmapTwo />
          <TeamTwo />
          <DownloadArea />
          <Faq />
          <ContactTwo />
          <Newsletter />
        </main>
      </LayoutTwo>
    </>
  );
}
