
(function(l, r) { if (l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' + (window.location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; r.id = 'livereloadscript'; l.getElementsByTagName('head')[0].appendChild(r) })(window.document);
(function () {
  'use strict';

  class GameHelper {
    calculate(num1, num2) {
      return num1 + num2;
    }

    end(startTime) {
      const timer = setInterval(function () {
        const elapsedTime = Date.now() - startTime;
        clearInterval(timer);
        document.getElementById('time').innerHTML = `${elapsedTime}`;
      }, 100);
      document.getElementById('problem').style.display = 'none';
      document.getElementById('end').style.display = 'block';
    }

  }

  const sum = (num1, num2) => num1 + num2;
  const increaseByOne = num => num++;

  function styleInject(css, ref) {
    if (ref === void 0) ref = {};
    var insertAt = ref.insertAt;

    if (!css || typeof document === 'undefined') {
      return;
    }

    var head = document.head || document.getElementsByTagName('head')[0];
    var style = document.createElement('style');
    style.type = 'text/css';

    if (insertAt === 'top') {
      if (head.firstChild) {
        head.insertBefore(style, head.firstChild);
      } else {
        head.appendChild(style);
      }
    } else {
      head.appendChild(style);
    }

    if (style.styleSheet) {
      style.styleSheet.cssText = css;
    } else {
      style.appendChild(document.createTextNode(css));
    }
  }

  var css_248z = "body {\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n    margin-top: 10%;\n    font-size: 2em;\n}\n\n#sum {\n    font-size: 1em;\n    width: 1.3em;\n}\n";
  styleInject(css_248z);

  document.getElementById('end').style.display = 'none';
  const helper = new GameHelper();
  let userNum1 = -1;
  let userNum2 = -1;
  let answer = -1;
  let counter = 0;
  const startTime = Date.now();
  newProblem();

  function newProblem() {
    if (counter >= 3) {
      helper.end(startTime);
    }

    const num1 = Math.floor(Math.random() * 10);
    const num2 = Math.floor(Math.random() * 10);
    answer = helper.calculate(num1, num2);
    userNum1 = -1;
    userNum1 = -1;
    document.getElementById('num1').innerHTML = `${num1}`;
    document.getElementById('num2').innerHTML = `${num2}`;
    counter++;
  }

  document.addEventListener('keyup', event => {
    const number = parseInt(event.key);
    if (isNaN(number)) return;

    if (number === answer) {
      document.getElementById('sum').value = '';
      newProblem();
    } else if (userNum1 === -1) {
      userNum1 = number;
    } else {
      userNum2 = number;

      if (parseInt('' + userNum1 + userNum2) === answer) {
        document.getElementById('sum').value = '';
        newProblem();
      }
    }
  });
  console.log(sum('0', '1')); // eslint-disable-line no-console

  console.log(sum('6', '7')); // eslint-disable-line no-console

  console.log(sum('0', '0')); // eslint-disable-line no-console

  console.log(increaseByOne('0')); // eslint-disable-line no-console

  console.log(sum('2', {
    b: '3'
  })); // eslint-disable-line no-console

}());
//# sourceMappingURL=app.js.map
