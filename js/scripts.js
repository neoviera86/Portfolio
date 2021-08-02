function addItem () {
    let getValuePredio = document.getElementById('edifice').value;
    let getTextPredrio = document.getElementById('textEdifice').value;
    const tableList = document.getElementById('tableList');
    let templateTable = `<tr>
                            <td class="idP" name="valueP">${getValuePredio}</td>
                            <td class="idL" name="valueL">${getTextPredrio}</td>
                            <td>
                                <img src="./assets/edit.png" alt="Editar" onclick="editItemTable()" id="editTable">
                                <img src="./assets/trash.png" alt="Excluir" onclick="dellItem(this.parentNode.parentNode.rowIndex)">
                            </td>
                         <tr>`;

    if(getTextPredrio == 0){
        removeAndAddModal();
    }
    else( 
        tableList.innerHTML += templateTable
    );
    saveSessionStorage();
};

function dellItem(e) {
    document.getElementById('tableList').deleteRow(e);
    saveSessionStorage();
};


function removeAndAddModal() {
    let modal = document.getElementById('modalTable');
    modal.classList.toggle('active');  
};

function removeAndAddModal2() {
    let modal = document.getElementById('modalEditTable');
    modal.classList.toggle('active');  
};

function editItemTable() {
    let modal = document.getElementById('modalEditTable');
    if(modal.className.indexOf('active') === -1){
        modal.classList.toggle('active')  
        return true
    };
    
    if(modal != true){

        function renameItem() {
            let getValuePredio = document.getElementById('edifice2').value
            let getTextPredrio = document.getElementById('textEdificeEdit').value
            if(getTextPredrio == 0){
                let areaNone = document.getElementById('areaNone')
                areaNone.innerText = 'Adicone um local'
            }
            else { 
                areaNone.innerText = null
                let column1 = document.getElementsByClassName('idP').namedItem('valueP')
                let column2 = document.getElementsByClassName('idL').namedItem('valueL')
                column1.innerHTML = `${getValuePredio}`
                column2.innerHTML = `${getTextPredrio}`
                /* logica: 
                    1- Para pegar a celular correta, a ideia era  tentar pegar em qual index houve esse click, e apatir disso sinalizar qual as colunas iriam ser alteradas pelo index também.
                    OBS: A edição só vai funcionar na 1 celular da tabela, pois não consegui implementar a logica citada acima.
                */
            }
        }
    }
    renameItem()
}

function saveSessionStorage() {
    const getTable = document.getElementById('tableList');
    sessionStorage.setItem('saveTable', getTable)
};
saveSessionStorage();