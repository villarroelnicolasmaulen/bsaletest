//Elimina los elementos de 'demo'
function eliminardom(){
    var element = document.getElementById("demo");
   while (element.firstChild) {
   element.removeChild(element.firstChild);
   }
}
//trae todos los productos desde la api
function traer(){
    eliminardom();
    fetch('https://bsaletestnicolasvillarroel.herokuapp.com/')
    .then(res => res.json())
    .then(data => {
        for(let i = 0; i < data.length; i++) {
            if(!data[i].url_image){
                var img = 'https://blogdigital.es/wp-content/uploads/2015/09/imagen-no-encontrada.jpg';
            }else{
                var img=data[i].url_image;
            }
            var elemento = document.createElement('div');
            elemento.innerHTML=`
            <div class='card' style=' width: 18rem;'>
            <img src='`+img+`' width="100" height="200" class='card-img-top' alt='..'>
            <div class='card-body'>
                <h5 class='card-title'>`+data[i].name+`</h5>
                <table style='width:100%;text-align:center'>
                <td style='width:70%'>
                <p style="float:right" class='form-control card-text'>$ `+data[i].price+`</p>
                </td><td style='width:30%'>
                <button type="button"class="fltr agregarproducto btn btn-secondary btn-circle btn-md" data-bs-toggle="tooltip" data-bs-placement="top" title="Agregar producto"><i class="fas fa-cart-plus"></i></button>
                </td>
                </table>
            </div>
            </div>`
            document.getElementById('demo').append(elemento);
        }
    })
}

//trae los productos por su nombre
function traernombre(nom){
    url='https://bsaletestnicolasvillarroel.herokuapp.com/name='+nom;
    fetch(url)
    .then(res => res.json())
    .then(data => {
        for(let i = 0; i < data.length; i++) {
            if(!data[i].url_image){
                var img = 'https://blogdigital.es/wp-content/uploads/2015/09/imagen-no-encontrada.jpg';
            }else{
                var img=data[i].url_image;
            }
            var elemento = document.createElement('div');
            elemento.innerHTML=`
            <div class='card' style=' width: 18rem;'>
            <img src='`+img+`' width="100" height="200" class='card-img-top' alt='..'>
            <div class='card-body'>
                <h5 class='card-title'>`+data[i].name+`</h5>
                <table style='width:100%;text-align:center'>
                <td style='width:70%'>
                <p style="float:right" class='form-control card-text'>$ `+data[i].price+`</p>
                </td><td style='width:30%'>
                <button type="button"class="fltr agregarproducto btn btn-secondary btn-circle btn-md" data-bs-toggle="tooltip" data-bs-placement="top" title="Agregar producto"><i class="fas fa-cart-plus"></i></button>
                </td>
                </table>
            </div>
            </div>`
            document.getElementById('demo').append(elemento);
        }
    })
    .catch(error => console.error(error))
}
//genera el select de categorias
function traerselect(){

    url='https://bsaletestnicolasvillarroel.herokuapp.com/allcategory';
    fetch(url)
    .then(res => res.json())
    .then(data => {
        if(!data.ok){
            console.log('Error');
        }
            for(let i = 0; i < data.length; i++) {
                var elemento = document.createElement('option');
                elemento.innerText=data[i].name;
                elemento.value=data[i].id;
    
                document.getElementById('selectcategory').append(elemento);
            }
    })
    .catch(error => console.error(error))    
}
//trae productos según la selección de categoria
function traercategoria(cat){

    url='https://bsaletestnicolasvillarroel.herokuapp.com/category='+cat;
    fetch(url)
    .then(res => res.json())
    .then(data => {
            for(let i = 0; i < data.length; i++) {
                if(!data[i].url_image){
                    var img = 'https://blogdigital.es/wp-content/uploads/2015/09/imagen-no-encontrada.jpg';
                }else{
                    var img=data[i].url_image;
                }
                var elemento = document.createElement('div');
                elemento.innerHTML=`
                <div class='card' style=' width: 18rem;'>
                <img src='`+img+`' width="100" height="200" class='card-img-top' alt='..'>
                <div class='card-body'>
                    <h5 class='card-title'>`+data[i].name+`</h5>
                    <table style='width:100%;text-align:center'>
                    <td style='width:70%'>
                    <p style="float:right" class='form-control card-text'>$ `+data[i].price+`</p>
                    </td><td style='width:30%'>
                    <button type="button"class="fltr agregarproducto btn btn-secondary btn-circle btn-md" data-bs-toggle="tooltip" data-bs-placement="top" title="Agregar producto"><i class="fas fa-cart-plus"></i></button>
                    </td>
                    </table>
                </div>
                </div>`
                document.getElementById('demo').append(elemento);
            }
        })
    .catch(error => console.error(error))    
}