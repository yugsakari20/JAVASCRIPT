const counter = (id, finalCount) => {
    let count = 0;
    let interval = setInterval(() => {
        document.getElementById(id).innerHTML = count;
        count++;
        if (count > finalCount) {
            clearInterval(interval);
        }
    }, 10);
};

const startCounters = () => {
    counter('html', 325);
    counter('bootstrap', 562);
    counter('javascript', 211);
    counter('css', 400);
};

startCounters();
