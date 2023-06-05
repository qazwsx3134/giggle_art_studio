import {
  component$,
  type NoSerialize,
  noSerialize,
  useStore,
  useVisibleTask$,
  type Signal,
} from "@builder.io/qwik";
import gsap from "gsap";
import { ArtStudio } from "~/components/icon/artStudioText";
import { GiggleText } from "~/components/icon/giggleText";

interface Props {
  onDone?: Signal<boolean>;
}

export default component$<Props>((props) => {
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

    const artPath = document.querySelector(".art-path-1") as SVGPathElement;
    const artPathLength = 200;

    const studioPath = document.querySelector(
      ".studio-path-1"
    ) as SVGPathElement;
    const studioPathLength = 200;

    const textPathArray = [
      {
        path: textPath1,
        length: textPath1Length,
        startPoint: -90,
      },
      {
        path: textPath2,
        length: `0 ${textPath2Length}`,
        startPoint: -100,
      },
      {
        path: textPath3,
        length: textPath3Length,
        startPoint: -90,
      },
      {
        path: textPath4,
        length: textPath4Length,
        startPoint: -90,
      },
      {
        path: textPath5,
        length: textPath5Length,
        startPoint: -100,
      },
      {
        path: textPath6,
        length: textPath6Length,
        startPoint: -100,
      },
      {
        path: artPath,
        length: artPathLength,
        startPoint: -114,
      },
      {
        path: studioPath,
        length: studioPathLength,
        startPoint: -100,
      },
    ];

    textPathArray.forEach((item) => {
      gsap.set(item.path, {
        strokeDashoffset: item.startPoint,
      });
    });

    // Giggle
    loaderTimeline.fromTo(
      [textPath1, textPath6],
      {
        strokeDasharray: `0 ${textPath1Length}`,
      },
      {
        strokeDasharray: `${textPath1Length} 0`,
        duration: 0.5,
      },
      0.5
    );

    loaderTimeline.fromTo(
      [textPath2, textPath5],
      {
        strokeDasharray: `0 ${textPath2Length}`,
      },
      {
        strokeDasharray: `${textPath2Length} 0`,
        duration: 0.5,
      },
      "<"
    );

    loaderTimeline.fromTo(
      [textPath3, textPath4],
      {
        strokeDasharray: `0 ${textPath3Length}`,
      },
      {
        strokeDasharray: `${textPath3Length} 0`,
        duration: 0.5,
      },
      "<"
    );

    // Brush
    gsap.set("#brush-giggle", {
      clipPath:
        "polygon(0 28%, 0% 41%, 0 37%, 0 41%, 0 38%, 0 43%, 0 39%, 0 39%, 0 39%, 0 27%, 5% 28%, 3% 25%, 4% 29%, 3% 26%, 3% 29%)",
    });

    loaderTimeline.to("#brush-giggle", {
      keyframes: {
        "0%": {
          clipPath:
            "polygon(11% 26%, 10% 26%, 11% 26%, 10% 26%, 12% 26%, 0 35%, 0 35%, 0 35%, 0 35%, 0% 34%)",
        },
        "50%": {
          clipPath:
            "polygon(11% 26%, 31% 39%, 44% 47%, 51% 47%, 56% 46%, 56% 74%, 46% 72%, 38% 71%, 1% 60%, 0% 34%)",
        },
        "100%": {
          clipPath:
            "polygon(11% 26%, 31% 39%, 64% 30%, 100% 30%, 100% 47%, 85% 70%, 58% 80%, 28% 73%, 1% 60%, 0% 34%)",
        },
      },
      duration: 0.8,
      ease: "circ.inOut",
    });
    // Art studio
    loaderTimeline.fromTo(
      [artPath],
      {
        strokeDasharray: `0 ${artPathLength}`,
      },
      {
        strokeDasharray: `${artPathLength} 0`,
        duration: 2,
      }
    );
    loaderTimeline.fromTo(
      [studioPath],
      {
        strokeDasharray: `0 ${studioPathLength}`,
      },
      {
        strokeDasharray: `${studioPathLength} 0`,
        duration: 2,
      }
    );

    timeLineStore.timeLine = noSerialize(loaderTimeline);
  });

  useVisibleTask$(({ track }) => {
    track(() => props.onDone?.value);

    if (props.onDone?.value) {
      timeLineStore.timeLine?.revert();
    }
  });

  return (
    <div class="flex w-full relative h-full items-center justify-center">
      <div class="absolute z-[55] flex flex-col items-center">
        <GiggleText />
        <ArtStudio />
      </div>
      <img
        id="brush-giggle"
        src={"images/loader/brush1.png"}
        class="absolute z-[54] "
        width={700}
        height={511}
        alt=""
      />
    </div>
  );
});
