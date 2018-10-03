module.exports = {
  getUsers: (req, res) => {
    const db = req.app.get('db');

    db.get_all_users()
      .then(resp => {
        res.status(200).send(resp);
      })
      .catch(err => console.log(err));
  },
  removeUser: (req, res) => {
    const db = req.app.get('db');
    const { id } = req.params;

    db.delete_user([id])
      .then(resp => {
        res.status(200).send(resp);
      })
      .catch(err => console.log(err));
  },

  updateUser: (req, res) => {
    const db = req.app.get('db');
    const { id } = req.params;
    const { name, email, phone, location, title } = req.body;

    db.update_user([name, email, phone, location, title, id])
      .then(resp => {
        res.status(200).send(resp);
      })
      .catch(err => console.log(err));
  }
};
