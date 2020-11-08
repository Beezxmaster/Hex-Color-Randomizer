/*
    VERSION: 1.1.0 | BY BEEZXMASTER
 */

function randomzizer() {

    /* Know when somebody press the button*/
    const button = document.getElementById('button').value;

    /* Get the Body Tag, for set the background later*/
    const body = document.querySelector('body');

    /* All possible combinations of Hex Colors in an Array */
    const hexcodes = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];

    /* Get the hex-color id from html doc to set the span */
    const color = document.querySelector('span');

        let hex = '#';

        for(let i = 0; i < 6; i++) {
            const random = Math.floor(Math.random()*hexcodes.length);
            hex += hexcodes[random];
        }
        color.innerHTML = hex;
        body.style.backgroundColor = hex;

}