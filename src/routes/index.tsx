import { component$ } from "@builder.io/qwik";
import { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <div class="flex flex-col items-center">
      <div class="m-auto w-[980px]">
        Hello
        <div class="grid grid-cols-12 grid-rows-8 gap-4 h-[2400px]">
          {/*1. 2 span row */}
          <div class="col-span-8 row-span-2 bg-night-100 rounded-2xl"></div>
          <div class="col-span-4 row-span-1 bg-night-400 rounded-2xl"></div>
          <div class="col-span-4 row-span-1 bg-night-400 rounded-2xl"></div>

          {/*2. 1 span row */}
          <div class="col-span-4 row-span-1 bg-night-400 rounded-2xl"></div>
          <div class="col-span-8 row-span-1 bg-night-400 rounded-2xl"></div>

          {/*3. 2 span row */}
          <div class="col-span-4 row-span-1 bg-night-400 rounded-2xl"></div>
          <div class="col-span-8 row-span-2 bg-night-100 rounded-2xl"></div>
          <div class="col-span-4 row-span-1 bg-night-400 rounded-2xl"></div>

          {/*4. 1 span row */}
          <div class="col-span-8 row-span-1 bg-night-400 rounded-2xl"></div>
          <div class="col-span-4 row-span-1 bg-night-400 rounded-2xl"></div>

          {/*5. 2 span row */}
          <div class="col-span-8 row-span-2 bg-night-100 rounded-2xl"></div>
          <div class="col-span-4 row-span-2 bg-night-400 rounded-2xl"></div>
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
