function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

const sleep = ms => new Promise(r => setTimeout(r, ms));