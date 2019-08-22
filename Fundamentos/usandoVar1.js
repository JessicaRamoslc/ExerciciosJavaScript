//4 blocos de código: a variável pode ser acessada em qualquer bloco, pq não está no escopo de uma função: 
{
    {
        {
            { 
                var sera = "será??" 
            }
        }
    }
}
console.log(sera)

//evite utilizar uma variável global, coloque dentro de funções! então estará no escopo da função