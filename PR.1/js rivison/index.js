const reverseTime = (hour, minute, second) => {
  const interval = setInterval(() => {
    if (hour == 0 && minute == 0 && second == 0) {
      clearInterval(interval);
      return;
    }
    
    if (minute == 0 && second == 0 && hour > 0) {
      hour--;
      minute = 59;
      second = 59;
    }
    if (second == 0) {
      minute--;
      second = 59;
    }
    second--;


    document.getElementById("hour").innerText = `Hour: ${hour}`;
    document.getElementById("minute").innerText = `Minute: ${minute}`;
    document.getElementById("second").innerText = `Second: ${second}`;

  }, 1000);
};


reverseTime(0, 0, 10);
