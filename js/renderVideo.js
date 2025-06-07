const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");

fetch(`credits/${id}.json`)
  .then(res => res.json())
  .then(data => {
    document.getElementById("titre").textContent = data.titre;
    const ul = document.getElementById("credits");
    data.credits.forEach(c => {
      const li = document.createElement("li");
      li.textContent = `${c.nom} – ${c.role}`;
      ul.appendChild(li);
    });

    document.getElementById("report-link").href = `report.html?id=${id}`;
  })
  .catch(() => {
    document.body.innerHTML = "<p>⚠️ Crédits introuvables</p>";
  });
