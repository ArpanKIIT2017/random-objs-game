function generateCircleSvg(size, color) {
    let radius = 0;
    if (size === 'Big') {
        radius = 150;
    } else if (size === 'Medium') {
        radius = 75;
    } else {
        radius = 50;
    }
    return `
    <svg width='150' height='150'>
        <circle cx='${150 / 2}' cy='${150 / 2}' r='${radius}' stroke='${color}' stroke-width='4' fill='${color}' />
    </svg>
    `;
}

function generateRectangleSvg(size, color) {
    let radius = 0;
    if (size === 'Big') {
        radius = 150;
    } else if (size === 'Medium') {
        radius = 75;
    } else {
        radius = 50;
    }
    return `
    <svg width='150' height='150'>
        <rect x='${radius}' y='${radius}' width='${radius+5}' height:'${radius}' stroke='${color}' stroke-width='4' fill='${color}' />
    </svg>
    `;
}

function generateSqaureSvg(size, color) {
    let radius = 0;
    if (size === 'Big') {
        radius = 150;
    } else if (size === 'Medium') {
        radius = 75;
    } else {
        radius = 50;
    }
    return `
    <svg width='150' height='150'>
        <rect x='${radius}' y='${radius}' width='${radius}' height:'${radius}' stroke='${color}' stroke-width='4' fill='${color}' />
    </svg>
    `;
}

function generateTriangleSvg(size, color) {
    let radius = 0, startPosition = [];
    if (size === 'Big') {
        radius = 150;
        startPosition = [150, 0];
    } else if (size === 'Medium') {
        radius = 75;
        startPosition = [150, 75];
    } else {
        radius = 50;
        startPosition = [150, 75];
    }
    const leftPosition = [startPosition[0] - Math.floor(radius / 2), startPosition[1] + radius];
    const rightPosition = [startPosition[0] + Math.floor(radius / 2), startPosition[1] + radius];
    return `
    <svg height='150' width='150'>
        <path d='M${startPosition[0]} ${startPosition[1]} L${startPosition[0]} ${leftPosition[1]} L${rightPosition[0]} ${rightPosition[1]} Z' fill='${color}' />
    </svg>
    `;
}

function getSvgShape(shape, size, color) {
    switch (shape) {
        case 'Circle': return generateCircleSvg(size, color);
        case 'Rectangle': return generateRectangleSvg(size, color);
        case 'Square': return generateSqaureSvg(size, color);
        case 'Triangle': return generateTriangleSvg(size, color);
        default: return '';
    }
}