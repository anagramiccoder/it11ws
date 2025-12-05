<script>
	let mobileOpen = false;

	function toggleMobileMenu() {
		mobileOpen = !mobileOpen;
	}

	function closeMobileMenu() {
		mobileOpen = false;
	}
</script>

<!-- Navigation -->
<nav class="fixed w-full z-50 bg-tech-base/90 backdrop-blur-md border-b border-gray-800">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		<div class="flex items-center justify-between h-16">
			<!-- Logo -->
			<div class="flex-shrink-0 cursor-pointer">
				<a href="/" class="font-mono text-2xl font-bold text-tech-accent neon-text">&lt;IT 11/&gt;</a>
			</div>

			<!-- Desktop Menu -->
			<div class="hidden md:block">
				<div class="ml-10 flex items-baseline space-x-8">
					<a
						href="/"
						class="nav-link text-gray-300 hover:text-tech-glow px-3 py-2 rounded-md text-sm font-medium transition-colors"
					>
						Home
					</a>
					<a
						href="/summary"
						class="nav-link text-gray-300 hover:text-tech-glow px-3 py-2 rounded-md text-sm font-medium transition-colors"
					>
						Summary
					</a>
					<a
						href="/outputs"
						class="nav-link text-gray-300 hover:text-tech-glow px-3 py-2 rounded-md text-sm font-medium transition-colors"
					>
						Outputs
					</a>
					<a
						href="/about"
						class="nav-link text-gray-300 hover:text-tech-glow px-3 py-2 rounded-md text-sm font-medium transition-colors"
					>
						About
					</a>
					<a
						href="/contact"
						class="border border-tech-accent text-tech-accent hover:bg-tech-accent hover:text-white px-4 py-2 rounded-lg text-sm font-medium transition-all"
					>
						Contact Us
					</a>
				</div>
			</div>

			<!-- Mobile menu button -->
			<div class="-mr-2 flex md:hidden">
				<button
					type="button"
					on:click={toggleMobileMenu}
					class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
					aria-label="Toggle mobile menu"
				>
					<svg class="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
					</svg>
				</button>
			</div>
		</div>
	</div>

	<!-- Mobile Menu Panel -->
	{#if mobileOpen}
		<div class="md:hidden bg-tech-surface border-b border-gray-700">
			<div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
				<a
					href="/"
					on:click={closeMobileMenu}
					class="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium w-full text-left"
				>
					Home
				</a>
				<a
					href="/summary"
					on:click={closeMobileMenu}
					class="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium w-full text-left"
				>
					Summary
				</a>
				<a
					href="/outputs"
					on:click={closeMobileMenu}
					class="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium w-full text-left"
				>
					Outputs
				</a>
				<a
					href="/about"
					on:click={closeMobileMenu}
					class="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium w-full text-left"
				>
					About
				</a>
				<a
					href="/contact"
					on:click={closeMobileMenu}
					class="text-tech-accent font-bold block px-3 py-2 rounded-md text-base w-full text-left"
				>
					Contact
				</a>
			</div>
		</div>
	{/if}
</nav>

<style>
	.neon-text {
		text-shadow: 0 0 10px rgba(14, 165, 233, 0.5);
	}
</style>
