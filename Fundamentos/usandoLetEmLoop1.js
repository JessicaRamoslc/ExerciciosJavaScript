//usando let a variável i só estará visivel dentro deste bloco
for(let i = 0; i < 10; i++)
{
    console.log(i)
}
//aqui deu erro: i is not defined
console.log('i =', i)