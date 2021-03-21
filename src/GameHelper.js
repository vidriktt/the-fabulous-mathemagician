class GameHelper {
  calculate(num1, num2) {
    return num1 + num2;
  }

  end(startTime) {
    const timer = setInterval(function() {
      const elapsedTime = Date.now() - startTime;
      clearInterval(timer);
      document.getElementById('time').innerHTML = `${elapsedTime}`;
    }, 100);
    document.getElementById('problem').style.display = 'none';
    document.getElementById('end').style.display = 'block';
  }
}

export default GameHelper;
