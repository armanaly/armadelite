export class User {
    constructor(public email: string,
                public password: string,
                public app: string,
                public firstname?: string,
                public name?: string) {}
}
