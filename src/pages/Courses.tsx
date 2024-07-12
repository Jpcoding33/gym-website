import React from "react";
import { HeadingLayout } from "../components/HeadingLayout";
import { TrainingCategories } from "../components/TrainingCategories";
import { TeamSection } from "../components/TeamSection";

export const Courses = () => {
  return (
    <React.Fragment>
      {/* heading layout */}
      <HeadingLayout text={"COURSES"} />
      {/* training categories */}
      <TrainingCategories />
      {/* team section */}
      <TeamSection />
    </React.Fragment>
  );
};
