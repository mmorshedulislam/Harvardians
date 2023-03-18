import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";

const Gallery = () => {
  const imgs = [
    {
      img: "https://lian-ng.envytheme.com/assets/images/gallery/gallery-2.jpg",
    },
    {
      img: "https://lian-ng.envytheme.com/assets/images/gallery/gallery-3.jpg",
    },
    {
      img: "https://lian-ng.envytheme.com/assets/images/gallery/gallery-4.jpg",
    },
    {
      img: "https://lian-ng.envytheme.com/assets/images/gallery/gallery-5.jpg",
    },
    {
      img: "https://lian-ng.envytheme.com/assets/images/gallery/gallery-6.jpg",
    },
    {
      img: "https://lian-ng.envytheme.com/assets/images/gallery/gallery-7.jpg",
    },
    {
      img: "https://lian-ng.envytheme.com/assets/images/gallery/gallery-8.jpg",
    },
    {
      img: "https://lian-ng.envytheme.com/assets/images/gallery/gallery-9.jpg",
    },
  ];
  return (
    <PhotoProvider>
      <div className="max-w-7xl mx-auto p-10">
        <h2 className="text-center text-4xl font-bold my-5">Gallery</h2>
        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-10">
          {imgs.map((img, i) => (
            <PhotoView key={i} src={img?.img}>
              <img key={i} src={img?.img} />
            </PhotoView>
          ))}
        </div>
      </div>
    </PhotoProvider>
  );
};

export default Gallery;
