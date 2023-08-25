import { component$ } from "@builder.io/qwik";
import styles from "./footer.module.css";

export default component$(() => {
  return (
    <footer>
      <div class="container">
        <a href="https://r00ks.io/" target="_blank" class={styles.anchor}>
          <span>Made with ♡ by Shorewood Tech</span>
          <span class={styles.spacer}>|</span>
        </a>
      </div>
    </footer>
  );
});
