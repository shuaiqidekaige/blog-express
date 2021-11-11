import { Repository, UpdateResult } from "typeorm";
import { User } from "../entity/User";
import { createRepository } from "../utils/connection";
import { createSalt, generatorPassword } from "../utils";

class UserService {
  userRepository: Repository<typeof User>;
  constructor() {
    this.userRepository = createRepository(User);
  }

  getUsers() {
    return this.userRepository.findAndCount();
  }

  getUserById(id: number) {
    return this.userRepository.findOne(id);
  }

  createUser(userModal: User) {
    const salt = createSalt()
    userModal.salt = salt
    userModal.password = generatorPassword(userModal.password, salt)
    // @ts-ignore
    return this.userRepository.save(userModal)
  }

  updateUser(userModal: User): Promise<UpdateResult> {
    // @ts-ignore
    return this.userRepository.update(userModal.id, { username: userModal.username })
  }

}

export default UserService;
