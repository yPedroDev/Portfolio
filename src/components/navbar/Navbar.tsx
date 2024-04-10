import React from "react";
import { useNavigate } from "react-router-dom";
import memoize from "memoize-one";

const Image = React.lazy(() => import("../utils/image/Image"));
const Button = React.lazy(() => import("../button/Button"));

const MyNavbar = () => {
  const navigate = useNavigate();
  var [isMobile, setIsMobile] = React.useState(false);
  
  const handleResize = () => {
    if (window.innerWidth < 768) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  // create an event listener
  React.useEffect(() => {
    window.addEventListener("resize", handleResize);
    if (window.performance) {
      if (performance.navigation.type == 1) {
        handleResize();
      }
    }
  });
  return (
    <>
      <div className="navbar">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li onClick={() => navigate("/projetos")}>
                <a>Projetos</a>
              </li>
              {/* <li>
                <a>Parent</a>
                <ul className="p-2">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </li>
              <li>
                <a>Item 3</a>
              </li> */}
            </ul>
          </div>
          {!isMobile ? (
            <Image
              width={58}
              height={58}
              alt="A logo do site (meio obvio)"
              src="https://media.discordapp.net/attachments/1028750792640954368/1225816089842417706/gC9xcCuMDGQ9NBAAQEAaguRsIkBCCAk1BDGRAAARAAgYUnAAFceBOiAyAAAiAAApMQgABOQg1lQAAEQAAEFp4ABHDhTYgOgAAIgAAITEJgKgIYBAFjjAWTNABlQAAEQAAEQGAeBP4PL7ZlpWj11gAAAAASUVORK5CYII.png?ex=66228132&is=66100c32&hm=fd1303bb02d15860a70588fbbc8bbc72430ac4d7d82d8916cb8744413857d81d&=&format=webp&quality=lossless&width=560&height=558"
            />
          ) : (
            ""
          )}
          <button
            className="btn btn-ghost w-44 m-1"
            style={{ fontWeight: "bold" }}
          >
            {"<Code "} <span style={{ color: "orange" }}>{"Orange"}</span>
            {"/>"}
          </button>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <Button to={"projetos"} text={"Projetos"} />

            {/* <li>
              <details>
                <summary>Parent</summary>
                <ul className="p-2">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <a>Item 3</a>
            </li> */}
          </ul>
        </div>
        <div className="navbar-end"></div>
      </div>
    </>
  );
};

export default MyNavbar;
