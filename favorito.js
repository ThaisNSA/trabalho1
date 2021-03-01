let favorito, index;


function inserir(nome, temp, ep, status) {
    favorito = document.getElementById("tabela");    
    let qtdlLinhas = favorito.rows.length;
    let linha = favorito.insertRow(qtdlLinhas);
    let linhaParam;
    
    let cellnome = linha.insertCell(0);
    let celltemp = linha.insertCell(1);
    let cellep = linha.insertCell(2);
    let cellstatus = linha.insertCell(3);
    
    cellnome.innerHTML = nome;
    celltemp.innerHTML = temp;
    cellep.innerHTML = ep;
    cellstatus.innerHTML = status;
    
    preencheCamposForm();

}

function editar(nome, temp, ep, status) {

    favorito.rows[index].cells[0].innerHTML = nome;
    favorito.rows[index].cells[1].innerHTML = temp;
    favorito.rows[index].cells[2].innerHTML = ep;
    favorito.rows[index].cells[3].innerHTML = status;
}

function preencheCamposForm() {

    for(let i = 0; i < favorito.rows.length; i++) 
    {
        favorito.rows[i].onclick = function() 
        {
            index = this.rowIndex;
            
            document.getElementById("nome").value = favorito.rows[index].cells[0].innerText;
            document.getElementById("temp").value = favorito.rows[index].cells[1].innerText;
            document.getElementById("ep").value = favorito.rows[index].cells[2].innerText;
            document.getElementById("status").value = favorito.rows[index].cells[3].innerText;

            
        }
    }
}

function excluir() {

    for(let i = 1; i < favorito.rows.length; i++) 
    {
        if (index == i) {
            favorito.deleteRow(index);
            return 0;
        }
    }
}

