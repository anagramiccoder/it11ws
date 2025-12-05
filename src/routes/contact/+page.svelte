<script>
	import { toast } from '$lib/stores/toast.js';

	let name = '';
	let email = '';
	let message = '';

	function submitContactForm(event) {
		event.preventDefault();
		// In a real app, this would send data to a backend.
		toast.add('Transmission received. We will initiate contact shortly.', 'success');

		// Clear form fields
		name = '';
		email = '';
		message = '';
	}
</script>

<!-- PAGE 5: CONTACT -->
<section class="py-20">
	<div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
		<div class="bg-tech-surface p-8 rounded-2xl border border-gray-800 shadow-2xl">
			<div class="text-center mb-8">
				<h2 class="text-2xl font-bold text-white">Initialize Communication</h2>
				<p class="text-gray-400 text-sm mt-2">Our team usually responds within 2 hours.</p>
			</div>

			<form on:submit={submitContactForm} class="space-y-6">
				<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
					<div>
						<label for="contact-name" class="block text-xs font-mono text-gray-400 mb-1">IDENTIFIER / NAME</label>
						<input
							id="contact-name"
							bind:value={name}
							type="text"
							required
							class="w-full bg-tech-base border border-gray-700 rounded-lg p-3 text-white focus:outline-none focus:border-tech-accent focus:ring-1 focus:ring-tech-accent transition-all"
							placeholder="John Doe"
						/>
					</div>
					<div>
						<label for="contact-email" class="block text-xs font-mono text-gray-400 mb-1">RETURN ADDRESS / EMAIL</label>
						<input
							id="contact-email"
							bind:value={email}
							type="email"
							required
							class="w-full bg-tech-base border border-gray-700 rounded-lg p-3 text-white focus:outline-none focus:border-tech-accent focus:ring-1 focus:ring-tech-accent transition-all"
							placeholder="john@company.com"
						/>
					</div>
				</div>
				<div>
					<label for="contact-message" class="block text-xs font-mono text-gray-400 mb-1">TRANSMISSION / MESSAGE</label>
					<textarea
						id="contact-message"
						bind:value={message}
						rows="4"
						required
						class="w-full bg-tech-base border border-gray-700 rounded-lg p-3 text-white focus:outline-none focus:border-tech-accent focus:ring-1 focus:ring-tech-accent transition-all"
						placeholder="Describe your project requirements..."
					></textarea>
				</div>
				<button
					type="submit"
					class="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold py-3 rounded-lg hover:opacity-90 transition-opacity"
				>
					SEND DATA
				</button>
			</form>
		</div>
	</div>
</section>
