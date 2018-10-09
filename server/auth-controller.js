const axios = require('axios');

const { REACT_APP_CLIENT_ID, CLIENT_SECRET, REACT_APP_DOMAIN } = process.env;

module.exports = {
  login: async (req, res) => {
    // use code from query in payload for token
    const payload = {
      client_id: REACT_APP_CLIENT_ID,
      client_secret: CLIENT_SECRET,
      code: req.query.code,
      grant_type: 'authorization_code',
      redirect_uri: `http://${req.headers.host}/auth/callback`
    };

    // trade code for token
    let resWithToken = await axios.post(
      `https://${REACT_APP_DOMAIN}/oauth/token`,
      payload
    );

    // use token to get user data
    let resWithUserData = await axios.get(
      `https://${REACT_APP_DOMAIN}/userinfo?access_token=${
        resWithToken.data.access_token
      }`
    );
    console.log('user data', resWithUserData.data);

    let {
      name,
      email,
      phone,
      location,
      title,
      picture,
      sub
    } = resWithUserData.data;

    const db = req.app.get('db');
    let foundUser = await db.find_user([sub]);

    if (foundUser[0]) {
      req.session.user = foundUser[0];
      res.redirect('/#/dashboard');
    } else {
      let createdUser = await db.create_user([
        name,
        email,
        phone,
        location,
        title,
        picture,
        sub
      ]);
      req.session.user = createdUser[0];

      res.redirect('/#/dashboard');
    }
  },

  userData: (req, res) => {
    if (req.session.user) {
      res.status(200).send(req.session.user);
    } else {
      res.status(401).send('NOOOO!!');
    }
  },

  logout: (req, res) => {
    req.session.destroy();

    res.redirect('http://localhost:3000/');
  }
};
