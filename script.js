document.querySelectorAll('.tabs button').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.tab-content').forEach(tab => tab.classList.remove('active'));
    document.querySelectorAll('.tabs button').forEach(b => b.classList.remove('active'));
    document.getElementById(btn.dataset.tab).classList.add('active');
    btn.classList.add('active');

    // Re-render MathJax just in case
    if (window.MathJax) {
      MathJax.typesetPromise();
    }
  });
});

// Countdown timer
const endTime = new Date("2026-04-02T07:00:00Z").getTime();

function updateTimer() {
  const now = new Date().getTime();
  const diff = endTime - now;

  if (diff <= 0) {
    document.getElementById("timer").textContent = "Finished";
    return;
  }

  const hours = String(Math.floor(diff / (1000 * 60 * 60))).padStart(2, '0');
  const minutes = String(Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))).padStart(2, '0');
  const seconds = String(Math.floor((diff % (1000 * 60)) / 1000)).padStart(2, '0');

  document.getElementById("timer").textContent = `Time Left: ${hours}:${minutes}:${seconds}`;
}

setInterval(updateTimer, 1000);
updateTimer();

function switchTab(tabId) {
  document.querySelectorAll('.tab-content').forEach(tab => tab.classList.remove('active'));
  document.querySelectorAll('.tabs button').forEach(b => b.classList.remove('active'));

  document.getElementById(tabId).classList.add('active');

  const btn = [...document.querySelectorAll('.tabs button')].find(b => b.dataset.tab === tabId);
  if (btn) btn.classList.add('active');

  if (window.MathJax) {
    MathJax.typesetPromise();
  }
}
