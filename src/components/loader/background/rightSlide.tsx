import {
  component$,
  type Signal,
  Slot,
  useTask$,
  useVisibleTask$,
} from "@builder.io/qwik";
import { isServer } from "@builder.io/qwik/build";
import gsap from "gsap";

interface Props {
  onDone?: Signal<boolean>;
}
/**
 * Make sure use Slot to pass the icon
 */
export default component$<Props>((props) => {
  useVisibleTask$(() => {
    const startLoaderTimeline = gsap.timeline();
    startLoaderTimeline.fromTo(
      ".blinder",
      { scaleX: 0 },
      {
        scaleX: 1,
        duration: 0.6,
        ease: "power2.in",
        transformOrigin: "left",
        onComplete: () => {
          console.log("done");
        },
      }
    );
  });
  useTask$(({ track }) => {
    track(() => props.onDone?.value);

    if (isServer) {
      return;
    }

    if (props.onDone?.value) {
      const loaderTimeline = gsap.timeline();

      loaderTimeline.to("#icon", {
        scaleX: 0,
        duration: 0.2,
      });

      loaderTimeline.to(
        ".blinder",
        {
          duration: 0.6,
          scaleX: 0,
          ease: "power4.inOut",
          transformOrigin: "right",
        },
        "<"
      );

      loaderTimeline.to(
        ".blinderBG",
        {
          duration: 0.6,
          scaleX: 0,
          ease: "power4.in",
          transformOrigin: "right",
        },
        "<"
      );

      loaderTimeline.to("#loaderLayer", {
        display: "none",
      });
    }
  });

  return (
    <div id="loaderLayer" class="loader h-screen w-full absolute z-50 flex">
      <div class="binderContainer absolute top-0 w-full flex">
        <div class="flex blinderBG bg-teal-600 h-screen grow w-full absolute z-40"></div>
        <div class="flex blinder bg-green-200 h-screen grow w-full absolute z-50">
          <div
            id="icon"
            class="items-center justify-center flex-grow flex w-full h-full absolute z-[56]"
          >
            <Slot name="icon" />
          </div>
        </div>
      </div>
    </div>
  );
});
