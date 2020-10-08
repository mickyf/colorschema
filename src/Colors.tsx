import React from "react";
import Color from "./Color";

interface hsl {
  h: number;
  s: number;
  l: number;
}

interface Props {
  hue: number;
  sat: number;
  light: number;
}

function Colors(props: Props) {
  const base_h = props.hue;
  const base_s = props.sat;
  const base_l = props.light;

  const comp_h = base_h; // >= 180 ? base_h - 180 : base_h + 180;

  let colors: hsl[] = [];

  //colors.push({ h: base_h, s: base_s, l: base_l });

  /*if (base_l > 75) {
    colors.push({ h: comp_h, s: base_s, l: base_l - 25 });
    colors.push({
      h: base_h,
      s: base_s > 50 ? base_s - 50 : base_s + 50,
      l: base_l,
    });
    colors.push({ h: comp_h, s: base_s, l: base_l - 50 });
    colors.push({ h: base_h, s: base_s, l: base_l - 25 });
    colors.push({ h: base_h, s: base_s, l: base_l - 50 });
  } else if (base_l > 50) {
    colors.push({ h: comp_h, s: base_s, l: base_l + 25 });
    colors.push({
      h: base_h,
      s: base_s > 50 ? base_s - 50 : base_s + 50,
      l: base_l,
    });
    colors.push({ h: comp_h, s: base_s, l: base_l - 25 });
    colors.push({ h: base_h, s: base_s, l: base_l + 25 });
    colors.push({ h: base_h, s: base_s, l: base_l - 25 });
  } else {
    colors.push({ h: comp_h, s: base_s, l: base_l + 25 });
    colors.push({
      h: base_h,
      s: base_s > 50 ? base_s - 50 : base_s + 50,
      l: base_l,
    });
    colors.push({ h: comp_h, s: base_s, l: base_l + 50 });
    colors.push({ h: base_h, s: base_s, l: base_l + 25 });
    colors.push({ h: base_h, s: base_s, l: base_l + 50 });
  }*/

  let s_1 = base_s;
  let s_2 = base_s > 50 ? base_s - 50 : base_s + 50;
  let l_1 = base_l;
  let l_2 = 0;
  let l_3 = 0;
  let l_4 = 0;

  /*if (base_l > 75) {
    l_2 = base_l - 25;
    l_3 = base_l - 75;
    l_4 = base_l - 50;
  } else if (base_l > 50) {
    l_2 = base_l - 25;
    l_3 = base_l + 25;
    l_4 = base_l - 50;
  } else if (base_l > 25) {
    l_2 = base_l + 50;
    l_3 = base_l + 25;
    l_4 = base_l - 10;
  } else {
    l_2 = base_l + 50;
    l_3 = base_l + 25;
    l_4 = base_l + 75;
  }*/

  if (base_l > 66) {
    l_2 = base_l - 25;
    l_3 = base_l - 50;
  } else if (base_l > 33) {
    l_2 = base_l - 25;
    l_3 = base_l + 25;
  } else {
    l_2 = base_l + 50;
    l_3 = base_l + 25;
  }

  colors.push({ h: base_h, s: s_1, l: l_1 });
  colors.push({ h: base_h, s: s_1, l: l_2 });
  colors.push({ h: base_h, s: s_1, l: l_3 });
  //colors.push({ h: base_h, s: s_1, l: l_4 });
  colors.push({ h: base_h, s: s_2, l: l_1 });
  colors.push({ h: base_h, s: s_2, l: l_2 });
  colors.push({ h: base_h, s: s_2, l: l_3 });
  //colors.push({ h: base_h, s: s_2, l: l_4 });

  return (
    <>
      {colors.map((color) => (
        <Color hue={color.h} sat={color.s} light={color.l} />
      ))}
    </>
  );
}

export default Colors;
