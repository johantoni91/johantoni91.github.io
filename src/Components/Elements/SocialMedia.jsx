import { useRef } from "react";
import { BsFacebook, BsInstagram, BsLinkedin, BsYoutube } from "react-icons/bs";
import { Tooltip } from "react-tooltip";
const SocialMedia = () => {
  return (
    <>
      <Tooltip id="my-tooltip" place="left" />
      <div className="fixed bottom-5 right-5 max-w-xs max-h-52 gap-y-5 flex flex-col">
        <a href="https://www.facebook.com/johantoni91" target="_blank">
          <BsFacebook
            className="text-4xl font-bold hover:text-blue-900 text-white"
            data-tooltip-id="my-tooltip"
            data-tooltip-content="Jo Han Toni"
          />
        </a>
        <a href="https://www.instagram.com/ng.johan.w/" target="_blank">
          <BsInstagram
            className="text-4xl font-bold hover:text-purple-800 text-white"
            data-tooltip-id="my-tooltip"
            data-tooltip-content="ng.johan.w"
          />
        </a>
        <a href="https://www.linkedin.com/in/johan-toni-wijaya-s-kom-9b1522146/" target="_blank">
          <BsLinkedin
            className="text-4xl font-bold hover:text-blue-800 text-white"
            data-tooltip-id="my-tooltip"
            data-tooltip-content="Johan Toni Wijaya, S.Kom."
          />
        </a>
        <a href="https://www.youtube.com/channel/UCYEdtai-f1tR_YujaqTVPIA" target="_blank">
          <BsYoutube
            className="text-4xl font-bold hover:text-red-900 text-white"
            data-tooltip-id="my-tooltip"
            data-tooltip-content="johantoni9187"
          />
        </a>
      </div>
    </>
  );
};

export default SocialMedia;
