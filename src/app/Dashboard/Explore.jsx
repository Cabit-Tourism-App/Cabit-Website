import React from "react";
import NewPlaceCard from "../../components/Dashboard/explorecard";

const places = [
  {
    image: "https://example.com/image1.jpg",
    title: "Hazratganj",
    description: "A bustling market in the heart of Lucknow.",
  },
  {
    image: "https://example.com/image2.jpg",
    title: "Bada Imambada",
    description: "A historical marvel known for its Bhool Bhulaiya.",
  },
  {
    image: "https://example.com/image3.jpg",
    title: "Chota Imambada",
    description: "A stunning monument with Persian influence.",
  },
];

const ExploreSection = () => {
  return (
    <div className="explore-container">
      {places.map((place, index) => (
        <NewPlaceCard
          key={index}
          image={place.image}
          title={place.title}
          description={place.description}
        />
      ))}
    </div>
  );
};

export default ExploreSection;
