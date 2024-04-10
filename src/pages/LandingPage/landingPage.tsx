import React, { Suspense } from "react";
import { Outlet } from "react-router";
import { LazyLoadComponent } from "react-lazy-load-image-component";

const Top = React.lazy(() => import("../../components/bottomtop/Top"));
const Bottom = React.lazy(() => import("../../components/bottomtop/Bottom"));
const Loader = React.lazy(() => import("../../components/loader/Loader"));

const LandingPageLayout = () => {
  return (
    <>
      <LazyLoadComponent>
        <html data-theme="forest">
          <Suspense
            fallback={
              <Loader
                failureMessage="Falha ao carregar!"
                canRetry={true}
                onComplete={() => console.log("Completo o carregamento!")}
                onErrored={() =>
                  console.log("Erro ao completar o carregamento!")
                }
              ></Loader>
            }
          >
            <Top />
          </Suspense>
          <Outlet />
          <Suspense
            fallback={
              <Loader
                failureMessage="Falha ao carregar!"
                canRetry={true}
                onComplete={() => console.log("Completo o carregamento!")}
                onErrored={() =>
                  console.log("Erro ao completar o carregamento!")
                }
              ></Loader>
            }
          >
            <Bottom />
          </Suspense>
        </html>
      </LazyLoadComponent>
    </>
  );
};

export default LandingPageLayout;
