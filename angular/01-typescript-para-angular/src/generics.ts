// generics
function concatArray<T>(...itens: T[]): T[]{ // arrays de um tipo só
    return new Array().concat(...itens);
}

const numArray = concatArray<number[]>([1,5], [3]);  
const stgArray = concatArray<string[]>(["jubileu", "goku"], ["dinossauro"]);

console.log(numArray);
console.log(stgArray);
