// Crie uma função que recebe um número (de 1 a 12) e retorne o mês correspondente como uma string. Por
// exemplo, se a entrada for 2, a função deverá retornar "fevereiro", pois este é 0 20 mês.


const nomeMes = numMes => {
    switch (numMes) {
        case 1:
            console.log("Janeiro");
            break;
    
        case 2:
            console.log("Fevereiro");
            break;
    
        case 3:
            console.log("Março");
            break;
    
        case 4:
            console.log("Abril");
            break;
    
        case 5:
            console.log("Maio");
            break;
    
        case 6:
            console.log("Junho");
            break;
    
        case 7:
            console.log("Julho");
            break;
    
        case 8:
            console.log("Agosto");
            break;
    
        case 9:
            console.log("Setembro");
            break;
    
        case 10:
            console.log("Outubro");
            break;
    
        case 11:
            console.log("Novembro");
            break;
    
        case 12:
            console.log("Dezembro");
            break;
       
        default:
            console.log(`Mês ${numMes} não encontrado! (1 a 12)`);;
    }
}

nomeMes(0)