
document.getElementById('canvas').addEventListener("load", getDevicePixelRatio());

function getDevicePixelRatio() {
    // Defino el elemento contenedor
    var canvas = document.getElementById('canvas');
    // Retorna un contexto de dibujo en el lienzo.
    var ctx = canvas.getContext('2d');


    // Set display size (css pixels)
    var size = 200;
    canvas.style.width = size + "px";
    canvas.style.height = size + "px";


    // Set actual size in memory (scaled to account for extra pixel density)
    var scale = window.devicePixelRatio; // Change to 1 on retina screens to see blurry canvas.


    canvas.width = size * scale;
    canvas.height = size * scale;

    // Normalize coordinate system to use css pixels
    ctx.scale(scale, scale);

    // define el color 
    ctx.fillStyle = "#bada55";
    ctx.fillRect(10, 10, 300, 300);
    ctx.fillStyle = "#ffffff";
    ctx.font = '18px Arial';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';

    var x = size / 2;
    var y = size / 2;

    var textString = "Device Pixel Ratio : " + scale;
    ctx.fillText(textString, x, y);
}


// navigator.connection.addEventListener('change', logNetworkInfo);

// function logNetworkInfo() {
//     // Network type that browser uses
//     console.log('         type: ' + navigator.connection.type);

//     // Effective bandwidth estimate
//     console.log('     downlink: ' + navigator.connection.downlink + 'Mb/s');

//     // Effective round-trip time estimate
//     console.log('          rtt: ' + navigator.connection.rtt + 'ms');

//     // Upper bound on the downlink speed of the first network hop
//     console.log('  downlinkMax: ' + navigator.connection.downlinkMax + 'Mb/s');

//     // Effective connection type determined using a combination of recently
//     // observed rtt and downlink values: ' +
//     console.log('effectiveType: ' + navigator.connection.effectiveType);

//     // True if the user has requested a reduced data usage mode from the user
//     // agent.
//     console.log('     saveData: ' + navigator.connection.saveData);
// }

// logNetworkInfo();