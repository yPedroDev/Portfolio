import React from "react";
import styled from "styled-components";

const Button = React.lazy(() => import("../../components/button/Button"));
const Typewriter = React.lazy(
  () => import("../../components/utils/typewrite/TypewriterComp")
);

const Image = React.lazy(() => import("../../components/utils/image/Image"));
import { NavbarRedu, NavTypes } from "../../reducers/components/Navbar/navbarRedu";

var Projectsection = styled.section`
  background-color: #191919;
  width: 300px;
  height: 200px;
  border-radius: 25px;
  margin: 10px;
  border: 1px #ffff solid;
`;

const Home = () => {
  const sectionsArrayCount = ["A", "B", "C", "D"];
  const [stateNav, dispatchNav] = React.useReducer(NavbarRedu, { isMobile: false });

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
                  <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                    <Image
                      alt="Minha imagem linda e maravilhosa"
                      src="https://media.discordapp.net/attachments/1028750792640954368/1225839842689286275/image.png?ex=66229751&is=66102251&hm=e6eefaebdae9c1eac29375f56909a365e20c87c40d04cba9c869bc6dd0221c3d&=&format=webp&quality=lossless&width=317&height=391"
                      width={58}
                      height={58}
                    />
                  </div>
                </div>

                <div className="md-5" />
                <div
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
                </div>
                <div>
                  <div className="m-1" />
                  <Typewriter text={"Olá 🌍."} typingSpeed={50} />
                </div>

                <p style={{ color: "black" }} className="py-6">
                  <a>
                    <div className="divider" />O meu nome é{" "}
                    <span className="text-orange-500">
                      pedro albino barbosa
                    </span>
                    ,
                    <div className="m-1" />
                    <span>
                      tenho <b style={{ color: "yellow" }}>15</b> anos
                    </span>{" "}
                    e móro em porto velho no estado de{" "}
                    <span className="text-emerald-400">rondonia</span>.
                    <div className="m-1" />
                    <span>
                      {" "}
                      Estudo em <b style={{ color: "pink" }}>
                        programação
                      </b>{" "}
                      {/* <div className="divider"></div> */}
                      des dos meus 9 anos de idade.
                    </span>{" "}
                    <div className="divider"></div>
                  </a>
                </p>
                <div>
                  {/* <Avatar
                  isBordered
                  color="secondary"
                  alt="Minha imagem linda e maravilhosa"
                  src=""
                >

                </Avatar> */}
                  <div>
                    <h1>↶</h1>
                    <div
                      style={{ marginTop: "260px" }}
                      className={
                        stateNav.isMobile
                          ? "flex-col lg:flex-row justify-center"
                          : "flex flex-wrap justify-center"
                      }
                    >
                      {sectionsArrayCount.map(
                        (key) => (
                          <div>
                            <Projectsection key={key}>
                              <h1>{key}</h1>
                              <Button text={"Click to view"} />
                            </Projectsection>
                          </div>
                        ),
                        null
                      )}
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

export default Home;
