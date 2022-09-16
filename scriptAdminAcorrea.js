//CRUD - Create, Read, Update, Delete

//Global variables

let row = null;

const arrayUsuarios = [];

const crearUsuarios = (readData) => {
  let usr = {
    codigo: readData[0],
    name: readData[1],
    categ: readData[2],
    desc: readData[3],
    enlace:readData[4],
    caratula: readData[5],
    publicado: readData[6],
    destacado: readData[7]
    
  };

  arrayUsuarios.push(usr);

  console.log(arrayUsuarios, "<--arrayUsuarios --()")

  return usr;
};



function Submit(){
    const dataEntered = retrieveData(); 
    
    console.log(dataEntered, "<------Submit()");
     
    const readData = readingDataFromLocalStorage(dataEntered);
   
    //console.log(readData)
    if (dataEntered == false){
        msg.innerHTML = "Por favor, complete los campos!";
         
    }
    else{
         
        if(row==null){
             
            console.log(readData, "readData row==null")
            insert(readData);
                         
            crearUsuarios(readData);
              
              
            msg.innerHTML = "Registro guardado!";
        }
        else{
            
            update();
            msg.innerHTML = "Registro actualizado!";
        }
    }
    document.getElementById("formAdmin").reset();

     
    guardarDBacorrea();
    
}

//CREATE
//Retrieving data from Form
function retrieveData(){
    let unixIndex = Date.now();
    /*Para asegurar la unicidad en la base de datos, verifico que ese ID no exista (no debería
      existir a menos que exista más de un admin insertando datos en el mismo segundo)
      */
    const codigo = unixIndex; // document.getElementById("codigo").value;
    const name1 = document.getElementById("name").value;
    const categ = document.getElementById("categ").value;
    const desc = document.getElementById("desc").value;
    const enlace = document.getElementById("enlace").value;
    const caratula = document.getElementById("caratula").value;
    const publicado = "false";
    const destacado = "false";
    

    const arr = [codigo, name1, categ, desc, enlace, caratula, publicado, destacado];
    if (arr.includes("")){
        return false
    }
    else{
        return arr;
    }
    
}

//Data in LocalStorage
function readingDataFromLocalStorage(dataEntered){
    //Storing data in local storage
    const i = localStorage.setItem("Codigo", dataEntered[0])
    const n = localStorage.setItem("Name", dataEntered[1])
    const j = localStorage.setItem("Categ", dataEntered[2])
    const e = localStorage.setItem("Descripcion", dataEntered[3])
    const en = localStorage.setItem("Enlace", dataEntered[4])
    const ca = localStorage.setItem("Caratula", dataEntered[5])
    const p = localStorage.setItem("Publicado", dataEntered[6])
    const d = localStorage.setItem("Destacado", dataEntered[7])
    

    //Getting values from Local to Table
    const i1 = localStorage.getItem("Codigo", i);
    const n1 = localStorage.getItem("Name", n);
    const j1 = localStorage.getItem("Categ", j);
    const e1 = localStorage.getItem("Descripcion", e);
    const en1 = localStorage.getItem("Enlace", en);
    const ca1 = localStorage.getItem("Caratula", ca);
    const p1 = localStorage.getItem("Publicado", p);
    const d1 = localStorage.getItem("Destacado", d);
    

    const arr = [i1, n1, j1, e1, en1, ca1, p1, d1];
    
    return arr;
}

//INSERT
function insert(readData){
    let row = table.insertRow();

    row.insertCell(0).innerHTML = readData[0];
    row.insertCell(1).innerHTML = readData[1];
    row.insertCell(2).innerHTML = readData[2];
    row.insertCell(3).innerHTML = readData[3];
    row.insertCell(4).innerHTML = readData[4];
    row.insertCell(5).innerHTML = readData[5]; /*Carátula*/

    let newcell = row.insertCell(6);
    newcell.innerHTML =`<input type="checkbox" id="publicado" name="publicado" value="false" onclick = publicar(this)></input>`; 
    newcell.className = "text-center";

    /*row.insertCell(6).innerHTML =`<input type="checkbox" id="publicado" name="publicado" value="false" onclick = publicar(this)></input>`;*/ 
    
    row.insertCell(7).innerHTML =`<button class="btn" onclick = edit(this,1)><i class="fa fa-pencil"></i></button> <button class="btn" onclick = remove(this)><i class="fa fa-trash"></i></button> <button id="destacado" name="destacado" value="false" class="btn" onclick = destacar(this)><i class="fa fa-star"></i></button>`;
    
    
}                                                                             

