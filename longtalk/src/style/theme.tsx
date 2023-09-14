const size = {
  desktop: "1150px",
  tablet: "850px",
};

const theme = {
  // 브레이크 포인트
  mobile: `(max-width: ${size.tablet})`,
  tablet: `(max-width: ${size.desktop})`,
  desktop: `(min-width: ${size.desktop})`,
};

export default theme;
