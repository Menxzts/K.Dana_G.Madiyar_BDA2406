let progress = parseInt(localStorage.getItem("progress")) || 0;
    updateProgressBar();
    
    
    function checkAnswer() {
      let correct = 0;
      const total = 4;
    
      const q1 = document.querySelector('input[name="q1"]:checked');
      const q2 = document.querySelector('input[name="q2"]:checked');
      const q3 = document.querySelector('input[name="q3"]:checked');
      const q4 = document.querySelector('input[name="q4"]:checked');
    
      if (q1 && q1.value === "The part of a website that deals with the appearance and user interaction.") correct++;
      if (q2 && q2.value === "HTML, CSS, JavaScript") correct++;
      if (q3 && q3.value === "Chrome DevTools") correct++;
      if (q4 && q4.value === "To add styles and layout to a web page.") correct++;
    
      const result = document.getElementById("result");
      const progressBar = document.getElementById("progressBar");
    
      if (correct === total) {
        result.textContent = "Congratulations! All answers are correct.";
        result.style.color = "green";
        progress += 50; 
        if (progress > 100) progress = 100;
        if (progress === 100) {
          const audio = document.getElementById("successSound");
          audio.play();
        }
        
        localStorage.setItem("progress", progress);
      } else {
        result.textContent = `You answered ${correct} out of ${total} correctly.`;
        result.style.color = "red";
        progress -= 10; 
        if (progress < 0) progress = 0;
        localStorage.setItem("progress", progress);
      }
    
      updateProgressBar();
    }
    
   
    function updateProgressBar() {
      const bar = document.getElementById("progressBar");
      bar.style.width = progress + "%";
      bar.textContent = progress + "%";
    }