import chalk = require("chalk");
import Middleware from "../middlewares/Middleware";

export default class Server {

    private middleware: Middleware;

    public setMiddleware(middleware: Middleware): void {

        this.middleware = middleware;

    }

    logIn(email: string, password: string): boolean {

        if (this.middleware.check(email, password)) {

            console.log(chalk.green("Usuário autorizado com sucesso!"));
            return true;

        }

        return false;

    }

}