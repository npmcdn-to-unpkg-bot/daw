package es.urjc.code.daw.library.tipocomida;

import javax.persistence.Column;
//import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Tipocomida {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long id = -1;
	private String title;
	private String description;
	@Column(length = 50000)
	private String details;
	private String thumbnail;
	private String thumbnailbig;
	private long[] recetas;
	private long[] restaurantes;
	//private ArrayList<long> recetas;
	//private ArrayList<long> restaurantes;
	
	public Tipocomida() {}

	public Tipocomida(String title, String description, String details, String thumbnail, String thumbnailbig, long[] recetas, long[] restaurantes) {
		super();
		this.title = title;
		this.description = description;
		this.details = details;
		this.thumbnail = thumbnail;
		this.thumbnailbig = thumbnailbig;
		this.recetas = recetas;
		this.restaurantes = restaurantes;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}
	
	public String getDetails() {
		return details;
	}

	public void setDetails(String details) {
		this.details = details;
	}
	
	public String getThumbnail() {
		return thumbnail;
	}

	public void setThumbnail(String thumbnail) {
		this.thumbnail = thumbnail;
	}
	
	public String getThumbnailbig() {
		return thumbnailbig;
	}

	public void setThumbnailbig(String thumbnailbig) {
		this.thumbnailbig = thumbnailbig;
	}
	
	public long[] getRecetas() {
		return recetas;
	}

	public void setRecetas(long[] recetas) {
		this.recetas = recetas;
	}
	
	public long[] getRestaurantes() {
		return restaurantes;
	}

	public void setRestaurantes(long[] restaurantes) {
		this.restaurantes = restaurantes;
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	@Override
	public String toString() {
		return "Tipo comida [id=" + id + ", title=" + title + ", descripcion=" + description + "]";
	}

}
