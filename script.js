    function saveProgress() {
      const options = document.querySelectorAll('input[type="radio"]:checked');
      const progress = Array.from(options).map(option => option.value);
      sessionStorage.setItem('progress', JSON.stringify(progress));
    }

    function loadProgress() {
      const progress = JSON.parse(sessionStorage.getItem('progress'));
      if (progress) {
        progress.forEach((option, index) => {
          document.getElementById(`option-${index}-${option}`).checked = true;
        });
      }
    }

    function submitQuiz() {
      const options = document.querySelectorAll('input[type="radio"]:checked');
      const score = options.length;
      localStorage.setItem('score', score);
      alert(`Your score is ${score} out of 5.`);
    }

    window.onload = loadProgress;