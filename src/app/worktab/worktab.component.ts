import { Component, OnInit, OnDestroy, ViewEncapsulation } from '@angular/core';

// Gallery Files
import { Image, Action, ImageModalEvent, Description } from 'angular-modal-gallery';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';


@Component({
  selector: 'app-worktab',
  templateUrl: './worktab.component.html',
  styleUrls: ['./worktab.component.css'],
  encapsulation: ViewEncapsulation.None // to apply css from parent Component to child Component 
})
export class WorktabComponent implements OnInit, OnDestroy {
  tab: number = 1; // to set tab active/open 
  constructor() { }

  // ngOnInit() {
  // }

  openModalWindow: boolean = false;
  imagePointer: number = 0;

  openModalWindowObservable: boolean = false;
  imagePointerObservable: number = 0;

  imagesArray: Array<Image> = [
    new Image(
      '../assets/images/Neturinos-Technology-big.jpg',
      '../assets/images/Neutrinos-logo-small.png',
      'Neturinos Technology Logo',
      null // url
    ),
    new Image(
      '../assets/images/Townsol-Enterprise-big.jpg',
      '../assets/images/Townsol-logo-small.png', // example with a PNG image
      'Townsol Enterprise Logo',
      null // url
    ),
    new Image(
      '../assets/images/dococo-big.jpg',
      '../assets/images/Dococo-logo-small.png', // example with a PNG thumb image
      'Dococo Logo',
      null // url
    ),
    new Image(
      '../assets/images/pcrefresh-big.jpg',
      '../assets/images/pcrefresh-small.png', // example with a PNG thumb image
      'PCRefersh Logo',
      null // url
    ),
    new Image(
      '../assets/images/smart-machine-big.jpg',
      '../assets/images/Smart-Machine-logo-small.png', // example with a PNG thumb image
      'Smart Machines Logo',
      null // url
    ),
    new Image(
      '../assets/images/silkone-big.jpg',
      '../assets/images/silkone-logo-small.png', // example with a PNG thumb image
      'Silkone Logo',
      null // url
    )
  ];

  // Website Image Gallery Start //
  websiteArray: Array<Image> = [
    new Image(
      '../assets/images/fashion&u-big.jpg',
      '../assets/images/fashion&u-small.jpg',
      'Fashion Store Website',
      null // url
    ),
    new Image(
      '../assets/images/silkone-webiste-big.jpg',
      '../assets/images/silkone-webiste-small.jpg',
      'Silkone Website',
      null // url
    ),
    new Image(
      '../assets/images/townsol-website-big.jpg',
      '../assets/images/townsol-website-small.jpg',
      'Townsol Website',
      null // url
    ),
    new Image(
      '../assets/images/pizaa-napoli-website-big.jpg',
      '../assets/images/pizaa-napoli-website-small.jpg',
      'Pizza napoli Website',
      null // url
    ),
    new Image(
      '../assets/images/concept-interior-big.jpg',
      '../assets/images/concept-interior-small.jpg',
      'Concept Interior Website',
      null // url
    ),
    new Image(
      '../assets/images/lets-party-big.jpg',
      '../assets/images/lets-party-talk-small.jpg',
      'Lets Party Talk Website',
      null // url
    ),
    new Image(
      '../assets/images/trapkans-website-big.jpg',
      '../assets/images/trapkans-website-small.jpg',
      'Trapkans Solutions Website',
      null // url
    ),
    new Image(
      '../assets/images/IR-Pulse-big.jpg',
      '../assets/images/IR-Plus-small.jpg',
      'IR Pulse Website',
      null // url
    ),
    new Image(
      '../assets/images/Docplexus-website-big.jpg',
      '../assets/images/Docplexus-website-small.jpg',
      'Docplexus Website',
      null // url
    ),
    new Image(
      '../assets/images/1to1-legal-website-big.jpg',
      '../assets/images/1to1-legal-website-small.jpg',
      '1to1 Legal Website',
      null // url
    ),
    new Image(
      '../assets/images/claims-heaven-website-big.jpg',
      '../assets/images/claims-heaven-website-small.jpg',
      'Claims Heaven Website',
      null // url
    ),
    new Image(
      '../assets/images/dococo-website-big.jpg',
      '../assets/images/dococo-website-small.jpg',
      'Dococo Website',
      null // url
    )
  ];

