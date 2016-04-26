import {Injectable} from 'angular2/core';
import {Observable} from 'rxjs/Observable';
import {withObserver} from './utils';

export class Receta {
  constructor(
    public id: number,
    public userid: number,
    public title: string,
    public abstract: string,
    public details: string,
    public thumbnail: string
    public thumbnailbig: string) {}

}

@Injectable()
export class RecetaService {

  private recetas = [
    new Receta(1, 1, 'Empanadas Burguer con Queso', 'El aperitivo perfecto', '<div class="col-md-9"><div class="meta"><div class="fecha">Publicado el 13 - 06 - 2015</div></div><div class="contenido"><h3>Ingredientes</h3><p>1 Masa para Empanada BUITONI</p><p>4 mini-hamburguesas de carne (25 g)</p><p>4 cucharaditas de Tomate Frito SOLIS 0%</p><p>1 loncha de queso para fundir</p><p>Jugo Maggi</p><h3>Preparación</h3><p>1.Con ayuda de un cortapastas o un vaso grande, cortar 8 círculos grandes de masa.</p><p>2. Sobre 4 de ellos poner sobre cada uno, una cucharadita de tomate, una hamburguesa y un trozo de queso y cubrirlo con el resto de los círculos.</p><p>3. Unir los bordes presionando con los dedos hasta que quede bien cerrados los círculos. Hacer un pequeño orificio en el centro y pintar la masa con el jugo Maggi.</p><p>4. Cocer las empanadas burguer en el horno, previamente calentado a 200ºC, durante unos 30 minutos.</p><h3>Consejos</h3><p>Es una receta de comida fast food pero hecha en casa y con ingredientes de buena calidad.</p></div></div>', 'img/empanadas-burguer-con-queso.jpg', 'img/empanadas-burguer-grande.jpg'),
    new Receta(2, 1, 'Solomillo con Salsa de Setas appelletti','Plato para lucirse y riquísimo', '<div class="col-md-9"><div class="meta"><div class="fecha">Publicado el 13 - 06 - 2015</div></div><div class="contenido"><h3>Ingredientes</h3><p>1 solomillo de cerdo</p><p>1 barqueta Cappelletti prosciutto BUITONI</p><p> 1 tarrina Salsa Funghi BUITONI</p><p>1 diente de ajo</p><p>1 hoja de laurel</p><p>2 cucharadas de aceite de oliva pimienta</p><h3>Preparación</h3><p>1. Sazonar el solomillo con pimienta y dorarlo en un poco de aceite junto con el ajo y el laurel; flamearlo con coñac y cocerlo a fuego suave durante 15 minutos, dándole vueltas de vez en cuando. Añadir la salsa de setas y cocerlas unos minutos más a fuego muy suave.</p><p>2. Hervir los cappelletti en abundante agua con sal, tal y como se indica en el embalaje. Escurrirlo, reservando un poco del agua de cocción (1/2 vaso) y añadirla a la salsa de setas.</p><h3>Consejos</h3><p>Flamear el solomillo con coñac es opcional. Es un plato único muy completo. La salsa de setas ya lleva sal con lo que no hace falta añadir más.</p></div></div>', 'img/solomillo-setas-grande.jpg', 'img/solomillo-setas-grande.jpg'),
    new Receta(3, 1, 'Roscón de hojaldre con crema de turrón y mascarpone','Aperitivo dulce para los más golosos', '<div class="col-md-9"><div class="meta"><div class="fecha">Publicado el 13 - 06 - 2015</div></div><div class="contenido"><h3>Ingredientes</h3><p>100 g de Leche condensada LA LECHERA</p><p>250 g de mascarpone</p><p> 200 g de turrón de Jijona</p><p>200 ml de nata para montar</p><p>2 masas de hojaldre redondas BUITONI</p><p>2 cucharadas de aceite de oliva pimienta</p><p>1 huevo para pintar</p><p>30 g de almendras laminadas</p><p>Azúcar glass</p><h3>Preparación</h3><p>1. Para la crema:  En un bol rallar el turrón de Jijona y añadir la leche condensada y el mascarpone. Batir bien todos los ingredientes. Montar la nata e incorporarla con movimientos suaves y envolventes.</p><p>2. Dejar toda la noche en la nevera tapada con papel film.</p><p>3. Precalentar el horno a 180º. Sacar el hojaldre 15m antes de hornearlos. Desenrollar una masa de hojaldre y con aro de emplatar o un vaso, cortar un círculo en el centro. Hornear unos 15m hasta que esté dorada. Retirar y dejar enfriar encima de una rejilla. Hacer lo mismo con la otra masa de hojaldre, y ésta, pitarla con huevo batido y espolvorear con la almendra laminada. Hornear igual unos 15m y dejar enfriar.</p><p>4. Poner la primera masa de hojaldre al revés y rellenar con la crema de turrón. Poner encima el otro hojaldre y espolvorear con azúcar glas.</p><h3>Consejos</h3><p>Es una receta de comida tradicional y con ingredientes de buena calidad.</p></div></div>', 'img/roscon-de-hojaldre-con-crema-de-turron-y-mascarpone.jpg', 'img/roscon-de-hojaldre-con-crema-de-turron-y-mascarpone.jpg'),
    new Receta(4, 2, 'Pijama Helado', 'Postre sencillo y original para el veranito', '<div class="col-md-9"> <div class="meta"><div class="fecha">Publicado el 13 - 06 - 2015</div></div><div class="contenido"><h3>Ingredientes</h3><p>1 bloque de Helado tres gustos NESTLÉ (4 cortes)</p><p>4 flanes de huevo LA LECHERA</p><p> 200 g de fresones</p><p>2 cucharadas de azúcar de caña</p><h3>Preparación</h3><p>1.Limpiar los fresones y cortarlos en láminas o dados pequeños. Espolvorearlos con el azúcar y dejarlos reposar unos 15’.</p><p>2. En el momento del postre, cortar cada corte de helado por la mitad y colocar en un vaso transparente u otro recipiente transparente similar (vaso de yogur).</p><p>3. Repartir un flan en cada vaso y cubrirlo con los fresones macerados. Servirlo inmediatamente.</p><h3>Consejos</h3><p>Es un postre que se tienen que ver las capas y se puede preparar con cualquier tipo de fruta.</p></div></div>', 'img/pijama-helado.jpg', 'img/pijama-helado-grande.jpg'),
    new Receta(5, 2, 'Crema de guisantes al queso', 'Lo tradicional y lo moderno en un mismo plato', '<div class="col-md-9"><div class="meta"><div class="fecha">Publicado el 13 - 06 - 2015</div></div><div class="contenido"><h3>Ingredientes</h3><p>600 g. guisantes (peso neto)</p><p>2 patatas</p><p> 200 g de turrón de Jijona</p><p>210 g (1 brik peq) de Leche Evaporada IDEAL</p><p>1 pastilla de Caldo de Verduras MAGGI</p><p>50g. gruyer rallado</p><p>sal</p><p>pimienta</p><p>agua AQUAREL</p><h3>Preparación</h3><p>1.Cocer los guisantes y patatas peladas y cortadas en dados en 3/4 l. de agua con la pastilla de caldo hasta que estén tiernos (unos 15 minutos).</p><p>2. Triturarlo (reservar algunos guisantes enteros para decorar) hasta obtener una crema fina, agregar leche evaporada y queso y rectificar la sal.</p><p>3. Calentar a fuego suave, removiendo para que el queso se vaya deshaciendo.</p><h3>Consejos</h3><p>Servir la crema en boles con los quisantes reservados y un chorrito de aceite de oliva.</p></div></div>','img/crema-de-guisantes-al-queso.jpg','img/crema-de-guisantes-al-queso.jpg'),
  ];

  getRecetas() {
    return withObserver(this.recetas);
  }

  getReceta(id: number | string) {
    let receta = this.recetas.filter(h => h.id === +id)[0]
    return withObserver(new Receta(receta.id, receta.userid, receta.title, receta.abstract, receta.details, receta.thumbnail, receta.thumbnailbig));
  }

  removeReceta(receta: Receta){
    for(let i=0; i<this.recetas.length; i++){
        if(this.recetas[i].id === receta.id){
          this.recetas.splice(i,1);
          break;
        }
    }
    return withObserver(undefined);
  }

  saveReceta(receta: Receta){
    if(receta.id){
      let oldReceta = this.recetas.filter(h => h.id === receta.id)[0];
      oldReceta.userid = receta.userid;
      oldReceta.title = receta.title;
      oldReceta.abstract = receta.abstract;
      oldReceta.details = receta.details;
      oldReceta.thumbnail = receta.thumbnail;
      oldReceta.thumbnailbig = receta.thumbnailbig;
    } else {
      receta.id = this.recetas.length+1;
      this.recetas.push(receta);
    }
    return withObserver(receta);
  }
}