'use strict'
function onInit() {
    console.log(navigator.connection.downlink)
    console.dir(navigator)
}

function onCheckSpeed() {
    let downlink = navigator.connection.downlink
    const elSpeedData = document.querySelector('.speed-data')
    const elSpan1 = elSpeedData.querySelector('span:nth-of-type(1)')
    const elSpan2 = elSpeedData.querySelector('span:nth-of-type(2)')
    elSpan1.innerText = downlink
    if (downlink === 10) elSpan2.innerText = ' (Chrome Max)'
    elSpeedData.classList.remove('hide')
}


function onVibrate() {
    navigator.vibrate?.(500)

}