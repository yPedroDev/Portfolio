import * as React from "react";
import { useNavigate } from "react-router-dom";
const Image = React.lazy(() => import("../../components/utils/image/Image"));

const NoPageFound = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="center">
        <div className="flex-col lg:flex-row justify-center">
          <Image
            width={68}
            height={68}
            src={
              "https://media.discordapp.net/attachments/1028750792640954368/1227244324358586429/image-removebg-preview.png?ex=6627b358&is=66153e58&hm=fa468cdf734e5db096fffaf2c51176cbf77134044c1199e18b4fcb69a8c7bbba&=&format=webp&quality=lossless&width=572&height=582"
            }
          />
          <h1>🔎 Oops... não foi encontrado.</h1>
          <button className="btn" onClick={() => navigate(-1)}>
            Back
          </button>
        </div>
      </div>
    </>
  );
};

export default NoPageFound;
