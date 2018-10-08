module.exports = {
  getRows: (req, res) => {
    const db = req.app.get("db");

    db.get_rows()
      .then(resp => {
        res.status(200).send(resp);
      })
      .catch(err => console.log(err));
  },

  createRow: (req, res) => {
    const db = req.app.get("db");

    const { table_id, title, status, text, date, person } = req.body;

    db.create_row([table_id, title, status, text, date, person])
      .then(resp => {
        res.status(200).send(resp);
      })
      .catch(err => console.log(err));
  },

  deleteRow: (req, res) => {
    const db = req.app.get("db");

    const { id } = req.params;

    db.delete_row([id])
      .then(resp => {
        res.status(200).send(resp);
      })
      .catch(err => console.log(err));
  },

  updateRow: (req, res) => {
    const db = req.app.get("db");

    const { id } = req.params;
    const { table_id, title, status, text, date, person } = req.body;

    db.update_row([table_id, title, status, text, date, person, id])
      .then(resp => {
        res.status(200).send(resp);
      })
      .catch(err => console.log(err));
  }
};
