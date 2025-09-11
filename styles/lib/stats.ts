export type Point = { x: number; y: number; g?: number };

export function mean(a: number[]): number {
  return a.reduce((s, v) => s + v, 0) / a.length;
}

// Ordinary Least Squares slope (simple linear regression)
export function olsSlope(points: Point[]): number {
  const xs = points.map((p) => p.x);
  const ys = points.map((p) => p.y);
  const mx = mean(xs);
  const my = mean(ys);

  let num = 0;
  let den = 0;
  for (let i = 0; i < points.length; i++) {
    const dx = xs[i] - mx;
    const dy = ys[i] - my;
    num += dx * dy;
    den += dx * dx;
  }
  return den === 0 ? 0 : num / den;
}

// Pearson correlation coefficient
export function corr(points: Point[]): number {
  const xs = points.map((p) => p.x);
  const ys = points.map((p) => p.y);
  const mx = mean(xs);
  const my = mean(ys);

  let num = 0;
  let denx = 0;
  let deny = 0;
  for (let i = 0; i < points.length; i++) {
    const dx = xs[i] - mx;
    const dy = ys[i] - my;
    num += dx * dy;
    denx += dx * dx;
    deny += dy * dy;
  }
  return denx === 0 || deny === 0 ? 0 : num / Math.sqrt(denx * deny);
}

// Compute regression line params (b0 + b1 * x)
export function regressionLine(points: Point[]): { b0: number; b1: number } {
  const xs = points.map((p) => p.x);
  const ys = points.map((p) => p.y);
  const mx = mean(xs);
  const my = mean(ys);
  const b1 = olsSlope(points);
  const b0 = my - b1 * mx;
  return { b0, b1 };
}
