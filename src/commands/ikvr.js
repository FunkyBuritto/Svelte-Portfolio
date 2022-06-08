export const Ikvr = 
`
<u>Idea:</u>
    This project was a personal idea, I just learned how to use inverse kinematics in unity and I thought it would   
    work great with VR. I also had some nice asset packs with a lot of different fantasy and terrain models so the  
    idea of making a little prototype for a dragon flying simulation came to mind. I didn’t want this to be a very
    big project so I just wanted to make the flying mechanic and the animation rigging, nothing more.

<u>Model Rigging:</u>
    I used the Animation rigging package to set up a skeleton for the dragon model and I added the necessary 
    components to make the wings of the dragon follow the controllers. This worked very easily but it wasn’t 
    realistic and it didn’t make a lot of sense, so with some research I wrote a script that converted the movement
    from the controller into movement that I could fully customize. After a lot of variable tweaking I got some 
    nice wing movement.

<u>Motion Detection & Movement</u>
    After everything was rigged and you could control the dragon in a realistic way is started on the motion
    detection. I thought about a lot of different ways I could do this but I did the simplest solution. I used
    colliders and a base point to determine what you want to do. If you hit the top colliders with both controllers
    and then the bottom one you successfully flapped your wings. If you are close to the middle point with both
    controllers you glide. If you flap to slow you won’t gain height and if you flap faster you gain less height
    and, the closer you are to the middle the more effective you glide. I didn’t implement the option to reset
    your height or some other option to adjust it so if your not around my height you might have a less fun 
    experience.

<span class="picture">!!!!!!!!!77777777777777?????????????????????????????????????????????????????????7!??????????77777777777777!!!!!!!!!
!!!!!77777777777777??????????????????????JJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJ??????~^7?????????????77777777777777!!!!!
!!!777777777777???????????????????JJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJ7::^7????????????????7777777777777!!
777777777777????????????????JJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJ?!::^7JJJ????????????????777777777777
7777777777???????????????JJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJ~?YJJJJJJ7JJ7JJJJ??JJ7~::^!?JJJJJ???????????????7777777777
77777777??????????????JJJJJJJJJJJJJJJJJJJJJJJJJJJJJYYYYY?^!JYYYYYJ~??~?JJJ~7JJ7~:^~7?JJJJJJJJ??????????????77777777
777777??????????????JJJJJJJJJJJJJJJJJJJJJJJYYYYYYYYYYYYJ!:~JYYYYY!:!~:!JY7^~J?~:::^!?JJJJJJJJJJJ?????????????777777
77777?????????????JJJJJJJJJJJJJJJJJJJJJYYYYYYYYYYYYYYYY!::^?YYYYJ^:~~:7YJ!:~!!^:::^!?JJJJJJJJJJJJ?????????????77777
777????????????JJJJJJJJJJJJJJJJJJJJJJYYYYYYYYYYYYYYYYY?^:.^?YYYY?^:~^:!JJ!:^~^:::.:^!?JJJJJJJJJJJJ??????????!!?7777
77777777777777777777????JJJJJJJ7JYJYYYYYYYYYYYYYYYYYYY!::::!JYYJ!^^^.:~J?^:^^^:.:::~~7?JJJJ7?JJJJJJJ???????7~^7?777
^^~~~~~~~!!!!!!!!777777777?????~!JJJJJJJJJJJJJJJJJJYYJ~::::^7JJ?~::::::!!:::^::.::^~!!7?777^!?77!!777!!77!!^::~!!!!
~~~~~~!~~~!7!!!!!7777777~!7777~:^77??JJJJJJJJJJJJJJJJ?~::::^7JJ7^:::::^!~~^^^~^:^~~~!77!^^^::!7!^^~!!!~~~~~:..:^^^^
~~~~~~~~~~~!~~~^!~!!!77^^~7?77~:~!!?JJYYJ????????????~::::^~!?J?7~^~!~!!!!!!~^:::::^~!!!~~~::!7~::~~~~~^~~^:...:::^
^~~~~~^^^^~~^:^^~~!!!!~::^~77!:::~^7Y555YJ?????7?7777!~~!!!77777777777777!!7!!~~^^:^~~~!!!!!~~!~~~!~~^^^~~:....::.^
:^:^~^:^::^^::::^~~~~~^^::^^^^:::^:^!77?JJ~!!?!7?!77777777!7777!7!!!!7!7!!7!!7!!!!!!!!!!!!!!!!!~^~~~^^^^~^^::^^^^^~
::::^^:::.::^::::~^^^^^:::^^^:..:::^^:^:~^^~~!!!!!777777!!!7777!777!!7777!!777!!!!!!!!!!!!!!!!!!~^~^^^^^~~~~!~~~~~~
.:::^::...:::::::~^:^^::::^^^:::::.:^~~~!!!!!!!!!7!!!!!!77!7!7!!7!!!7!!7!!!!77!!77!!!!!!!!!!!!!!!!!~~!~~~~~~~~~~~~~
..:::::...::::::^^^::^:...:^~~^^::::~!!!!~~!!!!!!!!7!!!!77!!!!7!!!!!!!!!!!!!!!!!77!!!!!!!!!!!!!!!!~!!!!~~~~~~~~~~~~
..:^^:......:^:::^^^^::...:^^~~~~~~~~~~~~~~~~~~!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!~!!!!!~~~~~~~~~~~~~~~~^~~~^^
..::^:......:::^^^^~~^^::.:^~~~~~~~~~~~~~~~~!!!~!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!~~~~~~~~~~~~~~~~~~~^^^^~^^
:::^:........::^~~~~~:^^^:^~~~~~~^^^~~~~~~~~~~!!!!!!~~~~~~!!!!!!!!!!!~!!!~!!!!!!!!~~!!!!~~~~~~~~~~~~^~~~~~~~~^^^^^^
^^^:..........:^~~~~~~~~~~~~~~~~^^^^^~^^~~~~~~~!!~~~~~~~~~~~!!!!!!!~!!!!!!~!!!~!!!!~~~~~~~~~~~~~~~~~~~~~^^^^^^^^^^^</span><br>
`
.trim().replaceAll('\n', '<br>');