  // Website Image Gallery End //

  // observable of an array of images with a delay to simulate a network request
  images: Observable<Array<Image>> = Observable.of(this.imagesArray).delay(300);

  //  Website Image Gallery  
  websiteimages: Observable<Array<Image>> = Observable.of(this.websiteArray).delay(300);
  imagesArraySubscribed: Array<Image>;

  //  Website Image Gallery 
  websiteArraySubscribed: Array<Image>;

  customDescription: Description = {
    imageText: 'Look this image ',
    numberSeparator: ' of ',
    beforeTextDescription: ' => '
  };

  customFullDescription: Description = {
    // you should build this value programmaticaly with the result of (show)="..()" event
    customFullDescription: 'Custom description of the current visible image',
    // if customFullDescription !== undefined, all other fields will be ignored
    // imageText: '',
    // numberSeparator: '',
    // beforeTextDescription: '',
  };

  private subscription: Subscription;
  private imagesArraySubscription: Subscription;

  // Website Image Gallery 
  private websiteArraySubscription: Subscription;

  ngOnInit() {
    this.imagesArraySubscription = Observable.of(null).delay(500).subscribe(() => {
      this.imagesArraySubscribed = this.imagesArray;
    });

  // Website Image Gallery 
    this.websiteArraySubscription = Observable.of(null).delay(500).subscribe(() => {
      this.websiteArraySubscribed = this.websiteArray;
    });

  }

  openImageModal(image: Image) {
    this.imagePointer = this.imagesArray.indexOf(image);
    this.openModalWindow = true;
  }

  // Website Image Gallery 
  openWebsiteImageModal(image: Image) {
    this.imagePointer = this.websiteArray.indexOf(image);
    this.openModalWindow = true;
  }


  openImageModalObservable(image: Image) {
    this.subscription = this.images.subscribe((val: Image[]) => {
      this.imagePointerObservable = val.indexOf(image);
      this.openModalWindowObservable = true;
    });
  }

  //  Website Image Gallery  
  openWebsiteImageModalObservable(image: Image) {
    this.subscription = this.websiteimages.subscribe((val: Image[]) => {
      this.imagePointerObservable = val.indexOf(image);
      this.openModalWindowObservable = true;
    });
  }

  onImageLoaded(event: ImageModalEvent) {
    // angular-modal-gallery will emit this event if it will load successfully input images
    console.log('onImageLoaded action: ' + Action[event.action]);
    console.log('onImageLoaded result:' + event.result);
  }

  onVisibleIndex(event: ImageModalEvent) {
    this.customFullDescription.customFullDescription = `Custom description of visible image with index= ${event.result}`;
    console.log('action: ' + Action[event.action]);
    console.log('result:' + event.result);
  }

  onIsFirstImage(event: ImageModalEvent) {
    console.log('onfirst action: ' + Action[event.action]);
    console.log('onfirst result:' + event.result);
  }

  onIsLastImage(event: ImageModalEvent) {
    console.log('onlast action: ' + Action[event.action]);
    console.log('onlast result:' + event.result);
  }

  onCloseImageModal(event: ImageModalEvent) {
    console.log('onClose action: ' + Action[event.action]);
    console.log('onClose result:' + event.result);
    this.openModalWindow = false;
    this.openModalWindowObservable = false;
  }

  addRandomImage() {
    this.imagesArray.push(this.imagesArray[Math.floor(Math.random() * this.imagesArray.length)]);
  }

  // Website Image Gallery  
  addRandomWebsiteImage() {
    this.websiteArray.push(this.websiteArray[Math.floor(Math.random() * this.websiteArray.length)]);
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
    if(this.imagesArraySubscription) {
      this.imagesArraySubscription.unsubscribe();
    }

    // Website Image Gallery  
     if(this.websiteArraySubscription) {
      this.websiteArraySubscription.unsubscribe();
    }

  }

}
