import {Page,Popup} from 'ionic/ionic';
//import {Popup} from 'ionic/popup';
import * as preguntesService from '../../services/PreguntesService';


@Page({
  templateUrl: 'build/pages/game/game.html',
})
export class Game {

  constructor(popup: Popup) {
    this.popup = popup;
    this.i = 0;
    this.score = 0;
    this.preguntes_correctes = 0;
    this.preguntes_inocorrectes = 0;
    this.vides = 5;
    preguntesService.findAll().then(data => this.preguntes = data);
  }

  //
  selectResposta(p) {
    if(this.i == (this.preguntes.length-1)){
      this.i = 0;
    }
    if(p == this.preguntes[this.i].correcte) this.correcte();
    else this.incorrecte();
  }

  //logica en cas encert de la pregunta
  correcte(){
    this.i++;
    this.score = this.score + 500;
    this.preguntes_correctes++;
  }

  //logica en cas de fallar la pregunta
  incorrecte(){
    this.vides--;
    this.preguntes_inocorrectes--;
    if(this.vides == 0){
      this.i = 0;
      this.vides = 5;
      this.dialogFi();
    }
    else {
      this.i++;
    }
  }

  //Pop ups
  dialogFi() {
    this.popup.alert({
      title: "Fi del joc!",
      template: "S han acabat les vides, fi del joc :(",
      cssClass: 'my-alert'
    }).then(() => {
      console.log('Alert closed');
    });
  }


}
