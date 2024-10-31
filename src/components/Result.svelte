<script>
import { getResult } from '../lib/utils';

export let answers;
export let onRestart;
</script>

<div class="text-center">
    <h2 class="text-xl font-bold mb-4">Результат:</h2>

    <p class="text-lg mb-6">
        {getResult(answers)}
    </p>

    <button class="btn btn-outline btn-neutral" on:click={onRestart}>
        Начать заново
    </button>
</div>
