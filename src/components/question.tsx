import { score, setScore, nextQuestion } from "../state";
import styles from "../App.module.css";
import { get_letter } from "../data/tied__utils";
import { questions } from "../data/questions";
import { question_upto } from "../state";
import { createEffect } from "solid-js";
import { c } from "vite/dist/node/types.d-aGj9QkWt";
import { create_pop_up } from "../Pop_ups";

export default function Question(props: any) {
  return (
    <div class={styles.question}>
      <h3>{props.question()!.question}</h3>
      <ul>
        {props.question()!.options.map((option: string) => (
          <div
            class={styles.option}
            onclick={() => {
              console.log(`Clicked ${option}`);
              if (get_letter(option) === props.question()!.answer) {
                console.log("Correct");
                create_pop_up("Correct", "green");
                setScore((prev) => prev + 1);
              } else {
                console.log("Wrong");
                create_pop_up("Wrong", "red");
              }
              nextQuestion();
            }}
          >
            {option}
          </div>
        ))}
      </ul>
    </div>
  );
}
