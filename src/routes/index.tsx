import { component$ } from "@builder.io/qwik";
import { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <div class="flex flex-col items-center bg-black-500">
      <div class="w-full h-screen relative z-0">
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
      </div>
      <div class="w-full bg-black-500 relative z-10">
        <div class="sticky top-0 h-[60px] bg-dark-500 z-20">
          <div class="w-[980px] m-auto flex navbar shadow-xl">
            <div class="flex-none">LOGO</div>
            <div class="flex-1 font-serif text-2xl">GIGGLE</div>
            <div class="flex-none"></div>
          </div>
        </div>
        <div class="w-[980px] m-auto relative">
          <div class="w-full flex flex-col items-center justify-center gap-6 text-white-500 my-6">
            <div class="text-5xl">Liquid Art</div>
            <div class="text-2xl text-white-700">introduce Liquid art</div>
            <button class="btn btn-outline btn-accent ring-1 ring-accent hover:ring-0 text-xl">
              <p>聯絡我們</p>
            </button>
          </div>
          {/* First section */}
          <div class="grid grid-cols-12 grid-rows-8 gap-4 w-full h-[100vh] my-4">
            <div class="col-span-4 row-span-5 bg-dark-500 rounded-2xl"></div>
            <div class="col-span-8 row-span-5 bg-dark-500 rounded-2xl"></div>
            <div class="col-span-8 row-span-3 bg-dark-500 rounded-2xl"></div>
            <div class="col-span-4 row-span-3 bg-dark-500 rounded-2xl"></div>
          </div>
          <div class="grid grid-cols-12 grid-rows-8 gap-4 h-[2500px]">
            {/*1. 2 span row */}
            <div class="col-span-8 row-span-2 bg-dark-500 rounded-2xl"></div>
            <div class="col-span-4 row-span-1 bg-dark-500 rounded-2xl"></div>
            <div class="col-span-4 row-span-1 bg-dark-500 rounded-2xl"></div>

            {/*2. 1 span row */}
            <div class="col-span-4 row-span-1 bg-dark-500 rounded-2xl"></div>
            <div class="col-span-8 row-span-1 bg-dark-500 rounded-2xl"></div>

            {/*3. 2 span row */}
            <div class="col-span-4 row-span-1 bg-dark-500 rounded-2xl"></div>
            <div class="col-span-8 row-span-2 bg-dark-500 rounded-2xl"></div>
            <div class="col-span-4 row-span-1 bg-dark-500 rounded-2xl"></div>

            {/*4. 1 span row */}
            <div class="col-span-8 row-span-1 bg-dark-500 rounded-2xl"></div>
            <div class="col-span-4 row-span-1 bg-dark-500 rounded-2xl"></div>

            {/*5. 2 span row */}
            <div class="col-span-8 row-span-2 bg-dark-500 rounded-2xl"></div>
            <div class="col-span-4 row-span-2 bg-dark-500 rounded-2xl"></div>
          </div>
        </div>
      </div>
    </div>
  );
});

export const head: DocumentHead = {
  title: "Welcome to Qwik",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
