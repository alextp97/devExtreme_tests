# AppDevextremeProyect

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.2.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
# devExtreme_tests


## Empezar nuevo proyecto en devExtreme

Comando para empezar un proyecto de devExtreme 
-- npx -p devextreme-cli devextreme new angular-app app-name [--layout][--empty]

- [--layout] Especifica el diseño de devExtreme, puede ser: 
    - side-nav-outer-toolbar(por defecto)
    - side-nav-inner-toolbar

- [--empty] Especifica si se debe de omitir la generación de vistas de muestra


## Shared Module

En este módulo están los componentes y servicios que son comunes en toda la aplicación.

## Pages 

En este modulo van todas las nuevas funciones que se va a implementar, interfaces, etc.

## Clase para dejar el mismo espacio en ambos lados de la vista

- <div class="responsive-paddings"></div> 

## Crear formularios con devExtreme

Para crear formularios en devExtreme usaremos el siguiente código:

- <dx-form id="form" [formData]="employee">
    <!-- Configuration goes here -->
  </dx-form>

- [formData]="employee": Para crear un formulario de entrada de datos, se asigna el objeto employee a la propiedad [formData]. El formulario crea un elemento simple ( un par de etiquetas e inputs) por cada campo en el objeto [formData].


Si queremos poner reglas de validación, organizar los campos, agruparlos, etc. Podemos usar el siguiente código:
    <dx-form
    [formData]="employee"
    [colCount]="2">
        <dxi-item 
            itemType="group" 
            caption="Personal Information">
            <dxi-item dataField="name"></dxi-item>
            <dxi-item dataField="position"></dxi-item>
            <dxi-item dataField="hireDate"></dxi-item>
            <dxi-item dataField="officeNumber"></dxi-item>
        </dxi-item>
        <dxi-item itemType="group" caption="Contacts">
            <dxi-item dataField="phone">
                <dxi-validation-rule type="pattern" [pattern]="urlPattern"></dxi-validation-rule>
            </dxi-item>
            <dxi-item dataField="skype"></dxi-item>
            <dxi-item dataField="email"></dxi-item>
        </dx-item>
    </dx-form>

- [colCount]: Usaremos esta propiedad para ajustar el diseño en columnas automáticamente o mostrar un número determinado de columnas
- <dxi-item dataField=""></dxi-item>: Con este código podemos crear un elemento cuyo valor del dataField se corresponde con el objeto del [formData].
- <dxi-item 
            itemType="group" 
            caption="Personal Information">
            <dxi-validation-rule type="pattern" [pattern]="urlPattern"></dxi-validation-rule>
  </dxi-item>

  - itemType="group": Podemos agrupar varios campos en una misma columna con esta propiedad
  - caption="Personal Information": Nombre que recibirá la columna agrupada

  - <dxi-validation-rule type="pattern" 
                         [pattern]="urlPattern">
    </dxi-validation-rule>
    Este código debe de ir dentro de un <dxi-item></dxi-item>, donde le especificamos el tipo de validación y en caso de ser tipo 'pattern', le debemos de especificar el patrón a seguir.


Para enviar un formulario debemos de añadir un <dx-button> y establecer la propiedad [useSubmitBehavior]="true". Para que dicha propiedad se pueda utilizar, debemos de meter el dxForm dentro de un elemento <form>. Ejemplo:

<form action="/employee-page" (submit)="handleSubmit($event)">
    <dx-form
        [formData]="employee"
        [colCount]="2">
        <dxi-item 
            itemType="group" 
            caption="Personal Information"
            [colCount]="2">
            <dxi-item dataField="name" [isRequired]="true">
            </dxi-item>
            <dxi-item dataField="officeNumber">
                <dxi-validation-rule type="numeric">
                </dxi-validation-rule>
            </dxi-item>
            <dxi-item dataField="email">
                <dxi-validation-rule type="email">
                </dxi-validation-rule>
            </dxi-item>
        </dxi-item>
        <dx-button class="fields--btnContainer--btnSubmit" text="Save" type="success" [useSubmitBehavior]="true"
                    icon="save" ></dx-button>
    </dx-form>
</form>


## Crear un desplegable que se rellena automaticamente y con imágenes

<dx-select-box
        [dataSource]= "countries"
        displayExpr="name"
        (onValueChanged)="selectedCountry($event)"
        [showClearButton]="true"
        >
            <div *dxTemplate="let data of 'item'">
                <div class="dataContainer--data">
                    <img [src]="data.urlFlag" height="50">
                    <label>{{data.name}}</label>
                </div>
            </div>
</dx-select-box>

