// Exercicio 1

let raceNumber = Math.floor(Math.random() * 1000);

// Exercicio 2

let registroCorredorCedo = true;

// Exercicio 3

let idadeCorredor = 22;

// Exercicio 4/5/6/7/8/9

function fluxoControle (registroCorredorCedo, idadeCorredor){
    if(registroCorredorCedo == true && idadeCorredor > 18){
        console.log(`Você correra as 9h30 e seu numero é ${raceNumber += 1000}`)
    }else if(registroCorredorCedo == false && idadeCorredor > 18){
        console.log(`Você correra as 11h00 e seu numero é ${raceNumber += 1000}`)
    }else if (registroCorredorCedo = true && idadeCorredor < 18){
        console.log(`Você correra as 12h30 e seu numero é ${raceNumber += 1000}`)
    }else{
        console.log('Vá diretamente para a mesa de registro')
    };
};
const res = fluxoControle(registroCorredorCedo, idadeCorredor );
