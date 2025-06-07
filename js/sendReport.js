document.getElementById("report-form").addEventListener("submit", function(e) {
  e.preventDefault();

  const urlParams = new URLSearchParams(window.location.search);
  const videoId = urlParams.get("id");
  const name = e.target.name.value;
  const reason = e.target.reason.value;

  // Webhook IFTTT (remplace TA_CLEF par ta vraie clé)
  fetch("https://maker.ifttt.com/trigger/credit_missing/with/key/TA_CLEF", {
    method: "POST",
    body: JSON.stringify({
      value1: videoId,
      value2: name,
      value3: reason
    }),
    headers: { "Content-Type": "application/json" }
  }).then(() => {
    document.getElementById("message").textContent = "✅ Signalement envoyé ! Merci.";
  }).catch(() => {
    document.getElementById("message").textContent = "❌ Erreur lors de l'envoi.";
  });
});
