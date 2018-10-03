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

    const { message } = req.body;

    db.create_message([message])
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
