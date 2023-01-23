import React from 'react';
import Faqs from '../reausables/faqs';
import Footer from '../reausables/footer';
import NavigationBar from '../reausables/navbar';
import BannerSection from './banner/banner';
import DownloadSection from './download/downloads';
import EnjoySection from './enjoy/enjoy';
import KidsSection from './kids/kids';
import WatchSection from './watch/watch';

function HomePage() {
  return (
    <>
      <BannerSection />
      <EnjoySection />
      <DownloadSection />
      <WatchSection />
      <KidsSection />
      <Faqs />
      <Footer />
    </>
  );
}

export default HomePage;
