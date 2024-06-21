import { myDataSource } from "./data-source";
import { User } from "./User"

const userRepository = myDataSource.getRepository(User);

async function getUsers() {
  try {
    const users = await userRepository.find();

    return users;
  } catch (error) {
    return null;
  }
}

async function addNewUser(user: {name: string, age: number}) {
  try {
    const newUser = userRepository.create(user);
    await userRepository.save(newUser);

    return newUser;
  } catch(error) {
    return null;
  }
}

async function deleteUserById(id: number) {
  const user = await userRepository.delete(id);

  return user;
}

async function getUserById(id: number) {
  const user = await userRepository.findOneBy({ id });

  return user;
}

async function updateUserById(id: number, updatedData: { name: string, age: number }) {
  const user = await userRepository.findOneBy({ id });
  if (!user) {
    return null;
  }
  userRepository.merge(user, updatedData);
  await userRepository.save(user);

  return user;
}

export {getUsers, addNewUser, deleteUserById, getUserById, updateUserById};
