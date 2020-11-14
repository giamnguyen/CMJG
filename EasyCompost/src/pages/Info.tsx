import React, { useState } from 'react';
import {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar, 
    IonBackButton, IonButtons,
    IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonImg, IonGrid, IonRow, IonCol, IonButton, IonIcon
} from '@ionic/react';
import './Info.css';
import { getGlobalUsername } from './Login';
import {chevronBack} from 'ionicons/icons';

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

const Info: React.FC = () => {

    const [text, setText] = useState<string>();
    const username = getGlobalUsername();
    const [busy, setBusy] = useState<boolean>(false)

    const [showArticle1, SetShowArticle1] = useState(false);
    const [showArticle2, SetShowArticle2] = useState(false);
    const [showArticle3, SetShowArticle3] = useState(false);

    if (showArticle1)
        return (
            <IonPage>
                <IonHeader>
                    <IonButtons onClick={() => {SetShowArticle1(false);}} slot="start">
                       <IonIcon icon={chevronBack}/>
                    </IonButtons>
                </IonHeader>
                <IonContent>
                <h1>What to Compost and What Not to Compost</h1>
                    <h3>Article</h3>
                    <p>Knowing what's safe to throw in your composting bin, and what should stay out, can be confusing. Here's a list to make it easy to compost, adapted from the EPA, Cornell University, and other composting experts.</p>
                    <h2>What to Compost</h2>
                    <ul>
                        <li>Animal manure from herbivores (not meat-eaters like dogs or cats)</li>
                        <li>Cardboard rolls, cereal boxes, brown paper bags</li>
                        <li>Clean paper and shredded newspaper</li>
                        <li>Paper towels</li>
                        <li>Coffee grounds and filters</li>
                        <li>Cotton and wool rags</li>
                        <li>Dryer and vacuum cleaner lint</li>
                        <li>Crushed eggshells (but not eggs)</li>
                        <li>Fireplace ashes</li>
                        <li>Fruits and vegetables</li>
                        <li>Grass clippings, yard trimmings, leaves</li>
                        <li>Hair and fur</li>
                        <li>Houseplants</li>
                        <li>Nutshells</li>
                        <li>Wood chips, sawdust, toothpicks, burnt matches</li>
                    </ul>
                    <h2>What NOT to Compost</h2>
                    <ul>
                        <li>Meat, fish, egg or pultry scraps</li>
                        <li>Dairy products</li>
                        <li>Fats, grease, lard, oils</li>
                        <li>Coal or charcoal ash</li>
                        <li>Diseased plants</li>
                        <li>Yard trimmings treated with pesticides</li>
                    </ul>
                    <p>Remember that most composting experts advise a balance between green waste -- watery materials like fruits and vegetables, grass clippings and weeds -- and brown waste like dried leaves, sticks, fur, cloth, cardboard, and paper. </p>
                    <h4>Article from: the Spruce https://www.thespruce.com/what-to-compost-1709069</h4>
                </IonContent>
            </IonPage>
        )

        if (showArticle2)
        return (
            <IonPage>
                <IonHeader>
                    <IonButtons onClick={() => {SetShowArticle2(false);}} slot="start">
                       <IonIcon icon={chevronBack}/>
                    </IonButtons>
                </IonHeader>
                <IonContent>
                <h1>How to Tell if a Container is Compostable</h1>
                    <h3>Article</h3>
                    <h2>Biodegradable Products</h2>
                    <p>'Biodegradable' simply means that a product will break down into carbon dioxide, water and biomass within a reasonable amount of time in the natural environment. The term 'biodegradable' however has no legal enforcement or definition therefore the term has been used loosely by some manufacturers.</p>
                    <h2>Compostable Products</h2>
                    <p>'Compostable' products are biodegradable, but with an added benefit: when they break down, they release valuable nutrients into the soil, aiding the growth of trees and plants. These products degrade within several months in an industrial composting facility and produce no toxic residues.</p>
                    <p>Compostability is a desirable feature in traditionally-disposable products such as plates, bowls, cups and cutlery. These products are commonly made out of PLA (Polylactic acid), bagasse (sugarcane fiber) or vegetable starch. It is environmentally-preferable to use disposable products that are labeled 'compostable' rather than just 'biodegradable'.</p>
                    <h4>Article from: The Green Office http://archive.constantcontact.com/fs039/1101442661553/archive/1102110794885.html</h4>
                </IonContent>
            </IonPage>
        )

        if (showArticle3)
        return (
            <IonPage>
                <IonHeader>
                    <IonButtons onClick={() => {SetShowArticle3(false);}} slot="start">
                       <IonIcon icon={chevronBack}/>
                    </IonButtons>
                </IonHeader>
                <IonContent>
                <h1>Composting Basics</h1>
                    <h3>EPA Guidelines</h3>
                    <h2>The Basic Ingredients</h2>
                    <ul>
                        <li>Browns - This includes materials such as dead leaves, branches, and twigs.</li>
                        <li>Greens - This includes materials such as grass clippings, vegetable waste, fruit scraps, and coffee grounds.</li>
                        <li>Water - Having the right amount of water, greens, and browns is important for compost development.</li>
                    </ul>
                    <h2>Benefits of Composting</h2>
                    <ul>
                        <li>Reduces waste that ends up in landfills.</li>
                        <li>Enriches soil, helping retain moisture and suppress plant diseases and pests.</li>
                        <li>Encourages the production of beneficial bacteria and fungi that break down organic matter to create humus, a rich nutrient-filled material.</li>
                        <li>Reduces the need for chemical fertilizers.</li>
                        <li>Reduces methane emissions from landfills and lowers your carbon footprint.</li>
                    </ul>
                    <h4>Article from: The EPA https://www.epa.gov/recycle/composting-home</h4>
                </IonContent>
            </IonPage>
        )


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
                <IonCard onClick={() => { SetShowArticle1(true); }}>
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
                <IonCard onClick={() => { SetShowArticle2(true); }}>
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
                <IonCard onClick={() => { SetShowArticle3(true);}}>
                    <IonCardContent>
                        <IonGrid>
                            <IonRow>
                                <IonCol>
                                    <IonCardTitle class="ArticleTitle">Composting Basics</IonCardTitle>
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
