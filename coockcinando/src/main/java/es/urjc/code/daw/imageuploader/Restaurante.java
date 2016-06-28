package es.urjc.code.daw.imageuploader;

public class Restaurante {

	private String description;
	private String fileName;

	public Restaurante(String description, String fileName) {
		super();
		this.description = description;
		
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	
	@Override
	public String toString() {
		return "Image [description=" + description + ",";
	}

}
