import React from "react";
import { useNavigate } from "react-router-dom";

const Image = React.lazy(() => import("../utils/image/Image"));

export default function Footer() {
  const navigate = useNavigate();
  const currentSite = window.location.toString();
  return (
    <>

      <footer
        className="footer p-10 text-neutral-content"
      >
        <aside>
          <div>
            <div className="display flex">
              <Image
                 width={58}
                 height={58}
                 alt="A logo do site (meio obvio)"
                 src="https://media.discordapp.net/attachments/1028750792640954368/1228438476014489720/image-removebg-preview.png?ex=662c0b7b&is=6619967b&hm=1d1db4797a3bf394339ce5367201f2a3bc14884344fa627830a851339527fc3d&=&format=webp&quality=lossless&width=232&height=266"
               ></Image>
              {/* <a
                className="space-x-3"
                style={{ fontWeight: "bold", userSelect: "none" }}
              >
                <span
                  style={{
                    color: "white",
                    fontWeight: 20,
                    userSelect: "none",
                  }}
                >
                  {"<"}
                </span>
                Code
                <span
                  style={{
                    color: "orange",
                    fontWeight: 20,
                    userSelect: "none",
                  }}
                >
                  Orange
                </span>
                <span
                  style={{
                    color: "white",
                    fontWeight: 20,
                    userSelect: "none",
                  }}
                >
                  {"/>"}
                </span>
              </a> */}
            </div>
          </div>
          <div className="-md-5" />
          <div className="-md-5" />
          <p style={{ userSelect: "none" }}>Um portfolio feito com ❤</p>
        </aside>
        <nav>
          <h6 className="footer-title" style={{ userSelect: "none" }}>
            Social
          </h6>
          <div className="grid grid-flow-col gap-4">
            <div className="space-x-0">
              <div className="tooltip tooltip-bottom" data-tip="Instagram">
                <div role="button" className="btn btn-ghost btn-circle avatar">
                  <div className="w-10 rounded-xl">
                    <img
                      alt="Instagram"
                      src="https://media.discordapp.net/attachments/1028750792640954368/1224123833603194953/instagram-logo-icone4.png?ex=661c5929&is=6609e429&hm=470fa9243e1d97e1fe3a8cae6afa42cda3553c71c011f5c3624d259751ba8d4d&=&format=webp&quality=lossless&width=577&height=577"
                      draggable="false"
                    />
                  </div>
                </div>
              </div>
              <div className="tooltip tooltip-bottom" data-tip="WhatsApp">
                <div role="button" className="btn btn-ghost btn-circle avatar">
                  <div className="w-10 rounded-xl">
                    <img
                      alt="Whatsapp"
                      src="https://media.discordapp.net/attachments/1028750792640954368/1224124634874642432/whatsapp-logo-0DBD89C8E2-seeklogo.com.png?ex=661c59e8&is=6609e4e8&hm=d3cdb953fc79557e4fbc2a39fc20578ae070fd44f4f463658bd40d853528773d&=&format=webp&quality=lossless&width=375&height=312"
                      draggable="false"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </footer>
    </>
  );
}
