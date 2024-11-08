import { For, Show } from "solid-js";
import { createMutable } from "solid-js/store";
import styles from "./App.module.css";

const pop_ups = createMutable<{ message: string; color: string; }[]>([]);
export function create_pop_up(message: string, color: string) {
  pop_ups.push({ message, color });
  setTimeout(() => remove_pop_up(message), 1300);
}
function remove_pop_up(message: string) {
  pop_ups.splice(pop_ups.findIndex((pop_up) => pop_up.message === message), 1);
}
function Pop_up({ message, color }: any) {
  return (
    <div style={{ color: color }} class={styles.pop_up}>
      <h1>{message}</h1>
    </div>
  );
}
export function Pop_ups() {
  return (
    <>
    <Show when={pop_ups.length > 0}>
      <div id={styles.pop_ups}>
        <For each={pop_ups}>{(pop_up) => <Pop_up message={pop_up.message} color={pop_up.color} />}</For>
      </div>
    </Show>
    </>
  );
}
