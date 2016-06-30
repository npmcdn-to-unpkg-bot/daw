package es.urjc.code.daw.library.book;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Controller;

import es.urjc.code.daw.library.user.User;
import es.urjc.code.daw.library.user.UserRepository;
import es.urjc.code.daw.library.restaurante.Restaurante;
import es.urjc.code.daw.library.restaurante.RestauranteRepository;
import es.urjc.code.daw.library.receta.Receta;
import es.urjc.code.daw.library.receta.RecetaRepository;
import es.urjc.code.daw.library.tipocomida.Tipocomida;
import es.urjc.code.daw.library.tipocomida.TipocomidaRepository;

@Controller
public class DatabaseInitializer implements CommandLineRunner {

	@Autowired
	private BookRepository bookRepository;

	@Autowired
	private UserRepository userRepository;
	
	@Autowired
	private RestauranteRepository restauranteRepository;
	
	@Autowired
	private RecetaRepository recetaRepository;
	
	@Autowired
	private TipocomidaRepository tipocomidaRepository;

	@Override
	public void run(String... args) throws Exception {

		// Sample books

		bookRepository.save(new Book("SUEÑOS DE ACERO Y NEON",
				"Los personajes que protagonizan este relato sobreviven en una sociedad en decadencia a la que, no obstante, lograrán devolver la posibilidad de un futuro. Año 2484. En un mundo dominado por las grandes corporaciones, solo un hombre, Jordi Thompson, detective privado deslenguado y vividor, pero de gran talento y sentido d..."));
		bookRepository.save(new Book("LA VIDA SECRETA DE LA MENTE",
				"La vida secreta de la mentees un viaje especular que recorre el cerebro y el pensamiento: se trata de descubrir nuestra mente para entendernos hasta en los más pequeños rincones que componen lo que somos, cómo forjamos las ideas en los primeros días de vida, cómo damos forma a las decisiones que nos constituyen, cómo soñamos y cómo imaginamos, por qué sentimos ciertas emociones hacia los demás, cómo los demás influyen en nosotros, y cómo el cerebro se transforma y, con él, lo que somos."));
		bookRepository.save(new Book("CASI SIN QUERER",
				"El amor algunas veces es tan complicado como impredecible. Pero al final lo que más valoramos son los detalles más simples, los más bonitos, los que llegan sin avisar. Y a la hora de escribir sobre sentimientos, no hay nada más limpio que hacerlo desde el corazón. Y eso hace Defreds en este libro."));
		bookRepository.save(new Book("TERMINAMOS Y OTROS POEMAS SIN TERMINAR",
				"Recopilación de nuevos poemas, textos en prosa y pensamientos del autor. Un sabio dijo una vez: «Pocas cosas hipnotizan tanto en este mundo como una llama y como la luna, será porque no podemos cogerlas o porque nos iluminan en la penumbra». Realmente no sé si alguien dijo esta cita o me la acabo de inventar pero deberían de haberla escrito porque el poder hipnótico que ejercen esa mujer de rojo y esa dama blanca sobre el ser humano es digna de estudio."));
		bookRepository.save(new Book("LA LEGIÓN PERDIDA",
				"En el año 53 a. C. el cónsul Craso cruzó el Éufrates para conquistar Oriente, pero su ejército fue destrozado en Carrhae. Una legión entera cayó prisionera de los partos. Nadie sabe a ciencia cierta qué pasó con aquella legión perdida.150 años después, Trajano está a punto de volver a cruzar el Éufrates. ..."));

		// Sample users

		userRepository.save(new User("tim", "cook", "ceo apple", "TimCook", "pass", "http://images.apple.com/pr/bios/images/cook_hero.png", new long[] {1, 2}, new long[] {1, 2}, "ROLE_USER"));
		userRepository.save(new User("user", "", "", "", "pass", "", new long[] {1, 2}, new long[] {1, 2}, "ROLE_USER"));
		userRepository.save(new User("admin", "", "", "", "pass", "", new long[] {1, 2}, new long[] {1, 2}, "ROLE_USER", "ROLE_ADMIN"));
		
		// Sample restaurantes
		
		restauranteRepository.save(new Restaurante("The Good Burger", "Especialistas en el mundo de la hamburguesa", "<h3>Descripción</h3><p>ESTA ES LA BUENA HAMBURGUESA. La calidad está aquí. Llamándonos The Good Burger pensarás que somos americanos, o ingleses, pero somos una hamburguesería española que ha cogido la esencia de la hamburguesa clásica con los sabores que más nos gustan aquí. Por eso las elaboramos con ingredientes de la mejor calidad y adaptadas a tu gusto. Porque hamburguesas buenas hay muchas, pero nosotros queremos ser los mejores.</p><h3>Recomendación de platos</h3><div class='row'><div class='col-xs-4 col-md-4 videos'><h3>Hamburguesas</h3><ul><li><img src='img/tgb-burguertgb.png' width='100px' height='auto' />Hamburguesa TGB<hr align='left' noshade='noshade' size='2' width='80%' /></li><li><img src='img/tgb-bbq.png' width='100px' height='auto' />Hamburguesa BBQ<hr align='left' noshade='noshade' size='2' width='80%' /></li><li><img src='img/tgb-pollo.png' width='100px' height='auto' />Hamburguesa de Pollo<hr align='left' noshade='noshade' size='2' width='80%' /></li></ul></div><div class='col-xs-4 col-md-4 resources'><h3>Hot Dogs</h3><ul><li><img src='img/tgb-hotdog_California.png' width='100px' height='auto' />Hot Dog California<hr align='left' noshade='noshade' size='2' width='80%' /></li><li><img src='img/tgb-hotdog_NewYork.png' width='100px' height='auto' />Hot Dog New York<hr align='left' noshade='noshade' size='2' width='80%' /></li><li><img src='img/tgb-hotdog_Washington.png' width='100px' height='auto' />Hot Dog Washington<hr align='left' noshade='noshade' size='2' width='80%' /></li></ul></div><div class='col-xs-4 col-md-4 popular'><h3>Ensaladas</h3><ul><li><img src='img/tgb-santa_fe.png' width='100px' height='auto' />Ensalada Santa Fe<hr align='left' noshade='noshade' size='2' width='80%' /></li><li><img src='img/tgb-cesar.png' width='100px' height='auto' />Ensalada César<hr align='left' noshade='noshade' size='2' width='80%' /></li><li><img src='img/tgb-huerta.png' width='100px' height='auto' />Ensalada de la Huerta<hr align='left' noshade='noshade' size='2' width='80%' /></li></ul></div></div>", "img/TGBGrande.jpg", "img/tgb-restaurante.jpg", "https://www.google.com/maps/d/embed?mid=zgD1lMPodVgY.kwc1klKug9fM&hl=en_US"));
		restauranteRepository.save(new Restaurante("Fosters Hollywood","Sabor americano de alta calidad", "<h3>Descripción</h3><p>Foster`s Hollywood es una cadena de restaurantes de comida americana localizada en España, cuyos establecimientos son caracterizables entre los llamados casual restaurants, pero entendidos en una cultura ajena como una suerte de «restaurantes étnicos», como pudieran ser los italianos u orientales.</p><h3>Recomendación de platos</h3><div class='row'><div class='col-xs-4 col-md-4 videos'><h3>Hamburguesas</h3><ul><li><img src='img/foster-black.png' width='100px' height='auto' />Black Label Burguer<hr align='left' noshade='noshade' size='2' width='80%' /></li><li><img src='img/foster-iberica.png' width='100px' height='auto' />Gran Ibérica Burger<hr align='left' noshade='noshade' size='2' width='80%' /></li><li><img src='img/foster-wagyu.png' width='100px' height='auto' />Wagyú Burger<hr align='left' noshade='noshade' size='2' width='80%' /></li></ul></div><div class='col-xs-4 col-md-4 resources'><h3>Costillas</h3><ul><li><img src='img/foster-missouri.png' width='100px' height='auto' />Missouri ST. Louis<hr align='left' noshade='noshade' size='2' width='80%' /></li><li><img src='img/foster-kansas.png' width='100px' height='auto' />Kansas Baby Back<hr align='left' noshade='noshade' size='2' width='80%' /></li><li><img src='img/foster-national.png' width='100px' height='auto' />National Star Ribs<hr align='left' noshade='noshade' size='2' width='80%' /></li></ul></div><div class='col-xs-4 col-md-4 popular'><h3>Entrantes</h3><ul><li><img src='img/foster-patatas.png' width='100px' height='auto' />Bacon & Cheese Fries<hr align='left' noshade='noshade' size='2' width='80%' /></li><li><img src='img/foster-combo.png' width='100px' height='auto' />Hollywood Combo<hr align='left' noshade='noshade' size='2' width='80%' /></li><li><img src='img/foster-chicken.png' width='100px' height='auto' />Fosters Chicken Pops<hr align='left' noshade='noshade' size='2' width='80%' /></li></ul></div></div>", "img/FosterGrande.jpg", "img/fostershollywood-restaurante.jpg", "https://www.google.com/maps/d/embed?mid=zgD1lMPodVgY.kwc1klKug9fM&hl=en_US"));
		restauranteRepository.save(new Restaurante( "RIBS","De las mejores parrillas actualmente", "<h3>Descripción</h3><p>Desde 1968. Primer restaurante de España especializado en comida americana. Teniendo restaurantes en toda España. Caracterizados por llevar la eencia de Estados Unidos a todas partes. Famosas parrillas de carbón que cuenta la leyenda que nunca se apagan. El secreto del inconfundible sabor de los platos.</p><h3>Recomendación de platos</h3><div class='row'><div class='col-xs-4 col-md-4 videos'><h3>Hamburguesas</h3><ul><li><img src='img/ribs-angusbeff.png' width='100px' height='auto' />Angus Beef Burguer<hr align='left' noshade='noshade' size='2' width='80%' /></li><li><img src='img/ribs-greatamericanburger.png' width='100px' height='auto' />Great American Burguer<hr align='left' noshade='noshade' size='2' width='80%' /></li><li><img src='img/ribs-luisianaburguer.png' width='100px' height='auto' />Luisiana Burguer<hr align='left' noshade='noshade' size='2' width='80%' /></li></ul></div><div class='col-xs-4 col-md-4 resources'><h3>Carnes</h3><ul><li><img src='img/ribs-steakluisiana.png' width='100px' height='auto'/>Steak Luisiana<hr align='left' noshade='noshade' size='2' width='80%' /></li><li><img src='img/ribs-entrania.png' width='100px' height='auto' />Entraña<hr align='left' noshade='noshade' size='2' width='80%' /></li><li><img src='img/ribs-chargilledchiquen.png' width='100px' height='auto' />Pollo a la brasa<hr align='left' noshade='noshade' size='2' width='80%' /></li></ul></div><div class='col-xs-4 col-md-4 popular'><h3>Postres</h3><ul><li><img src='img/ribs-browniehelado.png' width='100px' height='auto' />Brownie con Helado<hr align='left' noshade='noshade' size='2' width='80%' /></li><li><img src='img/ribs-lemoncake.png' width='100px' height='auto' />Lemon Cake<hr align='left' noshade='noshade' size='2' width='80%' /></li><li><img src='img/ribs-cookiehelado.png' width='100px' height='auto' />Cookies con Helado<hr align='left' noshade='noshade' size='2' width='80%' /></li></ul></div></div>", "img/RibsGrande.jpg","img/ribs-restaurante.jpg", "https://www.google.com/maps/d/embed?mid=zgD1lMPodVgY.kwc1klKug9fM&hl=en_US"));
		restauranteRepository.save(new Restaurante( "La Tagliatella","El toque italiano más fresco", "<h3>Descripción</h3><p>La Tagliatella nace de la experiencia de más de dos décadas de especialización en la cocina tradicional de las regiones del Piemonte, Liguria y Emilia Romagna. Para nosotros la autenticidad y la calidad son los pilares de nuestra manera de entender la gastronomía. Por eso, recorremos cada rincón de la geografía Italiana en busca de los mejores ingredientes, texturas y sabores. </p><h3>Recomendación de platos</h3><div class='row'><div class='col-xs-4 col-md-4 videos'><h3>Pasta</h3><ul><li><img src='img/tag-cannellonidicarne.jpg' width='100px' height='auto' />Canenelloni di Carne<hr align='left' noshade='noshade' size='2' width='80%' /></li><li><img src='img/tag-farfalleprimavera.jpg' width='100px' height='auto' />Farfalle Primavera<hr align='left' noshade='noshade' size='2' width='80%' /></li><li><img src='img/tag-penneallaatrabiata.jpg' width='100px' height='auto' />Penne alla Trabiata<hr align='left' noshade='noshade' size='2' width='80%' /></li></ul></div><div class='col-xs-4 col-md-4 resources'><h3>Pizzas</h3><ul><li><img src='img/tag-pollobarbecue.jpg' width='100px' height='auto' />Pollo Barbecue<hr align='left' noshade='noshade' size='2' width='80%' /></li><li><img src='img/tag-portofino.jpg' width='100px' height='auto'/>Portofino<hr align='left' noshade='noshade' size='2' width='80%' /></li><li><img src='img/tag-specialitadellochef.jpg' width='100px' height='auto' />Specialitate dello Chef<hr align='left' noshade='noshade' size='2' width='80%' /></li></ul></div><div class='col-xs-4 col-md-4 popular'><h3>Postres</h3><ul><li><img src='img/tag-ciocolattisimo.jpg' width='100px' height='auto' />Ciocolattisimo<hr align='left' noshade='noshade' size='2' width='80%' /></li><li><img src='img/tag-tortadimascarpone.jpg' width='100px' height='auto' />Torta di Mascarpone<hr align='left' noshade='noshade' size='2' width='80%' /></li><li><img src='img/tag-pizetachocolate.jpg' width='100px' height='auto' />Pizzeta Chocolate<hr align='left' noshade='noshade' size='2' width='80%' /></li></ul></div></div>", "img/TagliatellaGrande.jpg", "img/tag-restaurante.jpg", "https://www.google.com/maps/d/embed?mid=zgD1lMPodVgY.kwc1klKug9fM&hl=en_US"));		
		restauranteRepository.save(new Restaurante("Telepizza","Uno de los referentes en pizzas", "<h3>Descripción</h3><p>Telepizza es una multinacional española, fundada en 1.987 con carácter de empresa familiar que se ha convertido en pocos años en líder en el sector de reparto a domicilio de comida preparada. Conocida por su calidad y frescura, las pizzas más famosas del país que nos han acompañado durante toda nuestra vida. Cada vez aumenta más su catálogo, proporcionando una grandísima variedad de productos a sus clientes. </p><h3>Recomendación de platos</h3><div class='row'><div class='col-xs-4 col-md-4 videos'><h3>Tradicionales</h3><ul><li><img src='img/tp-carbonara.png' width='100px' height='auto' />Carbonara<hr align='left' noshade='noshade' size='2' width='80%' /></li><li><img src='img/tp-bbq.png' width='100px' height='auto' />Barbacoa<hr align='left' noshade='noshade' size='2' width='80%' /></li><li><img src='img/tp-primavera.png' width='100px' height='auto' />Primavera<hr align='left' noshade='noshade' size='2' width='80%' /></li></ul></div><div class='col-xs-4 col-md-4 resources'><h3>Amantes de la carne</h3><ul><li><img src='img/tp-iberica.png' width='100px' height='auto' />Ibérica<hr align='left' noshade='noshade' size='2' width='80%' /></li><li><img src='img/tp-tejana.png' width='100px' height='auto' />Tejana<hr align='left' noshade='noshade' size='2' width='80%' /></li><li><img src='img/tp-baconcripy.png' width='100px' height='auto' />Bacon Crispy<hr align='left' noshade='noshade' size='2' width='80%' /></li></ul></div><div class='col-xs-4 col-md-4 popular'><h3>Amantes del Queso</h3><ul><li><img src='img/tp-nachos.png' width='100px' height='auto' />Pizza Nachos<hr align='left' noshade='noshade' size='2' width='80%' /></li><li><img src='img/tp-delicheese.png' width='100px' height='auto' />Delicheese<hr align='left' noshade='noshade' size='2' width='80%' /></li><li><img src='img/tp-4quesos.png' width='100px' height='auto' />Cuatro Quesos<hr align='left' noshade='noshade' size='2' width='80%' /></li></ul></div></div>", "img/telepizza.png", "img/tp-restaurante.jpg", "https://www.google.com/maps/d/embed?mid=zgD1lMPodVgY.kwc1klKug9fM&hl=en_US"));
		// Sample recetas
		
		recetaRepository.save(new Receta(1, "Empanadas Burguer con Queso", "El aperitivo perfecto", "<div class='col-md-9'><div class='meta'><div class='fecha'>Publicado el 13 - 06 - 2015</div></div><div class='contenido'><h3>Ingredientes</h3><p>1 Masa para Empanada BUITONI</p><p>4 mini-hamburguesas de carne (25 g)</p><p>4 cucharaditas de Tomate Frito SOLIS 0%</p><p>1 loncha de queso para fundir</p><p>Jugo Maggi</p><h3>Preparación</h3><p>1.Con ayuda de un cortapastas o un vaso grande, cortar 8 círculos grandes de masa.</p><p>2. Sobre 4 de ellos poner sobre cada uno, una cucharadita de tomate, una hamburguesa y un trozo de queso y cubrirlo con el resto de los círculos.</p><p>3. Unir los bordes presionando con los dedos hasta que quede bien cerrados los círculos. Hacer un pequeño orificio en el centro y pintar la masa con el jugo Maggi.</p><p>4. Cocer las empanadas burguer en el horno, previamente calentado a 200ºC, durante unos 30 minutos.</p><h3>Consejos</h3><p>Es una receta de comida fast food pero hecha en casa y con ingredientes de buena calidad.</p></div></div>", "img/empanadas-burguer-con-queso.jpg", "img/empanadas-burguer-grande.jpg"));
		recetaRepository.save(new Receta(1, "Solomillo con Salsa de Setas appelletti","Plato para lucirse y riquísimo", "<div class='col-md-9'><div class='meta'><div class='fecha'>Publicado el 13 - 06 - 2015</div></div><div class='contenido'><h3>Ingredientes</h3><p>1 solomillo de cerdo</p><p>1 barqueta Cappelletti prosciutto BUITONI</p><p> 1 tarrina Salsa Funghi BUITONI</p><p>1 diente de ajo</p><p>1 hoja de laurel</p><p>2 cucharadas de aceite de oliva pimienta</p><h3>Preparación</h3><p>1. Sazonar el solomillo con pimienta y dorarlo en un poco de aceite junto con el ajo y el laurel; flamearlo con coñac y cocerlo a fuego suave durante 15 minutos, dándole vueltas de vez en cuando. Añadir la salsa de setas y cocerlas unos minutos más a fuego muy suave.</p><p>2. Hervir los cappelletti en abundante agua con sal, tal y como se indica en el embalaje. Escurrirlo, reservando un poco del agua de cocción (1/2 vaso) y añadirla a la salsa de setas.</p><h3>Consejos</h3><p>Flamear el solomillo con coñac es opcional. Es un plato único muy completo. La salsa de setas ya lleva sal con lo que no hace falta añadir más.</p></div></div>", "img/solomillo-setas-grande.jpg", "img/solomillo-setas-grande.jpg"));
		recetaRepository.save(new Receta(1,"Roscón de hojaldre con crema de turrón y mascarpone","Aperitivo dulce para los más golosos","<div class='col-md-9'><div class='meta'><div class='fecha'>Publicado el 13 - 06 - 2015</div></div><div class='contenido'><h3>Ingredientes</h3><p>100 g de Leche condensada LA LECHERA</p><p>250 g de mascarpone</p><p> 200 g de turrón de Jijona</p><p>200 ml de nata para montar</p><p>2 masas de hojaldre redondas BUITONI</p><p>2 cucharadas de aceite de oliva pimienta</p><p>1 huevo para pintar</p><p>30 g de almendras laminadas</p><p>Azúcar glass</p><h3>Preparación</h3><p>1. Para la crema:  En un bol rallar el turrón de Jijona y añadir la leche condensada y el mascarpone. Batir bien todos los ingredientes. Montar la nata e incorporarla con movimientos suaves y envolventes.</p><p>2. Dejar toda la noche en la nevera tapada con papel film.</p><p>3. Precalentar el horno a 180º. Sacar el hojaldre 15m antes de hornearlos. Desenrollar una masa de hojaldre y con aro de emplatar o un vaso, cortar un círculo en el centro. Hornear unos 15m hasta que esté dorada. Retirar y dejar enfriar encima de una rejilla. Hacer lo mismo con la otra masa de hojaldre, y ésta, pitarla con huevo batido y espolvorear con la almendra laminada. Hornear igual unos 15m y dejar enfriar.</p><p>4. Poner la primera masa de hojaldre al revés y rellenar con la crema de turrón. Poner encima el otro hojaldre y espolvorear con azúcar glas.</p><h3>Consejos</h3><p>Es una receta de comida tradicional y con ingredientes de buena calidad.</p></div></div>","img/roscon-de-hojaldre-con-crema-de-turron-y-mascarpone.jpg", "img/roscon-de-hojaldre-con-crema-de-turron-y-mascarpone.jpg"));
		recetaRepository.save(new Receta(2,"Pijama Helado", "Postre sencillo y original para el veranito", "<div class='col-md-9'> <div class='meta'><div class='fecha'>Publicado el 13 - 06 - 2015</div></div><div class='contenido'><h3>Ingredientes</h3><p>1 bloque de Helado tres gustos NESTLÉ (4 cortes)</p><p>4 flanes de huevo LA LECHERA</p><p> 200 g de fresones</p><p>2 cucharadas de azúcar de caña</p><h3>Preparación</h3><p>1.Limpiar los fresones y cortarlos en láminas o dados pequeños. Espolvorearlos con el azúcar y dejarlos reposar unos 15’.</p><p>2. En el momento del postre, cortar cada corte de helado por la mitad y colocar en un vaso transparente u otro recipiente transparente similar (vaso de yogur).</p><p>3. Repartir un flan en cada vaso y cubrirlo con los fresones macerados. Servirlo inmediatamente.</p><h3>Consejos</h3><p>Es un postre que se tienen que ver las capas y se puede preparar con cualquier tipo de fruta.</p></div></div>", "img/pijama-helado.jpg", "img/pijama-helado-grande.jpg"));
		recetaRepository.save(new Receta(2, "Crema de guisantes al queso", "Lo tradicional y lo moderno en un mismo plato", "<div class='col-md-9'><div class='meta'><div class='fecha'>Publicado el 13 - 06 - 2015</div></div><div class='contenido'><h3>Ingredientes</h3><p>600 g. guisantes (peso neto)</p><p>2 patatas</p><p> 200 g de turrón de Jijona</p><p>210 g (1 brik peq) de Leche Evaporada IDEAL</p><p>1 pastilla de Caldo de Verduras MAGGI</p><p>50g. gruyer rallado</p><p>sal</p><p>pimienta</p><p>agua AQUAREL</p><h3>Preparación</h3><p>1.Cocer los guisantes y patatas peladas y cortadas en dados en 3/4 l. de agua con la pastilla de caldo hasta que estén tiernos (unos 15 minutos).</p><p>2. Triturarlo (reservar algunos guisantes enteros para decorar) hasta obtener una crema fina, agregar leche evaporada y queso y rectificar la sal.</p><p>3. Calentar a fuego suave, removiendo para que el queso se vaya deshaciendo.</p><h3>Consejos</h3><p>Servir la crema en boles con los quisantes reservados y un chorrito de aceite de oliva.</p></div></div>","img/crema-de-guisantes-al-queso.jpg","img/crema-de-guisantes-al-queso.jpg"));
		// Sample tipocomidas
		
		tipocomidaRepository.save(new Tipocomida("Comida Española", "Comida de todo el territorio español","<h3>Descripción</h3><p>La gastronomía de España es una variada forma de preparar platos, que se ve enriquecida por las aportaciones de las diversas regiones que componen el país. Cocina de origen que oscila entre el estilo rural y el costero, representa una diversidad fruto de muchas culturas, así como de paisajes y climas. La cocina española está fuertemente influida a lo largo de su historia por los pueblos que conquistan su territorio, así como de los pueblos que posteriormente conquista y coloniza. Esta situación le ha proporcionado una gran variedad de técnicas culinarias e ingredientes.</p><h3>Ejemplos de Comida Española</h3><div class='row'><div class='col-xs-4 col-md-4 videos'><h3>Tortilla de Patatas</h3><ul><li><img src='img/tortillapng.png' width='100px' height='auto'/></li></ul></div><div class='col-xs-4 col-md-4 resources'><h3>Paella</h3><ul><li><img src='img/paella.png' width='100px' height='auto' /><ul></div><div class='col-xs-4 col-md-4 resources'><h3>Pulpo a la Gallega</h3><ul><li><img src='img/pulpo.png' width='100px' height='auto' /></li></ul></div>", "img/banderaEsp.jpg", "img/banderaspain.jpg", new long[]{1,2},new long[]{3,1}));
		tipocomidaRepository.save(new Tipocomida("Comida Norte Americana", "Aquí encontrarás toda la gastronomía típica de los Estados Unidos","<h3>Descripción</h3><p>La gastronomía de los Estados Unidos corresponde a una mezcla muy variada y algo interpretada de otras gastronomías, esto es así debido a que es un país creado fundamentalmente de inmigrantes procedentes de diferentes países de Europa, Asia, África, y otros países. Podría denominarse como autóctona la gastronomía de los indígenas de Norteamérica y el resto es una fusión de diferentes culturas gastronómicas llevadas a diferentes extremos, por una parte está la fast food llena de su atractivo marketing, por otra parte está la comida tradicioshnal fundamentada en las tradiciones ganaderas de antaño, tanto de ganado vacuno como ovino y caprino. Las comidas extranjeras más famosas son la China y la de sus vecinos de México.</p><h3>Ejemplos de Comida Norte Americana</h3><div class='row'><div class='col-xs-4 col-md-4 videos><h3>Hamburguesa</h3><ul><li><img src='img/foster-black.png' width='100px' height='auto'/></li></ul></div><div class='col-xs-4 col-md-4 resources'><h3>Costillas</h3><ul><li><img src='img/foster-national.png' width='100px' height='auto' /><ul></div><div class='col-xs-4 col-md-4 resources'><h3>Bacon Cheese Fires</h3><ul><li><img src='img/foster-patatas.png' width='100px' height='auto' /></li></ul></div>", "img/banderaEEUU.jpg", "img/banderaEEUU.jpg", new long[]{2, 4, 5},new long[]{2, 4, 5}));
		tipocomidaRepository.save(new Tipocomida("Comida Italiana", "Comida típica de la región italiana","<h3>Descripción</h3><p>La comida de Italia es variada. Refleja la variedad cultural de sus regiones así como la diversidad de su historia. La cocina italiana, está incluida dentro de la denominada gastronomía mediterránea y es imitada y practicada en todo el mundo. Es muy común que se conozca a la gastronomía de Italia por sus platillos más famosos, como la pizza, la pasta y el risotto, pero lo cierto es que es una cocina donde coexisten los abundantes olores y sabores del mediterráneo. Se trata de una cocina con fuerte carácter tradicional, variada gracias a cada una de sus regiones y heredera de largas tradiciones, que ha sabido perpetuar recetas antiguas como la pizza, plato napolitano por excelencia, o la polenta, que hoy en día puede degustarse en cualquier trattoria del norte.</p><h3>Ejemplos de Comida Italiana</h3><div class='row'><div class='col-xs-4 col-md-4 videos'><h3>Pasta</h3><ul><li><img src='img/pasta.png' width='100px' height='auto'/></li></ul></div><div class='col-xs-4 col-md-4 resources'><h3>Pizza</h3><ul><li><img src='img/tp-primavera.png' width='100px' height='auto' /><ul></div><div class='col-xs-4 col-md-4 resources'><h3>Helado</h3><ul><li><img src='img/helado.png' width='100px' height='auto' /></li></ul></div>", "img/banderaITA.jpg", "img/banderaITA.jpg", new long[]{2,4,5},new long[]{2,4,5}));
		tipocomidaRepository.save(new Tipocomida("Comida India", "Aquí encontrarás la comida india típica","<h3>Descripción</h3><p>La gastronomía India es muy variada, surge como resultado de la diversidad de culturas que la han enriquecido a lo largo de las colonizaciones acaecidas durante varios siglos. Así se fueron incorporando diferentes prácticas culinarias traídas por los colonos que con el tiempo se fueron mezclando hasta llegar a ser el conjunto de tendencias que se conocen en la actualidad. La mayoría de los sabores de la India están íntimamente relacionados por el uso significativo de especias, y una gran variedad de verduras. Dentro de esta tendencia general existe una diversidad enorme de estilos locales..</p>", "img/banderaIND2.jpg", "img/banderaIND2.jpg", new long []{2,4,5}, new long[]{2,4,5}));
		tipocomidaRepository.save(new Tipocomida("Comida Mexicana", "Aquí podrás encontrar la comida tíca mexicana","<h3>Descripción</h3><p>La gastronomía mexicana es el conjunto de platillos endémicos de México que forman parte de sus tradiciones culinarias y que derivan tanto de la cocina mesoamericana como de la europea, entre otras. El 16 de noviembre de 2010 la gastronomía mexicana fue reconocida como Patrimonio Inmaterial de la Humanidad por la UNESCO. La cocina mexicana ha sido influida y ha influido a su vez en cocinas de otras culturas, como: española, africana, del Oriente Medio, asiática. Representa también la cultura histórica de ese país, ya que muchos platillos se originaron mucho antes de la Conquista (por ejemplo, la cocina de la cultura mexicana), y existen en ella una amplia diversidad de sabores, colores y texturas que hacen de la comida mexicana un gran atractivo tanto para nacionales como extranjeros. México es muy famoso por su gastronomía. A diferencia de la gastronomía de otros países del continente americano, la base de la comida mexicana actual es exactamente la misma que la existente en la época prehispánica, con un uso preponderante del maíz, frijoles, chiles, tomates y diversas aves (pavo o guajolote) y hierbas, además de insectos y condimentos mexicanos..</p><h3>Ejemplos de Comida Mexicana</h3><div class='row'><div class='col-xs-4 col-md-4 videos'><h3>Tacos</h3><ul><li><img src='img/tacos.png' width='100px' height='auto'/></li></ul></div><div class='col-xs-4 col-md-4 resources'><h3>Nachos</h3><ul><li><img src='img/nachos.png' width='100px' height='auto' /><ul></div><div class='col-xs-4 col-md-4 resources'><h3>Burritos</h3><ul><li><img src='img/burritos.png' width='100px' height='auto' /></li></ul></div>", "img/banderaMEX.jpg", "img/banderaMEX.jpg", new long[]{2,4,5},new long []{2,4,5}));
		tipocomidaRepository.save(new Tipocomida("Comida Inglesa", "Aquí encontrarás toda la gastronomía inglesa","<h3>Descripción</h3><p>La cocina británica está formada por un conjunto de costumbres y de alimentos adaptados no sólo al clima de las islas sino que, debido a su historia, y a las interacciones con otras culturas europeas y asiáticas (cocina china y cocina de la India), ha recibido ciertas influencias que se pueden notar no sólo en la elaboración de los platos sino en sus ingredientes. Los platos tradicionales tienen raíces muy antiguas, tales como la elaboración de pan y el queso, las carnes asadas, pescados procedentes del mar o de los ríos, todos ellos mezclados con los chiles provenientes de Norteamérica, las especias y curries de la India y Bangladés, los fritos basados en la cocina china y tailandesa. La cocina francesa y la cocina italiana, consideradas en el pasado como algo extranjero y admiradas en la actualidad, hasta el extremo de ser copiadas. La cocina de Gran Bretaña ha sido una de las primeras en adoptar e incorporar a su filosofía cotidiana la comida rápida (fast food) procedente de los Estados Unidos y esto se nota al pasear por las calles de cualquier gran ciudad británica.</p><h3>Ejemplos de Comida Inglesa</h3><div class='row'><div class='col-xs-4 col-md-4 videos'><h3>Fish & Chips</h3><ul><li><img src='img/fishandchips.png' width='100px' height='auto'/></li></ul></div><div class='col-xs-4 col-md-4 resources'><h3>English Breakfast</h3><ul><li><img src='img/englishbreakfast.png' width='100px' height='auto' /><ul></div><div class='col-xs-4 col-md-4 resources'><h3>Cornish Pasty</h3><ul><li><img src='img/cornishpasty.png' width='100px' height='auto' /></li></ul></div>", "img/banderaING.jpg", "img/banderaING.jpg", new long[]{2,4,5}, new long[]{2,4,5}));
		
	}
}
