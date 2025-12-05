<script>
	import { modal, closeModal } from '$lib/stores/modal.js';
	let modalState = { open: false, title: '', desc: '', src: '', mediaType: 'image' };
	modal.subscribe(v => {
		modalState = v;
	});
</script>

<!-- Image Viewer Modal/Popup -->
<div
	id="image-modal"
	class="fixed inset-0 z-[60]"
	class:hidden={!modalState.open}
	aria-labelledby="modal-title"
	role="dialog"
	aria-modal="true"
>
	<!-- Background backdrop -->
	<div
		class="fixed inset-0 bg-black/90 transition-opacity backdrop-blur-sm cursor-pointer"
		role="button"
		tabindex="0"
		on:click={closeModal}
		on:keydown={(e) => {
			if (e.key === 'Escape') closeModal();
		}}
		aria-label="Close modal"
	></div>

	<div class="fixed inset-0 z-10 overflow-y-auto">
		<div class="flex min-h-full items-center justify-center p-4 text-center sm:p-0">
			<div class="relative transform overflow-hidden rounded-xl bg-tech-surface text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-3xl border border-gray-700">
				<!-- Close button -->
				<div class="absolute right-0 top-0 pr-4 pt-4 z-10">
					<button
						type="button"
						on:click={closeModal}
						class="rounded-md bg-transparent text-gray-400 hover:text-white focus:outline-none"
					>
						<span class="sr-only">Close</span>
						<svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
							<path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
						</svg>
					</button>
				</div>

				<div class="flex flex-col">
					{#if modalState.mediaType === 'video'}
						<!-- Video Container -->
						<div class="w-full h-80 sm:h-96 bg-black flex items-center justify-center overflow-hidden">
							{#if modalState.src}
								<video src={modalState.src} controls class="w-full h-full object-contain">
									<track kind="captions" />
									Your browser does not support the video tag.
								</video>
							{:else}
								<div class="text-gray-400">No video</div>
							{/if}
						</div>
					{:else if modalState.mediaType === 'long-image'}
						<!-- Long Image Container (scrollable, no desc) -->
						<div class="w-full bg-black flex flex-col" style="height: 90vh;">
							<div class="bg-tech-surface px-4 py-3 border-b border-gray-700">
								<h3 class="text-xl font-semibold leading-6 text-white" id="modal-title">
									{modalState.title}
								</h3>
							</div>
							<div class="flex-1 overflow-auto flex items-start justify-center p-4">
								{#if modalState.src}
									<img
										src={modalState.src}
										alt={modalState.title}
										class="max-w-full h-auto object-contain"
									/>
								{:else}
									<div class="text-gray-400">No image</div>
								{/if}
							</div>
						</div>
					{:else}
						<!-- Image Container (standard) -->
						<div class="w-full h-80 sm:h-96 bg-black flex items-center justify-center overflow-hidden">
							{#if modalState.src}
								<img src={modalState.src} alt="Project Detail" class="w-full h-full object-contain" />
							{:else}
								<div class="text-gray-400">No image</div>
							{/if}
						</div>
					{/if}

					{#if modalState.mediaType !== 'long-image'}
						<!-- Content (only show for non-long-image) -->
						<div class="bg-tech-surface px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
							<div class="sm:flex sm:items-start">
								<div class="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left w-full">
									<h3 class="text-xl font-semibold leading-6 text-white" id="modal-title">
										{modalState.title}
									</h3>
									<div class="mt-2">
										<p class="text-sm text-gray-400" id="modal-desc">
											{modalState.desc}
										</p>
									</div>
								</div>
							</div>
						</div>
						<div class="bg-gray-900 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
							<button
								type="button"
								on:click={closeModal}
								class="mt-3 inline-flex w-full justify-center rounded-lg bg-tech-surface px-3 py-2 text-sm font-semibold text-white shadow-sm ring-1 ring-inset ring-gray-600 hover:bg-gray-700 sm:mt-0 sm:w-auto transition-colors"
							>
								Close Viewer
							</button>
						</div>
					{/if}
				</div>
			</div>
		</div>
	</div>
</div>

<style>
	.hidden {
		display: none;
	}
</style>

