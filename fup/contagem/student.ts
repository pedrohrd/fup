function count(vet: number[], value: number): number {
    let contador = 0;
    for (let elem of vet){
        if (elem == value){
            contador += 1
        }
    }
    return contador;
}

function sum(vet: number[]): number {
    let total = 0;
    for (let elem of vet){
        total += Math.abs(elem)
    }
    return total;
}

function average(vet: number[]): number {
    return sum(vet) / vet.length;
}

function more_men(vet: number[]): string {
    let cont_men: number = 0;
    let cont_women: number = 0;
    for (let elem of vet){
        if (elem > 0){
            cont_men += 1;
        } else {
            cont_women += 1;
        }
    }

    if(cont_men > cont_women){
        return "men"
    }
    if (cont_women > cont_men){
        return "women";
    }
    return "draw"
}

function half_compare(vet: number[]): string {
    let half: number = vet.length / 2;
    let first: number[] = []
    let second: number[] = []
    for (let i = 0; i < half; i++){
        first.push(vet[i]);
    }
    for (let i = half; i < vet.length; i++){
        second.push(vet[i]);
    }

    let average_first: number = average(first)
    let average_second: number = average(second)

    if(average_first > average_second){
        return "first"
    }
    if (average_second > average_first){
        return "second";
    }
    return "draw"

}

function sex_battle(vet: number[]): string {
    let men: number[] = [];
    let women: number[] = [];
    for (let elem of vet){
        if (elem > 0){
            men.push(elem)
        } else {
            women.push(elem)
        }
    }
    let average_men: number = average(men)
    let average_women: number = average(women)

    if(average_men > average_women){
        return "men"
    }
    if (average_women > average_men){
        return "women";
    }
    return "draw"
}

if (require.main === module) {
}

export { count, sum, average, more_men, half_compare, sex_battle };