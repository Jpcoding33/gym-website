import image1 from "/img/gallery/gallery1.png";
import image2 from "/img/gallery/gallery2.png";
import image3 from "/img/gallery/gallery3.png";
import image4 from "/img/gallery/gallery4.png";
import image5 from "/img/gallery/gallery5.png";
import image6 from "/img/gallery/gallery6.png";
import { GallaryElement } from "./elements/GallaryElement";

export const GallerySection = () => {
  const galleryItems = [
    {
      image: image1,
      colClass: "xl:col-span-4",
      tag: "Muscle Gaining",
    },
    {
      image: image2,
      colClass: "xl:col-span-4",
      tag: "Weight Training",
    },
    {
      image: image3,
      colClass: "xl:col-span-4",
      tag: "Cardio",
    },
    {
      image: image4,
      colClass: "xl:col-span-3",
      tag: "Fat Loss",
    },
    {
      image: image5,
      colClass: "xl:col-span-3",
      tag: "Zumba",
    },
    {
      image: image6,
      colClass: "xl:col-span-6",
      tag: "Calisthenics",
    },
  ];

  return (
    <div className="grid grid-cols-12 gap-5 md:gap-8 xl:gap-8 py-12 md:py-20 px-5 lg:px-20 bg-black">
      {galleryItems.map((item, index) => (
        <GallaryElement key={index} item={item} />
      ))}
    </div>
  );
};
