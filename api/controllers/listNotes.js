const connection = require('../configDB')

module.exports = {
  async getListNotes(req, res) {
    connection.query(
      'SELECT * FROM list_notes',
      (error, results) => {
        // console.log('results ', results);
        res.status(200).json(results);
      }
    )
  },
  async addNewNotes(req, res) {
    connection.query(
      `INSERT INTO list_notes (title, notes, created_at) VALUES (?, ?, ?)`,
      [req.body.title, req.body.notes, req.body.created_at],
      (error, results) => {
        // console.log('results ', results);
        res.status(201).send({
          code: 0,
          message: 'New Note Successfully Saved.',
          results: results,
          error: error,
        });
      }
    )
  },
  async deleteNotes(req, res) {
    connection.query(
      `DELETE FROM list_notes WHERE id = ? `,
      [req.body.id],
      (error, results) => {
        // console.log('results ', results);
        res.status(201).send({
          code: 0,
          message: 'Note Successfully Deleted.',
          results: results,
          error: error,
        });
      }
    )
  },
  async updateNotes(req, res) {
    connection.query(
      `UPDATE list_notes SET title = ?, notes = ? WHERE id = ? `,
      [req.body.title, req.body.notes, req.body.id],
      (error, results) => {
        // console.log('results ', results);
        res.status(201).send({
          code: 0,
          message: 'Note Successfully Updated.',
          results: results,
          error: error,
        });
      }
    )
  }
}
