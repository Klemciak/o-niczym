import React, { useState, useEffect, useRef } from "react";
import "./Img3d.scss";
import "@google/model-viewer";
import { useTranslations } from "../../../translations/useTranslations";
const Img3d = () => {
  const t = useTranslations("what");
  const [cameraOrbit, setCameraOrbit] = useState("50deg 90deg auto");
  const imgWrapRef = useRef(null);

  const handleMouseMove = (event) => {
    if (imgWrapRef.current) {
      const mouseX =
        event.clientX - imgWrapRef.current.getBoundingClientRect().left;
      const windowWidth = imgWrapRef.current.offsetWidth;
      const percentageX = (mouseX / windowWidth) * 100;

      const mouseY =
        event.clientY - imgWrapRef.current.getBoundingClientRect().top;
      const windowHeight = imgWrapRef.current.offsetHeight;
      const percentageY = (mouseY / windowHeight) * 100;

      const orbitX = (50 - percentageX) * 1;

      const orbitY = ((100 - percentageY) / 100) * (120 - 60) + 60;

      setCameraOrbit(`${orbitX}deg ${orbitY}deg auto`);
    }
  };

  useEffect(() => {
    const imgWrap = imgWrapRef.current;
    if (imgWrap) {
      imgWrap.addEventListener("mousemove", handleMouseMove);
    }

    return () => {
      if (imgWrap) {
        imgWrap.removeEventListener("mousemove", handleMouseMove);
      }
    };
  }, []);

  return (
    <div className="img-wrap" ref={imgWrapRef}>
      <h2>{t.eyeTitle}</h2>
      <model-viewer
        src="/img3d/eye_for_free.glb"
        alt="Model oka 3D"
        camera-orbit={cameraOrbit}
        style={{ width: "100%", height: "100%" }}
      ></model-viewer>
    </div>
  );
};

export default Img3d;
