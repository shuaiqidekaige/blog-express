import express from "express";
import { User } from "../entity/User";
import UserService from "../service/user";
import { transformResult } from "../utils";

const router = express.Router();

type UserParams = {
  userId: string;
}

router.get('/', async function (req, res) {
  const userServiceInstance = new UserService()
  const [users, count] = await userServiceInstance.getUsers()
  const result = {
    items: users,
    count
  }
  res.json(result);
});

router.get('/:userId', async function (req, res) {
  const { userId } = req.params as UserParams
  const userServiceInstance = new UserService()
  const user = await userServiceInstance.getUserById(Number(userId))
  res.json(user || null);
});

router.post('/', async function (req, res) {
  const userBody = <User>req.body
  const userServiceInstance = new UserService()
  const user = await userServiceInstance.createUser(userBody) as any
  res.json(transformResult(user, User));
});

router.put('/:userId', async function (req, res) {
  const user = <User>req.body
  const { userId } = req.params as UserParams
  const userServiceInstance = new UserService()
  const result = await userServiceInstance.updateUser(user)
  if (result.affected > 0) {
    res.json({ message: '修改成功' });
  } else {
    res.json({ message: '修改失败' });
  }
});


export default router;
