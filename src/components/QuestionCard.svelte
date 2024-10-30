<script>
import { CheckCircle2, XCircle } from "lucide-svelte";

export let question;
export let onAnswer;
</script>

<div class="mb-6">
    <p class="text-2xl mb-6 min-h-20">{question}</p>

    <div class="flex flex-col gap-3">
        <button
                class="btn btn-outline btn-primary"
                on:click={() => onAnswer('yes')}
        >
            <CheckCircle2 class="w-5 h-5 mr-3" />
            Да
        </button>
        <button
                class="btn btn-outline btn-neutral"
                on:click={() => onAnswer('no')}
        >
            <XCircle class="w-5 h-5 mr-2" />
            Нет
        </button>
        <button
                class="btn btn-ghost"
                on:click={() => onAnswer('skip')}
        >
            Пропустить
        </button>
    </div>
</div>
