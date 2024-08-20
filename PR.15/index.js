function counter(id, finalCount, nextFunction) {
    let count = 0;
    let interval = setInterval(() => {
        document.getElementById(id).innerHTML = count;
        count++;
        if (count > finalCount) {
            clearInterval(interval);
            if (nextFunction) nextFunction();
        }
    }, 10); 
}

function startCounters() {
    counter('html', 325, () => {
        counter('bootstrap', 562, () => {
            counter('javascript', 211, () => {
                counter('Projects', 400);
            });
        });
    });
}

startCounters();
