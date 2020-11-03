import React, { useState } from 'react';
import {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonImg, IonGrid, IonRow, IonCol, IonButton
} from '@ionic/react';
import './Info.css';
import { getGlobalUsername } from './Login';
//import { InAppBrowser } from '@ionic-native/in-app-browser';

//images
import apple from '../images/infoImages/apple.png';
import carrot from '../images/infoImages/carrot.png';
import rice from '../images/infoImages/rice.png';
import bread from '../images/infoImages/bread.png';
import dog from '../images/infoImages/dog.png';
import paper from '../images/infoImages/newspaper.png';
import leaf from '../images/infoImages/leaf.png';
import plant from '../images/infoImages/grass.png';
import coffee from '../images/infoImages/coffee.png';
import egg from '../images/infoImages/egg.png';


import forward from '../images/forward.png';
import { Link } from 'react-router-dom';

//chart libary

const Info: React.FC = () => {

    const [text, setText] = useState<string>();
    const username = getGlobalUsername();
    const [busy, setBusy] = useState<boolean>(false)

    async function externalLink() {
        setBusy(true);
        window.open("https://www.thespruce.com/what-to-compost-1709069",'_system', 'location=yes');
        setBusy(false);
      }

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle size="large" class="title"> EASYCOMPOST </IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <IonCard>
                    <IonCardHeader>
                        <IonCardTitle class="GraphTitle">NOT SURE WHAT TO THROW IN THE BIN?</IonCardTitle>
                    </IonCardHeader>

                    <IonCardContent >
                        <IonGrid class="topRow">
                            <IonRow>
                                <IonCol>
                                    <IonRow><IonImg class="GraphicImg" src={apple} /><IonImg class="GraphicImg" src={carrot} /></IonRow>
                                    <IonRow><p>Produce</p></IonRow>
                                </IonCol>
                                <IonCol>
                                    <IonRow><IonImg class="GraphicImg" src={rice} /><IonImg class="GraphicImg" src={bread} /></IonRow>
                                    <IonRow><p>Grains</p></IonRow>
                                </IonCol>
                                <IonCol>
                                    <IonRow><IonImg class="GraphicImg" src={dog} /><IonImg class="GraphicImg" src={paper} /></IonRow>
                                    <IonRow><p>Natural Fibers</p></IonRow>
                                </IonCol>
                            </IonRow>
                        </IonGrid>
                        <IonGrid class="bottomRow">
                        <IonRow>
                                <IonCol>
                                    <IonRow><IonImg class="GraphicImg" src={leaf} /><IonImg class="GraphicImg" src={plant} /></IonRow>
                                    <IonRow><p>Plant Waste</p></IonRow>
                                </IonCol>
                                <IonCol>
                                    <IonRow><IonImg class="GraphicImg" src={coffee} /><IonImg class="GraphicImg" src={egg} /></IonRow>
                                    <IonRow><p>Other</p></IonRow>
                                </IonCol>
                            </IonRow>
                        </IonGrid>
                    </IonCardContent>
                </IonCard>

                <IonCard>
                    <IonCardContent>
                        <IonGrid>
                            <IonRow>
                                <IonCol>
                                    <IonCardTitle class="ArticleTitle">What to Compost and What Not to Compost</IonCardTitle>
                                    <IonCardSubtitle class="ArticleSubtitle">Article</IonCardSubtitle>
                                </IonCol>
                                <IonCol><IonImg class="forward" src={forward} /></IonCol>
                            </IonRow>
                        </IonGrid>
                    </IonCardContent>
                </IonCard>

                <IonCard>
                    <IonCardContent>
                        <IonGrid>
                            <IonRow>
                                <IonCol>
                                    <IonCardTitle class="ArticleTitle">How to Tell if a Container is Compostable</IonCardTitle>
                                    <IonCardSubtitle class="ArticleSubtitle">Article</IonCardSubtitle>
                                </IonCol>
                                <IonCol><IonImg class="forward" src={forward} /></IonCol>
                            </IonRow>
                        </IonGrid>
                    </IonCardContent>
                </IonCard>

                <IonCard>
                    <IonCardContent>
                        <IonGrid>
                            <IonRow>
                                <IonCol>
                                    <IonCardTitle class="ArticleTitle">Benefits of Composting</IonCardTitle>
                                    <IonCardSubtitle class="ArticleSubtitle">EPA Guide</IonCardSubtitle>
                                </IonCol>
                                <IonCol><IonImg class="forward" src={forward} /></IonCol>
                            </IonRow>
                        </IonGrid>
                    </IonCardContent>
                </IonCard>

            </IonContent>
        </IonPage>
    );
};

export default Info;
