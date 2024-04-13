import * as React from "react";
import { useNavigate } from "react-router-dom";
const Image = React.lazy(() => import("../../components/utils/image/Image"));
const Typewriter = React.lazy(
  () => import("../../components/utils/typewrite/TypewriterComp")
);

import {
  NavbarRedu,
  NavTypes,
} from "../../reducers/components/Navbar/navbarRedu";
import Button from "../../components/button/Button";
const NoPageFound = () => {
  const navigate = useNavigate();
  const [stateNav, dispatchNav] = React.useReducer(NavbarRedu, {
    isMobile: false,
  });
  return (
    <>
      <div className="zcontainer">
        <div className="center">
          <div
            style={{ backgroundColor: "transparent" }}
            className="hero min-h-screen bg-base-200"
          >
            <div className="hero-content">
              <div>
                <div className="avatar">
                  {/* <Avatar
                  isBordered
                  color="secondary"
                  alt="Minha imagem linda e maravilhosa"
                  src=""
                >

                </Avatar> */}
                  <div className="w-36 rounded">
                    <Image
                      alt={'"Detetive melhor que sherlock holmes"'}
                      src="https://media.discordapp.net/attachments/1028750792640954368/1227244324358586429/image-removebg-preview.png?ex=6627b358&is=66153e58&hm=fa468cdf734e5db096fffaf2c51176cbf77134044c1199e18b4fcb69a8c7bbba&=&format=webp&quality=lossless&width=572&height=582"
                      width={58}
                      height={58}
                    />
                  </div>
                </div>

                {/* <div
                  className="badge"
                  style={{ backgroundColor: "transparent", border: "none" }}
                >
                  <div className="md-5" />
                  <div className="tooltip tooltip-right" data-tip="Brasil">
                    <Image
                      width={58}
                      height={58}
                      class={""}
                      alt="Badge do brasil"
                      src="https://media.discordapp.net/attachments/1028750792640954368/1224156004166664202/illustration-brazil-flag_53876-27017.png?ex=661c771f&is=660a021f&hm=a1925bab4e0d6f576d396e849d85b3cb98fe7c933f8c3529d8a948ba7c7a12e1&=&format=webp&quality=lossless&width=782&height=412"
                    />
                  </div>
                </div> */}
                <div>
                  <div className="m-1" />
                  <Typewriter
                    text={"🔍 Oops... Não foi possivel achar esta pagina..."}
                    typingSpeed={50}
                  />
                </div>

                {/* <p style={{ color: "black" }} className="py-6">
                  <a>
                    <div className="divider" />O meu nome é{" "}
                
                    <div className="divider"></div>
                  </a>
                </p> */}
                <div>
                  {/* <Avatar
                  isBordered
                  color="secondary"
                  alt="Minha imagem linda e maravilhosa"
                  src=""
                >

                </Avatar> */}
                  <div>
                    <div style={{ marginTop: "30px" }}>
                      <div
                        className={
                          stateNav.isMobile
                            ? "flex-col lg:flex-row justify-center"
                            : "flex flex-wrap justify-center"
                        }
                      >
                        <Button to={-1} text={"Voltar"} />
                      </div>
                    </div>
                  </div>
                </div>
                {/* <button className="btn btn-primary">Get Started</button> */}
              </div>
            </div>
            <div className="divider"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NoPageFound;
