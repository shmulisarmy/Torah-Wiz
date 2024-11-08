import type { Component } from "solid-js";
import { Show } from "solid-js";
import Question from "./components/question";
import { questions } from "./data/questions";

import logo from "./logo.svg";
import styles from "./App.module.css";
import { question_upto } from "./state";
import { score } from "./state";
import { Pop_ups } from "./Pop_ups";

const quiz_name = "Torah Wiz";

function scrollToBottom() {
  window.scrollTo({
    top: document.body.scrollHeight,
    behavior: "smooth",
  });
}

function Game_Over() {
  return (
    <div>
      <h1>Game Over</h1>
      <h4>
        you got {score()} out of {questions.length} questions correct
      </h4>
    </div>
  );
}

const App: Component = () => {
  return (
    <div class={styles.App}>
      <header>
        <Show
          when={score() > 0}
          fallback={
            <h1>Welcome to {quiz_name}, answer questions to get points</h1>
          }
        >
          <h1>{`Score: ${score()}`}</h1>
        </Show>
        <button onclick={scrollToBottom}> Scroll to bottom</button>
      </header>

      {/* <For each={questions}>{(question) => <Question question={question.question} options={question.options} answer={question.answer}/> }</For> */}
      <Show when={question_upto() < questions.length} fallback={<Game_Over />}>
        <h1>{`Question #${question_upto() + 1}`}</h1>
        <Question question={() => questions[question_upto()]} />
      </Show>
      <Pop_ups />
      <button id={styles.switch_mode_btn} onclick={() => document.body.classList.toggle("dark-mode")}>
        switch mode
      </button>
    </div>
  );
};

export default App;
