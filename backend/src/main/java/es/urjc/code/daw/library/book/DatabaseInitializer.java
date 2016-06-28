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

		userRepository.save(new User("user", "pass", "ROLE_USER"));
		userRepository.save(new User("admin", "pass", "ROLE_USER", "ROLE_ADMIN"));
		
		// Sample restaurantes
		
		restauranteRepository.save(new Restaurante("The Good Burger", "Especialistas en el mundo de la hamburguesa", "<h3>Descripción</h3><p>ESTA ES LA BUENA HAMBURGUESA. La calidad está aquí. Llamándonos The Good Burger pensarás que somos americanos, o ingleses, pero somos una hamburguesería española que ha cogido la esencia de la hamburguesa clásica con los sabores que más nos gustan aquí. Por eso las elaboramos con ingredientes de la mejor calidad y adaptadas a tu gusto. Porque hamburguesas buenas hay muchas, pero nosotros queremos ser los mejores.</p><h3>Recomendación de platos</h3><div class='row'><div class='col-xs-4 col-md-4 videos'><h3>Hamburguesas</h3><ul><li><img src='img/tgb-burguertgb.png' width='100px' height='auto' />Hamburguesa TGB<hr align='left' noshade='noshade' size='2' width='80%' /></li><li><img src='img/tgb-bbq.png' width='100px' height='auto' />Hamburguesa BBQ<hr align='left' noshade='noshade' size='2' width='80%' /></li><li><img src='img/tgb-pollo.png' width='100px' height='auto' />Hamburguesa de Pollo<hr align='left' noshade='noshade' size='2' width='80%' /></li></ul></div><div class='col-xs-4 col-md-4 resources'><h3>Hot Dogs</h3><ul><li><img src='img/tgb-hotdog_California.png' width='100px' height='auto' />Hot Dog California<hr align='left' noshade='noshade' size='2' width='80%' /></li><li><img src='img/tgb-hotdog_NewYork.png' width='100px' height='auto' />Hot Dog New York<hr align='left' noshade='noshade' size='2' width='80%' /></li><li><img src='img/tgb-hotdog_Washington.png' width='100px' height='auto' />Hot Dog Washington<hr align='left' noshade='noshade' size='2' width='80%' /></li></ul></div><div class='col-xs-4 col-md-4 popular'><h3>Ensaladas</h3><ul><li><img src='img/tgb-santa_fe.png' width='100px' height='auto' />Ensalada Santa Fe<hr align='left' noshade='noshade' size='2' width='80%' /></li><li><img src='img/tgb-cesar.png' width='100px' height='auto' />Ensalada César<hr align='left' noshade='noshade' size='2' width='80%' /></li><li><img src='img/tgb-huerta.png' width='100px' height='auto' />Ensalada de la Huerta<hr align='left' noshade='noshade' size='2' width='80%' /></li></ul></div></div>", "img/TGBGrande.jpg", "img/tgb-restaurante.jpg", "https://www.google.com/maps/d/embed?mid=zgD1lMPodVgY.kwc1klKug9fM&hl=en_US"));
		restauranteRepository.save(new Restaurante("Fosters Hollywood","Sabor americano de alta calidad", "<h3>Descripción</h3><p>Foster`s Hollywood es una cadena de restaurantes de comida americana localizada en España, cuyos establecimientos son caracterizables entre los llamados casual restaurants, pero entendidos en una cultura ajena como una suerte de «restaurantes étnicos», como pudieran ser los italianos u orientales.</p><h3>Recomendación de platos</h3><div class='row'><div class='col-xs-4 col-md-4 videos'><h3>Hamburguesas</h3><ul><li><img src='img/foster-black.png' width='100px' height='auto' />Black Label Burguer<hr align='left' noshade='noshade' size='2' width='80%' /></li><li><img src='img/foster-iberica.png' width='100px' height='auto' />Gran Ibérica Burger<hr align='left' noshade='noshade' size='2' width='80%' /></li><li><img src='img/foster-wagyu.png' width='100px' height='auto' />Wagyú Burger<hr align='left' noshade='noshade' size='2' width='80%' /></li></ul></div><div class='col-xs-4 col-md-4 resources'><h3>Costillas</h3><ul><li><img src='img/foster-missouri.png' width='100px' height='auto' />Missouri ST. Louis<hr align='left' noshade='noshade' size='2' width='80%' /></li><li><img src='img/foster-kansas.png' width='100px' height='auto' />Kansas Baby Back<hr align='left' noshade='noshade' size='2' width='80%' /></li><li><img src='img/foster-national.png' width='100px' height='auto' />National Star Ribs<hr align='left' noshade='noshade' size='2' width='80%' /></li></ul></div><div class='col-xs-4 col-md-4 popular'><h3>Entrantes</h3><ul><li><img src='img/foster-patatas.png' width='100px' height='auto' />Bacon & Cheese Fries<hr align='left' noshade='noshade' size='2' width='80%' /></li><li><img src='img/foster-combo.png' width='100px' height='auto' />Hollywood Combo<hr align='left' noshade='noshade' size='2' width='80%' /></li><li><img src='img/foster-chicken.png' width='100px' height='auto' />Fosters Chicken Pops<hr align='left' noshade='noshade' size='2' width='80%' /></li></ul></div></div>", "img/FosterGrande.jpg", "img/fostershollywood-restaurante.jpg", "https://www.google.com/maps/d/embed?mid=zgD1lMPodVgY.kwc1klKug9fM&hl=en_US"));
		
		// Sample recetas
		
		recetaRepository.save(new Receta(1, "Empanadas Burguer con Queso", "El aperitivo perfecto", "<div class='col-md-9'><div class='meta'><div class='fecha'>Publicado el 13 - 06 - 2015</div></div><div class='contenido'><h3>Ingredientes</h3><p>1 Masa para Empanada BUITONI</p><p>4 mini-hamburguesas de carne (25 g)</p><p>4 cucharaditas de Tomate Frito SOLIS 0%</p><p>1 loncha de queso para fundir</p><p>Jugo Maggi</p><h3>Preparación</h3><p>1.Con ayuda de un cortapastas o un vaso grande, cortar 8 círculos grandes de masa.</p><p>2. Sobre 4 de ellos poner sobre cada uno, una cucharadita de tomate, una hamburguesa y un trozo de queso y cubrirlo con el resto de los círculos.</p><p>3. Unir los bordes presionando con los dedos hasta que quede bien cerrados los círculos. Hacer un pequeño orificio en el centro y pintar la masa con el jugo Maggi.</p><p>4. Cocer las empanadas burguer en el horno, previamente calentado a 200ºC, durante unos 30 minutos.</p><h3>Consejos</h3><p>Es una receta de comida fast food pero hecha en casa y con ingredientes de buena calidad.</p></div></div>", "img/empanadas-burguer-con-queso.jpg", "img/empanadas-burguer-grande.jpg"));
		recetaRepository.save(new Receta(1, "Solomillo con Salsa de Setas appelletti","Plato para lucirse y riquísimo", "<div class='col-md-9'><div class='meta'><div class='fecha'>Publicado el 13 - 06 - 2015</div></div><div class='contenido'><h3>Ingredientes</h3><p>1 solomillo de cerdo</p><p>1 barqueta Cappelletti prosciutto BUITONI</p><p> 1 tarrina Salsa Funghi BUITONI</p><p>1 diente de ajo</p><p>1 hoja de laurel</p><p>2 cucharadas de aceite de oliva pimienta</p><h3>Preparación</h3><p>1. Sazonar el solomillo con pimienta y dorarlo en un poco de aceite junto con el ajo y el laurel; flamearlo con coñac y cocerlo a fuego suave durante 15 minutos, dándole vueltas de vez en cuando. Añadir la salsa de setas y cocerlas unos minutos más a fuego muy suave.</p><p>2. Hervir los cappelletti en abundante agua con sal, tal y como se indica en el embalaje. Escurrirlo, reservando un poco del agua de cocción (1/2 vaso) y añadirla a la salsa de setas.</p><h3>Consejos</h3><p>Flamear el solomillo con coñac es opcional. Es un plato único muy completo. La salsa de setas ya lleva sal con lo que no hace falta añadir más.</p></div></div>", "img/solomillo-setas-grande.jpg", "img/solomillo-setas-grande.jpg"));

	}

}
