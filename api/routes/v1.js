const ListNotesController = require('../controllers').listNotes

module.exports = function (apps) {
  /* =============================
            List Note
  ============================= */
  apps.get('/list-notes', ListNotesController.getListNotes)
  apps.post('/list-notes/add', ListNotesController.addNewNotes)
  apps.post('/list-notes/delete', ListNotesController.deleteNotes)
  apps.post('/list-notes/update', ListNotesController.updateNotes)

  return apps
}
