<script>
	import Nav from '$lib/components/Nav.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import Modal from '$lib/components/Modal.svelte';
	import Toast from '$lib/components/Toast.svelte';
</script>

<Nav />

<main class="flex-grow pt-16 circuit-bg relative">
	<slot />
</main>

<Modal />
<Toast />

<Footer />
