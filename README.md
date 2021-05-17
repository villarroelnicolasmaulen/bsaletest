# bsaletest
Ejercicio de postulación para bsale.

## Descripción

El ejercicio consiste en simular una tienda desplegando los datos correspondientes desde una API. La búsqueda de datos debía estar incluida a nivel de servidor.

## Entregable

### Frontend
El repositorio actual constituye el Frontend de la aplicación. Como se postuló en las indicaciones, se usó JavaScript vanilla, sin ningún framework. 
Cabe destacar que se utilizaron librerías tales como:
 - Bootstrap 5: para diseño gráfico de elementos en general.
 - jQuery: Uso de AJAX y de listeners.
 - Font Awesome: Iconos.

Para recibir los datos correspondientes se utilizó el método 'fetch' con AJAX, y así se recorría cada arreglo mientras se generaban los elementos.

### Backend
Se realizó el backend en una API de Node.js, la cual se subió a Heroku con el fin de permitir la transferencia de información. El repositorio de la API también se encuentra dentro de mi perfil de Github, el link es: https://github.com/villarroelnicolasmaulen/bsale_ejercicio.
En la API se trabajó con express y rutas para realizar el pedido de datos. Únicamente se realizaron solicitudes de SELECT (GET) ya que no se especificó la necesidad de actualizar o eliminar datos, solo de visualizarlos. Por otro lado se instaló el paquete de 'CORS’, a través de npm, con el fin de evitar problemas en la utilización del método 'fetch'.

