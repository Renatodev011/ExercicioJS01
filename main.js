const form = document.getElementById('Cadastro');
let linhas = '';
form.addEventListener('submit', function(e)  {
    e.preventDefault();

    const inputNomesnaLista = document.getElementById('nome-lista');
    const inputTelefonenaLista = document.getElementById('telefone-lista');

    let linha = '<tr>';
    linha += `<td>${inputNomesnaLista.value}</td>`;
    linha += `<td>${inputTelefonenaLista.value}</td>`;  
    linha += `<td>${inputTelefonenaLista.value >= 10000000 ? 'Registrado' : 'Erro'}</td>`;
    linha += `</tr>`;

    linhas += linha;

    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;

    inputNomesnaLista.value = '';
    inputTelefonenaLista.value = '';
});