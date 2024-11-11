<script>
export let current;
export let total;
</script>

<div class="mb-6">
    <h2 class="text-lg font-medium mb-2">
        Вопрос {current + 1} из {total}
    </h2>
    <progress
        class="progress progress-primary w-full"
        value={((current + 1) / total) * 100}
        max="100"
    ></progress>
</div>
