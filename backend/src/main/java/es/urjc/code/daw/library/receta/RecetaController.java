package es.urjc.code.daw.library.receta;

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
@RequestMapping("/recetas")
public class RecetaController {

	private static final Logger log = LoggerFactory.getLogger(RecetaController.class);

	@Autowired
	private RecetaRepository repository;

	@RequestMapping(value = "/", method = RequestMethod.GET)
	public Collection<Receta> getReceta() {
		return repository.findAll();
	}

	@RequestMapping(value = "/{id}", method = RequestMethod.GET)
	public ResponseEntity<Receta> getReceta(@PathVariable long id) {

		log.info("Get receta {}", id);

		Receta receta = repository.findOne(id);
		if (receta != null) {
			return new ResponseEntity<>(receta, HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}

	@RequestMapping(value = "/", method = RequestMethod.POST)
	@ResponseStatus(HttpStatus.CREATED)
	public Receta nuevoReceta(@RequestBody Receta receta) {

		repository.save(receta);

		return receta;
	}

	@RequestMapping(value = "/{id}", method = RequestMethod.PUT)
	public ResponseEntity<Receta> actulizaReceta(@PathVariable long id, @RequestBody Receta recetaActualizado) {

		Receta receta = repository.findOne(id);
		if (receta != null) {

			recetaActualizado.setId(id);
			repository.save(recetaActualizado);

			return new ResponseEntity<>(recetaActualizado, HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}

	@RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
	public ResponseEntity<Receta> borraReceta(@PathVariable long id) {

		if (repository.exists(id)) {
			repository.delete(id);
			return new ResponseEntity<>(null, HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}

}
