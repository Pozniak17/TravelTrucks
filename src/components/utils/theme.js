export const theme = {
  colors: {
    main: "#101828",
    text: "#475467",
    gray: "#6c717b",
    button: "#e44848",
    buttonHover: "#d84343",
    rating: "#ffc531",
    grayLight: "#dadde1",
    badges: "#f2f4f7",
    inputs: "#f7f7f7",
    white: "#fff",
  },
  space: [0, 2, 4, 8, 16, 32, 64, 100, 128, 256],
  sizes: [100, 200, 300, 400],
  fonts: {
    body: "system-ui, sans-serif",
    heading: "system-ui, sans-serif",
    monospace: "Menlo, monospace",
  },
  fontSizes: {
    xs: "12px",
    s: "14px",
    m: "16px",
    l: "32px",
    xl: "64px",
  },
  fontWeights: {
    normal: 400,
    larger: 500,
    big: 600,
    bold: 700,
    extra: 800,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.125,
  },
  borders: {
    none: "none",
    normal: "1px solid",
  },
  radii: {
    none: "0",
    normal: "4px",
    big: "12px",
    round: "50%",
  }, // це для margin, padding
  // spacing: 4,
  spacing: (value) => `${4 * value}px`,

  shadows: {
    standart: "10px 10px 8px 2px rgba(0, 0, 0, 0.3)",
  },
};
