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

  supprimerTache(idTache) {
    this.taches = this.taches.filter((tache) => tache.id != idTache);
    this.AfficherTaches();
  }

  AfficherTaches() {
    var liste = document.getElementById("taskList");

    liste.innerHTML = "";
    this.taches.forEach((tache) => {
      var li = document.createElement("li");
      li.innerHTML = `
                <span>${tache.tache}</span>
                <button class="delete-btn" data-id="${tache.id}">Delete</button>
      `;
      liste.appendChild(li);
    });

    this.SupprimerTacheEvent();
  }

  SupprimerTacheEvent() {
    var deleteBtns = document.querySelectorAll(".delete-btn");
    deleteBtns.forEach((btn) => {
      btn.addEventListener("click", (e) => {
        let idTache = btn.getAttribute("data-id");
        this.supprimerTache(idTache);
      });
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
