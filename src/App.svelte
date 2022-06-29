<script>
	import CommandInterface from "./CommandInterface.svelte";
</script>

<main>
	<CommandInterface></CommandInterface>
</main>

<style>
	main {
		text-align: center;
		overflow: hidden;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>