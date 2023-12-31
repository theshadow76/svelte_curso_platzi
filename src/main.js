import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
		name: 'Vigo',
		lastName: 'Walker'
	}
});

export default app;