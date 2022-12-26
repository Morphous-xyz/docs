import React from "react";
import { DocsThemeConfig, useConfig } from "nextra-theme-docs";
import { useRouter } from "next/router";

const config: DocsThemeConfig = {
  logo: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 318 55"
      width="138.763636364"
      height="24"
    >
      <g transform="matrix(1,0,0,1,-80.8,-79)">
        <path
          d="M167.222 90.404H173.147L184.327 114.944L195.507 90.404H201.431V123.907H195.698V102.147L185.76 123.907H182.893L172.956 102.147V123.907H167.222V90.404Z"
          fill="#139c5a"
        />
        <path
          d="M219.631 124.626C216.956 124.626 214.599 124.147 212.56 123.188C210.554 122.198 208.993 120.792 207.878 118.971C206.763 117.117 206.206 114.928 206.206 112.404C206.206 109.944 206.747 107.803 207.83 105.981C208.945 104.128 210.522 102.706 212.56 101.716C214.599 100.693 216.956 100.182 219.631 100.182C222.307 100.182 224.648 100.693 226.655 101.716C228.693 102.706 230.27 104.128 231.385 105.981C232.5 107.803 233.057 109.944 233.057 112.404C233.057 114.928 232.5 117.117 231.385 118.971C230.27 120.792 228.693 122.198 226.655 123.188C224.648 124.147 222.307 124.626 219.631 124.626ZM219.631 119.881C221.829 119.881 223.581 119.194 224.887 117.82C226.193 116.414 226.846 114.609 226.846 112.404C226.846 110.071 226.193 108.25 224.887 106.94C223.613 105.598 221.861 104.927 219.631 104.927C217.402 104.927 215.634 105.598 214.328 106.94C213.054 108.25 212.417 110.071 212.417 112.404C212.417 114.609 213.07 116.414 214.376 117.82C215.682 119.194 217.434 119.881 219.631 119.881Z"
          fill="#139c5a"
        />
        <path
          d="M237.816 100.901H243.645V104.591C244.568 103.345 245.874 102.419 247.562 101.811C249.282 101.204 251.241 100.901 253.439 100.901V105.502C251.114 105.502 249.091 105.87 247.371 106.605C245.683 107.308 244.505 108.426 243.836 109.96V123.907H237.816V100.901Z"
          fill="#139c5a"
        />
        <path
          d="M257.272 100.901H263.101V103.681C264.343 102.498 265.697 101.62 267.162 101.045C268.627 100.469 270.299 100.182 272.179 100.182C274.504 100.182 276.574 100.693 278.39 101.716C280.237 102.706 281.671 104.128 282.69 105.981C283.741 107.803 284.267 109.928 284.267 112.356C284.267 114.753 283.741 116.878 282.69 118.731C281.671 120.584 280.237 122.038 278.39 123.093C276.574 124.115 274.504 124.626 272.179 124.626C270.427 124.626 268.771 124.387 267.21 123.907C265.681 123.396 264.375 122.645 263.292 121.655V134.404H257.272V100.901ZM270.698 119.881C272.864 119.881 274.647 119.178 276.049 117.772C277.45 116.366 278.151 114.561 278.151 112.356C278.151 110.151 277.45 108.362 276.049 106.988C274.647 105.614 272.864 104.927 270.698 104.927C268.978 104.927 267.449 105.39 266.111 106.317C264.773 107.244 263.834 108.49 263.292 110.056V114.705C263.802 116.27 264.725 117.533 266.063 118.491C267.433 119.418 268.978 119.881 270.698 119.881Z"
          fill="#139c5a"
        />
        <path
          d="M289.046 88.4868H295.066V103.825C297.232 101.396 300.035 100.182 303.475 100.182C306.565 100.182 308.874 101.029 310.403 102.722C311.932 104.384 312.696 106.605 312.696 109.384V123.907H306.676V109.96C306.676 106.605 305.115 104.927 301.994 104.927C300.624 104.927 299.334 105.262 298.124 105.933C296.914 106.573 295.894 107.547 295.066 108.857V123.907H289.046V88.4868Z"
          fill="#139c5a"
        />
        <path
          d="M329.978 124.626C327.302 124.626 324.945 124.147 322.906 123.188C320.9 122.198 319.339 120.792 318.224 118.971C317.109 117.117 316.552 114.928 316.552 112.404C316.552 109.944 317.093 107.803 318.176 105.981C319.291 104.128 320.868 102.706 322.906 101.716C324.945 100.693 327.302 100.182 329.978 100.182C332.653 100.182 334.994 100.693 337.001 101.716C339.039 102.706 340.616 104.128 341.731 105.981C342.846 107.803 343.403 109.944 343.403 112.404C343.403 114.928 342.846 117.117 341.731 118.971C340.616 120.792 339.039 122.198 337.001 123.188C334.994 124.147 332.653 124.626 329.978 124.626ZM329.978 119.881C332.175 119.881 333.927 119.194 335.233 117.82C336.539 116.414 337.192 114.609 337.192 112.404C337.192 110.071 336.539 108.25 335.233 106.94C333.959 105.598 332.207 104.927 329.978 104.927C327.748 104.927 325.98 105.598 324.674 106.94C323.4 108.25 322.763 110.071 322.763 112.404C322.763 114.609 323.416 116.414 324.722 117.82C326.028 119.194 327.78 119.881 329.978 119.881Z"
          fill="url(#textGrad)"
        />
        <g
          fill="#ffffff"
          transform="matrix(0.25232294032,0,0,0.25232294032,-18.5,-5.725)"
        >
          <path d="M1478.3 515.9 c-13.6 -2.6 -23 -12.1 -26.3 -26.1 -0.5 -2.4 -1 -19 -1 -37 l0 -32.8 12.4 0 12.5 0 0.3 32.3 c0.3 32 0.3 32.2 2.7 36.4 3.7 6.4 9 8.7 18.9 8.1 6.4 -0.4 8.9 -1.1 14.1 -3.8 3.5 -1.9 7.8 -5.2 9.7 -7.5 l3.4 -4.2 0 -30.7 0 -30.6 12.5 0 12.5 0 0 48 0 48 -12 0 -12 0 0 -7.1 0 -7 -4.7 3.9 c-2.7 2.2 -6.7 4.9 -9 6.1 -9 4.5 -23.2 6.2 -34 4z" />
          <path d="M1596.6 516 c-8.3 -1.3 -16.8 -3.6 -21.3 -5.7 l-3.8 -1.8 -0.5 -10.6 -0.5 -10.6 6 2.7 c10.7 4.9 18.8 6.4 33 6.5 15.5 0 18.5 -1.1 18.5 -6.9 0 -4.9 -4.2 -8 -14.8 -11.1 -29.4 -8.6 -35.8 -11.7 -40 -19.4 -3.3 -5.7 -4 -14.3 -1.8 -20.9 4.4 -13.1 21.8 -20.2 46.1 -18.9 11.7 0.7 21 2.5 26.9 5.3 l3.6 1.8 0 10.2 0 10.3 -5.7 -2.6 c-7.9 -3.5 -17.2 -5.3 -27.3 -5.3 -13.9 0 -19 2.3 -19 8.4 0 5.6 2.6 7.1 22.3 12.5 23.9 6.6 32.2 12.2 34.7 23.4 3.3 14.3 -4.1 25.8 -19.8 30.8 -7.7 2.4 -26.9 3.4 -36.6 1.9z" />
        </g>
        <g opacity="0.9" filter="url(#filter0_d_2551_6105)">
          <path
            d="M88.0875 116.298V132.274C88.0875 133.257 88.9225 133.665 89.1823 133.758C89.4421 133.87 90.3142 134.111 91.0935 133.387L104.769 120.287C106.03 118.654 106.494 117.634 106.494 117.634C107.237 116.131 107.237 114.683 106.513 113.236C105.437 111.084 102.691 108.894 98.5527 106.816L91.4832 110.75C89.3864 111.937 88.0875 114.034 88.0875 116.298Z"
            fill="#2e855b"
          />
        </g>
        <g filter="url(#filter1_d_2551_6105)">
          <path
            d="M81 80.7642V97.5197C81 99.6164 82.4103 101.472 84.4142 102.066C91.2426 104.033 103.136 108.263 106.013 114.479C106.384 115.296 106.606 116.094 106.681 116.929C108.592 113.459 109.464 109.469 109.056 105.424C108.499 99.6906 105.456 94.4766 100.706 91.1552L83.7648 79.3355C83.4679 79.1128 83.1153 79.0015 82.7628 79.0015C82.4659 79.0015 82.2061 79.0571 81.9278 79.2056C81.3711 79.521 81 80.0962 81 80.7642Z"
            fill="url(#paint0_linear_2551_6105)"
          />
        </g>
        <g opacity="0.9" filter="url(#filter2_d_2551_6105)">
          <path
            d="M133.902 116.298V132.274C133.902 133.257 133.067 133.665 132.807 133.758C132.547 133.87 131.675 134.111 130.896 133.387L117.221 120.287C115.959 118.654 115.495 117.634 115.495 117.634C114.753 116.131 114.753 114.683 115.476 113.236C116.553 111.084 119.299 108.894 123.437 106.816L130.506 110.75C132.621 111.937 133.902 114.034 133.902 116.298Z"
            fill="#18784a"
          />
        </g>
        <g filter="url(#filter3_d_2551_6105)">
          <path
            d="M141 80.7628V97.5182C141 99.6149 139.59 101.47 137.586 102.064C130.758 104.031 118.864 108.262 115.988 114.478C115.616 115.294 115.394 116.092 115.32 116.927C113.408 113.457 112.536 109.468 112.944 105.423C113.501 99.6892 116.544 94.4751 121.294 91.1537L138.235 79.334C138.532 79.1113 138.885 79 139.237 79C139.534 79 139.794 79.0557 140.072 79.2041C140.629 79.5195 141 80.0948 141 80.7628Z"
            fill="url(#paint1_linear_2551_6105)"
          />
        </g>
      </g>
      <defs>
        <filter
          id="filter0_d_2551_6105"
          x="83.0875"
          y="102.816"
          width="30.9658"
          height="39.0718"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dx="1" dy="2" />
          <feGaussianBlur stdDeviation="3" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.22 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_2551_6105"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_2551_6105"
            result="shape"
          />
        </filter>
        <filter
          id="filter1_d_2551_6105"
          x="71"
          y="73.0015"
          width="48.1543"
          height="57.9272"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="5" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_2551_6105"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_2551_6105"
            result="shape"
          />
        </filter>
        <filter
          id="filter2_d_2551_6105"
          x="109.936"
          y="102.816"
          width="30.9658"
          height="39.0718"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dx="1" dy="2" />
          <feGaussianBlur stdDeviation="3" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.22 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_2551_6105"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_2551_6105"
            result="shape"
          />
        </filter>
        <filter
          id="filter3_d_2551_6105"
          x="102.846"
          y="73"
          width="48.1542"
          height="57.9272"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="5" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_2551_6105"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_2551_6105"
            result="shape"
          />
        </filter>
        <linearGradient
          id="paint0_linear_2551_6105"
          x1="81.0788"
          y1="116.685"
          x2="108.932"
          y2="116.685"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#1e5c3e" />
          <stop offset="0.932292" stopColor="#00ff84" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_2551_6105"
          x1="112.925"
          y1="116.683"
          x2="140.778"
          y2="116.683"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.0520833" stopColor="#00ff84" />
          <stop offset="1" stopColor="#1e5c3e" />
        </linearGradient>
        <linearGradient id="textGrad" x1="0%" y1="50%" x2="100%" y2="50%">
          <stop offset="0" stopColor="#139c5a" />
          <stop offset="1" stopColor="#ffffff" />
        </linearGradient>
      </defs>
    </svg>
  ),
  primaryHue: 151,
  darkMode: false,
  nextThemes: {
    forcedTheme: "dark",
  },
  project: {
    link: "https://github.com/Morphous-xyz",
  },
  docsRepositoryBase:
    "https://github.com/Morphous-xyz/trinity/tree/master/docs",
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Language" content="en" />
      <link rel="shortcut icon" href="/favicon.ico" />
    </>
  ),
  footer: {
    component: null,
  },
  useNextSeoProps() {
    const { route } = useRouter();
    const { frontMatter } = useConfig();

    const defaultSeoProps = {
      description:
        "Morphous is a router for DSProxy users built on top of Morpho Protocol, to add additional features like leverage, strategies — all in one-click.",
      openGraph: {
        description:
          "Morphous is a router for DSProxy users built on top of Morpho Protocol, to add additional features like leverage, strategies — all in one-click.",
        title: "Morphous Documentation",
        images: [{ url: "https://www.morphous.xyz/assets/hero.png" }],
      },
      themeColor: "#ffffff",
      twitter: {
        cardType: "summary_large_image",
        handle: "@Mutative_",
        site: "docs.morphous.xyz",
      },
    } as const;

    if (!/^\/index/.test(route))
      return {
        ...defaultSeoProps,
        description: frontMatter.description,
        openGraph: {
          ...defaultSeoProps.openGraph,
          description: frontMatter.description,
          images: frontMatter.image
            ? [{ url: frontMatter.image }]
            : defaultSeoProps.openGraph.images,
          title: frontMatter.title,
        },
        titleTemplate: `%s – Morphous Documentation`,
      };
    return { ...defaultSeoProps, title: "Morphous Documentation" };
  },
};

export default config;
