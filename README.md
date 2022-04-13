# Proyecto Final React.js E-Commerce 640bkg
     
     Hola mi nombre es Jose Martinez, soy estudiante de Codehouse vivo en Venezuela, y estoy iniciando en el mundo de la programacion. Esta es mi primer proyecto con React.js, aunque ya he hecho varios trabajos con JavaScript Vanila, sencillos, Lading Page mas que todo...

    Este proyecyo es un Ecommerce que vende distintos tipos de productos, desde ropa para chicas, chicos, al igual que joyeria y productos electronicos. 
    
    es Adaptable a cualquier necesidad de lo se quiera vender, es un proyecto bastante completo, posee su menu de categorias, en caso de que se venda mas de un tipo de producto. tiene su catalogo, una conexion con una base de datos, un carrito, y una seccion donde se muestra los prodctuso pendientes y entregados.

* ## Descripcion del proyecto
    Este proyecto se inicia con create-react-app, de tal manera que se pueda utilizar la librearia de JavaScript React.js. 

    Se decide trabajar con ella, debido a la facilidad que da de accecibildiad al codigo, su perfomance en base a componentes, facilita mucho lo que es la reutilizacion de codigos sobre todo si necesitas un componente, en muchas secciones, eso hace que el numero de lineas de codigo en los archivos disminuya y hace que la aplicacion sea un poco mas optima. 

* ## descripcion de las tecnologias usadas

    En este proyecto se utilizacon varias tecnologias entre ellas:
     * Bootstrap 5
        - Se utilzo Bootstrap para darle un diseño un poco responsive a la aplicacion, a pesar de que no se utilzo mucho, es necesario importarlo, ya que se utilizo el tradicional no ```Reactstrap```
     * Material UI
        - Esta Herramienta fue bastante util para darle un diseño moderno a los botones de compra, tambien fue bastante util para darle una animacion de ´compra exitosa´al modal al momento de que finalizas la compra.
     * firebase
        - Herramienta fundamental para conseguir los productos, y traerlos desde la base datos. 
     

    
* ## descripcion de los componentes 

   * Home: Esta componente, fue hecha de forma un poco estatica, pero sin embargo, trae imagenes de algunos productos de la base de datos, de los que estan disponible en el catalogo, con un boton de Compra, que redirecciona al catalogo Principal

   * ItemListContainer: Se realizo toda la logica del pedido de los productos, estados, a su vez, se utilizo el useParams, para tomar el ID de cada producto para poder luego, reedireccioonar la visibilidad del producto que seleccionas, luego se pasa como Props a ItemList, que lo que hace es un Map del arreglo que ItemListContainer le envia, y procede a reenderizar.

   * CartContex:

   Esta componente se realizo para almacenar variables que suelen ser utilizadas durante todo el recorrido de la aplicacion, es decir, que todas las componentes, tienen acceso a esa variable sin la necesidad de la relacion padre-chilren

   en esta componente se utilizan 3 etados, dos del tipo numero, y una del tipo arreglo. 

   La del tipo ```Array```, empieza como un arreglo vacio, luego se realiza una copia de dicho arreglo y se les agregan los productos que vienen de la base de datos. ese arreglo llamado cart, se envia, al CustomProvider, al index, de la aplicacion para que todos las componentes tengan acceso. 

   Los estado del tipo ```number``` especifican dos cosas, la primera variable llamada ```cantidad_total```  representa al numero que esta en el boton que redirecciona a la componente cart, y ademas muestra el numero de la centidad de productos que estas ordenando. 

   El segundo estado que contiene la variabla ```pendientes``` representa a la cantidad de pedidos que tienes en la base de datos, bien sea entregado o pendiente.. en dicho componente llamado TusPedidos, se muestra un status de los pedidos. 

   esta componente tiene varias funciones, la cantidad de
   la principal es la de agregar al carrito, que recibe dos parametros, ```(cantidad, producto)``` donde la cantidad es un numero, que representa la candidad de productos que vas a ordern, y el producto, es el producto que se recibe de la base de datos. para que el producto permanzeca en el carrito, se utilizo el localStorage, de tal manera, que al momento en el que el boton ```go to cart``` cree en el local storage la clave ```'Cart'``` con lo que recibe del contexto el arreglo ```cart```

   Funcion ```borrarDelCarrito()``` esta funcion lo que hace es filtrat el producto que recibe por su id, y hace una copia del array que esta en el localStorage y deja el carrito vacio, dicha funcon tambien elimina la clave ```'cart'``` del LocalStorage... este solo borra Un producto
     
    en caso de que la apliacion permita agragar mas de un producto distinto al carrito, se tiene el boton ```Delete All``` que corre la funcion ```limpiarCArrito``` el cual borra todo lo que esta en el carrito. Sin embargo, la aplicacion esta hecha de forma sencilla, en la cual, solo se puede compar un solo producto, de maximo 5 del mismo producto para comprar otro, se debe finalizar la compra, y luego, ordenar otro producto. 

    * CartWidget: Dicha componente solo reenderiza el boton de que redirecciona a la componente ```/Cart```, tambine muestra el numero de la cantidad de productos que se esta ordenando, se utilizaron dos datos para ellos, si no existe ningun producto en el LocalStorage entonces, me muestras el estado natural de la variable creada en el contexto global ```cantidad_total == 0```, si existe un arreglo, en el local storage, entonces hago un map, donde busco la cantidad de productos que el cliente se esta llevando, y lo reenderizo. 

    * ItemFilterContainer:Dicha componente, recupera de la base de datos todos los productos por su categorias, utilizo el useParams, para que se tome el nombre que se le esta asignando a la url como dato, a buscar, y comparar en la base de datos. es decir, se pide accede a la base de datos a la collecion llamada productos, alli, accedo a todos los productos, y solo recupero el nombre de la categoria cuando la comparo con la url.. si son iguales, es lo que se va a reenderizar.  y tiene su respectivo ```loader``` que no lo llame ```loader```, al final se le pasa los productos que encontro por categorias a la componenete ```<FilterCateogira/>``` de tal manera para que haga el map() y reenderice los productos que se encontraron de la cateogoria seleccionada. 

    * Modal: esta componente fue realizada por mi, manualmente, menos el check success, que lo importe de Material UI.. muestra el titulo del producto que te estas llevando, la imagen del producto estas ordenando, y el ID de la Orden.

    * Orders: fue una componente que se me ocurrio colocar para mostrar los estatus de las entregasm inicialmente, lo pense para usarlo con un loggeo de usuario, pero no me dio tiempo de hacerlo, me complique con muchas cosas. sin embargo, en esa componente, coloque una componente flotante del icono de Whatsapp que habilita un Chat, que pide el ID de la Orden de Compra. mi numero es el que esta registrado, si me envia un mensaje, atravez de alli, con el ID de compra, puedo probar que desde la base de datos, puedo cambiar el estatus de la entrega, de 'pendiente' a 'entregado' y se va a reenderizar de con un fondo verde. 


* ## Como se instala el proyecto

Principalmente se hace un Git clone 

``` git clone https://github.com/josemucv2/cclass_coder ```

Luego se procede a instalar la carpeta node_modules

```npm install``` 

el archivo ```.gitignore``` al momento de que se termine la descarga de la carpeta node_modules, automaticamente queda ignorada.. 

luego se procede a isntalar la carpeta build

``` npm run build``` 

luego se instalan todas las dependencias que aparecen en el archivo: ```package.json``` 

luego se prodece correr la aplicacion con:

```npm start``` 


### Espero que guste el proyecto.

Saludos cordiales.

--

Jose Martinez# Ecommerce
