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
public class RecetaController {

	private static final Path FILES_FOLDER = Paths.get(System.getProperty("user.dir"), "files");

	private List<Restaurante> recetas = new ArrayList<>();

	@RequestMapping (value = "/recetas", method = RequestMethod.POST)
	@ResponseStatus(HttpStatus.CREATED)
	public Receta nuevaReceta(@RequestBody Receta receta){
		
		return receta;
	}
	
	@RequestMapping(value = "/recetas/{id}", method=RequestMethod.GET)
	public ResponseEntity<Receta> getReceta(@PathVariable int id){
		Receta receta = new Receta(null, null);
		receta = recetas.get(id);
		return new ResponseEntity<>(receta, HttpStatus.OK);
		
		//Hay que meter si existe o no receta
	}
	
	@RequestMapping(value = "/recetas", method=RequestMethod.GET)	
	public ResponseEntity <List<Receta>> getRecetas() {
		return new ResponseEntity<> (recetas, HttpStatus.OK);
	}

	@RequestMapping(value="/recetas/{id}",method=RequestMethod.DELETE)
	public ResponseEntity<Receta> borrarRestaurante(@PathVariable long id){
		Receta receta = new Receta(null, null);
		receta = recetas.get((int) id);
		return new ResponseEntity<>(receta, HttpStatus.OK);
	}

}