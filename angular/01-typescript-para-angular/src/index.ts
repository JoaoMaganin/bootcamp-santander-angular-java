// decorators
// function ExibirNome(target: any) {
//     console.log(target);
// }

// @ExibirNome
// class Funcionario {}

// @ExibirNome
// class Quincas {}


// Class decorator
function apiVersion(version: string) {
    return (target: any) => {
        Object.assign(target.prototype, {__version: version});
    }
}

//@apiVersion("1.10")

// Attribute decorator
function minLength(length: number) {
    return (target: any, key: string) => {
        console.log(target[key]);
    };
}

class Api{
    @minLength(3);
    name: string

    constructor(name: string) {
        this.name = name;
    }
}

const api = new Api("Produtos");
console.log(api.name);
