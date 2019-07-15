    function rand([ min = 0, max = 1000]){
        if(min > max) [min, max] = [max, min]
        const valor = Math.random() * (max - min) + min
        return Math.floor(valor)
    }

    console.log(rand([50, 40]))
    console.log(rand([992]))
    console.log(rand([, 10]))
    console.log(rand([]))//passando array vazio, ele assume os valores padrão, 0 e 100
    //console.log(rand()) -> sem colchetes, não é array, retorna erro. 
