const { resolveSoa } = require('dns');
const express = require('express')
const app = express()
const PORT = 3500;


//
app.set('view engine', 'ejs')
app.get('', (req, res) =>{  /* req "Requesicao" e "Resposta" */
    res.render('layout.ejs') /* res "Resposta" que estamos dando a essa requesição  */
})
app.get('/home', (req, res) => {   
    res.render('home.ejs') 
})
app.get('/post', (req, res)=>{
    res.render('posts/post.ejs')
})
app.get('/post2', (req, res)=>{
    res.render('posts/post_dois.ejs')
})
app.get('/about', (req,res)=>{
    res.render('about.ejs')
})

app.get('/nome',(req,res)=>{
    res.render('sobre')
})


//


app.listen(PORT, () => {
    console.log(`Rodando na porta ${PORT}`)
})

/* 
A funcao set() e usada para atribuir o nome da configuracao a value, voce pode armazenar o que bem quiser, mas certos nomes sao usados para configuarar o sevidor
Set para definir o valor de um atibuto. 

Utilizamos Get para obter o valor de alguns atributos. 


Const tem o mesmo comportamento que de uma variavel, a diferencia e que voce nao pode reatribuir um valor a ela. Porem ela pode ser modificada se for do tipo array, object...

Require le um arquivo JS, executa o arquivo e logo em seguida o objeto export
*/