import { User } from './../../entities/User';
import { IUsersRepository } from './../IUsersRepository';
export class PostgresUsersRepository implements IUsersRepository {
  // Simulação do banco de dados
  private users: User[] = [];
  constructor() {}

  async findByEmail(email: string): Promise<User> {
    const user = this.users.find((user) => user.email === email);
    return user;
  }

  async save(user: User): Promise<void> {
    this.users.push(user);
  }
}
