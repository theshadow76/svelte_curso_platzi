<script>
	import About from "./components/About.svelte";

	export let name;
	export let lastName;
</script>

<main>
	<h1>Hello {name} {lastName}!</h1>
	<About />
</main>

<style>

   :global(body) {
	background-color: #f2eee3;
	color: blue;
   }

   :global(root) {
	--theme-color: purple;
   }

	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>