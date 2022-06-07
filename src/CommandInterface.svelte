<script>
    import { onMount } from 'svelte';

    let validCommand;
    let lines = [];
    let line = "";

    let output;
    const elements = [];

    let ikvrLines = [
        "                                                Inverse Kinematics VR",
        "Idea:",
        "This project was a personal idea, I just learned how to use inverse kinematics in unity and I thought it would work",
        "great with VR.I also had some nice asset packs with a lot of different fantasy and terrain models so the idea of",
        "making a little prototype for a dragon flying simulation came to mind. I didn’t want this to be a very big project",
        "so I just wanted to make the flying mechanic and the animation rigging, nothing more.",
        " ",
        "Model Rigging:",
        "I used the Animation rigging package to set up a skeleton for the dragon model and I added the necessary components",
        " to make the wings of the dragon follow the controllers. This worked very easily but it wasn’t realistic and it ",
        "didn’t make a lot of sense, so with some research I wrote a script that converted the movement from the controller",
        " into movement that I could fully customize. After a lot of variable tweaking I got some nice wing movement.",
        " ", 
        "^^^^^^^^^^^^^^^^^^^^^:::::::::::::::::::::::::::::::::::::~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
        "^^^:::::::::::::::::::::::::::::::::::::::::::::::::::::::^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^~~~~~~~~~~",
        "::::::::::::::::..........................................^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^",
        "::....................... ..    .....     ................:::::::::::::::::::::::::::::::::::::::::::^^^^^^^^^^^^^^",
        "......................:^^^:::^^::....:^!?7:...............::::::::::::::::..:....:::^^^~~~~:.::::::::::::::::::::::",
        ".....................~YGGG55GGGP55J7!~~^^^:..................................... !55PPGBGPYJ~....:...........::::::",
        "..............:::^^^^~J5JJ5Y5GGGGG5~:.....:::::::::............................. JPBGGBBGGGGP5!!?Y?^...............",
        ".......:^^^~!!!77777!7?7~^:..:!J~7PGY~::......::....:::................7J!........^GB5BBGGGBB##BG???~..............",
        ".......::::::::...............:..^PP5YJJ?7!!^:.....:...............:::::^:.::....~5GGGP5GPPB##GG#B5J~..............",
        ".....................::.:::::::.:YYYY555555?....:::..:..............::::^^::^^^~JPP?!~::?BPGYY^~JPGPYPY!:..........",
        "..................::::::::::::.^JYYY55Y?77?J^:::::..:..:.:^^~~!!77???JYYY5PPP5J?!^:...:!Y5^^::...:!P?7YPPJ!^:......",
        ".....:......::::::::::.::::::.:?55Y?!^:....:^:::::::.::.::Y5555PP5YJJ??7!?Y!^:....:::::~!::.:::::.:7G?::7YGGPY?77!~",
        "...:..::::::::::::::::::::::::?J!^:...::::::.:::::::::..:.77!!~^^::......:...::::::::::....:.::::::.^::...^!5BBBGP5",
        ":...::..:::.::::::::::::::::::^...::::::::::::::::::::::::.........:::::::::::::::::::::::::::::::.:..:.....:JBYY5P",
        "::...:::.:::::::::::::::::::::::::::::::::::::::::::::::::.:::::::::::::::::::::::::::::::::::::::::::::.:....~!::~",
        ".::.:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::.::.::..",
    ];

    let commands = [
        {   command: "help",
            execute: function(){
                const opt = document.createElement("pre");
                opt.classList.add("unselectable", "typeLine");
                opt.innerText = 
                ` Information
                    This portfolio webpage can be navigated using commands. 
                  Commands
                    OPEN IKVR               Opens the Inverse Kinematics VR portfolio item.
                    CLEAR                   Removes all the current text from the webpage.`;
                
                output.appendChild(opt);
                //lines.push("  Information");    
                //lines.push("    This portfolio webpage can be navigated using commands.");
                //lines.push("  Commands")
                //lines.push("    OPEN IKVR                 Opens the Inverse Kinematics VR portfolio item.");
                //lines.push("    OPEN BARNSTORM            Opens the Barnstorm portfolio item.");
                //lines.push("    OPEN EUROCONTROL          Opens the Eurocontrol internship portfolio item.");
                //lines.push("    OPEN COLORMIX             Opens the Colormix portfolio item.");
                //lines.push("    CLEAR                     Removes all the current text from the webpage.");
                //lines.push(" ");
            } },
        {   command: "open ikvr",
            execute: function(){
                ikvrLines.forEach(ln => {
                    lines.push(ln);
                });
            } },
        {   command: "clear",
            execute: function(){
                elements.forEach(element => {
                    element.remove();
                });
                lines = [];
            } },
        {   command: "image",
            execute: function(){
                imageLines.forEach(ln => {
                    lines.push(ln);
                });
            } },
        {
            command: "update",
            execute: function(){
                elements.forEach(element => {
                    output.appendChild(element.cloneNode(true));    //element.remove();
                });
            }
        }
    ];

    onMount(async () => {
        output = document.getElementById("output");
        elements.push(document.getElementById("IKVR"));

		setMyKeyDownListener();
	});

    

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
                lines.push(line);

                // Find and execute commands
                let cmd = commands.find(c => c.command === line.toLowerCase()); 
                if(cmd){
                    cmd.execute();
                } else{
                    lines.push("?ERROR -> " + line.toUpperCase() + " IS NOT A VALID COMMAND")
                    lines.push(" ");
                }

                // Update in window and reset line
                lines = lines;
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
        <div id="output"></div>
        <pre class="unselectable typeLine" style="color: {validCommand ? "#DAE3E4" : "#999"};">{line + "█"}</pre>
	</div>
</main>

<style>
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
        margin: 0;

        background-color: rgba(0, 0, 0, 0);
        text-align: left;
        color: #999;
        color: #DAE3E4;
		font-family: 'Courier New', Courier, monospace;
		font-size: 1.22vw;
		font-weight: 100;
    }

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>