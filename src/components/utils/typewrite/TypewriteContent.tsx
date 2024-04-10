import React from "react";

import useTypewriter from "./Type/useTypewrite";

interface Props {
  text: string;
  typingSpeed: number;
}

const TypewriteContent = (props: Props) => {
  var typingSpeed = props.typingSpeed != null ? props.typingSpeed : 50;
  var typingText = props?.text != null ? props?.text : "";
  var displayText = React.useRef<React.ElementRef<"h3">>(null);
  const [text, flags] = useTypewriter({
    words: [typingText],
    loop: 1,
    // typeSpeed: 20,
  });

  return (
    <>
      <h3 ref={displayText}>
        {text}
        {/* <div className="blink">|</div> */}
      </h3>
    </>
  );
};

export default TypewriteContent;
