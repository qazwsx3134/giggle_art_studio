import {
  component$,
  type NoSerialize,
  noSerialize,
  useStore,
  useVisibleTask$,
  type Signal,
} from "@builder.io/qwik";
// import { useLocation } from "@builder.io/qwik-city";
import gsap from "gsap";
import { GiggleArtStudio } from "~/components/icon/giggleArtStudio";
import { SketchStar } from "~/components/icon/sketchStar";

interface Props {
  onDone?: Signal<boolean>;
}

export default component$<Props>((props) => {
  // const location = useLocation();
  const timeLineStore = useStore<{ timeLine: NoSerialize<gsap.core.Timeline> }>(
    {
      timeLine: undefined,
    }
  );

  // Init animation
  useVisibleTask$(async () => {
    const loaderTimeline = gsap.timeline({ id: "giggleTimeline" });

    const path = document.querySelector(".giggle-path") as SVGPathElement;

    gsap.set(path, {
      strokeDasharray: 400,
    });

    loaderTimeline.fromTo(
      path,
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
      <SketchStar class="absolute w-6 top-1/3 right-0"/>
      <img
        id="brush-giggle"
        src="/images/loader/brush.webp"
        class="absolute z-[56] "
        width={240}
        height={240}
        alt=""
      />
    </div>
  );
});
