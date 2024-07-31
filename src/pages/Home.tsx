import React from "react";
import { SliderLayout } from "../components/SliderLayout";
import { TrainingCategories } from "../components/TrainingCategories";
import { TeamSection } from "../components/TeamSection";
import { GallerySection } from "../components/GallerySection";
import { VideoSection } from "../components/VideoSection";

export const Home = () => {
  return (
    <React.Fragment>
      {/* single slider layout */}
      <SliderLayout />
      {/* training categories */}
      <TrainingCategories />
      {/* team section */}
      <TeamSection />
      {/* gallery section */}
      <GallerySection />
      <VideoSection />
    </React.Fragment>
  );
};
