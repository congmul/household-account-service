import express from "express";

const router = express.Router();

router.post("/", (req, res) => {
  res.status(200).send({ msg: "test route" });
});

export default router;
