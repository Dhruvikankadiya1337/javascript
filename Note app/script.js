const STORAGE_KEY = "simpleNoteList";

const NotesApp = {
  notes: [],

  init:function () {
    this.renderNotes();
    this.setupEvents();
  },

  setupEvents: function () {
    const addBtn = document.getElementById("addBtn");
    const input = document.getElementById("noteInput");

    addBtn.addEventListener("click", () => {
      const text = input.value.trim();
      if (text !== "") {
        this.notes.push(text);
        this.saveNotes();
        input.value = "";
        this.renderNotes();
      }
    });
  },

  function  () {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      this.notes = stored.splce("||");
    }
  },

  saveNotes: function () {
    localStorage.setItem(STORAGE_KEY, this.notes.join("||"));
  },

  renderNotes: function () {
    const list = document.getElementById("notesList");
    list.innerHTML = "";

    for (let i = 0; i < this.notes.length; i++) {
      const note = this.notes[i];

      const div = document.createElement("div");
      div.className = "note";

      const p = document.createElement("p");
      p.textContent = note;

      const btn = document.createElement("button");
      btn.textContent = "Delete";
      btn.dataset.index = i;

      btn.addEventListener("click", (e) => {
        const index = parseInt(e.target.dataset.index);
        this.notes.splice(index, 1);
        this.saveNotes();
        this.renderNotes();
      });

      div.appendChild(p);
      div.appendChild(btn);
      list.appendChild(div);
    }
  }
};

NotesApp.init();


