import { writable } from 'svelte/store';

function createToastStore() {
	const { subscribe, update } = writable([]);

	return {
		subscribe,
		add: (message, type = 'success') => {
			const id = Math.random().toString(36).substr(2, 9);
			update(toasts => [...toasts, { id, message, type }]);

			// Auto-remove after 4 seconds
			setTimeout(() => {
				update(toasts => toasts.filter(t => t.id !== id));
			}, 4000);

			return id;
		},
		remove: (id) => {
			update(toasts => toasts.filter(t => t.id !== id));
		}
	};
}

export const toast = createToastStore();
