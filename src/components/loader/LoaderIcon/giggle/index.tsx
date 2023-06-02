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
import { ArtStudio } from "~/components/icon/artStudioText";
import { GiggleText } from "~/components/icon/giggleText";
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

    const textPath1 = document.querySelector(
      ".giggle-path-1"
    ) as SVGPathElement;
    const textPath1Length = textPath1.getTotalLength();
    const textPath2 = document.querySelector(
      ".giggle-path-2"
    ) as SVGPathElement;
    const textPath2Length = textPath2.getTotalLength();
    const textPath3 = document.querySelector(
      ".giggle-path-3"
    ) as SVGPathElement;
    const textPath3Length = textPath3.getTotalLength();
    const textPath4 = document.querySelector(
      ".giggle-path-4"
    ) as SVGPathElement;
    const textPath4Length = textPath4.getTotalLength();
    const textPath5 = document.querySelector(
      ".giggle-path-5"
    ) as SVGPathElement;
    const textPath5Length = textPath5.getTotalLength();
    const textPath6 = document.querySelector(
      ".giggle-path-6"
    ) as SVGPathElement;
    const textPath6Length = textPath6.getTotalLength();

    const artPath = document.querySelector(
      ".art-path-1"
    ) as SVGPathElement;
    const artPathLength = 350;

    const studioPath = document.querySelector(
      ".studio-path-1"
    ) as SVGPathElement;
    const studioPathLength = 450;

    const starPath = document.querySelector(
      ".sketch-star-path"
    ) as SVGPathElement;
    const starLength = starPath.getTotalLength();

    const textPathArray = [
      {
        path: textPath1,
        length: textPath1Length,
      },
      {
        path: textPath2,
        length: textPath2Length,
      },
      {
        path: textPath3,
        length: textPath3Length,
      },
      {
        path: textPath4,
        length: textPath4Length,
      },
      {
        path: textPath5,
        length: textPath5Length,
      },
      {
        path: textPath6,
        length: textPath6Length,
      },
      {
        path: artPath,
        length: artPathLength,
      },
      {
        path: studioPath,
        length: studioPathLength,
      },
    ];

    textPathArray.forEach((item) => {
      gsap.set(item.path, {
        strokeDasharray: item.length,
      });
    });

    // Giggle
    loaderTimeline.fromTo(
      [textPath1, textPath6],
      {
        strokeDashoffset: textPath1Length,
      },
      {
        strokeDashoffset: 0,
        fill: "white",
        duration: 1,
      },
      0.4
    );

    loaderTimeline.fromTo(
      [textPath2, textPath5],
      {
        strokeDashoffset: textPath2Length,
      },
      {
        strokeDashoffset: 0,
        fill: "white",
        duration: 1,
      },
      "<=0.4"
    );

    loaderTimeline.fromTo(
      [textPath3, textPath4],
      {
        strokeDashoffset: textPath3Length,
      },
      {
        strokeDashoffset: 0,
        fill: "white",
        duration: 1,
      },
      "<=0.4"
    );

    // Brush

    // Art studio
    loaderTimeline.fromTo(
      [artPath],
      {
        strokeDashoffset: artPathLength,
      },
      {
        strokeDashoffset: 0,
        fill: "white",
        duration: 1,
      },
    );
    loaderTimeline.fromTo(
      [studioPath],
      {
        strokeDashoffset: studioPathLength,
      },
      {
        strokeDashoffset: 0,
        fill: "white",
        duration: 1,
      },
    );
    gsap.set(starPath, {
      strokeDasharray: starLength,
    });

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
      <div class="absolute z-[55] flex flex-col items-center">
        <GiggleText />
        <ArtStudio />
      </div>

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
