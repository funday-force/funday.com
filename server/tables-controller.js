module.exports = {
  getTables: (req, res) => {
    const db = req.app.get("db");

    db.get_tables()
      .then(resp => {
        res.status(200).send(resp);
      })
      .catch(err => console.log(err));
  },

  createTable: (req, res) => {
    const db = req.app.get("db");

    const { title, board_id } = req.body;

    db.create_table([title, board_id])
      .then(resp => {
        res.status(200).send(resp);
      })
      .catch(err => console.log(err));
  },

  deleteTable: (req, res) => {
    const db = req.app.get("db");

    const { id } = req.params;

    db.delete_table([id])
      .then(resp => {
        res.status(200).send(resp);
      })
      .catch(err => console.log(err));
  },

  updateTable: (req, res) => {
    const db = req.app.get("db");

    const { id } = req.params;
    const { title } = req.body;

    db.update_table([title, id]).then(resp => {
      res.status(200).send(resp);
    });
  }
};
