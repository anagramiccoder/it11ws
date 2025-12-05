import { writable } from 'svelte/store';

const defaultState = {
  open: false,
  title: '',
  desc: '',
  src: '',
  mediaType: 'image'
};

function createModal() {
  const { subscribe, set } = writable(defaultState);
  return {
    subscribe,
    openModal: (title, desc, src, mediaType = 'image') => set({ open: true, title, desc, src, mediaType }),
    closeModal: () => set({ ...defaultState })
  };
}

export const modal = createModal();
export const openModal = (title, desc, src, mediaType = 'image') => modal.openModal(title, desc, src, mediaType);
export const closeModal = () => modal.closeModal();
