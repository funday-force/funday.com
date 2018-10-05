module.exports = {
  getMessages: (req, res) => {
    const db = req.app.get('db');

    db.get_messages()
      .then(resp => {
        res.status(200).send(resp);
      })
      .catch(err => console.log(err));
  },

  createMessage: (req, res) => {
    const db = req.app.get('db');
    const team_id = 1;
    const { user_id, message, date } = req.body;

    db.create_message([team_id, user_id, message, date])
      .then(resp => {
        res.status(200).send(resp);
      })
      .catch(err => console.log(err));
  },

  deleteMessage: (req, res) => {
    const db = req.app.get('db');

    const { id } = req.params;

    db.delete_message([id])
      .then(resp => {
        res.status(200).send(resp);
      })
      .catch(err => console.log(err));
  },

  updateMessage: (req, res) => {
    const db = req.app.get('db');

    const { id } = req.params;
    const { message } = req.body;

    db.update_message([message, id])
      .then(resp => {
        res.status(200).send(resp);
      })
      .catch(err => console.log(err));
  }
};
