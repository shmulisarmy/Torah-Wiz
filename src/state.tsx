import { createSignal } from "solid-js";

export const [score, setScore] = createSignal(0);
export const [question_upto, setQuestion_upto] = createSignal(0);
export function nextQuestion() {
  setQuestion_upto(prev => prev + 1);
}
