import { component$, QwikIntrinsicElements } from "@builder.io/qwik";
import { useLocation } from "@builder.io/qwik-city";
import { transformToGiggle } from "~/utils/github";

export default component$(
  (
    props: QwikIntrinsicElements["img"] & {
      key?: string;
    }
  ) => {
    const location = useLocation();
    return (
      <img
        {...props}
        src={transformToGiggle(
          location.url.origin,
          "/images/loader/starSmile.webp"
        )}
        alt=""
      />
    );
  }
);
