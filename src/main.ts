import p5, { Color } from "p5";

new p5((p: p5) => {
  // 直径の定義
  let d: number;

  // 背景色の定義
  // （色の型って「Color」なんだ……）
  let bgColor: Color;

  // 円の色の定義
  let circleColor: Color;

  p.setup = () => {
    p.createCanvas(p.windowWidth, p.windowHeight);
    p.noStroke();
    circleColor = p.color(p.random(255), p.random(255), p.random(255))
    reset();
  }

  p.draw = () => {
    d += 5;

    // dist(x1, y1, x2, y2)で、(x1, y1)から(x2, y2)までも直線距離を計算してくれる
    if (d / 2 > p.dist(0, 0, p.width / 2, p.height / 2)) {
      reset();
    }

    p.background(bgColor);
    p.fill(circleColor);
    p.circle(p.width / 2, p.height / 2, d)
  }

  // 直径のリセット、背景色に円の色を入れて円の色を変更
  const reset = () => {
    d = 0;
    bgColor = circleColor;
    circleColor = p.color(p.random(255), p.random(255), p.random(255))
  }

  // マウスをクリックするとresetが呼ばれる
  p.mouseClicked = () => {
    reset();
  }
})