<script>
    import { onMount } from 'svelte';
    import { Help, Milan, Welcome, WelcomeMobile, Items, Contact } from './commands';

    let isMobile;

    let validCommand;
    let firstLine = {bool: true, active: true, content: "Type WELCOME or any other valid command to start"};
    let line = "";
    let bottomLine;
    let output;
    const elements = [];

    $: mline = "";
    let prevmline = "";

    let commands = [
        {   command: "welcome",
            execute: function(){
                const opt = document.createElement("span");
                opt.innerHTML = formatElements(isMobile ? WelcomeMobile : Welcome);
                elements.push(opt);
                output.appendChild(opt);
            } },
        {   command: "milan",
            execute: function(){
                const opt = document.createElement("span");
                opt.innerHTML = formatElements(Milan);
                elements.push(opt);
                output.appendChild(opt);
            } },
        {   command: "items",
            execute: function(){
                const opt = document.createElement("span");
                opt.innerHTML = formatElements(Items);
                elements.push(opt);
                output.appendChild(opt);
            } },
        {   command: "contact",
            execute: function(){
                const opt = document.createElement("span");
                opt.innerHTML = formatElements(Contact);
                elements.push(opt);
                output.appendChild(opt);
            } },
        {   command: "help",
            execute: function(){
                const opt = document.createElement("span");
                opt.innerHTML = formatElements(Help);
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
        bottomLine = document.getElementById("bottomline");

        line = firstLine.content;

        isMobile = mobileOrTabletCheck();
        console.log(isMobile);
        
        if(!isMobile){
            setMyKeyDownListener();
        } else {
            prevmline = firstLine.content;
            mline = firstLine.content;
            firstLine.active = true;

            let lns = document.getElementsByClassName('typeLine');
            for(let i = 0; i < lns.length; i++) {
                lns[i].style.fontSize = "1.5vh";
            }

            setInterval(function () { moblieInput() }, 50);
        }
	});

    function formatElements(originalString){
        const regEx = new RegExp("( )(?!([^<]+)?>)", "gi");
        return originalString.replace(regEx, "&nbsp;");
    }

    function mobileOrTabletCheck() {
        let check = false;
        (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
        return check;
    };

    function moblieInput(){
        if(prevmline == mline)
            return;

        if(firstLine.bool && firstLine.active){
            firstLine.active = false;
            if(mline !== firstLine.content)
                mline = mline.slice(mline.length - 1, mline.length);
        }

        if(firstLine.bool && !firstLine.active && mline.length == 0){
            firstLine.active = true;
            mline = firstLine.content;
        }

        // Check if user put in a enter
        if(mline.includes('\n')){
            mline = mline.trim();
            mobileExecute();
        }

        // Check if the current line is a valid command
        let cmd = commands.find(c => c.command === mline.toLowerCase());
        if(cmd) {
            validCommand = true;
        } else {
            validCommand = false;
        }

        prevmline = mline;
    }

    function mobileExecute(){
        const opt = document.createElement("span");
        opt.innerHTML= mline + '<br>';
        elements.push(opt);
        output.appendChild(opt);

        // Find and execute commands
        let cmd = commands.find(c => c.command === mline.toLowerCase()); 
        if (cmd) {
            cmd.execute();
        } else {
            const opt = document.createElement("span");
            opt.innerHTML= '?Error -> ' + mline + ' is not a valid command<br>';
            elements.push(opt);
            output.appendChild(opt);
        }

        if(firstLine.bool)
            firstLine.bool = false;

        // Update in window and reset line
        mline = "";
    }

    function setMyKeyDownListener() {
        window.addEventListener(
        "keydown",
        function(event) {
            
            if (event.keyCode < 91 && event.keyCode > 47) { // Normal Keys and Uppercase variants
                let char = String.fromCharCode(event.keyCode);
                if(firstLine.bool && firstLine.active){
                    firstLine.active = false;
                    line = ""; }
                if(!event.shiftKey){ char = char.toLowerCase() }
                line += char;
            } else if(event.keyCode == 32){ // Space Key
                if(firstLine.bool && firstLine.active){
                    firstLine.active = false;
                    line = ""; }
                line += " ";
            } else if(event.keyCode == 8){ // Backspace key
                if(line.length > 0){ line = line.slice(0, -1) }
                if(line.length == 0 && firstLine.bool){
                    line = firstLine.content;
                    firstLine.active = true; }
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
                        opt.innerHTML= '?Error -> ' + line + ' is not a valid command, try typing HELP to get a list of commands<br>';
                        elements.push(opt);
                        output.appendChild(opt);
                }

                if(firstLine.bool)
                    firstLine.bool = false;

                // Update in window and reset line
                line = "";
                
                bottomLine.scrollIntoView({behavior: "smooth"});
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
<div id="interface"> 
    <div id="output" class="unselectable typeLine"></div>
    <span class="unselectable typeLine" style="color: {validCommand ? "#f9f9f9" : "#999"}; display: block;">{isMobile ? mline : line + (firstLine.active ? "" : "█")}</span>

    <span class="unselectable typeLine" id="bottomline" style="z-index: -2;"> </span>
    <br>
    <span class="unselectable typeLine" id="bottomline" style="z-index: -2;"> </span>

    {#if isMobile}
        <textarea id="mobileInput" bind:value={mline}></textarea>
    {/if}
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

    #mobileInput{
        position: fixed;
        padding: 0px;
        z-index: -1;

        width: 100vw;
        height: 100vh;

        top: 0;
        left: 0;

        opacity: 0;
    }

    .typeLine{
        width: fit-content;
        height: 100%;
        margin: 0p;

        background-color: rgba(0, 0, 0, 0);
        text-align: left;
        color: #f9f9f9;
		font-family: Cascadia;
		font-size: 1.05vw;
		font-weight: 100;
    }

    #output :global(.picture) {
        position: relative;
        z-index: 10;
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

    #output{
        z-index: 10;
    }

    #output :global(.picture):hover::after{
        opacity: 1;
    }

    #output :global(.face) {
        position: relative;
    }

    #output :global(.face)::after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 101%;
        height: 2100%;
        color: transparent;
        background-size: 100%;
        background-repeat: no-repeat;
        background-image: url("../media/Milan.jpeg");
        opacity: 0;
        transition: opacity 0.2s;
    }

    #output :global(.face):hover::after{
        opacity: 1;
    }

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>