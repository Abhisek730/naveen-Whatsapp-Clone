const router = require("express").Router();
const UserData = require("../models/UserData");
const bcrypt = require("bcrypt");

router.post("/", async (req, res) => {
  const { verifiedPassword, verifiedEmail } = req.body;

  // login end points
  try {
    const LoginUser = await UserData.findOne({ email: verifiedEmail });

    const compPassword = await bcrypt.compare(
      verifiedPassword,
      LoginUser.password
    );
    console.log(compPassword);
    res.json({ error: 'done' });
  } catch {
    console.log("it's an error");
  }
});

module.exports = router;
