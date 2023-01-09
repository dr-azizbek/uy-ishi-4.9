//theme
function myFunction() {
    let element = document.body;
    element.classList.toggle("dark-mode");
 }

let selectedRow = null;
function onForSubmit(e) {
    event.preventDefault();
    let formData=readFormData()
    if(selectedRow==null){
        inserNewRecord(formData);
}else{
    updateRecord(formData)
}
resetForm()
}
//retrive the data
function readFormData() {
    let formData = {};
    formData["id"] = document.getElementById("id").value;
    formData["userId"] = document.getElementById("userId").value;
    formData["title"] = document.getElementById("title").value;
    return formData;

}


//Insert the data
function inserNewRecord(data) {
    let table = document.getElementById("storeList").getElementsByTagName("tbody")[0];
    let newRow = table.insertRow(table.length);

    let cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.id;

    let cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.userId;

    let cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.title;


    let cell5 = newRow.insertCell(3);
    cell5.innerHTML = `<button onClick="onEdit(this)">Edit</button> <button onClick="onDelet(this)">Delete</button>`;



}

//edit
function onEdit(td){
    selectedRow = td.parentElement.parentElement;
    document.getElementById('id').value=selectedRow.cells[0].innerHTML;
    document.getElementById('userId').value=selectedRow.cells[1].innerHTML;
    document.getElementById('title').value=selectedRow.cells[2].innerHTML;    
}

function updateRecord(formData){
    selectedRow.cells[0].innerHTML=formData.id;
    selectedRow.cells[1].innerHTML=formData.userId;
    selectedRow.cells[2].innerHTML=formData.title;    
}

function onDelet(td){
    if(confirm("Sis rekordni o'chirishni hoxlaysizmi")){
        row=td.parentElement.parentElement;
        document.getElementById("storeList").deleteRow(row.rowIndex);   
    }
    resetForm()
}

function resetForm(){
    document.getElementById("id").value="";
        document.getElementById("userId").value="";
        document.getElementById("title").value="";
}