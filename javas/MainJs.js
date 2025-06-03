$(document).ready(function() {
        $(".button").click(function() {
            $(".course-container").animate({
                scrollLeft: "+=350px" 
            }, 500);
        });
    });
    
document.addEventListener("DOMContentLoaded", () => {
  const chatButton = document.getElementById("chatButton");
  const chatWindow = document.getElementById("chatWindow");
  const chatMessages = document.getElementById("chatMessages");

  chatButton.onclick = () => {
    chatWindow.style.display = chatWindow.style.display === "flex" ? "none" : "flex";
  };

  window.sendMessage = async function() {
    const userInput = document.getElementById("userMessage");
    const message = userInput.value.trim();
    if (!message) return;

    chatMessages.innerHTML += `<div class="msg user"><b>You:</b> ${message}</div>`;
    userInput.value = "";

    chatMessages.innerHTML += `<div class="msg bot"><i>AI responding...</i></div>`;
    chatMessages.scrollTop = chatMessages.scrollHeight;

    try {
      const response = await fetch('https://catfact.ninja/fact');
      const data = await response.json();

      document.querySelector(".bot:last-child").remove();
      chatMessages.innerHTML += `<div class="msg bot"><b>AI:</b> 🐱 ${data.fact}</div>`;
      chatMessages.scrollTop = chatMessages.scrollHeight;

    } catch (err) {
      document.querySelector(".bot:last-child").remove();
      chatMessages.innerHTML += `<div class="msg bot"><b>Ошибка:</b> ${err.message}</div>`;
    }
  }
});
  
