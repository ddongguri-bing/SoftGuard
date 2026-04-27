import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      pretendard: ["Pretendard", "sans-serif"],
    },
    extend: {
      colors: {
        // theme
        "theme-main": "#9B5DE0",
        "theme-sub": "#BB8FEB",
        "theme-light": "#DBC1F8",
        // black
        "black-first": "#000000",
        "black-second": "#2C2C2C",
        "black-third": "#545454",
        // white
        "white-first": "#FFFFFF",
        "white-second": "#F2F2F2",
        "white-third": "#D9D9D9",
        // notice
        error: "#E32322",
        warning: "#FFB013",
        success: "#00CC11",
        // notice - opacity 5%
        "error-opa5": "#E323220D",
        "warning-opa5": "#FFB0130D",
        "success-opa5": "#00CC110D",
      },
      fontSize: {
        // display
        "display-pc-large": [
          "60px",
          {
            fontWeight: "700",
            lineHeight: "150%",
          },
        ],
        "display-pc-medium": [
          "44px",
          {
            fontWeight: "700",
            lineHeight: "150%",
          },
        ],
        "display-pc-small": [
          "36px",
          {
            fontWeight: "700",
            lineHeight: "150%",
          },
        ],
        // heading
        "heading-pc-xlarge": [
          "40px",
          {
            fontWeight: "700",
            lineHeight: "150%",
          },
        ],
        "heading-pc-large": [
          "32px",
          {
            fontWeight: "700",
            lineHeight: "150%",
          },
        ],
        "heading-pc-medium": [
          "24px",
          {
            fontWeight: "700",
            lineHeight: "150%",
          },
        ],
        "heading-pc-small": [
          "19px",
          {
            fontWeight: "700",
            lineHeight: "150%",
          },
        ],
        "heading-pc-xsmall": [
          "17px",
          {
            fontWeight: "700",
            lineHeight: "150%",
          },
        ],
        "heading-pc-xxsmall": [
          "15px",
          {
            fontWeight: "700",
            lineHeight: "150%",
          },
        ],
        // body
        "body-large-bold": [
          "19px",
          {
            fontWeight: "700",
            lineHeight: "150%",
          },
        ],
        "body-large": [
          "19px",
          {
            fontWeight: "400",
            lineHeight: "150%",
          },
        ],
        "body-medium-bold": [
          "17px",
          {
            fontWeight: "700",
            lineHeight: "150%",
          },
        ],
        "body-medium": [
          "17px",
          {
            fontWeight: "400",
            lineHeight: "150%",
          },
        ],
        "body-small-bold": [
          "15px",
          {
            fontWeight: "700",
            lineHeight: "150%",
          },
        ],
        "body-small": [
          "15px",
          {
            fontWeight: "400",
            lineHeight: "150%",
          },
        ],
        "body-xsmall-bold": [
          "13px",
          {
            fontWeight: "700",
            lineHeight: "150%",
          },
        ],
        "body-xsmall": [
          "13px",
          {
            fontWeight: "400",
            lineHeight: "150%",
          },
        ],
      },
      boxShadow: {
        error: "0 0 4px 0 #E32322",
        warning: "0 0 4px 0 #FFB013;",
        success: " 0 0 4px 0 #0C1;",
      },
    },
  },
};

export default config;
