import {App, Platform, NavController,IonicApp } from 'ionic/ionic';
import {Game} from './pages/game/game';
import {InfoPage} from './pages/info/info';

@App({
  templateUrl: 'build/app.html'
})
export class MyApp {
  constructor(app: IonicApp, platform: Platform) {
      
    this.app = app;
    this.platform = platform;

      
    // set our app's pages
    this.pages = [
      { title: 'game', component: Game },
      { title: 'info', component: InfoPage }
    ];

    // this tells the tabs component which Pages
    // should be each tab's root Page
    this.game = Game;
    this.rootPage = InfoPage;
    platform.ready().then(() => {
      // Do any necessary cordova or native calls here now that the platform is ready
    });
  }
  
  openPage(page) {
    // close the menu when clicking a link from the menu
    this.app.getComponent('leftMenu').close();
    // navigate to the new page if it is not the current page
    let nav = this.app.getComponent('nav');
    nav.setRoot(page.component);
  }
}
