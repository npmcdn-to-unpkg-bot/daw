package es.urjc.code.daw.library.receta;

import javax.persistence.Column;
//import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Receta {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long id = -1;
    private long userid;
	private String title;
	private String description;
	@Column(length = 50000)
	private String details;
	private String thumbnail;
	private String thumbnailbig;

	public Receta() {}

	public Receta(long userid, String title, String description, String details, String thumbnail, String thumbnailbig) {
		super();
        this.userid = userid;
		this.title = title;
		this.description = description;
		this.details = details;
		this.thumbnail = thumbnail;
		this.thumbnailbig = thumbnailbig;
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
	
	public long getUserid() {
		return userid;
	}

	public void setUserid(long userid) {
		this.userid = userid;
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	@Override
	public String toString() {
		return "Receta [id=" + id + ", title=" + title + ", descripcion=" + description + "]";
	}

}
