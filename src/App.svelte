<script>
	import AsciiCircle from "./AsciiCircle.svelte";
	import AsciiTetrahedron from "./AsciiTetrahedron.svelte";
	import CommandInterface from "./CommandInterface.svelte";
</script>

<main>
	<!--
	<div>
		<div id="titleDiv">
			<h1>Milan Bonten Portfolio</h1>
		</div>
		<AsciiTetrahedron objectSize = 200 windowWidth = 750 windowHeight = 750></AsciiTetrahedron>	
	</div>
	-->
	<CommandInterface></CommandInterface>
</main>

<style>
	main {
		text-align: center;
		overflow: hidden;
	}

	h1 {
		color: #DAE3E4;
		font-family: 'Courier New', Courier, monospace;
		font-size: 4em;
		font-weight: 100;
	}

	#titleDiv{
		position: absolute;
		top: 300px;
		left: 15vw;
		border: 5px solid #DAE3E4;
		padding: 5px 15vw 5px 5vw;
		margin: 0 15vh 0 0;
		background-color: #dae3e421;
		backdrop-filter: blur(3px);
		align-content: flex-start;
		z-index: 10;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>