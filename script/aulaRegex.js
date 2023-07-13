function trocaT(){
    let mensagem = "teste de sistema"
    let cMensagem = mensagem.replace(/["t"]/ig, "7")
    console.log(cMensagem)
}
function procuraP(){
    let mensagem = "Este é um texto curto e meu espaço é curto"
    let pChave = "curto"
    let i = 0
    let palavras = mensagem.split(/[\s]/ig)
    palavras.forEach(p =>{
        if(p == pChave){
            i++
        }
    })
    console.log(i)
}
procuraP()