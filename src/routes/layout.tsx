import {
  component$,
  Slot,
  useSignal,
  useStyles$,
  useVisibleTask$,
} from "@builder.io/qwik";
import { routeLoader$ } from "@builder.io/qwik-city";

import RightSlide from "~/components/loader/background/rightSlide";

import styles from "./styles.css?inline";
import Giggle from "~/components/loader/LoaderIcon/giggle";

export const useServerTimeLoader = routeLoader$(() => {
  return {
    date: new Date().toISOString(),
  };
});

export default component$(() => {
  useStyles$(styles);
  const onDone = useSignal(false);

  useVisibleTask$(() => {
    setTimeout(() => {
      onDone.value = true;
    }, 3000);
  });
  return (
    <>
      <RightSlide onDone={onDone}>
        <Giggle q:slot="icon" />
      </RightSlide>
      <main class="h-full min-h-screen w-full bg-base-200">
        <Slot />
      </main>
    </>
  );
});
