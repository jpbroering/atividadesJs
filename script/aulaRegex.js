function trocaT(){
    let mensagem = document.getElementById("inpChangeT").value
    let cMensagem = mensagem.replace(/["t"]/ig, "7")
    document.getElementById("textChange").innerHTML = cMensagem+""
}
function procuraP(){
    let mensagem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam non felis sit amet lectus fringilla ullamcorper. Pellentesque ornare justo id egestas rutrum. Nam vestibulum luctus ligula, eu varius mauris. Etiam orci ex, suscipit quis venenatis gravida, mollis et quam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Quisque ultricies nisl vitae porttitor blandit. Fusce ac lectus ullamcorper, eleifend quam vel, vestibulum ante. Nullam at rhoncus risus. Pellentesque eget metus enim. Etiam malesuada euismod libero, non lacinia lacus placerat nec. Suspendisse vestibulum eu metus eget blandit. Nulla tristique nisl at felis blandit, in condimentum ante fringilla. Proin nec porttitor orci."
    let pChave = document.getElementById("inpSearchW").value
    let i = 0
    let palavras = mensagem.split(/[\s]/ig)
    console.log(palavras)
    palavras.forEach(p =>{
        if(p == pChave){
            i++
        }
    })
    document.getElementById("textSearch").innerHTML = `Aparece ${i} vezes a palavra ${pChave}`
}
function permite(){
    let input = document.getElementById("permiteL").value
    let regexU = RegExp(/[A-Z]/g)
    let regexE = RegExp(/^(?=.*[0-9\W]).+$/)
    if(regexE.test(input) == true || regexU.test(input) == true){
        document.getElementById("textAllow").innerHTML = "É proibido caractere especial, número e letra maiuscula"
    }
    else{
        document.getElementById("textAllow").innerHTML = input
    }
}