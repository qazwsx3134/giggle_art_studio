import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import HeroVideo from "~/components/hero/heroVideo";
import Accordion from "~/components/shared/accordion";
import Title from "~/components/shared/title";
import Footer from "~/components/starter/footer/footer";

export default component$(() => {
  // useVisibleTask$(() => {
  //   const galleryItem = document.querySelectorAll(".gallery-item");
  //   galleryItem.forEach((item, index) => {
  //     // Others item but hover one set flex-1
  //     // First one default flex-6
  //     if (index == 0) {
  //       item.classList.add("flex-6");
  //       item.classList.remove("flex-1");
  //     }
  //     item.addEventListener("mouseover", () => {
  //       galleryItem.forEach((item) => {
  //         item.classList.add("flex-6");
  //         item.classList.remove("flex-1");
  //       });
  //       item.classList.add("flex-1");
  //       item.classList.remove("flex-6");
  //     });
  //   });
  // });

  return (
    <div class="flex flex-col items-center bg-black-500">
      <div class="w-full h-screen relative z-0">
        <HeroVideo />
      </div>
      <div class="w-full bg-black-500 relative z-10">
        <div class="sticky top-0 h-[60px] bg-dark-500 opacity-50 z-20">
          <div class="w-[980px] m-auto flex navbar shadow-xl">
            <div class="flex-none">LOGO</div>
            <div class="flex-1 font-serif text-2xl">GIGGLE</div>
            <div class="flex-none"></div>
          </div>
        </div>
        <div class="w-[980px] m-auto relative">
          <Title title="流體畫" subTitle="introduce Liquid art">
            <button
              q:slot="button"
              class="btn btn-md btn-outline px-4 btn-accent ring-1 ring-accent hover:ring-0 text-xl font-sans"
            >
              聯絡我們
            </button>
          </Title>

          {/* First section */}
          <div class="grid grid-cols-12 grid-rows-8 gap-4 w-full h-[800px] my-12">
            <div class="col-span-4 row-span-5 bg-dark-500 rounded-2xl"></div>
            <div class="col-span-8 row-span-5 bg-dark-500 rounded-2xl"></div>
            <div class="col-span-8 row-span-3 bg-dark-500 rounded-2xl"></div>
            <div class="col-span-4 row-span-3 bg-dark-500 rounded-2xl"></div>
          </div>

          <Title title="水彩" subTitle="introduce Water color">
            <button
              q:slot="button"
              class="btn btn-md btn-outline px-4 btn-accent ring-1 ring-accent hover:ring-0 text-xl font-sans"
            >
              聯絡我們
            </button>
          </Title>

          <div class="grid grid-cols-12 grid-rows-8 gap-4 w-full h-[800px] my-12">
            <div class="col-span-8 row-span-5 bg-dark-500 rounded-2xl"></div>
            <div class="col-span-4 row-span-3 bg-dark-500 rounded-2xl"></div>
            <div class="col-span-4 row-span-3 bg-dark-500 rounded-2xl"></div>
            <div class="col-span-8 row-span-3 bg-dark-500 rounded-2xl"></div>
            <div class="col-span-4 row-span-2 bg-dark-500 rounded-2xl"></div>
          </div>

          <Title
            title="似顏繪"
            subTitle="鐵花村從前面數來忘記第幾攤"
            emphasisSubTitle={true}
          />
          <div class="flex gap-4 w-full h-[600px] my-12 overflow-hidden">
            <div class="basis-[400px] shrink-0 h-full bg-dark-500 rounded-2xl"></div>
            <div class="basis-[400px] shrink-0 h-full bg-dark-500 rounded-2xl"></div>
            <div class="basis-[400px] shrink-0 h-full bg-dark-500 rounded-2xl"></div>
            <div class="basis-[400px] shrink-0 h-full bg-dark-500 rounded-2xl"></div>
            <div class="basis-[400px] shrink-0 h-full bg-dark-500 rounded-2xl"></div>
          </div>

          <Title title="合作">
            <button
              q:slot="button"
              class="btn btn-md btn-outline px-4 btn-accent ring-1 ring-accent hover:ring-0 text-xl font-sans"
            >
              聯絡我們
            </button>
          </Title>

          <Accordion />

          {/* <div class="grid grid-cols-12 grid-rows-8 gap-4 h-[2500px]"> */}
          {/*1. 2 span row */}

          {/*2. 1 span row */}
          {/* <div class="col-span-4 row-span-1 bg-dark-500 rounded-2xl"></div>
            <div class="col-span-8 row-span-1 bg-dark-500 rounded-2xl"></div> */}

          {/*3. 2 span row */}
          {/* <div class="col-span-4 row-span-1 bg-dark-500 rounded-2xl"></div>
            <div class="col-span-8 row-span-2 bg-dark-500 rounded-2xl"></div>
            <div class="col-span-4 row-span-1 bg-dark-500 rounded-2xl"></div> */}

          {/*4. 1 span row */}
          {/* <div class="col-span-8 row-span-1 bg-dark-500 rounded-2xl"></div>
            <div class="col-span-4 row-span-1 bg-dark-500 rounded-2xl"></div> */}

          {/*5. 2 span row */}
          {/* <div class="col-span-8 row-span-2 bg-dark-500 rounded-2xl"></div>
            <div class="col-span-4 row-span-2 bg-dark-500 rounded-2xl"></div> */}
          {/* </div> */}
        </div>
      </div>
      <div class="w-full bg-dark-500 relative z-10 flex items-center justify-center">
        <Footer />
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
