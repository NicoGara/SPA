# Descripción de la página

## Información general
La página que te estoy mostrando es una página que puede mostrar blogs de diferentes temas. El título de la página puede cambiar dependiendo de la fuente de los blogs.

## Menú
La página tiene un menú con opciones para ir a la página de inicio, búsqueda, contacto y un enlace para aprender JavaScript.

## Funcionalidad
La página puede buscar blogs creados en otras páginas y mostrarlos. Está creada con puro JavaScript pero trabajando con componentes igual que lo haría una librería como React o Vue.js, por ejemplo.

## Contacto
Hay un área de contacto donde se pueden comunicar por correo electrónico.

## Código
Dentro del código JavaScript, hay una variable que guarda el enlace de la página de Css-Triks, la cual está hecha en WordPress. Si cambiamos ese enlace en la variable por cualquier otra página hecha en WordPress que tenga blogs y no tenga bloqueo de CORS, también podríamos extraer la información de esas páginas.

## Descripción del Router.js
El código que te estoy mostrando es una función de enrutamiento para una aplicación de una sola página (SPA) creada con JavaScript. La función `Router` es una función asíncrona que se exporta para su uso en `App.js`.

### Importaciones
Primero, importa varias funciones y componentes de otros módulos, incluyendo `api` de `wp_api.js`, `ajax` de `ajax.js`, y varios componentes como `PostCard`, `Post`, `SearchCard` y `ContactForm`.

### Variables
Dentro de la función, se definen algunas variables para acceder a elementos del DOM y propiedades del objeto `location`.

### Enrutamiento
Luego, se verifica el valor del hash en la URL para determinar qué contenido mostrar en la página.

- Si el hash está vacío o es igual a "#/", se realiza una llamada AJAX a la API de WordPress para obtener una lista de publicaciones. Una vez que se reciben los datos, se utiliza la función `PostCard` para crear una tarjeta para cada publicación y se agregan al elemento principal de la página.
- Si el hash incluye "#/search", se obtiene una consulta de búsqueda del almacenamiento local y se realiza una llamada AJAX a la API de WordPress para buscar publicaciones que coincidan con esa consulta. Los resultados se muestran utilizando la función `SearchCard`.
- Si el hash es igual a "#/contacto", se agrega el formulario de contacto al elemento principal utilizando la función `ContactForm`.
- En cualquier otro caso, se muestra un mensaje en el elemento principal y se realiza una llamada AJAX a la API de WordPress para obtener información sobre una publicación específica. Una vez que se reciben los datos, se utiliza la función `Post` para mostrar el contenido de la publicación en el elemento principal.

### Finalización
Finalmente, se oculta un elemento con la clase "loader" para indicar que el contenido ha terminado de cargarse.
