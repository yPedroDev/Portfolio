import React, { ComponentProps } from "react";
// import { button } from "@nextui-org/react";
import { twMerge } from "tailwind-merge";
import { useNavigate } from "react-router-dom";
import { styled } from 'styled-components';

const BtnContent = styled.div`
  font-size: 25px
`
export type ButtonProps = ComponentProps<"button"> & {
  text?: String;
  className?: string;
  to?: String;
  isMobile?: boolean;
  //   iconButton?: boolean;
  //   icon: String;
};

const Button = ({ text, className, to, isMobile }: ButtonProps) => {
  var btnContent = text != "" ? text : ""; // se o texto não estiver vazio então vai preencher o parametro btnContent com o texto que foi passado para ser mostrado, se não vai ficar vazio o btn content.

  var navigate = useNavigate();
  var btnRef = React.useRef<React.ElementRef<"button">>(null);
  const [btnRenderer, setBtnRenderer] = React.useState(
    <button
      onClick={() => {
        if (to != "" || to != "undefined") {
          navigate("/" + to);
          console.log(to);
        }
      }}
      ref={btnRef}
      className={twMerge("btn w-auto m-1", className)}
    >
      <BtnContent>{btnContent}</BtnContent>
    </button>
  );

  //   React.useEffect(() => {
  //     if (iconButton == true) {
  //       setBtnRenderer(
  //         <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
  //           <svg
  //             xmlns="http://www.w3.org/2000/svg"
  //             className="h-5 w-5"
  //             fill="none"
  //             viewBox="0 0 24 24"
  //             stroke="currentColor"
  //           >
  //             <path
  //               strokeLinecap="round"
  //               strokeLinejoin="round"
  //               strokeWidth="2"
  //               d="M4 6h16M4 12h16M4 18h7"
  //             />
  //           </svg>
  //         </div>
  //       );
  //     }
  //   }, []);
  return (
    <>
      {!isMobile ? <>{btnRenderer}</> : ""}{" "}
      {/*Se não estiver mobile vai mostrar o butão, caso ocontrario não vai mostrar. */}
    </>
  );
};

export default Button;
