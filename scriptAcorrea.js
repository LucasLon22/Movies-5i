const cargarPeliculas = () => {
    try{ 
        //  const respuesta = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=a76bbfd2e9fe7f5a1871e2a960138d6f&language=es-AR')
        //  console.log(respuesta);
        //  const datos = await respuesta.json(); 
         
         let datos = JSON.parse(localStorage.getItem("usr_key"));
 
         let peliculasDestacadas = '<h3 class="text-white">Destacadas</h3>';
 
         datos.forEach(pelicula => {
            if (pelicula.destacado=="true" && pelicula.publicado=="true")
            {
                peliculasDestacadas += ` 
                    <div class="card mx-2 mb-5" style="width: 18rem;">
                    <img src="${pelicula.caratula}" class="card-img-top" alt="Pelicula">
                    <div class="card-body">
                        <h4 class="card-title">${pelicula.name}</h4>
                        <h5 class="card-title">${pelicula.categ}</h5>
                        <p class="card-text">${pelicula.desc}</p>
                        <a href="${pelicula.enlace}" class="btn btn-primary">Reproducir</a>
                    </div>
                    </div>                 
                ` 
            }

         });
         if (peliculasDestacadas != '<h1>Destacadas</h1>'){                
            document.getElementById("contenedor"). innerHTML = peliculasDestacadas
            console.log(datos)
         }         



         let peliculasNovedades = '<h3 class="text-white">Novedades</h3>';
 
         datos.forEach(pelicula => {
            if (pelicula.publicado=="true")
            {
                peliculasNovedades += ` 
                    <div class="card mx-2 mb-5" style="width: 18rem;">
                    <img src="${pelicula.caratula}" class="card-img-top" alt="Pelicula">
                    <div class="card-body">
                        <h4 class="card-title">${pelicula.name}</h4>
                        <h5 class="card-title">${pelicula.categ}</h5>
                        <p class="card-text">${pelicula.desc}</p>
                        <a href="${pelicula.enlace}" class="btn btn-primary">Reproducir</a>
                    </div>
                    </div>                 
                ` 
            }
         });


         if (peliculasNovedades != '<h1>Novedades</h1>'){                
            document.getElementById("contenedor2"). innerHTML = peliculasNovedades
            console.log(datos) 
         }
 
     } catch(error){
         console.log(error)
     } 
 }
 
 cargarPeliculas();


