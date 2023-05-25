import type { QwikIntrinsicElements } from "@builder.io/qwik";

export function GiggleArtStudio(
  props: QwikIntrinsicElements["svg"],
  key: string
) {
  return (
    <svg
      viewBox="0 0 437 289"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
      key={key}
    >
      <path
        class="giggle-path"
        fill="none"
        stroke="black"
        stroke-width="2"
        d="M91.375 87.25C88.3333 78.125 86.8125 63.7708 86.8125 44.1875C86.8125 40.0208 86.9167 36.3333 87.125 33.125C87.25 30.75 87.4375 28.6458 87.6875 26.8125C87.9375 24.9375 88.3125 22.7917 88.8125 20.375C89.2708 18.125 89.8333 16.1458 90.5 14.4375C91.1667 12.6875 92.0417 10.875 93.125 9C94.1667 7.25 95.3333 5.8125 96.625 4.6875C97.9167 3.52083 99.4792 2.58333 101.312 1.875C103.188 1.16667 105.146 0.8125 107.188 0.8125C109.729 0.8125 111 1.54167 111 3C111 4.04167 110.375 4.5625 109.125 4.5625C108.708 4.5625 108.104 4.4375 107.312 4.1875C106.396 3.97917 105.792 3.875 105.5 3.875C104.083 3.875 102.75 4.1875 101.5 4.8125C100.25 5.4375 99.1667 6.29167 98.25 7.375C97.4167 8.33333 96.625 9.60417 95.875 11.1875C95.125 12.7708 94.5 14.4375 94 16.1875C93.2083 18.8542 92.5417 22.6458 92 27.5625C91.625 30.7708 91.3958 34.5417 91.3125 38.875L91.1875 47.3125C91.1458 48.2292 91.125 50.5625 91.125 54.3125C91.125 58.5208 91.25 62.3958 91.5 65.9375C91.7917 69.4792 92.2917 73.1458 93 76.9375C93.75 81.1458 94.7083 84.6875 95.875 87.5625C97.0833 90.3958 98.6667 92.7292 100.625 94.5625C102.583 96.4792 104.896 97.4375 107.562 97.4375C112.062 97.4375 115.688 95.3125 118.438 91.0625C118.438 88.6042 118.25 85.5833 117.875 82C117.708 80.0833 117.375 78.3125 116.875 76.6875C116.375 75.2708 115.792 74.5625 115.125 74.5625C114.458 74.5625 113.625 74.6458 112.625 74.8125C111.625 74.9792 110.75 75.0625 110 75.0625C108.042 75.0625 107.062 74.3333 107.062 72.875C107.062 72.1667 108.229 71.5208 110.562 70.9375C112.938 70.3542 114.958 70.0625 116.625 70.0625C117.958 70.0625 118.958 70.5625 119.625 71.5625C120.292 72.5625 120.625 73.8542 120.625 75.4375C120.625 77.9375 121.062 81.7292 121.938 86.8125C122.771 92.0208 123.188 95.8333 123.188 98.25C123.188 99.5833 122.625 100.25 121.5 100.25C119.458 100.25 118.438 99.3125 118.438 97.4375L118.5 97.125L118.562 96.8125C113.604 99.6458 109.312 101.062 105.688 101.062C99.2292 101.062 94.4583 96.4583 91.375 87.25ZM144.562 96.25C144.562 95.1667 145.271 94.625 146.688 94.625H151.688C151.688 86.4583 151.396 74.1042 150.812 57.5625L150.25 41.5625L149.812 29.375L149.875 22.875C149.917 20.4583 149.938 17.625 149.938 14.375C149.938 9.75 149.812 7.04167 149.562 6.25H145.188C144.271 6.25 143.812 5.64583 143.812 4.4375C143.812 3.5625 144.167 2.95833 144.875 2.625C145.583 2.375 147.167 2.25 149.625 2.25H153.25C154.5 2.29167 156.125 2.3125 158.125 2.3125C158.792 2.3125 159.333 2.47917 159.75 2.8125C160.208 3.10417 160.438 3.54167 160.438 4.125C160.438 4.66667 160.292 5.14583 160 5.5625C159.708 5.97917 159.333 6.1875 158.875 6.1875C158.25 6.1875 157.708 6.16667 157.25 6.125C156.792 6.08333 156.312 6.0625 155.812 6.0625H154.438C154.146 6.0625 153.833 6.10417 153.5 6.1875C153.208 6.22917 153.021 6.29167 152.938 6.375C152.812 6.5 152.75 6.66667 152.75 6.875C152.75 14.6667 153.292 28.0833 154.375 47.125C155.417 65.4583 155.938 78.9167 155.938 87.5C155.938 88.7917 155.917 89.9792 155.875 91.0625C155.833 92.1458 155.812 93.3125 155.812 94.5625H160.438C162.354 94.5625 163.312 95.1667 163.312 96.375C163.312 96.875 163.125 97.3542 162.75 97.8125C162.375 98.2708 161.979 98.5 161.562 98.5C158.854 98.5 156.521 98.4792 154.562 98.4375C152.562 98.3958 149.979 98.375 146.812 98.375C146.188 98.375 145.646 98.1667 145.188 97.75C144.771 97.2917 144.562 96.7917 144.562 96.25ZM190.125 87.25C187.083 78.125 185.562 63.7708 185.562 44.1875C185.562 40.0208 185.667 36.3333 185.875 33.125C186 30.75 186.188 28.6458 186.438 26.8125C186.688 24.9375 187.062 22.7917 187.562 20.375C188.021 18.125 188.583 16.1458 189.25 14.4375C189.917 12.6875 190.792 10.875 191.875 9C192.917 7.25 194.083 5.8125 195.375 4.6875C196.667 3.52083 198.229 2.58333 200.062 1.875C201.938 1.16667 203.896 0.8125 205.938 0.8125C208.479 0.8125 209.75 1.54167 209.75 3C209.75 4.04167 209.125 4.5625 207.875 4.5625C207.458 4.5625 206.854 4.4375 206.062 4.1875C205.146 3.97917 204.542 3.875 204.25 3.875C202.833 3.875 201.5 4.1875 200.25 4.8125C199 5.4375 197.917 6.29167 197 7.375C196.167 8.33333 195.375 9.60417 194.625 11.1875C193.875 12.7708 193.25 14.4375 192.75 16.1875C191.958 18.8542 191.292 22.6458 190.75 27.5625C190.375 30.7708 190.146 34.5417 190.062 38.875L189.938 47.3125C189.896 48.2292 189.875 50.5625 189.875 54.3125C189.875 58.5208 190 62.3958 190.25 65.9375C190.542 69.4792 191.042 73.1458 191.75 76.9375C192.5 81.1458 193.458 84.6875 194.625 87.5625C195.833 90.3958 197.417 92.7292 199.375 94.5625C201.333 96.4792 203.646 97.4375 206.312 97.4375C210.812 97.4375 214.438 95.3125 217.188 91.0625C217.188 88.6042 217 85.5833 216.625 82C216.458 80.0833 216.125 78.3125 215.625 76.6875C215.125 75.2708 214.542 74.5625 213.875 74.5625C213.208 74.5625 212.375 74.6458 211.375 74.8125C210.375 74.9792 209.5 75.0625 208.75 75.0625C206.792 75.0625 205.812 74.3333 205.812 72.875C205.812 72.1667 206.979 71.5208 209.312 70.9375C211.688 70.3542 213.708 70.0625 215.375 70.0625C216.708 70.0625 217.708 70.5625 218.375 71.5625C219.042 72.5625 219.375 73.8542 219.375 75.4375C219.375 77.9375 219.812 81.7292 220.688 86.8125C221.521 92.0208 221.938 95.8333 221.938 98.25C221.938 99.5833 221.375 100.25 220.25 100.25C218.208 100.25 217.188 99.3125 217.188 97.4375L217.25 97.125L217.312 96.8125C212.354 99.6458 208.062 101.062 204.438 101.062C197.979 101.062 193.208 96.4583 190.125 87.25ZM247.625 87.25C244.583 78.125 243.062 63.7708 243.062 44.1875C243.062 40.0208 243.167 36.3333 243.375 33.125C243.5 30.75 243.688 28.6458 243.938 26.8125C244.188 24.9375 244.562 22.7917 245.062 20.375C245.521 18.125 246.083 16.1458 246.75 14.4375C247.417 12.6875 248.292 10.875 249.375 9C250.417 7.25 251.583 5.8125 252.875 4.6875C254.167 3.52083 255.729 2.58333 257.562 1.875C259.438 1.16667 261.396 0.8125 263.438 0.8125C265.979 0.8125 267.25 1.54167 267.25 3C267.25 4.04167 266.625 4.5625 265.375 4.5625C264.958 4.5625 264.354 4.4375 263.562 4.1875C262.646 3.97917 262.042 3.875 261.75 3.875C260.333 3.875 259 4.1875 257.75 4.8125C256.5 5.4375 255.417 6.29167 254.5 7.375C253.667 8.33333 252.875 9.60417 252.125 11.1875C251.375 12.7708 250.75 14.4375 250.25 16.1875C249.458 18.8542 248.792 22.6458 248.25 27.5625C247.875 30.7708 247.646 34.5417 247.562 38.875L247.438 47.3125C247.396 48.2292 247.375 50.5625 247.375 54.3125C247.375 58.5208 247.5 62.3958 247.75 65.9375C248.042 69.4792 248.542 73.1458 249.25 76.9375C250 81.1458 250.958 84.6875 252.125 87.5625C253.333 90.3958 254.917 92.7292 256.875 94.5625C258.833 96.4792 261.146 97.4375 263.812 97.4375C268.312 97.4375 271.938 95.3125 274.688 91.0625C274.688 88.6042 274.5 85.5833 274.125 82C273.958 80.0833 273.625 78.3125 273.125 76.6875C272.625 75.2708 272.042 74.5625 271.375 74.5625C270.708 74.5625 269.875 74.6458 268.875 74.8125C267.875 74.9792 267 75.0625 266.25 75.0625C264.292 75.0625 263.312 74.3333 263.312 72.875C263.312 72.1667 264.479 71.5208 266.812 70.9375C269.188 70.3542 271.208 70.0625 272.875 70.0625C274.208 70.0625 275.208 70.5625 275.875 71.5625C276.542 72.5625 276.875 73.8542 276.875 75.4375C276.875 77.9375 277.312 81.7292 278.188 86.8125C279.021 92.0208 279.438 95.8333 279.438 98.25C279.438 99.5833 278.875 100.25 277.75 100.25C275.708 100.25 274.688 99.3125 274.688 97.4375L274.75 97.125L274.812 96.8125C269.854 99.6458 265.562 101.062 261.938 101.062C255.479 101.062 250.708 96.4583 247.625 87.25ZM303.625 99C303.25 98.4583 303.062 97.8125 303.062 97.0625L303.125 95V91.9375C303.125 87.5208 302.917 81.4792 302.5 73.8125C302.083 66.1458 301.875 60.0833 301.875 55.625C301.875 49.1667 301.667 40.25 301.25 28.875C300.792 16.375 300.562 7.45833 300.562 2.125C300.562 1.66667 300.75 1.3125 301.125 1.0625C301.5 0.770833 301.938 0.625 302.438 0.625C303.938 0.625 304.688 1.22917 304.688 2.4375C304.688 17.8542 304.854 29.6875 305.188 37.9375L305.812 60.875C305.812 64.0833 306.042 69.9167 306.5 78.375C306.958 86.4167 307.208 91.7292 307.25 94.3125C307.25 94.4792 307.375 94.6042 307.625 94.6875C307.75 94.7292 308.333 94.75 309.375 94.75H317.25C318.417 94.75 319 95.5208 319 97.0625C319 97.7292 318.854 98.3125 318.562 98.8125C318.271 99.3125 317.896 99.5625 317.438 99.5625L316.562 99.625C316.271 99.6667 315.917 99.6875 315.5 99.6875C313.708 99.7292 310.271 99.75 305.188 99.75C304.562 99.75 304.042 99.5 303.625 99ZM339.375 99.1875C338.542 98.8542 338.125 98.1042 338.125 96.9375V94.5625C338.083 93.8542 338.062 93.0625 338.062 92.1875V91.9375L338.188 73.25L338.062 20.4375C338.062 16.2708 337.979 11.5208 337.812 6.1875C337.812 5.14583 338.021 4.29167 338.438 3.625C338.854 2.95833 339.417 2.625 340.125 2.625H348.062C348.604 2.625 349.062 2.64583 349.438 2.6875C349.854 2.6875 350.271 2.75 350.688 2.875C351.562 3.16667 352 3.89583 352 5.0625C352 5.72917 351.729 6.29167 351.188 6.75C350.646 7.16667 350.083 7.39583 349.5 7.4375C349.125 7.47917 348.417 7.5 347.375 7.5L345.312 7.375L343.25 7.25C342.625 7.25 342.208 7.35417 342 7.5625C341.833 7.72917 341.75 8.125 341.75 8.75C341.75 12.7917 341.771 16.4167 341.812 19.625V30.5V46.5C341.812 46.6667 341.896 46.75 342.062 46.75H342.188H342.312C345.188 46.5833 347.5 46.5 349.25 46.5C350.667 46.5 351.375 47.125 351.375 48.375C351.375 49.1667 351.229 49.7292 350.938 50.0625C350.646 50.3542 350.146 50.5 349.438 50.5H342.125C341.792 50.5 341.625 50.7083 341.625 51.125C341.625 56 341.708 62.3333 341.875 70.125C342.042 77.9583 342.125 84.7292 342.125 90.4375V95.1875L347.562 95.125H353H354.125C355.708 95.125 356.5 95.6875 356.5 96.8125C356.5 98.1458 356.104 98.9583 355.312 99.25C354.438 99.5833 352.354 99.75 349.062 99.75H343.625C341.625 99.75 340.208 99.5625 339.375 99.1875ZM13.8125 266.625C11.6458 266.417 10.1667 266.312 9.375 266.312C9.08333 266.312 8.875 266.354 8.75 266.438C8.625 266.521 8.54167 266.667 8.5 266.875C8.45833 266.958 8.4375 267.042 8.4375 267.125C8.4375 267.208 8.41667 267.271 8.375 267.312L8.125 269.875C7.91667 272.042 7.4375 275.104 6.6875 279.062C6.22917 281.229 5.72917 283.021 5.1875 284.438C4.5625 285.896 3.91667 286.625 3.25 286.625C2.70833 286.625 2.14583 286.396 1.5625 285.938C0.979167 285.438 0.6875 284.938 0.6875 284.438L0.8125 284.062L0.9375 283.688C2.35417 278.229 3.64583 272.208 4.8125 265.625L6.25 257.688C6.54167 256.146 6.83333 254.417 7.125 252.5L7.875 248L9.25 239.562C9.625 237.188 10.375 233.458 11.5 228.375C12.5833 223.167 13.3333 219.208 13.75 216.5L14.25 211.812L14.5 209.75C14.7083 207.458 14.9167 205.729 15.125 204.562C15.4583 202.396 15.7292 201.125 15.9375 200.75L16.8125 200.812C17.0625 200.854 17.3542 200.875 17.6875 200.875C18.7292 200.875 19.5 200.625 20 200.125C20.5833 200.125 21.1042 200.312 21.5625 200.688C22.0625 201.062 22.3125 201.521 22.3125 202.062C22.3125 204.479 22.375 206.708 22.5 208.75C22.6667 210.75 22.9167 213.208 23.25 216.125L24 222.875C25.0417 234.917 27.4167 255.583 31.125 284.875V285.25C31.125 286.125 30.7917 286.75 30.125 287.125C29.2083 287.125 28.5625 287.062 28.1875 286.938C27.8125 286.854 27.5417 286.625 27.375 286.25C27.2083 285.875 27.0625 285.229 26.9375 284.312L24.8125 267.562C23.2708 267.146 21.1667 266.938 18.5 266.938C17.5417 266.938 15.9792 266.833 13.8125 266.625ZM12.4375 243.875C10.4792 253.583 9.5 259.792 9.5 262.5C9.5 262.917 11.1458 263.292 14.4375 263.625C17.7292 263.958 20.5625 264.125 22.9375 264.125H24.25C23.625 255.167 22 237.021 19.375 209.688C14.9583 231.646 12.6458 243.042 12.4375 243.875ZM73.125 286.375C73.125 287.583 72.6458 288.188 71.6875 288.188L69.8125 287.562C68.8125 286.438 67.7083 283.5 66.5 278.75C65.3333 273.958 64.25 268.562 63.25 262.562C62.4167 257.521 61.4375 252.708 60.3125 248.125C59.2708 243.833 58.2917 241.688 57.375 241.688H56.875C55 241.688 54.0625 242.292 54.0625 243.5C54.0625 248.125 54.4375 257.479 55.1875 271.562C55.4792 279.104 55.8333 283.583 56.25 285L55.3125 287.125H53.4375L52.5 286.125C51.125 249.167 50.4375 222.292 50.4375 205.5C50.4375 204.458 50.4792 203.667 50.5625 203.125C50.6875 202.583 50.9583 202.042 51.375 201.5C51.8333 200.917 52.4583 200.625 53.25 200.625C57.5417 200.625 61 201.708 63.625 203.875C66.2917 206.042 67.625 209.104 67.625 213.062V222.375C67.625 223.958 67.1042 226.083 66.0625 228.75C65.0625 231.417 63.9167 233.979 62.625 236.438C61.5 238.479 60.9375 239.562 60.9375 239.688C60.9375 239.979 62.5625 246.792 65.8125 260.125C69.0625 273.458 70.8125 280.458 71.0625 281.125C71.0625 281.167 71.125 281.333 71.25 281.625C71.375 281.875 71.6667 282.438 72.125 283.312C72.7917 284.604 73.125 285.625 73.125 286.375ZM54.3125 222.75C54.4792 228.875 54.5625 234.042 54.5625 238.25L54.8125 238.5C56.3958 238.5 57.8333 237.688 59.125 236.062C60.4583 234.396 61.4583 232.312 62.125 229.812C62.7917 227.438 63.2917 225.146 63.625 222.938C64 220.729 64.1875 218.875 64.1875 217.375C64.1875 215.417 64.0833 213.792 63.875 212.5C63.7083 211.208 63.375 209.854 62.875 208.438C62.3333 206.979 61.4375 205.875 60.1875 205.125C58.9792 204.333 57.4375 203.938 55.5625 203.938C55.1042 203.938 54.7292 204.312 54.4375 205.062C54.1875 205.771 54.0625 206.5 54.0625 207.25C54.0625 211.458 54.1458 216.625 54.3125 222.75ZM105.562 284.5C104.812 285 104.104 285.25 103.438 285.25L102 284.188L101.875 279.5L101.75 274.875L101.875 272.625L102 270.375C102 269.25 101.833 268.229 101.5 267.312C101.5 260.396 101.083 249.792 100.25 235.5C99.375 220.792 98.9167 210.583 98.875 204.875C93.4167 204.875 89.875 204.729 88.25 204.438C86.5 204.104 85.625 203.438 85.625 202.438C86 201.479 86.8125 201 88.0625 201C90.0208 201 93.7292 201.188 99.1875 201.562C104.354 201.979 108.062 202.188 110.312 202.188L113.062 202.125L115.75 202.062C117.292 202.062 118.062 202.604 118.062 203.688C118.062 204.229 117.792 204.646 117.25 204.938C116.708 205.229 116.042 205.375 115.25 205.375C114.167 205.375 112.354 205.292 109.812 205.125C107.271 204.958 105.438 204.875 104.312 204.875C104.062 204.875 103.896 205 103.812 205.25C103.729 205.667 103.688 206.479 103.688 207.688C103.688 216.021 104.188 228.542 105.188 245.25C106.188 261.917 106.688 274.438 106.688 282.812C106.688 283.396 106.312 283.958 105.562 284.5ZM180.562 286.438C179.771 285.896 179.312 285.229 179.188 284.438L179.812 283.438C180.479 283.521 181.229 283.667 182.062 283.875C183.062 284.167 183.854 284.312 184.438 284.312C186.354 284.312 188.021 283.583 189.438 282.125C190.896 280.625 191.979 278.667 192.688 276.25C193.938 272 194.562 267.833 194.562 263.75C194.562 260.583 194.062 257.375 193.062 254.125C192.062 250.875 190.75 247.771 189.125 244.812L187.625 242.125C185.833 238.875 184.438 236.25 183.438 234.25C182.438 232.25 181.562 230.021 180.812 227.562C179.729 224.188 179.188 220.792 179.188 217.375C179.188 215.833 179.375 214.125 179.75 212.25C180.167 210.333 180.75 208.438 181.5 206.562C182.292 204.562 183.375 202.958 184.75 201.75C186.125 200.5 187.646 199.875 189.312 199.875C190.354 199.875 191.417 200.25 192.5 201C193.625 201.75 194.188 202.562 194.188 203.438C194.188 204.104 193.625 204.438 192.5 204.438C192.208 204.438 191.771 204.312 191.188 204.062C190.646 203.812 190.188 203.688 189.812 203.688C188.521 203.688 187.375 204.208 186.375 205.25C185.375 206.25 184.604 207.583 184.062 209.25C183.021 212.375 182.5 215.25 182.5 217.875C182.5 219.542 182.708 221.208 183.125 222.875L183.562 225C183.604 225.375 183.854 226.229 184.312 227.562L184.938 229.812L185.875 232.125L188.125 236.062L189.125 237.75C190.292 239.708 191.271 241.396 192.062 242.812C192.854 244.229 193.646 245.792 194.438 247.5C195.271 249.333 195.896 251.021 196.312 252.562C196.729 254.104 197.104 256 197.438 258.25C197.729 260.292 197.875 262.625 197.875 265.25C197.875 269.542 197.292 273.375 196.125 276.75C195.375 278.875 194.479 280.688 193.438 282.188C192.438 283.646 191.146 284.833 189.562 285.75C187.896 286.75 186.021 287.25 183.938 287.25L183.312 287.562C182.312 287.396 181.396 287.021 180.562 286.438ZM193.5 204.062C193.5 203.979 193.458 203.938 193.375 203.938V204.062H193.5ZM234.312 284.5C233.562 285 232.854 285.25 232.188 285.25L230.75 284.188L230.625 279.5L230.5 274.875L230.625 272.625L230.75 270.375C230.75 269.25 230.583 268.229 230.25 267.312C230.25 260.396 229.833 249.792 229 235.5C228.125 220.792 227.667 210.583 227.625 204.875C222.167 204.875 218.625 204.729 217 204.438C215.25 204.104 214.375 203.438 214.375 202.438C214.75 201.479 215.562 201 216.812 201C218.771 201 222.479 201.188 227.938 201.562C233.104 201.979 236.812 202.188 239.062 202.188L241.812 202.125L244.5 202.062C246.042 202.062 246.812 202.604 246.812 203.688C246.812 204.229 246.542 204.646 246 204.938C245.458 205.229 244.792 205.375 244 205.375C242.917 205.375 241.104 205.292 238.562 205.125C236.021 204.958 234.188 204.875 233.062 204.875C232.812 204.875 232.646 205 232.562 205.25C232.479 205.667 232.438 206.479 232.438 207.688C232.438 216.021 232.938 228.542 233.938 245.25C234.938 261.917 235.438 274.438 235.438 282.812C235.438 283.396 235.062 283.958 234.312 284.5ZM282.938 285.812C281.396 287.229 279.583 287.938 277.5 287.938C276.125 287.896 274.646 287.438 273.062 286.562C271.479 285.688 270.188 284.646 269.188 283.438C268.021 281.938 267.083 277.625 266.375 270.5C265.667 263.375 265.25 255.271 265.125 246.188L265.062 242.062C264.896 230.646 264.729 221.938 264.562 215.938C264.438 209.938 264.229 205.812 263.938 203.562L264.75 201.75C266.708 202 267.688 204.354 267.688 208.812L268.062 242.75C268.062 245.458 268.292 249.979 268.75 256.312C269.208 262.646 269.438 267.167 269.438 269.875C269.438 279.583 272.646 284.438 279.062 284.438C282.979 284.438 285.479 275.5 286.562 257.625L286.75 255C287.333 234.125 287.625 216.771 287.625 202.938L287.5 201.75L287.375 200.625C287.375 199.667 288.104 199.188 289.562 199.188C290.562 199.188 291.188 199.458 291.438 200C291.646 200.625 291.75 202.104 291.75 204.438C291.75 211.104 291.479 215.458 290.938 217.5C291.021 217.75 291.062 218.021 291.062 218.312C291.062 219.146 290.958 220.854 290.75 223.438C290.542 226.021 290.438 227.708 290.438 228.5C290.438 228.958 290.458 229.375 290.5 229.75C290.542 230.125 290.562 230.562 290.562 231.062C290.438 232.646 290.333 235.562 290.25 239.812C290.125 248.188 289.938 255.229 289.688 260.938C289.396 268.312 288.375 274.583 286.625 279.75C285.75 282.375 284.521 284.396 282.938 285.812ZM316.125 286.625C315.375 286.625 315 285.479 315 283.188C314.667 276.104 314.5 268.688 314.5 260.938L314.625 245.812L314.75 230.688C314.75 222.312 314.583 214.292 314.25 206.625C313.542 206.042 313.188 205.188 313.188 204.062C313.188 203.438 313.542 202.812 314.25 202.188C314.958 201.562 315.625 201.25 316.25 201.25C316.833 201.25 317.479 201.583 318.188 202.25C318.938 203 319.375 203.396 319.5 203.438C320.083 203.729 321.083 203.979 322.5 204.188C324 204.438 325 204.708 325.5 205C326.75 205.625 328.458 206.938 330.625 208.938C332.542 210.812 333.979 212.104 334.938 212.812L334.812 213.062C334.854 213.521 335.5 214.604 336.75 216.312C337.875 217.896 338.604 219.104 338.938 219.938C340.312 223.604 341 228.688 341 235.188C341 236.312 340.979 237.312 340.938 238.188C340.896 239.062 340.875 240.062 340.875 241.188V242.25C340.833 242.625 340.812 243.042 340.812 243.5C340.812 245.167 341.042 246.458 341.5 247.375C341 250.083 340.396 255.229 339.688 262.812C339.479 264.979 339.062 267.312 338.438 269.812C337.812 272.271 337.062 274.333 336.188 276C335.188 277.875 333.729 279.771 331.812 281.688C329.896 283.562 327.625 285.208 325 286.625H316.125ZM319.875 278.562L319.75 281L320.25 281.25L320.625 282.938H324.562C325.062 282.229 325.604 281.667 326.188 281.25C326.312 281.125 326.438 281.021 326.562 280.938C326.729 280.812 326.896 280.688 327.062 280.562L328.062 279.75C334.104 274.333 337.125 264.083 337.125 249C337.125 248.083 337.104 247.271 337.062 246.562C337.021 245.896 337 245.167 337 244.375L336.375 231.5C336.292 229.208 335.854 226.729 335.062 224.062C334.312 221.354 333.292 218.708 332 216.125C330.625 213.458 328.854 211.292 326.688 209.625C324.562 207.958 322.292 207.125 319.875 207.125C318.917 207.125 318.438 215.021 318.438 230.812C318.438 248.854 318.917 264.771 319.875 278.562ZM375.25 286C373.25 286 372.083 285.583 371.75 284.75C371.333 284.75 370.979 284.771 370.688 284.812C370.354 284.854 370 284.875 369.625 284.875C367.792 284.875 366.625 284.438 366.125 283.562C366.125 283.229 366.188 282.958 366.312 282.75C366.438 282.542 366.688 282.312 367.062 282.062L367.812 281.375H371.5L372 280.875C372 280.708 372.083 280.312 372.25 279.688C372.375 278.979 372.438 278.479 372.438 278.188C372.438 274.646 372.292 269.979 372 264.188C371.667 257.604 371.5 252.938 371.5 250.188C371.5 247.604 371.604 242.604 371.812 235.188C372.021 227.812 372.125 222.854 372.125 220.312C372.125 214.312 371.917 209.375 371.5 205.5C370.708 205.25 369.438 205.125 367.688 205.125L366.188 205.25L364.625 205.375C363 205.375 362.188 204.646 362.188 203.188C362.188 202.854 362.562 202.521 363.312 202.188C364.062 201.812 364.708 201.625 365.25 201.625C368.042 201.625 371.271 201.792 374.938 202.125C377.146 202.292 379.104 202.688 380.812 203.312C382.312 203.854 383.062 204.583 383.062 205.5C383.062 205.667 382.958 206 382.75 206.5L379.812 206.75C379.146 206.25 377.917 206 376.125 206L375.5 206.375C375.75 207.125 375.875 209.396 375.875 213.188C375.875 216.562 375.812 221.625 375.688 228.375C375.562 235.167 375.5 240.25 375.5 243.625C375.5 247.167 375.646 251.833 375.938 257.625C376.229 263.458 376.375 268.146 376.375 271.688L376.312 273.312C376.271 273.938 376.25 274.708 376.25 275.625C376.25 277.625 376.375 278.812 376.625 279.188L376.5 279.5C376.5 280.333 377.438 280.75 379.312 280.75C380.021 280.75 380.646 280.729 381.188 280.688C381.729 280.646 382.354 280.625 383.062 280.625C385.604 280.625 386.875 281.229 386.875 282.438C386.875 283.188 386.604 283.812 386.062 284.312C385.521 284.771 384.854 285 384.062 285C383.479 285 382.771 284.917 381.938 284.75C381.021 284.625 380.312 284.562 379.812 284.562C379.229 284.562 378.438 284.792 377.438 285.25C376.521 285.75 375.792 286 375.25 286ZM427.5 286.875C426.042 287.917 424.354 288.438 422.438 288.438C412.438 288.438 407.438 272.729 407.438 241.312V236.875C407.438 213.083 410.521 201.188 416.688 201.188C417.104 201.188 417.688 201.292 418.438 201.5C420.229 202.125 421.979 202.583 423.688 202.875C425.396 203.167 426.333 203.333 426.5 203.375C428.167 203.667 429.792 205.312 431.375 208.312C433.167 211.396 434.5 215.417 435.375 220.375C436.292 225.333 436.75 230.521 436.75 235.938L436.5 236.562L436.625 244.188L436.75 251.812C436.75 253.604 436.729 255.438 436.688 257.312C436.646 259.146 436.521 261.229 436.312 263.562C436.062 266.312 435.729 268.75 435.312 270.875C434.938 272.958 434.417 275.083 433.75 277.25C433 279.583 432.125 281.542 431.125 283.125C430.167 284.667 428.958 285.917 427.5 286.875ZM411.562 246.25L411.688 251.312C411.688 255.062 412.042 259.688 412.75 265.188C413.25 268.979 413.854 272.208 414.562 274.875C415.271 277.5 416.229 279.771 417.438 281.688C418.729 283.729 420.229 284.75 421.938 284.75C423.562 284.75 425.021 284.125 426.312 282.875C427.604 281.625 428.625 279.875 429.375 277.625C430.958 272.958 431.938 268.104 432.312 263.062C432.646 258.688 432.812 254.604 432.812 250.812C432.812 247.729 432.583 242.688 432.125 235.688C431.625 228.979 431.375 223.938 431.375 220.562L430.875 219.562L431.125 218.938C431.125 216.479 430.646 214.208 429.688 212.125C428.729 210 427.417 208.312 425.75 207.062C424.125 205.771 422.333 205.125 420.375 205.125C416.458 205.125 414.146 207 413.438 210.75C413.104 212.583 412.917 214.417 412.875 216.25C412.875 216.667 412.854 217.646 412.812 219.188C412.812 220.729 412.75 222.458 412.625 224.375C412.542 226.25 412.354 227.854 412.062 229.188C412.062 230.188 411.958 232.188 411.75 235.188C411.542 238.188 411.438 240.188 411.438 241.188L411.562 246.25Z"
      />
    </svg>
  );
}
