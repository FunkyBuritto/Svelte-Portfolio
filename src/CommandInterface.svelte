<script>
    import { onMount } from 'svelte';
    import { Help, Ikvr } from './commands';

    let validCommand;
    let line = "";
    let output;
    const elements = [];

    let commands = [
        {   command: "help",
            execute: function(){
                const opt = document.createElement("span");
                opt.innerHTML = Help;
                elements.push(opt);
                output.appendChild(opt);
            } },
        {   command: "open ikvr",
            execute: function(){
                const opt = document.createElement("span");
                opt.innerHTML = formatElements(Ikvr);
                elements.push(opt);
                output.appendChild(opt);
            } },
        {   command: "clear",
            execute: function(){
                elements.forEach(element => {
                    element.remove();
                });
            } },
    ];

    onMount(async () => {
        output = document.getElementById("output");
        elements.push(document.getElementById("IKVR"));
        elements.forEach(element => {element.remove();});
		setMyKeyDownListener();
	});

    function formatElements(originalString){
        const regEx = new RegExp("( )(?!([^<]+)?>)", "gi");
        return originalString.replace(regEx, "&nbsp;");
        //return originalString;
    }

    function setMyKeyDownListener() {
        window.addEventListener(
        "keydown",
        function(event) {
            
            if (event.keyCode < 91 && event.keyCode > 47) { // Normal Keys and Uppercase variants
                let char = String.fromCharCode(event.keyCode);
                if(!event.shiftKey){ char = char.toLowerCase() }
                line += char;
            } else if(event.keyCode == 32){ // Space Key
                line += " ";
            } else if(event.keyCode == 8){ // Backspace key
                if(line.length > 0){ line = line.slice(0, -1) }
            } else if(event.keyCode == 13){ // Enter Key
                const opt = document.createElement("span");
                    opt.innerHTML= line + '<br>';
                    elements.push(opt);
                    output.appendChild(opt);

                // Find and execute commands
                let cmd = commands.find(c => c.command === line.toLowerCase()); 
                if (cmd) {
                    cmd.execute();
                } else{
                    const opt = document.createElement("span");
                        opt.innerHTML= '?Error -> ' + line + ' is not a valid command<br>';
                        elements.push(opt);
                        output.appendChild(opt);
                }

                // Update in window and reset line
                line = "";
            }

            // Check if the current line is a valid command
            let cmd = commands.find(c => c.command === line.toLowerCase());
            if(cmd){
                validCommand = true;
            } else{
                validCommand = false;
            }
        }
        )
    }
</script>

<main>
    <div id="IKVR">
        <pre class="typeLine">
&&&&&##################################BBGGB########&&&&&&&&
###G5PPPJY55P5GPPP5JYPPPBBBBBBBBBBBBBG5J????YPGB########&&&&
##B?JJ!!~^~~~YG5P5Y!?7?JGBBBBBBBBG5J77?YPGGPY?7?YPB########&
###BPGPPPPPPGBBGBGGPGGGGGBBBGG5J7!7J5GGGGGGGBBGPJ?7J5GB#####
@&##BBBBBBBBB##BBBBBBBBBBBGGP!~?YPGGGGGGPPPPGGGGGGP5J7?BB###
@&#G7!??7?!5G##BBBBBBBBBBGGG5:JPGP5Y5PGGGGPGGGP7~!5GG5^GB###
@&#BYYYJJ5YPG##BBBBBBGGGGGGP5:?PPPYYYPGGGPPGGG5!^^YGG5^PBB##
&&#######B##B##BBBBBBBBBGGGP5:?PGGGGGGGP?^:!5GGGPGGGG5^PBB##
@@&BBBBBBBGBBGGGGGGGGG&#GGGP5:?PGGGGGGGP?:.~5GGGGGGGG5^PBB##
&&#5YY7?77~!77~7777~!P##GGGP5:?PGGBBBGGGPPPPGGPY?JPGG5^PBB##
@@#G5YJYJJJ?J5JJ?JY?YG##GGGG5:JPGGBBBGGGP55PGGPJ?JPGG5^GB###
&&&#########BBBBBBBBBB#BBBGGP~!?5PGGGGGGJ!!7PGGGGGG5J77BB###
@@##BBBBBBBB&BBBBBBBBBBBBBBGGG5?7!?YPGGGPYJ5GGGPY?7?YPB#####
@@#BY??Y77GB&#BBBBBBBBBBBBBBBBBBGPY?77J5PGGG5J??J5GB#######&
@@&#BPPPPPB#&#######BBBBBBBBBBBBBBBBGPY?7???J5GB########&&&&
&&&&&&&&&&##&##########################BBPPB########&&&&&&&&</pre>
</div>

<div id="interface"> 
    <div id="output" class="unselectable typeLine"></div>
    <span class="unselectable typeLine" style="color: {validCommand ? "#DAE3E4" : "#999"}; display: block;">{line + "█"}</span>
</div>

</main>

<style global>
    .unselectable {
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    }

	main {
		text-align: center;
		overflow: hidden;
	}

    #interface{
        display: inline-block;
        width: 90%;
        height: 100%;
    }

    .typeLine{
        width: fit-content;
        height: 100%;
        margin: 0p;

        background-color: rgba(0, 0, 0, 0);
        text-align: left;
        color: #999;
        color: #DAE3E4;
		font-family: 'Courier New', Courier, monospace;
		font-size: 1.22vw;
		font-weight: 100;
    }

    #output :global(.picture) {
        position: relative;
    }

    #output :global(.picture)::after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        color: transparent;
        background-size: cover;
        background-repeat: no-repeat;
        background-image: url("../media/Sheet.png");
        opacity: 0;
        transition: opacity 0.2s;
    }

    #output :global(.picture):hover::after{
        opacity: 1;
    }

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>