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
  }
}
