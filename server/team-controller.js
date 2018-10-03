module.exports = {
  getTeam: (req, res) => {
    const db = req.app.get('db');

    db.get_team()
      .then(resp => {
        res.status(200).send(resp);
      })
      .catch(err => console.log(err));
  }
};
