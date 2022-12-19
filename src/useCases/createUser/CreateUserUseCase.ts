import { User } from '../../entities/User';
import { IMailProvider } from './../../providers/IMailProvider';
import { IUsersRepository } from './../../repositories/IUsersRepository';
import { ICreateUserRequestDTO } from './CreateUserDTO';

/**
 * Principio da responsabilidade única [S]
 * - Não é responsabilidade do UseCase saber como os dados serão persistidos,validadados, enviados ou recebidos
 */
export class CreateUserUseCase {
  /**
   * Principio da inversão de dependência [D]
   * - O UseCase não deve ser responsável por criar a instância do repositório
   * - O UseCase deve receber a instância do repositório por parâmetro
   */
  constructor(
    private usersRepository: IUsersRepository,
    private mailProvider: IMailProvider,
  ) {}

  async execute(data: ICreateUserRequestDTO) {
    const userAlreadyExists = await this.usersRepository.findByEmail(
      data.email,
    );

    if (userAlreadyExists) {
      throw new Error('User already exists.');
    }

    const user = new User(data);
    await this.usersRepository.save(user);

    await this.mailProvider.sendMail({
      to: {
        name: data.name,
        email: data.email,
      },
      from: {
        name: "Willian 'Catano'😂 Campos",
        email: 'willian.campos@origoenergia.com.br',
      },
      subject: 'Seja bem-vindo à plataforma',
      body: '<p>Você já pode fazer login em nossa plataforma.</p>',
    });
  }
}
