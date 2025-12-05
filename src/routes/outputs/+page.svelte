<script>
	import { openModal } from '$lib/stores/modal.js';

	function handleImageError(e) {
		e.target.src = 'https://placehold.co/800x400/1e293b/cbd5e1?text=Project+Image';
	}
	import esg7info from '$lib/assets/BSES Group 7.png';
	import esg8info from '$lib/assets/BSES Group 8.jpg';
	import fg2info from '$lib/assets/BSF Group 2.png';
	import fg5info from '$lib/assets/BSF Group 5.jpg';
	import esg8adv from '$lib/assets/BSES G8.webm';
	const projects = [
		{
			id: 1,
			title: 'Phishing',
			category: 'Infographics',
			desc: 'Infographics about Phishing created by Accad, Cainglit, Recodos, Isla, Silac',
			src: esg7info,
			thumb: esg7info,
			mediaType: 'long-image'
		},
		{
			id: 2,
			title: 'Unseen Threats: Hacking',
			category: 'Infographics',
			desc: 'Infographics About hacking created by Galacgac, Ilar,  Pijera, Battulayan, Morella',
			src: esg8info,
			thumb: esg8info,
			mediaType: 'long-image'
		},
		{
			id: 3,
			title: 'Cyberbullying',
			category: 'Infographics',
			desc: 'Infographics about Cyberbullying created by Raña, Cariaga, Bangayan, Lazaro, Guillermo, Sacro',
			src: fg2info,
			thumb: fg2info,
			mediaType: 'long-image',
		},
		{
			id: 5,
			title: 'Hacking Advocacy',
			category: 'Advocacy',
			desc: 'Machine learning model integration for predictive maintenance in manufacturing, accurately forecasting equipment failures 72 hours in advance.',
			src: esg8adv,
			thumb:esg8adv,
			mediaType: 'video',
			isVideo: true
		},
		{
			id: 4,
			title: 'Cyberbullying',
			category: 'Infographics',
			desc: 'Infographics about Cyberbullying created by Calantes, Cuma, Pailma, Rosini, Quicquic',
			src: fg5info,
			thumb: fg5info,
			mediaType: 'long-image'
		},
	];
</script>

<!-- PAGE 3: PROJECTS (Has Modal) -->
<section class="py-20">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		<div class="flex justify-between items-end mb-12">
			<div>
				<h2 class="text-3xl font-bold text-white">Selected Outputs for viewing.</h2>
				<p class="text-gray-400 mt-2">Click an image to view details.</p>
			</div>
		</div>

		<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
			{#each projects as project (project.id)}
				<div
					class="group relative cursor-pointer overflow-hidden rounded-xl bg-gray-800"
					role="button"
					tabindex="0"
					on:click={() => openModal(project.title, project.desc, project.src, project.mediaType)}
					on:keydown={(e) => {
						if (e.key === 'Enter' || e.key === ' ') {
							openModal(project.title, project.desc, project.src, project.mediaType);
						}
					}}
				>
					{#if project.isVideo}
						<!-- Video Placeholder -->
						<div class="w-full h-64 bg-gradient-to-br from-blue-900 to-cyan-900 flex items-center justify-center transition-transform duration-300 group-hover:scale-110 opacity-70 group-hover:opacity-100">
							<svg class="w-16 h-16 text-cyan-400" fill="currentColor" viewBox="0 0 20 20">
								<path
									d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z"
								/>
							</svg>
						</div>
					{:else}
						<!-- Image -->
						<img
							src={project.thumb}
							on:error={handleImageError}
							class="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110 opacity-70 group-hover:opacity-100"
							alt={project.title}
						/>
					{/if}
					<div class="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent flex flex-col justify-end p-6">
						<span class="text-tech-accent text-xs font-mono mb-1">{project.category}</span>
						<h3 class="text-white font-bold text-lg">{project.title}</h3>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>
