const { resolveSoa } = require('dns');
const express = require('express')
const app = express()
const PORT = 3000;


//
app.set('view engine', 'ejs')
app.get('', (req, res) =>{
    res.render('layout.ejs')
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


//


app.listen(PORT, () => {
    console.log(`Rodando na porta ${PORT}`)
})