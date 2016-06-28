package es.urjc.code.daw.library.tipocomida;

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
@RequestMapping("/tipocomidas")
public class TipocomidaController {

	private static final Logger log = LoggerFactory.getLogger(TipocomidaController.class);

	@Autowired
	private TipocomidaRepository repository;

	@RequestMapping(value = "/", method = RequestMethod.GET)
	public Collection<Tipocomida> getTipocomidas() {
		return repository.findAll();
	}

	@RequestMapping(value = "/{id}", method = RequestMethod.GET)
	public ResponseEntity<Tipocomida> getTipocomida(@PathVariable long id) {

		log.info("Get tipocomida {}", id);

		Tipocomida tipocomida = repository.findOne(id);
		if (tipocomida != null) {
			return new ResponseEntity<>(tipocomida, HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}

	@RequestMapping(value = "/", method = RequestMethod.POST)
	@ResponseStatus(HttpStatus.CREATED)
	public Tipocomida nuevoTipocomida(@RequestBody Tipocomida tipocomida) {

		repository.save(tipocomida);

		return tipocomida;
	}

	@RequestMapping(value = "/{id}", method = RequestMethod.PUT)
	public ResponseEntity<Tipocomida> actulizaTipocomida(@PathVariable long id, @RequestBody Tipocomida tipocomidaActualizado) {

		Tipocomida tipocomida = repository.findOne(id);
		if (tipocomida != null) {

			tipocomidaActualizado.setId(id);
			repository.save(tipocomidaActualizado);

			return new ResponseEntity<>(tipocomidaActualizado, HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}

	@RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
	public ResponseEntity<Tipocomida> borraTipocomida(@PathVariable long id) {

		if (repository.exists(id)) {
			repository.delete(id);
			return new ResponseEntity<>(null, HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}

}
