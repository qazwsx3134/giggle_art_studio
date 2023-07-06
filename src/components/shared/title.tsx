import { Slot, component$ } from "@builder.io/qwik";

interface TitleProps {
  title: string;
  subTitle?: string;
  emphasisSubTitle?: boolean;
}

export default component$<TitleProps>((props) => {
  return (
    <div class="w-full flex flex-col items-center justify-center gap-6 text-white-500 my-6">
      <div class="text-5xl">{props.title}</div>
      {props.subTitle && (
        <div
          class={[
            "text-2xl",
            "text-white-700",
            props?.emphasisSubTitle ? "text-accent" : "",
          ]}
        >
          {props.subTitle}
        </div>
      )}
      <Slot name="button" />
    </div>
  );
});
