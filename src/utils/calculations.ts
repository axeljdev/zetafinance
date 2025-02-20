export function PMT(rate: number, nper: number, pv: number): number {
  if (rate === 0) return -pv / nper;
  return (
    (rate * pv * Math.pow(1 + rate, nper)) / (Math.pow(1 + rate, nper) - 1)
  );
}
