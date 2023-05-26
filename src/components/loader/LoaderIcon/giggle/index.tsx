import {
  component$,
  type NoSerialize,
  noSerialize,
  useStore,
  useVisibleTask$,
  type Signal,
} from "@builder.io/qwik";
import { useLocation } from "@builder.io/qwik-city";
import gsap from "gsap";
import { GiggleArtStudio } from "~/components/icon/giggleArtStudio";
import { SketchStar } from "~/components/icon/sketchStar";
import { transformToGiggle } from "~/utils/github";

interface Props {
  onDone?: Signal<boolean>;
}

export default component$<Props>((props) => {
  const location = useLocation();
  const timeLineStore = useStore<{ timeLine: NoSerialize<gsap.core.Timeline> }>(
    {
      timeLine: undefined,
    }
  );

  // Init animation
  useVisibleTask$(async () => {
    const loaderTimeline = gsap.timeline({ id: "giggleTimeline" });

    const textPath = document.querySelector(".giggle-path") as SVGPathElement;
    const starPath = document.querySelector(
      ".sketch-star-path"
    ) as SVGPathElement;
    const starLength = starPath.getTotalLength();

    gsap.set(textPath, {
      strokeDasharray: 400,
    });
    gsap.set(starPath, {
      strokeDasharray: starLength,
    });

    loaderTimeline.fromTo(
      textPath,
      {
        strokeDashoffset: 400,
      },
      {
        strokeDashoffset: 0,
        fill: "white",
        duration: 1.5,
        delay: 0.4,
      }
    );

    loaderTimeline.fromTo(
      "#brush-giggle",
      {
        clipPath: "polygon(0 0, 1% 0, 0 100%, 0 100%)",
        scaleX: 1.5,
        scaleY: 1.0,
      },
      {
        clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
        scaleX: 1.5,
        scaleY: 1.3,
        ease: "power2.inOut",
        duration: 0.6,
      }
    );

    loaderTimeline.fromTo(
      starPath,
      {
        strokeDashoffset: starLength,
      },
      {
        strokeDashoffset: 0,
        fill: "white",
        duration: 1.5,
      },
      "<"
    );

    loaderTimeline.to(".sketch-star", {
      rotation: 360,
      translateX: -10,
      translateY: -100,
      strokeDashoffset: 0,
      fill: "white",
      ease: "elastic.out(1, 0.3)",
      duration: 1.5,
      repeat: -1,
      yoyo: true,
    });

    timeLineStore.timeLine = noSerialize(loaderTimeline);
  });

  useVisibleTask$(({ track }) => {
    track(() => props.onDone?.value);

    if (props.onDone?.value) {
      timeLineStore.timeLine?.revert();
    }
  });

  return (
    <div class="flex w-60 relative h-full items-center justify-center">
      <GiggleArtStudio class="absolute z-[55]" />
      <SketchStar class="absolute w-6 top-3/5 right-0 sketch-star z-[55]" />
      <img
        id="brush-giggle"
        src={transformToGiggle(location.url.origin, "images/loader/brush.webp")}
        class="absolute z-[54] "
        width={240}
        height={240}
        alt=""
      />
    </div>
  );
});
