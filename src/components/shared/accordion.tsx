import { component$ } from "@builder.io/qwik";
import styles from "./accordion.module.css";

export default component$(() => {
  return (
    <div class={["flex gap-4 w-full h-[600px] my-12 overflow-hidden", styles["flex-wrapper"]]}>
      <div
        class={[
          "basis-[100px] h-full bg-dark-500 rounded-2xl",
          styles["flex-anim"],
        ]}
      ></div>
      <div
        class={[
          "basis-[100px] h-full bg-dark-500 rounded-2xl",
          styles["flex-anim"],
        ]}
      ></div>
      <div
        class={[
          "basis-[100px] h-full bg-dark-500 rounded-2xl",
          styles["flex-anim"],
        ]}
      ></div>
      <div
        class={[
          "basis-[100px] h-full bg-dark-500 rounded-2xl",
          styles["flex-anim"],
        ]}
      ></div>
      <div
        class={[
          "basis-[100px] h-full bg-dark-500 rounded-2xl",
          styles["flex-anim"],
        ]}
      ></div>
    </div>
  );
});
