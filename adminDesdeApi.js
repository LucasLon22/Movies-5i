function generoPelicula(id_genero){
    /* console.log(id_genero, "<<<--generoPelicula") */ /*Es un array*/
    /* let posicionComa = id_genero.indexOf(","); */
    /* if (posicionComa>0){ */
        /* console.log(id_genero, "<<<--id_genero antes") */
        let id_generoPrimero = Number(id_genero[0]) /*Tomo el de la primera posición*/
        /* console.log(id_generoPrimero, "<<<--id_genero DESPUES") */
    /* } */
    
    
    switch (id_generoPrimero) {
        case 28:
            return "Acción"
            break;
        case 12:
            return "Aventura"
            break;          
        case 16:
            return "Animación"
            break;
        case 35:
            return "Comedia"
            break; 
        case 80:
            return "Crimen"
            break; 
        case 99:
            return "Documental"
            break;        
        case 18:
            return "Drama"
            break;
        case 10751:
            return "Familia"
            break;    
        case 14:
            return "Fantasía"
            break;     
        case 36:
            return "Historia"
            break;        
        case 27:
            return "Terror"
            break;
        case 10402:
            return "Música"
            break; 
        case 9648:
            return "Misterio"
            break;            
        case 10749:
            return "Romance"
            break;        
        case 878:
            return "Ciencia ficción"
           break;
        case 10770:
            return "Película de TV"
            break; 
        case 53:
            return "Suspenso"
            break;           
        case 10752:
            return "Bélica"
            break;                
        case 37:
            return "Western"
            break;

        default:
           return "Thriller"
           break; 
      }
    
}
  

const cargarPeliculas2 = async (page) => {
    try{ 
         
         const respuesta = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=a76bbfd2e9fe7f5a1871e2a960138d6f&language=es-AR&page=${page}`)
         const datos = await respuesta.json(); 
         /* console.log(datos, "<------datossss") */
        
         let arrayUsuariosAux = JSON.parse(localStorage.getItem("usr_key"));
         if (arrayUsuariosAux === null) {
            arrayUsuariosAux = [];
        }
         /* console.log(arrayUsuariosAux, "<<<<<<cargarPeliculas2"); */

         let generoString
         let descripcionTruncada
         let peliculasDestacadas = ``;
         let id=0
         let bandera
         datos.results.forEach(pelicula => {
                generoString = generoPelicula(pelicula.genre_ids) /*Mando uno o más genéros en un array y sólo devuelvo la descripción del primer género*/
                descripcionTruncada = pelicula.overview.substring(0, 130) + "..."
                
                bandera = false; /*No fe cargada aún la película desde la API*/
                /* console.log(bandera, "bandera antes") */
                
                arrayUsuariosAux.forEach(element => {
                    if(element.name == pelicula.title){
                        /* console.log(element.name, "--element.name")
                        console.log(pelicula.title, "---pelicula.title") */
                        bandera = true /*fue cargada la pelicula*/
                    }
                });

                /* console.log(bandera, "bandera Después") */

                if (bandera == false){
                    peliculasDestacadas += ` 
                    <div class="col-sm-12 col-md-6 col-lg-3 mb-4">
                        <div class="card mx-2 mb-1 box elementosCard${id}">
                            <img src="https://image.tmdb.org/t/p/w500/${pelicula.poster_path}" class="card-img-top" alt="Pelicula">
                            <div class="card-body box">
                                <div class="mb-4">
                                    <h4 class="card-title text-light">${pelicula.title}</h4>
                                    <h5 class="card-title text-light">${generoString}</h5>
                                    <p class="card-text text-light">${descripcionTruncada}</p>
                                </div>
                                <div d-inline-flex p-2>
                                    <a href="#" class="btn btn-outline-info link-light">Reproducir <i class="bi bi-play-fill"></i></a> 
                                    <button class="btn btn-outline-info link-light" onclick=agregoProcucto('elementosCard${id}')>Agregar <i class="bi bi-plus-circle"></i></button>            
                                </div>               
                            </div>
                        </div> 
                    </div>                
                    ` 
                    id=id+1
                }
           });
         if (peliculasDestacadas != ``){                
            document.getElementById("contenedor3"). innerHTML = peliculasDestacadas
            /* console.log(datos);  */           
         }   
 
     } catch(error){
         console.log(error)
     }
 
 }
/*  cargarPeliculas2(); */


 function agregoProcucto(elementosCard){
    /* console.log ( elementosCard, "<<<---hiciste click en el elemento de clase") */
    let cardTitulo = document.querySelector(`.${elementosCard} h4`).textContent;
   /*  console.log(cardTitulo); */
    let cardGenero = document.querySelector(`.${elementosCard} h5`).textContent;
    /* console.log(cardGenero); */
    let cardDescripcion = document.querySelector(`.${elementosCard} p`).textContent;
    /* console.log(cardDescripcion); */
 

    let unixIndex = Date.now(); /*Para asegurar la unicidad en la base de datos, verifico que ese ID no exista (no debería existir a menos que exista más de un admin insertando datos en el mismo segundo)*/
            
    document.getElementById("codigo").value = unixIndex;
    document.getElementById("name").value = cardTitulo;
    document.getElementById("categ").value = cardGenero;
    document.getElementById("desc").value = cardDescripcion;
    document.getElementById("enlace").value = "";    
    document.getElementById("caratula").value = ""; 
    
   /*  console.log(document.getElementById("codigo").value, "<---AAgregoProcucto") */
   
    document.getElementById("btn_agregar").click();      

}
    

 