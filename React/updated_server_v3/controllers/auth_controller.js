const authModel = require("../models/auth_model")

const registerUser = (req, res) => {
  const sentEmail = req.body.Email;
  const sentUserName = req.body.UserName;
  const sentPassword = req.body.Password;

  // Lets create SQL statement to insert the user to the Database table Users
  //   const SQL = "INSERT INTO users (email, username, password) VALUES (?,?,?)";
  //   const Values = [sentEmail, sentUserName, sentPassword];
  //
  //   // Query to execute the sql statement stated above
  //   db.query(SQL, Values, (err, results) => {
  //     if (err) {
  //       res.send(err);
  //     } else {
  //       console.log("User inserted successfully!");
  //       res.send({ message: "User added!" });
  //     }
  //   });
  // 

  authModel.registerUser(sentEmail, sentUserName, sentPassword, (err, results) => {
    if (err) {
      res.send(err);
    } else {
      console.log("User inserted successfully!");
      res.send({ message: "User added!" });
    }
  });
}

const loginUser = (req, res) => {
  const sentloginUserName = req.body.LoginUserName;
  const sentLoginPassword = req.body.LoginPassword;

  // console.log(`Username is ${sentloginUserName}`)
  //
  // // Lets create SQL statement to insert the user to the Database table Users
  // const SQL = "SELECT * FROM users WHERE username = ? && password = ?";
  // const Values = [sentloginUserName, sentLoginPassword];
  //
  // // Query to execute the sql statement stated above
  // db.query(SQL, Values, (err, results) => {
  //   if (err) {
  //     res.send({ error: err });
  //   }
  //   if (results.length > 0) {
  //     res.send(results);
  //   } else {
  //     res.send({ message: `Credentials Don't match!` });
  //   }
  // });
  authModel.loginUser(sentloginUserName, sentLoginPassword, (err, results) => {
    if (err) {
      res.send({ error: err });
    }
    if (results.length > 0) {
      res.send(results);
    } else {
      res.send({ message: `Credentials Don't match!` });
    }
  });
}

module.exports = {
  registerUser,
  loginUser
}
