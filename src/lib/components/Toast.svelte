<script>
	import { fly } from 'svelte/transition';
	import { toast } from '$lib/stores/toast.js';
</script>

<div id="toast-container" class="fixed bottom-5 right-5 z-[70] space-y-2 pointer-events-none">
	{#each $toast as t (t.id)}
		<div
			class={`flex items-center w-full max-w-xs p-4 rounded-xl shadow-xl text-white pointer-events-auto transition-transform duration-300 ${
				t.type === 'success' ? 'bg-green-600/90 backdrop-blur-sm' : 'bg-red-600/90 backdrop-blur-sm'
			}`}
			in:fly={{ x: 500, duration: 300 }}
			out:fly={{ x: 500, duration: 300 }}
		>
			<div class="inline-flex h-8 w-8 items-center justify-center flex-shrink-0 rounded-lg">
				{#if t.type === 'success'}
					<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
						<path
							fill-rule="evenodd"
							d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
							clip-rule="evenodd"
						/>
					</svg>
				{:else}
					<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
						<path
							fill-rule="evenodd"
							d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L9.586 10l-2.293 2.293a1 1 0 001.414 1.414L11 11.414l2.293 2.293a1 1 0 001.414-1.414L12.414 10l2.293-2.293a1 1 0 00-1.414-1.414L11 8.586 8.707 6.293z"
							clip-rule="evenodd"
						/>
					</svg>
				{/if}
			</div>
			<div class="ml-3 text-sm font-normal">{t.message}</div>
		</div>
	{/each}
</div>
