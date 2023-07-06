import { component$ } from "@builder.io/qwik";

export default component$(() => {
  return (
    <>
      <div class="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white-500 mix-blend-difference font-serif fixed z-[1]">
        <div class="font-extralight text-2xl">Art Studio</div>
        <div class="flex flex-col items-center font-medium text-8xl">
          <p>G</p>
          <p>I</p>
          <p>G</p>
          <p>G</p>
          <p>L</p>
          <p>E</p>
        </div>
      </div>
      <video
        autoPlay
        loop
        muted
        playsInline
        class="object-cover w-full h-full fixed z-0"
      >
        <source src="/videos/hero.mp4" type="video/mp4" />
      </video>
    </>
  );
});
