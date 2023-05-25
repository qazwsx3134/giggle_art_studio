import {
  component$,
  Slot,
  useSignal,
  useStyles$,
  useVisibleTask$,
} from "@builder.io/qwik";
import { routeLoader$ } from "@builder.io/qwik-city";

import Header from "~/components/starter/header/header";
import Footer from "~/components/starter/footer/footer";
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
      // onDone.value = true;
    }, 4000);
  });
  return (
    <>
      <RightSlide onDone={onDone}>
        <Giggle q:slot="icon"/>
      </RightSlide>
      <Header />
      <main>
        <Slot />
      </main>
      <Footer />
    </>
  );
});