//EDIT
function edit(td, editar){
    row = td.parentElement.parentElement; 
    document.getElementById("codigo").value = row.cells[0].innerHTML;
    document.getElementById("name").value = row.cells[1].innerHTML;
    document.getElementById("categ").value = row.cells[2].innerHTML;
    document.getElementById("desc").value = row.cells[3].innerHTML;
    document.getElementById("enlace").value = row.cells[4].innerHTML;    
    document.getElementById("caratula").value = row.cells[5].innerHTML; 
    //console.log(document.getElementById("name").value, "<---EDIT")

    if (editar==1){
      document.getElementById("btn_agregar").click();
    }  
   
}


//UPDATE
function update(){

    row.cells[0].innerHTML = document.getElementById("codigo").value;
    row.cells[1].innerHTML = document.getElementById("name").value;
    row.cells[2].innerHTML = document.getElementById("categ").value;
    row.cells[3].innerHTML = document.getElementById("desc").value;
    row.cells[4].innerHTML = document.getElementById("enlace").value;
    row.cells[5].innerHTML = document.getElementById("caratula").value;
    row = null;
   
    //console.log(document.getElementById("name").value, "<--Update")
     
    let arrayIndex = arrayUsuarios.findIndex(  element  => element.codigo === document.getElementById("codigo").value);  
     
    if(arrayIndex != -1)
   {
      arrayUsuarios[arrayIndex].name=document.getElementById("name").value;
      arrayUsuarios[arrayIndex].categ=document.getElementById("categ").value;
      arrayUsuarios[arrayIndex].desc=document.getElementById("desc").value;
      arrayUsuarios[arrayIndex].enlace=document.getElementById("enlace").value;       
      arrayUsuarios[arrayIndex].caratula=document.getElementById("caratula").value;
   }   
   else{
    Submit();
  }

}

//DELETE
function remove(td){
    edit(td, 0);

    row = td.parentElement.parentElement;
   
    // let ans = confirm("¿Está seguro que desea eliminar este registro?");
    const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
          confirmButton: 'btn btn-success',
          cancelButton: 'btn btn-danger'
        },
        buttonsStyling: false
      })
      
      swalWithBootstrapButtons.fire({
        title: '¿Está seguro que desea eliminar el registro con código ' + document.getElementById("codigo").value + ' - Título: '+ document.getElementById("name").value  +'?',
        text: "¡Esta acción no podrá revertirse!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Sí, eliminar!',
        cancelButtonText: 'No, cancelar!',
        reverseButtons: true
      }).then((result) => {
        if (result.isConfirmed) {
          /* swalWithBootstrapButtons.fire(
            '¡Registro eliminado!'          
            
          ) */
        
          //console.log(document.getElementById("codigo").value, "<-Código borrar");
          let arrayIndex = arrayUsuarios.findIndex(  element  => element.codigo === document.getElementById("codigo").value);
          //console.log(arrayIndex, "arrayIndex")
          //console.log(arrayUsuarios, "<--antes slice")
          arrayUsuarios.splice(arrayIndex, 1);   
          //console.log(arrayUsuarios, "<--después slice")
  
          guardarDBacorrea();
  
          document.getElementById("table").deleteRow(row.rowIndex);
        
        
        
        } else if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        ) {
          /* swalWithBootstrapButtons.fire(
            'No se eliminó el registro.'             
          ) */
        }
      })

    document.getElementById("formAdmin").reset();
}


function publicar(td){
    edit(td, 0);

    row = td.parentElement.parentElement;    

   //console.log(document.getElementById("codigo").value, "<-Código Publicar");

   let arrayIndex = arrayUsuarios.findIndex(  element  => element.codigo === document.getElementById("codigo").value);
   //console.log(arrayIndex, "arrayIndex")
   //console.log(arrayUsuarios, "<--antes update publicar")   
   if (arrayUsuarios[arrayIndex].publicado === "false")
   {
        arrayUsuarios[arrayIndex].publicado="true";
    }
    else{
        arrayUsuarios[arrayIndex].publicado="false";
    }
    //console.log(arrayUsuarios, "<--después update publicar")

   guardarDBacorrea();     

   document.getElementById("formAdmin").reset();
   
}

