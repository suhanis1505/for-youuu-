const correctPassword = "bhondu"; // change this 👀

function checkPassword() {
  const input = document.getElementById("passwordInput").value;
  if (input === correctPassword) {
    document.getElementById("lockScreen").style.display = "none";
    document.getElementById("content").style.display = "block";
    launchConfetti();
  } else {
    document.getElementById("error").innerText = "That’s not it. Try again 🤍";
  }
}

function startExperience() {
  document.getElementById("bgMusic").play();
  window.scrollTo({ top: window.innerHeight, behavior: "smooth" });
}

function openMessage(type) {
  const box = document.getElementById("messageBox");
  box.style.display = "block";

  if (type === "miss") {
    box.innerText =
      "Sometimes I miss you so much it physically hurts. But loving you has taught me patience and trust. Even when we’re apart, you’re the first place my heart goes.";
  }

  if (type === "sad") {
    box.innerText =
      "I know you try to stay strong even when things feel heavy. But you don’t have to be okay all the time. I’m here — not to fix you, just to stay with you.";
  }

  if (type === "overthink") {
    box.innerText =
      "Your mind can be loud sometimes, and I wish I could quiet it for you. Please remember this: not every fear is real, and I’m not going anywhere.";
  }

  if (type === "reassure") {
    box.innerText =
      "I don’t always say this out loud, but I choose you. Even when things feel uncertain. Even when distance makes it hard. You matter to me more than you know.";
  }

  if (type === "night") {
    box.innerText =
      "It’s your birthday night. Loving you has changed me in ways I didn’t expect. I’m grateful for you — for who you are and for how safe you make me feel.";
  }
}

/* Confetti */
function launchConfetti() {
  const canvas = document.getElementById("confetti");
  const ctx = canvas.getContext("2d");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const confetti = Array.from({ length: 150 }, () => ({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    r: Math.random() * 6 + 2,
    d: Math.random() * 10 + 5,
  }));

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "#ff5c8a";
    confetti.forEach(c => {
      ctx.beginPath();
      ctx.arc(c.x, c.y, c.r, 0, Math.PI * 2);
      ctx.fill();
      c.y += c.d / 5;
      if (c.y > canvas.height) c.y = 0;
    });
    requestAnimationFrame(draw);
  }
  draw();
}
function toggleLove() {
  document.getElementById("loveContent").style.display = "block";
}
