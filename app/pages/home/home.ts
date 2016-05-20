import {Page} from 'ionic-angular';
import {EmailComposer, Screenshot} from 'ionic-native';

@Page({
  templateUrl: 'build/pages/home/home.html'
})
export class HomePage {
  constructor() {

  }

  isAvailable() {
    EmailComposer.isAvailable().then((available) => {
      console.log(available);
      if (available) {
        //Now we know we can send
      }
    });
  }

  open() {
    let email = {
      to: 'max@mustermann.de',
      cc: 'erika@mustermann.de',
      bcc: ['john@doe.com', 'jane@doe.com'],
      attachments: [],
      subject: 'Cordova Icons',
      body: 'How are you? Nice greetings from Leipzig',
      isHtml: true
    };

    // Send a text message using default options
    EmailComposer.open(email);
  }
  
  uri() {
    Screenshot.URI(100).then((imageData) => {
      console.log(imageData);
    })
  }
}
