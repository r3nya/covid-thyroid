<script>
import ProgressBar from "./components/ProgressBar.svelte";
import QuestionCard from "./components/QuestionCard.svelte";
import Result from "./components/Result.svelte";

import { questions } from "./constants/questions";

const answers = $state(Array(questions.length).fill(null));
let currentQuestion = $state(0);
let showResult = $state(false);

function handleAnswer(answer) {
	answers[currentQuestion] = answer;
	if (currentQuestion < questions.length - 1) {
		currentQuestion++;
	} else {
		showResult = true;
	}
}

function restart() {
	answers.forEach((_, index) => {
		answers[index] = null;
	});
	currentQuestion = 0;
	showResult = false;
}
</script>

<main class="min-h-screen bg-base-200 py-8">
  <div class="max-w-2xl mx-auto px-4">
    <div class="card bg-base-100 shadow-xl">
      <div class="card-body">
        <h1 class="card-title text-2xl mb-6 text-center">
          Опросник по оценке состояния щитовидной железы после COVID-19
        </h1>

        {#if !showResult}
          <ProgressBar current={currentQuestion} total={questions.length} />
          <QuestionCard
                  question={questions[currentQuestion]}
                  onAnswer={handleAnswer}
          />
        {:else}
          <Result {answers} onRestart={restart} />
        {/if}
      </div>
    </div>
  </div>
</main>

<style>
  :global(body) {
    font-family: Charter, 'Bitstream Charter', 'Sitka Text', Cambria, serif;
    font-weight: normal;
  }
</style>
