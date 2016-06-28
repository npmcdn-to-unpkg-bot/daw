package es.urjc.code.daw.imageuploader;

public class Receta {

	private String description;
	private String fileName;

	public Receta(String description, String fileName) {
		super();
		this.description = description;
		this.fileName = fileName;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public String getFileName() {
		return fileName;
	}

	public void setFileName(String fileName) {
		this.fileName = fileName;
	}

	@Override
	public String toString() {
		return "Image [description=" + description + ", fileName=" + fileName + "]";
	}

}
