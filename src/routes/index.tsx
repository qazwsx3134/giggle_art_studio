import { $, component$, useVisibleTask$ } from "@builder.io/qwik";
import { DocumentHead, useLocation } from "@builder.io/qwik-city";

import gsap from "gsap";

import { transformToGiggle } from "~/utils/github";

export default component$(() => {

  return (
    <div >

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
