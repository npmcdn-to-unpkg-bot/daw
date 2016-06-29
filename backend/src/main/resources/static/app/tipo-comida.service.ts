import {Injectable} from 'angular2/core';
import {Observable} from 'rxjs/Observable';
import {withObserver} from './utils';


export class TipoComida {
	id?: number;
	title: string;
	description: string;
	details: string;
	thumbnail: string;
	thumbnailbig: string;
	map: string;
}

const URL = 'tiposComidas/';

@Injectable()
export class TipoComidaService{
    private tiposComidas = [
    new TipoComida(1,'Comida Española', 'Comida de todo el territorio español','<h3>Descripción</h3><p>La gastronomía de España es una variada forma de preparar platos, que se ve enriquecida por las aportaciones de las diversas regiones que componen el país. Cocina de origen que oscila entre el estilo rural y el costero, representa una diversidad fruto de muchas culturas, así como de paisajes y climas. La cocina española está fuertemente influida a lo largo de su historia por los pueblos que conquistan su territorio, así como de los pueblos que posteriormente conquista y coloniza. Esta situación le ha proporcionado una gran variedad de técnicas culinarias e ingredientes.</p><h3>Ejemplos de Comida Española</h3><div class="row"><div class="col-xs-4 col-md-4 videos"><h3>Tortilla de Patatas</h3><ul><li><img src="img/tortillapng.png" width="100px" height="auto"/></li></ul></div><div class="col-xs-4 col-md-4 resources"><h3>Paella</h3><ul><li><img src="img/paella.png" width="100px" height="auto" /><ul></div><div class="col-xs-4 col-md-4 resources"><h3>Pulpo a la Gallega</h3><ul><li><img src="img/pulpo.png" width="100px" height="auto" /></li></ul></div>', 'img/banderaEsp.jpg', 'img/banderaspain.jpg', [1,2],[3,1]),
    
    new TipoComida(2,'Comida Norte Americana', 'Aquí encontrarás toda la gastronomía típica de los Estados Unidos','<h3>Descripción</h3><p>La gastronomía de los Estados Unidos corresponde a una mezcla muy variada y algo interpretada de otras gastronomías, esto es así debido a que es un país creado fundamentalmente de inmigrantes procedentes de diferentes países de Europa, Asia, África, y otros países. Podría denominarse como autóctona la gastronomía de los indígenas de Norteamérica y el resto es una fusión de diferentes culturas gastronómicas llevadas a diferentes extremos, por una parte está la fast food llena de su atractivo marketing, por otra parte está la comida tradicioshnal fundamentada en las tradiciones ganaderas de antaño, tanto de ganado vacuno como ovino y caprino. Las comidas extranjeras más famosas son la China y la de sus vecinos de México.</p><h3>Ejemplos de Comida Norte Americana</h3><div class="row"><div class="col-xs-4 col-md-4 videos"><h3>Hamburguesa</h3><ul><li><img src="img/foster-black.png" width="100px" height="auto"/></li></ul></div><div class="col-xs-4 col-md-4 resources"><h3>Costillas</h3><ul><li><img src="img/foster-national.png" width="100px" height="auto" /><ul></div><div class="col-xs-4 col-md-4 resources"><h3>Bacon Cheese Fires</h3><ul><li><img src="img/foster-patatas.png" width="100px" height="auto" /></li></ul></div>', 'img/banderaEEUU.jpg', 'img/banderaEEUU.jpg', [2,4,5],[2,4,5]),
    
    new TipoComida(3,'Comida Italiana', 'Comida típica de la región italiana','<h3>Descripción</h3><p>La comida de Italia es variada. Refleja la variedad cultural de sus regiones así como la diversidad de su historia. La cocina italiana, está incluida dentro de la denominada gastronomía mediterránea y es imitada y practicada en todo el mundo. Es muy común que se conozca a la gastronomía de Italia por sus platillos más famosos, como la pizza, la pasta y el risotto, pero lo cierto es que es una cocina donde coexisten los abundantes olores y sabores del mediterráneo. Se trata de una cocina con fuerte carácter tradicional, variada gracias a cada una de sus regiones y heredera de largas tradiciones, que ha sabido perpetuar recetas antiguas como la pizza, plato napolitano por excelencia, o la polenta, que hoy en día puede degustarse en cualquier trattoria del norte.</p><h3>Ejemplos de Comida Italiana</h3><div class="row"><div class="col-xs-4 col-md-4 videos"><h3>Pasta</h3><ul><li><img src="img/pasta.png" width="100px" height="auto"/></li></ul></div><div class="col-xs-4 col-md-4 resources"><h3>Pizza</h3><ul><li><img src="img/tp-primavera.png" width="100px" height="auto" /><ul></div><div class="col-xs-4 col-md-4 resources"><h3>Helado</h3><ul><li><img src="img/helado.png" width="100px" height="auto" /></li></ul></div>', 'img/banderaITA.jpg', 'img/banderaITA.jpg', [2,4,5],[2,4,5]),
    
    new TipoComida(4,'Comida India', 'Aquí encontrarás la comida india típica','<h3>Descripción</h3><p>La gastronomía India es muy variada, surge como resultado de la diversidad de culturas que la han enriquecido a lo largo de las colonizaciones acaecidas durante varios siglos. Así se fueron incorporando diferentes prácticas culinarias traídas por los colonos que con el tiempo se fueron mezclando hasta llegar a ser el conjunto de tendencias que se conocen en la actualidad. La mayoría de los sabores de la India están íntimamente relacionados por el uso significativo de especias, y una gran variedad de verduras. Dentro de esta tendencia general existe una diversidad enorme de estilos locales..</p>', 'img/banderaIND2.jpg', 'img/banderaIND2.jpg', [2,4,5],[2,4,5]),
    
    new TipoComida(5,'Comida Mexicana', 'Aquí podrás encontrar la comida tíca mexicana','<h3>Descripción</h3><p>La gastronomía mexicana es el conjunto de platillos endémicos de México que forman parte de sus tradiciones culinarias y que derivan tanto de la cocina mesoamericana como de la europea, entre otras. El 16 de noviembre de 2010 la gastronomía mexicana fue reconocida como Patrimonio Inmaterial de la Humanidad por la UNESCO. La cocina mexicana ha sido influida y ha influido a su vez en cocinas de otras culturas, como: española, africana, del Oriente Medio, asiática. Representa también la cultura histórica de ese país, ya que muchos platillos se originaron mucho antes de la Conquista (por ejemplo, la cocina de la cultura mexicana), y existen en ella una amplia diversidad de sabores, colores y texturas que hacen de la comida mexicana un gran atractivo tanto para nacionales como extranjeros. México es muy famoso por su gastronomía. A diferencia de la gastronomía de otros países del continente americano, la base de la comida mexicana actual es exactamente la misma que la existente en la época prehispánica, con un uso preponderante del maíz, frijoles, chiles, tomates y diversas aves (pavo o guajolote) y hierbas, además de insectos y condimentos mexicanos..</p><h3>Ejemplos de Comida Mexicana</h3><div class="row"><div class="col-xs-4 col-md-4 videos"><h3>Tacos</h3><ul><li><img src="img/tacos.png" width="100px" height="auto"/></li></ul></div><div class="col-xs-4 col-md-4 resources"><h3>Nachos</h3><ul><li><img src="img/nachos.png" width="100px" height="auto" /><ul></div><div class="col-xs-4 col-md-4 resources"><h3>Burritos</h3><ul><li><img src="img/burritos.png" width="100px" height="auto" /></li></ul></div>', 'img/banderaMEX.jpg', 'img/banderaMEX.jpg', [2,4,5],[2,4,5]),
    
    new TipoComida(6,'Comida Inglesa', 'Aquí encontrarás toda la gastronomía inglesa','<h3>Descripción</h3><p>La cocina británica está formada por un conjunto de costumbres y de alimentos adaptados no sólo al clima de las islas sino que, debido a su historia, y a las interacciones con otras culturas europeas y asiáticas (cocina china y cocina de la India), ha recibido ciertas influencias que se pueden notar no sólo en la elaboración de los platos sino en sus ingredientes. Los platos tradicionales tienen raíces muy antiguas, tales como la elaboración de pan y el queso, las carnes asadas, pescados procedentes del mar o de los ríos, todos ellos mezclados con los chiles provenientes de Norteamérica, las especias y curries de la India y Bangladés, los fritos basados en la cocina china y tailandesa. La cocina francesa y la cocina italiana, consideradas en el pasado como algo extranjero y admiradas en la actualidad, hasta el extremo de ser copiadas. La cocina de Gran Bretaña ha sido una de las primeras en adoptar e incorporar a su filosofía cotidiana la comida rápida (fast food) procedente de los Estados Unidos y esto se nota al pasear por las calles de cualquier gran ciudad británica.</p><h3>Ejemplos de Comida Inglesa</h3><div class="row"><div class="col-xs-4 col-md-4 videos"><h3>Fish & Chips</h3><ul><li><img src="img/fishandchips.png" width="100px" height="auto"/></li></ul></div><div class="col-xs-4 col-md-4 resources"><h3>English Breakfast</h3><ul><li><img src="img/englishbreakfast.png" width="100px" height="auto" /><ul></div><div class="col-xs-4 col-md-4 resources"><h3>Cornish Pasty</h3><ul><li><img src="img/cornishpasty.png" width="100px" height="auto" /></li></ul></div>', 'img/banderaING.jpg', 'img/banderaING.jpg', [2,4,5],[2,4,5])
    ];
    
