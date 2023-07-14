import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
		name: 'worldd',
		title:'svelte' 
	}
});

export default app;