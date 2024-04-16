import "./styling/left.css";
import { About } from "./About.js";
import { SocialMedia } from "./SocialMedia.js";

let Media=[
  { link: "https://linkedin.com", iconName: "language",img:"https://icons8.com/icon/32292/instagram" },
  { link: "https://google.com", iconName: "menu" ,img:"https://icons8.com/icon/32292/instagram"},
  { link: "https://linkedin.com", iconName: "language" ,img:"https://icons8.com/icon/32292/instagram"},
  { link: "https://google.com", iconName: "menu" ,img:"https://icons8.com/icon/32292/instagram"},
  { link: "https://google.com", iconName: "menu",img:"https://icons8.com/icon/32292/instagram" },
]
let objDetails = {
  name: "Brittany Chiang",
  position: "Senior Frontend Engineer",
  description:
    "I build pixel-perfect, engaging, and accessible digital experiences.",
};
export const LeftPage = () => {
  return (
    <>
      <div className="left-con">
        <About name={objDetails.name} position={objDetails.position} description={objDetails.description}/>

        <SocialMedia media={Media} />
      </div>
    </>
  );
};
