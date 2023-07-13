const listaT = [
    {
    nome: "joao paulo",
    telefone: "912036482"
    },
    {
    nome: "roberto",
    telefone: "912375696"
    },
    {
    nome: "raul",
    telefone: "947632543"
    },
]
function telefone(){
    let name = document.getElementById("nomeTelefone").value
    for(n in listaT){
        if(listaT[n].nome == name){
            document.getElementById("telefoneText").innerHTML = listaT[n].telefone
        }
    }
}