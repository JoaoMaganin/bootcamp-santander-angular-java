// variáveis -> Primitivos
let ligado: boolean = false
let nome: string = "João";
let idade: number = 30;
let altura: number = 1.9;

// Tipos especiais
let nulo: null = null;
let indefinido: undefined = undefined;

// Tipos abrangentes
let retorno: void;
let retornoView: any = "HAHAHAHA";

// Objeto tipado - sem previsibilidade
let pessoa: object = {
    name: "Felipe",
    cidade: "sp",
    idade: 30,
}

type ProdutoLoja = {
    nome: string,
    preco: number;
    unidades: number;
}

let meuProduto: ProdutoLoja = {
    nome: "Air Max",
    preco: 499.99,
    unidades: 10,
}

// Arrays

let dados: string[] = ["felipe", "ana", "adriana"];
let dados2: Array<string> = ["felipe", "ana", "adriana"];

let infos: (string | number)[] = ['felipe', 30, "HAHAHAHA"];


// Tuplas -> temos que respeitar a ordem das informações

let boleto:[string, number, number] = ["Agua conta", 199.9, 34325345]; 


// Arrays métodos -> O mesmo do JS normal
// dados.pop()


// Datas
let aniversario: Date = new Date("2002-03-30 05:00");
console.log(aniversario.toString());


