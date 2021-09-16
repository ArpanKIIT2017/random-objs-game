const SHAPE_CHOICES = ['Rectangle', 'Square', 'Cuboid', 'Circle', 'Sphere', 'Cylinder', 'Triangle']
const SIZE_CHOICES = ['Big', 'Medium', 'Small']
const COLOR_CHOICES = ['Red', 'Blue', 'Green', 'Yellow', 'Maroon', 'Black', 'White', 'Brown']

const PASS_COUNT = 10;
const PASS_DELAY = 1000;

// const svgContainer = {
//     node: document.getElementById('svg-container'),
//     hide: function() {
//         this.node.style.opacity = 0;
//     },
//     show: function() {
//         this.node.style.opacity = 1;
//     },
//     renderSvg: function(svgNodeHtml) {
//         this.hide();
//         setTimeout(() => {
//             this.node.innerHTML = svgNodeHtml;
//             this.show();
//         }, 110)   
//     }
// };


function selectRandomFromArray(choices) {
    return choices[Math.floor(Math.random() * choices.length)];
}

function generateRandomTuple() {
    return [
        selectRandomFromArray(SHAPE_CHOICES),
        selectRandomFromArray(COLOR_CHOICES),
        selectRandomFromArray(SIZE_CHOICES)
    ];
}

function pick() {
    const shapeNode = document.getElementById("shape");
    const colorNode = document.getElementById("color");
    const sizeNode = document.getElementById("size");

    document.getElementById("button").disabled = true;
    
    let cnt = 0;
    
    const intervalHandler = setInterval(() => {
        [shape, color, size] = generateRandomTuple();

        animateAndDisplay(shape, shapeNode, 'shape');
        animateAndDisplay(color, colorNode, 'color');
        animateAndDisplay(size, sizeNode, 'size');

        if (++cnt >= PASS_COUNT) {
            clearInterval(intervalHandler);
            setTimeout(() => {
                document.getElementById("button").disabled = false;
            }, 611);   
        }
    }, PASS_DELAY);

}



function animateAndDisplay(currentChoice, node, key) {
 
    node.style.opacity = 0;
        
    setTimeout(() => {
        node.innerHTML = currentChoice;
        node.style.opacity = 1;
        
        if (key === 'color') node.style.color = currentChoice;
    }, 610);
   
}


