package es.urjc.code.daw.imageuploader;

import java.io.File;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.List;

import javax.servlet.http.HttpServletResponse;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.util.FileCopyUtils;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

@RestController
@CrossOrigin(origins = "*")
public class RestauranteController {

	private static final Path FILES_FOLDER = Paths.get(System.getProperty("user.dir"), "files");

	private List<Restaurante> restaurantes = new ArrayList<>();

	@RequestMapping (value = "/restaurantes", method = RequestMethod.POST)
	@ResponseStatus(HttpStatus.CREATED)
	public Restaurante nuevoRestaurante(@RequestBody Restaurante restaurante){
		
		return restaurante;
	}
	
	@RequestMapping(value = "/restaurantes/{id}", method=RequestMethod.GET)
	public ResponseEntity<Restaurante> getRestaurante(@PathVariable int id){
		Restaurante restaurante = new Restaurante(null, null);
		restaurante = restaurantes.get(id);
		return new ResponseEntity<>(restaurante, HttpStatus.OK);
		
		//Hay que meter si existe o no el anuncio
	}
	
	@RequestMapping(value = "/restaurantes", method=RequestMethod.GET)	
	public ResponseEntity <List<Restaurante>> getRestaurantes() {
		return new ResponseEntity<> (restaurantes, HttpStatus.OK);
	}

	@RequestMapping(value="/restaurantes/{id}",method=RequestMethod.DELETE)
	public ResponseEntity<Restaurante> borrarRestaurante(@PathVariable long id){
		Restaurante restaurante = new Restaurante(null, null);
		restaurante = restaurantes.get((int) id);
		return new ResponseEntity<>(restaurante, HttpStatus.OK);
	}
	
	@RequestMapping(value="/restaurantes/{id}", method=RequestMethod.UPDATE)
	public ResponseEntity<Restaurante> editarRestaurante(@PathVariable long id){
		//Restaurante restaurante = new Restaurante(ARGUMENTOS)
		restaurantes.get(id) = restaurante;
		return new ResponseEntity<>(restaurante, HttpStatus.OK);
	}
	
	
}