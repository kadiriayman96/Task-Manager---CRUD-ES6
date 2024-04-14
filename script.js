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

  modifierTache(idTache, nomTache) {
    this.taches.forEach((tache) => {
      if (tache.id == idTache) {
        tache.tache = nomTache;
      }
    });
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
                <button class="update-btn" data-id="${tache.id}">Modifier</button>
                <button class="delete-btn" data-id="${tache.id}">Supprimer</button>
                
      `;
      liste.appendChild(li);
    });

    this.SupprimerTacheEvent();
    this.ModifierTacheEvent();
  }

  SupprimerTacheEvent() {
    var deleteButtons = document.querySelectorAll(".delete-btn");
    deleteButtons.forEach((btn) => {
      btn.addEventListener("click", (e) => {
        let idTache = btn.getAttribute("data-id");
        this.supprimerTache(idTache);
      });
    });
  }

  ModifierTacheEvent() {
    var updateButtons = document.querySelectorAll(".update-btn");
    updateButtons.forEach((btn) => {
      btn.addEventListener("click", (e) => {
        let idTache = btn.getAttribute("data-id");
        let originalNomTache =
          btn.parentElement.querySelector("span").innerHTML;
        let nomTache = prompt("Modifier la tache :", originalNomTache);
        if (nomTache === null) return;
        this.modifierTache(idTache, nomTache);
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
