import React from "react";
import { HeadingLayout } from "../components/HeadingLayout";
import { GallerySection } from "../components/GallerySection";

export const Gallery = () => {
  return (
    <React.Fragment>
      {/* heading layout */}
      <HeadingLayout text={"GALLERY"} />
      {/* gallery section */}
      <GallerySection />
    </React.Fragment>
  );
};
