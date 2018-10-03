module.exports = {
  getTeam: (req, res) => {
    const db = req.app.get('db');

    db.get_team()
      .then(resp => {
        res.status(200).send(resp);
      })
      .catch(err => console.log(err));
  },

  addTeamMember: (req, res) => {
    const db = req.app.get('db');

    const { user_id, team_id } = req.body;

    db.add_team_member([user_id, team_id])
      .then(resp => {
        res.status(200).send(resp);
      })
      .catch(err => console.log(err));
  },

  removeMember: (req, res) => {
    const db = req.app.get('db');
    const { id } = req.params;

    db.remove_member([id])
      .then(resp => {
        res.status(200).send(resp);
      })
      .catch(err => console.log(err));
  }
};
