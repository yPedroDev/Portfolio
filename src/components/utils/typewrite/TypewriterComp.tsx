import React, { Suspense, useEffect } from "react";

const TypewriteContent = React.lazy(() => import("./TypewriteContent"));
const Loader = React.lazy(() => import("../../../components/loader/Loader"));

interface Props {
  text: string;
  typingSpeed: number;
}

const Typewriter = (props: Props) => {
  return (
    <>
      <Suspense
        fallback={
          <Loader
            failureMessage="Falha ao carregar!"
            canRetry={true}
            onComplete={() => console.log("Completo o carregamento!")}
            onErrored={() => console.log("Erro ao completar o carregamento!")}
          ></Loader>
        }
      >
        <TypewriteContent
          text={props.text != null ? props.text : ""}
          typingSpeed={props.typingSpeed != null ? props.typingSpeed : 50}
        />
      </Suspense>
    </>
  );
};

export default Typewriter;
