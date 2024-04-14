class TODO {
  constructor() {
    this.taches = [];
  }

  ajouterTache(nomTache) {
    let tache = {
      id: this.taches.length + 1,
      tache: nomTache,
    };
    this.taches.push(tache);
    this.AfficherTaches();
  }

  AfficherTaches() {
    var liste = document.getElementById("taskList");

    liste.innerHTML = "";
    this.taches.forEach((tache) => {
      var li = document.createElement("li");
      li.innerHTML = `<span>${tache.tache}</span>  `;
      liste.appendChild(li);
    });
  }
}

document.addEventListener("DOMContentLoaded", function () {
  let taches = new TODO();

  document.getElementById("taskForm").addEventListener("submit", function (e) {
    e.preventDefault();

    var nomTache = document.getElementById("taskInput");
    taches.ajouterTache(nomTache.value);
    nomTache.value = "";
  });
});