-Este editor, nos permite cargar los datos que recibamos desde diferentes [dataSource].
-Para mostrar en el desplegable el valor, debemos de usar el atributo displayExpr="".
-(onValueChanged)="selectedCountry($event)": En este caso, nos permite quedarnos con todos los valores que tiene el pais seleccionado y trabajar con ellos.
-[showClearButton]="true": Muestra un icono que nos permite limpiar el desplegable

Para mostrar una imagen dentro del desplegable, debemos de usar *dxTemplate, el cual funciona como un un blucle, solo que debe de estar dentro del elemento del cual se quiere mostrar la imagen o cualquier otra propiedad, como en el ejemplo de arriba. En esta ocasión recorremos todos los elementos que nos llegan desde un json y con la etiqueta img recogemos dichas imágenes y con la etiqueta label el nombre de la imagen.


## Crear una tabla con dexExtreme

Para crear una tabla necesitamos usar el elemento <dx-data-grid [dataSource]= "countries"></dx-data-grid>.

Para que funcione, debemos de asegurarnos de que la propiedad [dataSource] reciba datos, estos datos serán mostrados en filas y columnas en el mismo orden que se reciben, sin poner nada más en nuestro HTML.

También podemos cambiar el orden de las columnas y especificar el tipo de las mismas si usamos el elemento <dxi-column dataField="FullName"></dxi-column>, donde "FullName" es el nombre de una de las propiedades del objeto que recibimos. 

Un ejemplo de data-grid:

<dx-data-grid 
            id="gridContainer" 
            [dataSource]="countries" 
            [showBorders]="true"
            (onExporting)="onExporting($event)"
            (onCellClick)="openPopup($event)"
            >
            <dxi-column dataField="name"></dxi-column>
            <dxi-column dataField="region"></dxi-column>
            <dxi-column dataField="language"></dxi-column>
            <dxi-column dataField="population"></dxi-column>
            <dxi-column dataField="notes"></dxi-column>
            <dxi-column dataField="urlFlag" cellTemplate="imgTemplate"></dxi-column>
                <div *dxTemplate="let img of 'imgTemplate'">
                    <img src="{{ img.value }}" class="imgBackground" />
                </div>
            <dxi-column cellTemplate="deleteBtn" caption="Delete">
                <div *dxTemplate="let delete of 'deleteBtn'" >
                    <dx-button (onClick)="getId(delete.data.id)" text="Delete" type="danger" icon="trash"></dx-button>
                </div>
            </dxi-column>
</dx-data-grid>

En esta tabla, se recibe una lista de paises [dataSource]="countries" y se organizan en diferentes columnas, una de ellas nos permite ver la imagen de cada pais, y otra nos permite pulsar un botón para borrar dicho pais obteniendo el id de dicho país.

En este ejemplo, hay dos eventos, uno es (onExporting)="onExporting($event) y (onCellClick)="openPopup($event)".

- El primer evento nos permite exportar los datos de una tabla a un archivo excel, aunque para eso, también tenemos que usar una etiqueta especial: <dxo-export [enabled]="true"></dxo-export>

- El segundo evento, nos permite pulsar en una determinada celda y abrir un popup. Para que se muestre este popup, debemos de utilizar la etiqueta <dx-popup>


Para borrar un país mediante su id y al pulsar un botón, debemos de usar simplemente un *dxTemplate el cual contiene todos los datos de la fila de cada pais. Dentro de este template, debemos de usar un dx-button, el cual tiene el evento (onClick) y un método que recibe el id del pais a borrar.

## Paginador en una tabla

Si queremos usar un paginador en una tabla, se debe poner el siguiente código:

<dxo-pager 
            [showPageSizeSelector]="true" 
            [showInfo]="true" 
            [allowedPageSizes]="[10, 20, 50]">
</dxo-pager>

- [showPageSizeSelector]="true", nos habilita la opción de ver las opciones de paginación. Esta propiedad está relacionada con la siguiente.
- [allowedPageSizes]="[10, 20, 50]", esta propiedad nos permite indicar el número de elementos que queremos que se muestren en pantalla.
- [showInfo]="true", muestra el número de elementos que hay en total.


## Spinner genérico devExtreme

Dentro de la carpeta components que está dentro de shared, he creado el componente 'spinner', el cual será genérico y se podrá usar en cualquier parte de la app simplemente pasándole los pará metros necesarios. Este spinner será de devExtreme.

<dx-load-panel
  #loadPanel
  shadingColor="shadingColor"
  [(visible)]="visible"
  [showIndicator]="showIndicator"
  [showPane]="showPane"
  [shading]="shading"
  [hideOnOutsideClick]="hideOnOutsideClick"
  (onHidden)="onHidden()"
>
</dx-load-panel>


