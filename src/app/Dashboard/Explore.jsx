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
  {
    image: "https://example.com/image4.jpg",
    title: "The Residency",
    description: "Ruins of a British Residency, a key site from 1857.",
  },
  {
    image: "https://example.com/image5.jpg",
    title: "Aminabad",
    description: "A popular shopping destination with a historical touch.",
  },
  {
    image: "https://example.com/image6.jpg",
    title: "Janeshwar Mishra Park",
    description: "One of Asia’s largest parks with lush greenery.",
  },
  {
    image: "https://example.com/image7.jpg",
    title: "Chowk",
    description: "Famous for authentic Tunday Kababi and handicrafts.",
  },
  {
    image: "https://example.com/image8.jpg",
    title: "The Memorial Park",
    description: "A grand monument dedicated to Dr. B.R. Ambedkar.",
  },
  {
    image: "https://example.com/image9.jpg",
    title: "Rumi Darwaza",
    description: "An iconic Mughal-era gateway symbolizing Lucknow.",
  },
  {
    image: "https://example.com/image10.jpg",
    title: "Dilkusha Kothi",
    description: "A beautiful 18th-century hunting lodge in ruins.",
  },
];


const ExploreSection = () => {
  return (
    <div>

    <div className="explore-container">
      <h3 style={{display: "block",flex: "none",  alignSelf: "auto", width: "100%" }}>
        Recommend Places To Visit
      </h3>

      {places.map((place, index) => (
        <NewPlaceCard
          key={index}
          image={place.image}
          title={place.title}
          description={place.description}
        />
      ))}
    </div>
    </div>
  );
};

export default ExploreSection;
