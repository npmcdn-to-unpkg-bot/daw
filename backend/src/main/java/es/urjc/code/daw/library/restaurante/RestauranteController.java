package es.urjc.code.daw.library.restaurante;

import java.util.Collection;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/restaurantes")
public class RestauranteController {

	private static final Logger log = LoggerFactory.getLogger(RestauranteController.class);

	@Autowired
	private RestauranteRepository repository;

	@RequestMapping(value = "/", method = RequestMethod.GET)
	public Collection<Restaurante> getRestaurantes() {
		return repository.findAll();
	}

	@RequestMapping(value = "/{id}", method = RequestMethod.GET)
	public ResponseEntity<Restaurante> getRestaurante(@PathVariable long id) {

		log.info("Get restaurante {}", id);

		Restaurante restaurante = repository.findOne(id);
		if (restaurante != null) {
			return new ResponseEntity<>(restaurante, HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}

	@RequestMapping(value = "/", method = RequestMethod.POST)
	@ResponseStatus(HttpStatus.CREATED)
	public Restaurante nuevoRestaurante(@RequestBody Restaurante restaurante) {

		repository.save(restaurante);

		return restaurante;
	}

	@RequestMapping(value = "/{id}", method = RequestMethod.PUT)
	public ResponseEntity<Restaurante> actulizaRestaurante(@PathVariable long id, @RequestBody Restaurante restauranteActualizado) {

		Restaurante restaurante = repository.findOne(id);
		if (restaurante != null) {

			restauranteActualizado.setId(id);
			repository.save(restauranteActualizado);

			return new ResponseEntity<>(restauranteActualizado, HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}

	@RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
	public ResponseEntity<Restaurante> borraRestaurante(@PathVariable long id) {

		if (repository.exists(id)) {
			repository.delete(id);
			return new ResponseEntity<>(null, HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}

}
