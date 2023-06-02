import { $, component$, useVisibleTask$ } from "@builder.io/qwik";
import { useLocation } from "@builder.io/qwik-city";

import gsap from "gsap";

import Draggable from "gsap/Draggable";
import { transformToGiggle } from "~/utils/github";

export default component$(() => {
  const location = useLocation();
  useVisibleTask$(() => {
    gsap.registerPlugin(Draggable);

    Draggable.create(".map", {
      activeCursor: "grabbing",
      bounds: window,
    });
  });

  const testOnClick = $(() => {
    console.log("hello");
  });
  return (
    <div class="mapContainer w-screen h-screen overflow-hidden relative">
      <div class="map relative w-[4112px] h-[2741px]">
        <div class="absolute top-[695px] left-[1160px] w-[300px] h-[300px] z-10">
          <button
            class="btn hover:cursor-pointer glass"
            onClick$={testOnClick}
            onTouchEnd$={testOnClick}
          >
            Success
          </button>
        </div>
        <div class="w-full relative">
          <img
            width={4112}
            height={2741}
            src={transformToGiggle(location.url.origin, "/images/map.webp")}
            alt=""
          />
        </div>
      </div>
    </div>
  );
});