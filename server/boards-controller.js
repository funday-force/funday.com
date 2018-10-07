module.exports = {
  getBoards: (req, res) => {
    const db = req.app.get("db");

    db.get_boards()
      .then(resp => {
        res.status(200).send(resp);
      })
      .catch(err => console.log(err));
  },

  createBoard: (req, res) => {
    const db = req.app.get("db");

    const { team_id, title, description } = req.body;

    db.create_board([team_id, title, description])
      .then(resp => {
        res.status(200).send(resp);
      })
      .catch(err => console.log(err));
  },

  deleteBoard: (req, res) => {
    const db = req.app.get("db");

    const { id } = req.params;

    db.delete_board([id])
      .then(resp => {
        res.status(200).send(resp);
      })
      .catch(err => console.log(err));
  },

  updateBoard: (req, res) => {
    const db = req.app.get("db");

    const { id } = req.params;
    const { title, description } = req.body;

    db.update_board([title, description, id])
      .then(resp => {
        res.status(200).send(resp);
      })
      .catch(err => console.log(err));
  }
};
