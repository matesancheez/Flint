# Organizacion del proyecto Flint

## Organizacion de componentes

### Los componentes de los post son los siguientes:

**Post.astro** --> Que es el diesño de de cada tarjeta de post

**PostList.astro** --> Que imprime todos los post que tengo en la carpeta de post haciendo la preview de estos

### Componentes restantes:

**Hero.astro** --> Es solamente el hero y se muestra en el **index.astro**

**Navbar.astro** y **footer.astro** --> Son el respectivo footer y header y estos se encuentran en el **layout.astro**

**Caja.astro** --> Es la caja en la que se muestran los servicios, esta se muestra en el **index.astro** y en **servicios.astro**

**AboutUs.astro** --> Parte de sobre nosotros que se muestra en el **index.astro**

**Crumble.astro** --> Se muestra en el **index.astro** y contiene los diferentes bundles

**Tecnologias.astro** --> El pequeño listado en el que se muestran los iconos de las diferentes tecnologias que manejan


## Funcionamiento de FAQ y Servicios:

El FAQ y los Servicios sacan su informacion de los archivos **.json** ubicados en la carpeta **/src/data**. Cualquier cambio que se quiera realizar en los archivos debe respetar el formato. Se pueden agregar o quitar cuantos quiera.

### Archivo servicios.json:

Sintaxis de cada servicio:
```json
        {
        "name": "nombre del servicio",
        "description": "descripcion del servicio",
        "category": "categoria a la que pertenece",
        "icon": "ruta del icono (/icons/nombre)",
        "isTopSales": "bandera de true o false para mostrarlo en el index"
        }
```

## Funcionamiento del blog

En la carpeta **/src/content** se crea una coleccion que define el formato del blog y cada una de sus partes en el archivo config.ts.
Ademas luego aqui se van a almacenar los archivos markdown que seran cada articulo del blog, que se subiran mediante TinaCMS.
En el archivo **[slug].astro** se importa la coleccion creada y con el metodo **getStaticPath()** se obtiene los post por parametro la informacion de cada blog, con una funcion asincrona, y se itera esta lista recibida.
**PARA MAS INFORMACION RECURRIR A DOCUMENTACION DE ASTRO.**

### Formato del blog:

El blog para que se muestre bien cada **preview** debe comenzar con una descripcion sin ningun tipo de texto markdown, luego debe tener una **imagen de autor** y una **categoria** solamente.

### Creado por [Mateo Sanchez](https://matesancheez.dev/)

![MS](https://github.com/matesancheez/porfolio/blob/main/public/assets/images/favicon_package/mstile-150x150.png?raw=true)
