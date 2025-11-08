document.addEventListener("DOMContentLoaded", function () {
  const widgetHTML = `
    <style>
      #chatbot-icon {
        position: fixed;
        bottom: 20px;
        right: 20px;
        width: 60px;
        height: 60px;
        background: #0078ff;
        border-radius: 50%;
        cursor: pointer;
        box-shadow: 0 4px 15px rgba(0,0,0,0.3);
        display: flex;
        justify-content: center;
        align-items: center;
        color: white;
        font-size: 28px;
        z-index: 9999;
      }
      #chatbot-container {
        position: fixed;
        bottom: 90px;
        right: 20px;
        width: 360px;
        height: 520px;
        display: none;
        border-radius: 12px;
        overflow: hidden;
        box-shadow: 0 4px 20px rgba(0,0,0,0.3);
        z-index: 9999;
        background: #fff;
      }
    </style>

    <div id="chatbot-icon">💬</div>
    <div id="chatbot-container">
      <iframe 
        src="https://links.collect.chat/690fb14b9bd297f261a7a13b" 
        width="100%" height="100%" frameborder="0">
      </iframe>
    </div>
    <script async src="https://collectcdn.com/embed.js"></script>
  `;

  document.body.insertAdjacentHTML("beforeend", widgetHTML);

  const icon = document.getElementById("chatbot-icon");
  const box = document.getElementById("chatbot-container");

  icon.onclick = () => {
    box.style.display = (box.style.display === "block" ? "none" : "block");
  };
});