function destacar(td){
  edit(td, 0);

   row = td.parentElement.parentElement;    

   //console.log(document.getElementById("codigo").value, "<-Código Destacar");

   let arrayIndex = arrayUsuarios.findIndex(  element  => element.codigo === document.getElementById("codigo").value);
   //console.log(arrayIndex, "arrayIndex")
   //console.log(arrayUsuarios, "<--antes update destacar")   
   

   //console.log(arrayUsuarios[arrayIndex].destacado, "<<<<<<<<arrayUsuarios[arrayIndex].destacado")
   if (arrayUsuarios[arrayIndex].destacado === "false")
   {
        arrayUsuarios[arrayIndex].destacado="true";
        row.cells[7].innerHTML = `<button class="btn" onclick = edit(this,1)><i class="fa fa-pencil"></i></button> <button class="btn" onclick = remove(this)><i class="fa fa-trash"></i></button> <button id="destacado" name="destacado" value='true'  class="btn btn-warning" onclick = destacar(this)><i class="fa fa-star"></i></button>`; 
        //console.log("<--Es false")   
    }
    else{
        arrayUsuarios[arrayIndex].destacado="false";
        row.cells[7].innerHTML =`<button class="btn" onclick = edit(this,1)><i class="fa fa-pencil"></i></button> <button class="btn" onclick = remove(this)><i class="fa fa-trash"></i></button> <button id="destacado" name="destacado" value='false' class="btn" onclick = destacar(this)><i class="fa fa-star"></i></button>`; 
        //console.log("<--Es true")   
    }
    //console.log(arrayUsuarios, "<--después update destacar")

    guardarDBacorrea();   

   
    document.getElementById("formAdmin").reset();
    
      
}


 

const guardarDBacorrea = () => {
    localStorage.setItem("usr_key", JSON.stringify(arrayUsuarios));
    console.log(JSON.stringify(arrayUsuarios), "<<- guardarDBacorrea()")
    console.log(arrayUsuarios, "arrayUsuarios a guardar en el localStorage")
    //mostrarDB();
    //location.reload();
  };


const mostrarDB = () => {
    let arrayUsuariosAux = JSON.parse(localStorage.getItem("usr_key"));
  
    if (arrayUsuariosAux === null) {
        arrayUsuariosAux = [];
    } else {

        let row
        let value_cheked
        let value_destacado

        arrayUsuariosAux.forEach((element) => {          
            row = table.insertRow();
            row.insertCell(0).innerHTML = element.codigo;
            row.insertCell(1).innerHTML = element.name;
            row.insertCell(2).innerHTML = element.categ;
            row.insertCell(3).innerHTML = element.desc;
            row.insertCell(4).innerHTML = element.enlace;
            row.insertCell(5).innerHTML = element.caratula;
            if (element.publicado=="true") {
                value_cheked = "value='true' checked"
            }
            else{
                value_cheked = "value='false'"
            }

            let newcell = row.insertCell(6);
            newcell.innerHTML =`<input type="checkbox" id="publicado" name="publicado"  ${value_cheked} onclick = publicar(this)></input>`;
            newcell.className = "text-center";


            /*row.insertCell(6).innerHTML =`<input type="checkbox" id="publicado" name="publicado"  ${value_cheked} onclick = publicar(this)></input>`;*/  
            
            if (element.destacado=="true") {
                value_destacado = "value='true' class='btn btn-warning'"
            }
            else{
                value_destacado = "value='false' class='btn'"
            }
            
            row.insertCell(7).innerHTML =`<button class="btn" onclick = edit(this,1)><i class="fa fa-pencil"></i></button> <button class="btn" onclick = remove(this)><i class="fa fa-trash"></i></button> <button id="destacado" name="destacado" ${value_destacado} onclick = destacar(this)><i class="fa fa-star"></i></button>`;    
            
            arrayUsuarios.push(element);

            //console.log(element, "<-- Inserto estos elementos")

      });
      //console.log(element, "<-- Inserto estos elementos")
    }
    
  };
  
  function mostrar(){
    var archivo = document.getElementById("file").files[0];
    var ruta = document.getElementById("file").value;
    //console.log(ruta, "ruta");    
   

    const reader = new FileReader();
    if (file) {
      reader.readAsDataURL(archivo );
      reader.onloadend = function () {
        /* document.getElementById("img").src = reader.result; */
        //console.log(archivo.name, "<nameeeeee")
        document.getElementById("caratula").value = "./imagenes/imgAcorrea/" + archivo.name;
      }
    }  
  }
  
  document.addEventListener("DOMContentLoaded", mostrarDB); 
  
 

