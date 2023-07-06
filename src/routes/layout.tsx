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
import { detectPortableDevice } from "~/utils/userAgent";

export const useUserAgentLoader = routeLoader$(async (requestEvent) => {
  const isMobile = detectPortableDevice(
    requestEvent.request.headers.get("user-agent") || ""
  );
  return {
    isMobile,
  };
});

export default component$(() => {
  useStyles$(styles);
  // const ua = useUserAgentLoader();

  const onDone = useSignal(false);

  useVisibleTask$(() => {
    setTimeout(() => {
      onDone.value = true;
    }, 1500);
  });
  return (
    <>
      <RightSlide onDone={onDone}>
        <Giggle q:slot="icon" />
      </RightSlide>
      <main class="h-full min-h-screen w-full bg-black-500">
        {onDone.value && <Slot />}
      </main>
    </>
  );
});
