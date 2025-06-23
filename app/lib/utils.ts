import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export interface Philosopher {
  id: number;
  name: string;
  period: string;
  description: string;
  quote: string;
  // scores: from -5 (first pole) to 5 (second pole)
  scores: {
    /** 이성주의 < 0, 경험주의 > 0 */
    rationalism_empiricism: number;
    /** 개인주의 < 0, 집단주의 > 0 */
    individualism_collectivism: number;
    /** 이상주의 < 0, 현실주의 > 0 */
    idealism_realism: number;
    /** 보수주의 < 0, 진보주의 > 0 */
    conservatism_progressivism: number;
    /** 물질주의 < 0, 정신주의 > 0 */
    materialism_spiritualism: number;
  };
}

export interface Answer {
  text: string;
  effects: {
    rationalism_empiricism?: number;
    individualism_collectivism?: number;
    idealism_realism?: number;
    conservatism_progressivism?: number;
    materialism_spiritualism?: number;
  };
}

export interface Question {
  id: number;
  text: string;
  answers: Answer[];
}

export type Score = {
  rationalism_empiricism: number;
  individualism_collectivism: number;
  idealism_realism: number;
  conservatism_progressivism: number;
  materialism_spiritualism: number;
};
