export const LINE_COLORS = {
  A: '#6EC1E4',
  B: '#E31C2B',
  C: '#0055A4',
  D: '#00843D',
  E: '#6F2C91',
  H: '#FFD200',
} as const;

export type SubwayLine = keyof typeof LINE_COLORS;