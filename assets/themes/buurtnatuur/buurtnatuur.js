parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"prtK":[function(require,module,exports) {
module.exports={id:"buurtnatuur",title:{nl:"Breng jouw buurtnatuur in kaart"},shortDescription:{nl:"Met deze tool kan je natuur in je buurt in kaart brengen en meer informatie geven over je favoriete plekje"},description:{nl:"<img style='float:right;margin: 1em;width: 10em;height: auto;' src='./assets/themes/buurtnatuur/groen_logo.svg' alt='logo-groen' class='logo'> <br /><b>Natuur maakt gelukkig.</b> Aan de hand van deze website willen we de natuur dicht bij ons beter inventariseren. Met als doel meer mensen te laten genieten van toegankelijke natuur én te strijden voor meer natuur in onze buurten. \n<ul><li>In welke natuurgebieden kan jij terecht? Hoe toegankelijk zijn ze?</li><li>In welke bossen kan een gezin in jouw gemeente opnieuw op adem komen?</li><li>Op welke onbekende plekjes is het zalig spelen?</li></ul><p>Samen kleuren we heel Vlaanderen en Brussel groen.</p>Blijf op de hoogte van de resultaten van buurtnatuur.be: <a href=\"https://www.groen.be/buurtnatuur\" target='_blank'>meld je aan voor e-mailupdates</a>."},descriptionTail:{nl:"<h4>Tips</h4><ul><li>Over groen ingekleurde gebieden weten we alles wat we willen weten.</li><li>Bij rood ingekleurde gebieden ontbreekt nog heel wat info: klik een gebied aan en beantwoord de vragen.</li><li>Je kan altijd een vraag overslaan als je het antwoord niet weet of niet zeker bent</li><li>Je kan altijd een foto toevoegen</li><li>Je kan ook zelf een gebied toevoegen door op de kaart te klikken</li><li>Open buurtnatuur.be <b>op je smartphone</b> om al wandelend foto's te maken en vragen te beantwoorden</li></ul><small><p>De oorspronkelijke data komt van <b>OpenStreetMap</b> en je antwoorden worden daar bewaard.<br/> Omdat iedereen vrij kan meewerken aan dit project, kunnen we niet garanderen dat er geen fouten opduiken.Kan je hier niet aanpassen wat je wilt, dan kan je dat zelf via OpenStreetMap.org doen. Groen kan <b>geen enkele verantwoordelijkheid</b> nemen over de kaart.</p>Je privacy is belangrijk. We tellen wel hoeveel gebruikers deze website bezoeken. We plaatsen een cookie waar geen persoonlijke informatie in bewaard wordt. Als je inlogt, komt er een tweede cookie bij met je inloggegevens.</small>"},language:["nl"],maintainer:"",icon:"./assets/themes/buurtnatuur/groen_logo.svg",version:"0",startLat:50.8435,startLon:4.3688,startZoom:16,widenFactor:.05,socialImage:"./assets/themes/buurtnatuur/social_image.jpg",layers:[{id:"nature_reserve",name:{nl:"Natuurgebied"},minzoom:12,overpassTags:{or:["leisure=nature_reserve","boundary=protected_area"]},title:{render:{nl:"Natuurgebied"},mappings:[{if:{and:["name:nl~"]},then:{nl:"{name:nl}"}},{if:{and:["name~*"]},then:{nl:"{name}"}}]},description:{nl:"Een natuurgebied is een gebied waar actief ruimte gemaakt word voor de natuur. Typisch zijn deze in beheer van Natuurpunt of het Agentschap Natuur en Bos of zijn deze erkend door de overheid."},tagRenderings:[],hideUnderlayingFeaturesMinPercentage:10,icon:{render:"./assets/themes/buurtnatuur/nature_reserve.svg",mappings:[{"#":"This is a little bit a hack to force a circle to be shown while keeping the icon in the 'new' menu",if:"id~node/[0-9]*",then:"$circle"}]},width:{render:"5"},iconSize:{render:"50,50,center"},color:{render:"#3c3",mappings:[{if:{and:["name=","noname=","operator=","access=","access:description=","leisure=park"]},then:"#cc1100"},{if:{and:["name=","noname="]},then:"#fccb37"}]},presets:[{tags:["leisure=nature_reserve","fixme=Toegevoegd met MapComplete, geometry nog uit te tekenen"],title:{nl:"Natuurreservaat"},description:{nl:"Voeg een ontbrekend, erkend natuurreservaat toe, bv. een gebied dat beheerd wordt door het ANB of natuurpunt"}}]},{id:"parks",name:{nl:"Park"},minzoom:12,overpassTags:{or:["leisure=park","landuse=village_green"]},title:{render:{nl:"Park"},mappings:[{if:{and:["name:nl~"]},then:{nl:"{name:nl}"}},{if:{and:["name~*"]},then:{nl:"{name}"}}]},description:{nl:"Een park is een publiek toegankelijke, groene ruimte binnen de stad. Ze is typisch ingericht voor recreatief gebruik, met (verharde) wandelpaden, zitbanken, vuilnisbakken, een gezellig vijvertje, ..."},tagRenderings:[],hideUnderlayingFeaturesMinPercentage:10,icon:{render:"./assets/themes/buurtnatuur/park.svg",mappings:[{"#":"This is a little bit a hack to force a circle to be shown while keeping the icon in the 'new' menu",if:"id~node/[0-9]*",then:"$circle"}]},width:{render:"5"},iconSize:{render:"40,40,center"},color:{render:"#3c3",mappings:[{if:{and:["name=","noname="]},then:"#fccb37"}]},presets:[{tags:["leisure=park","fixme=Toegevoegd met MapComplete, geometry nog uit te tekenen"],title:{nl:"Park"},description:{nl:"Voeg een ontbrekend park toe"}}]},{id:"forest",name:{nl:"Bos"},minzoom:12,overpassTags:{or:["landuse=forest","natural=wood","natural=scrub"]},title:{render:{nl:"Bos"},mappings:[{if:{and:["name:nl~"]},then:{nl:"{name:nl}"}},{if:{and:["name~*"]},then:{nl:"{name}"}}]},description:{nl:"Een bos is een verzameling bomen, al dan niet als productiehout."},tagRenderings:[],hideUnderlayingFeaturesMinPercentage:0,icon:{render:"./assets/themes/buurtnatuur/forest.svg",mappings:[{"#":"This is a little bit a hack to force a circle to be shown while keeping the icon in the 'new' menu",if:"id~node/[0-9]*",then:"$circle"}]},width:{render:"5"},iconSize:{render:"40,40,center"},color:{render:"#3a3",mappings:[{if:{and:["operator=","access=","access:description="]},then:"#cc1100"},{if:{and:["operator="]},then:"#cccc00"},{if:{and:["name=","noname="]},then:"#fccb37"}]},presets:[{tags:["landuse=forest","fixme=Toegevoegd met MapComplete, geometry nog uit te tekenen"],title:{nl:"Bos"},description:{nl:"Voeg een ontbrekend bos toe aan de kaart"}}]},"viewpoint"],roamingRenderings:[{"#":"Access tag",condition:{and:["tourism!~viewpoint"]},render:{nl:"De toegankelijkheid van dit gebied is: {access:description}"},question:{nl:"Is dit gebied toegankelijk?"},freeform:{key:"access:description"},mappings:[{if:{and:["access:description=","access=","leisure=park"]},then:{nl:"Dit gebied is vrij toegankelijk"},hideInAnswer:!0},{if:{and:["access=yes","fee="]},then:{nl:"Vrij toegankelijk"}},{if:{and:["access=no","fee="]},then:{nl:"Niet toegankelijk"}},{if:{and:["access=private","fee="]},then:{nl:"Niet toegankelijk, want privégebied"}},{if:{and:["access=permissive","fee="]},then:{nl:"Toegankelijk, ondanks dat het privegebied is"}},{if:{and:["access=guided","fee="]},then:{nl:"Enkel toegankelijk met een gids of tijdens een activiteit"}},{if:{and:["access=yes","fee=yes"]},then:{nl:"Toegankelijk mits betaling"}}]},{"#":"Operator tag",render:{nl:"Beheer door {operator}"},question:{nl:"Wie beheert dit gebied?"},freeform:{key:"operator"},mappings:[{if:{and:["leisure=park","operator="]},then:"Beheer door de gemeente",hideInAnswer:!0},{if:{and:["operator=Natuurpunt"]},then:{nl:'<img src="./assets/themes/buurtnatuur/Natuurpunt.jpg" style="width:1.5em">Dit gebied wordt beheerd door Natuurpunt'}},{if:{and:["operator~(n|N)atuurpunt.*"]},then:{nl:'<img src="./assets/themes/buurtnatuur/Natuurpunt.jpg" style="width:1.5em">Dit gebied wordt beheerd door {operator}'},hideInAnswer:!0},{if:{and:["operator=Agentschap Natuur en Bos"]},then:{nl:'<img src="./assets/themes/buurtnatuur/ANB.jpg" style="width:1.5em">Dit gebied wordt beheerd door het Agentschap Natuur en Bos'}}],condition:{and:["leisure!~park","tourism!~viewpoint"]}},{"#":"Name:nl-tag",render:{nl:"Dit gebied heet {name:nl}"},question:{nl:"Wat is de Nederlandstalige naam van dit gebied?"},freeform:{key:"name:nl"},condition:{and:["name:nl~*","viewpoint!~tourism"]}},{"#":"Name tag",render:{nl:"Dit gebied heet {name}"},question:{nl:"Wat is de naam van dit gebied?"},freeform:{key:"name",addExtraTags:["noname="]},condition:{and:["name:nl=","tourism!~viewpoint"]},mappings:[{if:{and:["noname=yes","name="]},then:{nl:"Dit gebied heeft geen naam"}}]},{"#":"Non-editable description {description}",render:{nl:"Extra info: <i>{description}</i>"},freeform:{key:"description"}},{"#":"Editable description {description:0}",question:"Is er extra info die je kwijt wil?",render:{nl:"Extra info via buurtnatuur.be: <i>{description:0}</i>"},freeform:{key:"description:0"}}]};
},{}]},{},["prtK"], null)
//# sourceMappingURL=assets/themes/buurtnatuur/buurtnatuur.js.map