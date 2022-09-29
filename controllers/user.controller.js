let users = require("../data/user.json");

// get random user
module.exports.getRandomUser = (req, res, next) => {
  let id = Math.floor(Math.random() * users.length) + 1;
  const randomUser = users.find((user) => user.id == id);
  res.status(200).json({
    success: true,
    message: "Success",
    data: randomUser,
  });
};

// get all user
module.exports.allUser = (req, res, next) => {
  const { limit } = req.query;
  const userLimit = users.slice(0, limit);
  res.status(200).json({
    success: true,
    message: "Success",
    data: userLimit,
  });
};

// save user in json file
module.exports.saveUser = (req, res, next) => {
  const newUser = req.body;
  const { id, gender, name, contact, address, photoUrl } = newUser;

  // validate newUser
  users.find((user) => {
    if (user.id == id) {
      res.status(500).send({
        success: false,
        message: "Invalid id",
      });
    }
  });
  if (
    gender == "" ||
    name == "" ||
    contact == "" ||
    address == "" ||
    photoUrl == ""
  ) {
    res.status(500).send({
      success: false,
      message: "Invalid",
    });
  } else {
    users.push(newUser);
    res.status(200).json({
      success: true,
      message: "Success",
      data: users,
    });
  }
};

// update user
module.exports.updateUser = (req, res, next) => {
  const { id } = req.params;
  let newUser = users.find((user) => user.id == id);
  if (newUser == undefined)
    return res.status(500).send({
      success: false,
      message: "Invalid ID",
    });

  const newUserCopy = newUser;
  const { gender, name, contact, address, photoUrl } = newUserCopy;
  newUser.id = id;
  newUser.gender = req.body.gender || gender;
  newUser.name = req.body.name || name;
  newUser.contact = req.body.contact || contact;
  newUser.address = req.body.address || address;
  newUser.photoUrl = req.body.photoUrl || photoUrl;
  res.status(200).json({
    success: true,
    message: "Success",
    data: users,
  });
};

// update-multiple user
module.exports.updateMultipleUser = (req, res, next) => {
  let c = 0;
  const userBody = req.body;
  for (let i = 0; i < userBody.length; i++) {
    let newUser = users.find((user) => user.id == userBody[i].id);
    if (newUser == undefined)
      return res.status(500).send({
        success: false,
        message: "Invalid",
      });
    const newUserCopy = newUser;
    const { gender, name, contact, address, photoUrl } = newUserCopy;
    newUser.id = userBody[i].id;
    newUser.gender = userBody[i].gender || gender;
    newUser.name = userBody[i].name || name;
    newUser.contact = userBody[i].contact || contact;
    newUser.address = userBody[i].address || address;
    newUser.photoUrl = userBody[i].photoUrl || photoUrl;
  }
  res.status(200).json({
    success: true,
    message: "Success",
    data: users,
  });
};

// delete user
module.exports.deleteUser = (req, res, next) => {
  const { id } = req.params;
  let userId = users.find((user) => user.id == id);
  if (userId == null)
    return res.status(500).send({
      success: false,
      message: "Invalid ID",
    });
  users = users.filter((user) => user.id != id);
  res.status(200).json({
    success: true,
    message: "Success",
    data: users,
  });
};
