import type { QwikIntrinsicElements } from "@builder.io/qwik";

export function SketchStar(props: QwikIntrinsicElements["svg"], key: string) {
  return (
    <svg
      width="70"
      height="70"
      viewBox="0 0 70 70"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
      key={key}
    >
      <path
        class="sketch-star-path"
        fill-rule="evenodd"
        clip-rule="evenodd"
        fill="none"
        stroke="black"
        stroke-width="1"
        d="M27.7275 13.795C27.54 12.6825 27.3988 11.5827 27.3075 10.4827C27.17 8.83266 27.255 7.17004 27.2063 5.52004C27.185 4.82004 27.1013 2.99507 27.135 2.73257C27.4413 0.445066 29.2875 0.0950235 29.8275 0.0325235C30.0887 -0.00497647 32.7712 -0.304842 33.35 2.67016C34.06 6.30766 34.2875 9.97011 34.0363 13.5576C34.6225 16.6076 35.625 19.645 36.9488 22.395C42.2163 33.3325 52.2537 34.3951 63.1287 34.2951C64.8012 34.2701 66.19 35.5825 66.2775 37.245C66.365 38.92 65.12 40.37 63.455 40.52C57.3763 41.1075 46.5912 45.9826 42.8625 51.0576C42.0825 52.1201 41.6287 54.6827 41.0287 57.1952C40.1912 60.6827 39.195 64.1326 38.0788 65.5826C37.9113 65.8076 35.875 68.1077 35.2675 68.4452C33.8075 69.2452 32.6388 68.7826 31.975 68.3576C31.3113 67.9326 30.56 67.0951 30.26 65.7076C29.9463 64.2576 30.2113 61.2825 30.1625 60.645C29.985 58.3325 29.5225 53.795 28.5788 49.895C28.07 47.795 27.5275 45.8575 26.63 44.895C23.3075 41.3325 17.995 41.8576 13.5213 42.4451C13.0075 42.5076 12.4938 42.5826 11.9813 42.6451C10.16 43.1826 8.22622 43.5826 6.18247 43.8201C3.09622 44.1826 2.58876 41.3451 2.56126 41.1576C2.50376 40.7451 2.28999 38.6201 4.61624 37.7701C4.86999 37.6826 6.7425 37.2701 7.46376 37.1076C8.46876 36.8826 9.48498 36.7076 10.505 36.5451C21.0412 33.2701 26.7638 24.07 27.7275 13.795ZM31.3438 25.1576C35.3213 33.3826 41.3575 37.3576 48.5125 39.1576H48.5113C44.0438 41.4951 39.98 44.4202 37.8262 47.3577C37.0087 48.4702 36.2587 50.7076 35.5825 53.2201C35.2162 50.8826 34.7213 48.395 34.0675 46.27C33.3238 43.845 32.3225 41.8327 31.205 40.6327C29.0475 38.3202 26.34 37.0326 23.4287 36.3951C26.9137 33.3076 29.5563 29.4576 31.3438 25.1576Z"
      />
    </svg>
  );
}