    getTiposComidas() {
    	return this.http.get(URL)
      .map(response => response.json())
      .catch(error => this.handleError(error));
  }

  getTipoComida(id: number | string) {
    return this.http.get(URL + id)
	      .map(response => response.json())
	      .catch(error => this.handleError(error));
  }

  removeTipoComida(tipoComida: TipoComida){
    let headers = new Headers({
	   'X-Requested-With': 'XMLHttpRequest'
	});
	let options = new RequestOptions({ headers });

    return this.http.delete(URL + tipoComida.id, options)
      .map(response => undefined)
      .catch(error => this.handleError(error));
  }

  saveTipoComida(tipoComida: TipoComida){
    let body = JSON.stringify(tipoComida);
    let headers = new Headers({
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest'
    });
    let options = new RequestOptions({ headers });

    return this.http.post(URL, body, options)
      .map(response => response.json())
      .catch(error => this.handleError(error));
  }
  
  updateTipoComida(tipoComida: TipoComida) {

    let body = JSON.stringify(tipoComida);
    let headers = new Headers({
      'Content-Type': 'application/json',
      'X-Requested-With': 'XMLHttpRequest'
    });
    let options = new RequestOptions({ headers });

    return this.http.put(URL + tipoComida.id, body, options)
      .map(response => response.json())
      .catch(error => this.handleError(error));
    }
    
    private handleError(error: any){
      console.error(error);
      return Observable.throw("Server error (" + error.status + "): " + error.text())
    }
    
}