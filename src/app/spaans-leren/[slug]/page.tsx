import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { filterPublishedPosts, isPostPublished } from '@/lib/dateUtils';
import { getSiteUrl } from '@/lib/site';

// Spaans leren posts data with full content (all posts including future ones)
const allSpaansLerenPosts = [
  {
    id: 1,
    title: 'Waarom Spaans leren zoveel leuker én handiger is dan je denkt',
    excerpt: 'Spaans staat al jaren in de top van populairste talen om te leren. Ontdek waarom Spaans leren zo\'n slimme én plezierige keuze is.',
    date: '2025-11-28',
    category: 'Spaans leren',
    thumbnail: '/blog/spaans-leren.webp',
    author: 'Jasmijn de Jong',
    slug: 'waarom-spaans-leren-leuker-en-handiger-is',
    content: `
      <p>Spaans staat al jaren in de top van populairste talen om te leren. Niet alleen omdat het wereldwijd gesproken wordt, maar vooral omdat de taal toegankelijk, levendig en verrassend leuk is. Veel mensen beginnen uit nieuwsgierigheid, maar blijven leren omdat ze merken hoeveel energie het geeft.</p>
      
      <p>In deze blog ontdek je waarom Spaans leren zo'n slimme én plezierige keuze is.</p>

      <h2>1. Reizen wordt rijker als je een paar woorden Spaans spreekt</h2>
      
      <p>Je hoeft geen vloeiende spreker te zijn om verschil te maken. Met een paar eenvoudige zinnen merk je al dat deuren letterlijk en figuurlijk voor je opengaan.</p>
      
      <p><strong>Je ervaart:</strong></p>
      <ul>
        <li>oprechte reacties van locals</li>
        <li>makkelijker contact in restaurants, winkels en op straat</li>
        <li>toegang tot plekken buiten de typische toeristenroutes</li>
      </ul>
      
      <p>Het gevoel dat iemand je begrijpt, ook als je zinnen nog niet perfect zijn, maakt reizen zóveel leuker.</p>

      <h2>2. Spaans leren is een cadeautje voor je brein</h2>
      
      <p>Een nieuwe taal leren prikkelt je hersenen op een positieve manier. Onderzoek laat zien dat taalverwerving:</p>
      <ul>
        <li>je geheugen versterkt</li>
        <li>multitasking verbetert</li>
        <li>verouderingsprocessen in de hersenen vertraagt</li>
        <li>creativiteit vergroot</li>
      </ul>
      
      <p>Spaans is daarbij extra toegankelijk: veel woorden lijken op het Nederlands of Engels, en de grammatica is logischer dan veel mensen vooraf denken.</p>

      <h2>3. De taal voelt warm en muzikaal</h2>
      
      <p>Spaans heeft iets dat mensen meteen aantrekt. De klanken zijn warm, de ritmes melodieus en de expressie voelt natuurlijk. Denk aan de muziek (salsa, bachata, reggaetón), de manier van spreken en zelfs de humor.</p>
      
      <p>Veel cursisten zeggen dat Spaans leren "verslavend leuk" is—je wilt steeds een stapje verder.</p>

      <h2>4. Je kunt al snel echte gesprekken voeren</h2>
      
      <p>Het mooie aan Spaans: je hoeft geen lange grammaticalijsten te kunnen opdreunen om te communiceren. Met basiszinnen kun je in veel situaties prima uit de voeten:</p>
      <ul>
        <li>iets bestellen in een bar</li>
        <li>een route vragen</li>
        <li>je voorstellen</li>
        <li>een kort gesprekje houden</li>
      </ul>
      
      <p>Dat eerste moment waarop iemand je begrijpt, is vaak het moment dat mensen écht gemotiveerd raken om door te gaan.</p>

      <h2>5. Spaans zorgt voor verbinding</h2>
      
      <p>Taal is meer dan woorden. Dankzij Spaans kun je humor, verhalen, cultuur en emoties begrijpen die anders langs je heen zouden gaan. Het maakt gesprekken spontaner en dieper, en het verbindt je met mensen die je anders nooit had leren kennen.</p>
    `,
  },
  {
    id: 2,
    title: 'Een goed voornemen dat je reis écht beter maakt: Spaans leren voor op reis',
    excerpt: 'Elk jaar nemen we ons van alles voor. Maar veel goede voornemens verdwijnen al snel. Spaans leren voor op reis is anders - het is een voornemen dat je écht volhoudt.',
    date: '2026-01-01',
    category: 'Algemeen',
    thumbnail: '/blog/new-year-resolutions.webp',
    author: 'Ingeborg Mare',
    slug: 'goed-voornemen-spaans-leren-voor-op-reis',
    content: `
      <p>Elk jaar nemen we ons van alles voor. Meer sporten. Gezonder eten. Een nieuwe vaardigheid leren. Maar veel goede voornemens verdwijnen al snel naar de achtergrond. Te groot, te vaag of gewoon niet vol te houden.</p>
      
      <p>Spaans leren voor op reis is anders. Het is geen vaag doel, maar iets waar je tijdens je vakantie meteen plezier van hebt. En het hoeft niet moeilijk of tijdrovend te zijn.</p>

      <h2>Waarom Spaans leren een goed voornemen is dat wél lukt</h2>
      
      <p>Mensen die Spaans leren voor op reis willen geen perfecte zinnen spreken. Ze willen zich kunnen redden. Een koffie bestellen, de weg vragen, een kort gesprek voeren met een local. Dat is precies waarom dit goede voornemen haalbaar blijft.</p>
      
      <p>Je leert niet "de taal", maar wat je nodig hebt voor echte situaties. Daardoor voelt oefenen niet als studeren, maar als voorbereiden op iets leuks.</p>
      
      <p>Wil je laagdrempelig beginnen? Met een korte quiz kun je meteen ervaren hoe spelenderwijs leren werkt: <a href="/games/quiz" class="text-orange-600 hover:underline font-semibold" title="Oefen Spaans met onze interactieve Multiple Choice Quiz">👉 Oefen met de Multiple Choice Quiz</a></p>

      <h2>Minder stress, meer zelfvertrouwen op reis</h2>
      
      <p>Een veelgehoorde frustratie is het gevoel dat je niets durft te zeggen zodra iemand Spaans tegen je praat. Terwijl je de woorden misschien wel herkent. Door regelmatig te oefenen, verdwijnt die spanning langzaam.</p>
      
      <p>Zelfs een paar minuten per dag helpen al. Je raakt vertrouwd met klanken, zinnen en veelgebruikte woorden. Daardoor reageer je sneller en met meer vertrouwen wanneer je op reis bent.</p>
      
      <p>Fouten maken hoort erbij. En juist door te oefenen in een veilige omgeving, zoals een quiz of spelletje, durf je het straks ook in het echt te proberen.</p>

      <h2>Spaans leren past ook in een druk leven</h2>
      
      <p>Een goed voornemen werkt alleen als het in je leven past. Niet iedereen heeft tijd om uren per week te studeren. Gelukkig hoeft dat ook niet.</p>
      
      <p>Met korte oefeningen kun je oefenen wanneer het jou uitkomt: even tussendoor, onderweg of 's avonds op de bank. Juist die kleine momenten zorgen voor vooruitgang.</p>
      
      <p>Wil je je woordenschat stap voor stap uitbreiden? Dan zijn flashcards ideaal om snel en herhaald te oefenen: <a href="/games/flashcards" class="text-orange-600 hover:underline font-semibold" title="Leer Spaanse woorden met flashcards">👉 Oefen je Spaanse woordenschat met flashcards</a></p>

      <h2>Wat dit goede voornemen je oplevert tijdens je vakantie</h2>
      
      <p>Het verschil merk je niet in een certificaat, maar in echte momenten. Je begrijpt de menukaart zonder te twijfelen. Je maakt een praatje met de ober. Je voelt je minder afhankelijk en meer verbonden met de plek waar je bent.</p>
      
      <p>Door <a href="/games/quiz" class="text-orange-600 hover:underline font-semibold" title="Oefen Spaans met quizzen">quizzen</a> en <a href="/games/flashcards" class="text-orange-600 hover:underline font-semibold" title="Leer Spaans met flashcards">flashcards</a> te combineren, leer je niet alleen woorden herkennen, maar ze ook actief toepassen. Dat geeft rust en zelfvertrouwen tijdens je reis.</p>

      <h2>Begin vandaag, op jouw manier</h2>
      
      <p>Je hoeft niet te wachten tot het perfecte moment. Begin klein. Een paar woorden. Een korte quiz. En bouw het langzaam op.</p>
      
      <p>Gebruik de <a href="/games/quiz" class="text-orange-600 hover:underline font-semibold" title="Test je Spaanse kennis met de Multiple Choice Quiz">Multiple Choice Quiz</a> om je kennis te testen en de <a href="/games/flashcards" class="text-orange-600 hover:underline font-semibold" title="Onthoud Spaanse woorden met flashcards">flashcards</a> om nieuwe woorden te onthouden. Zo blijft Spaans leren leuk en overzichtelijk — en wordt het een goed voornemen dat je écht volhoudt.</p>

      <h2>Conclusie</h2>
      
      <p>Als je dit jaar één goed voornemen kiest dat zowel leuk als praktisch is, laat het dan Spaans leren voor op reis zijn. Niet om perfect te worden, maar om met meer vertrouwen, plezier en vrijheid te reizen.</p>
      
      <p>En met spelenderwijs leren zet je vandaag al de eerste stap.</p>
    `,
  },
  {
    id: 3,
    title: 'Spaans leren met spelletjes',
    excerpt: 'Spaans leren voor een reis kan best spannend zijn. Veel mensen starten enthousiast, maar haken af als het te schools of te moeilijk wordt. Daarom werkt Spaans leren met spelletjes zo goed.',
    date: '2026-01-03',
    category: 'Spelletjes',
    thumbnail: '/blog/learning-games.webp',
    author: 'Jasmijn de Jong',
    slug: 'spaans-leren-met-spelletjes',
    content: `
      <p>Spaans leren voor een reis kan best spannend zijn. Je wilt een drankje kunnen bestellen, de weg vragen of een praatje maken met locals, maar waar begin je? Veel mensen starten enthousiast, maar haken af als het te schools of te moeilijk wordt.</p>
      
      <p>Daarom werkt Spaans leren met spelletjes zo goed. Het voelt niet als studeren, maar als oefenen in herkenbare situaties. Precies wat je nodig hebt om met meer zelfvertrouwen op reis te gaan.</p>

      <h2>Waarom spelenderwijs Spaans leren perfect is voor reizigers</h2>
      
      <p>Als je op reis gaat, hoef je geen perfecte zinnen te maken. Je wilt jezelf kunnen redden in alledaagse situaties. Spelletjes helpen je daarbij, omdat je de taal leert zoals je die echt gebruikt.</p>
      
      <p>Door quizzen en speelse oefeningen kom je woorden en zinnen tegen die je herkent uit restaurants, hotels en op straat. Daardoor voelt Spaans niet meer als iets abstracts, maar als een hulpmiddel dat je direct kunt toepassen.</p>

      <h2>Wat spelletjes je concreet opleveren tijdens je reis</h2>
      
      <p>Door regelmatig spelenderwijs te oefenen, merk je al snel verschil. Je herkent woorden op menukaarten, begrijpt simpele vragen en durft sneller te reageren als iemand Spaans tegen je spreekt.</p>
      
      <p>Je bouwt ongemerkt een praktische woordenschat op. Denk aan bestellen in een café, vragen hoe laat iets opent of een eenvoudig gesprek met een local. Omdat je dit oefent zonder druk, groeit je zelfvertrouwen stap voor stap.</p>
      
      <p>Daarnaast helpt het om de taal beter te onthouden. Woorden die je in een quiz meerdere keren tegenkomt, blijven beter hangen dan woorden die je één keer uit een boek leert.</p>

      <h2>Leren wanneer het jou uitkomt</h2>
      
      <p>Een groot voordeel van leren met spelletjes is dat je het overal kunt doen. Even oefenen voor vertrek, onderweg in het vliegtuig of 's avonds op je hotelkamer. Een korte quiz voelt haalbaar, ook als je weinig tijd hebt.</p>
      
      <p>Juist die kleine momenten zorgen ervoor dat je Spaans blijft herhalen, zonder dat het moeite kost. En hoe vaker je oefent, hoe sneller je vooruitgaat.</p>

      <h2>Oefen Spaans voor op reis met een Multiple Choice Quiz</h2>
      
      <p>Wil je op een eenvoudige en leuke manier oefenen voor je volgende reis? Op Spaansopreis.com vind je een <a href="/games/quiz" class="text-orange-600 hover:underline font-semibold">Multiple Choice Quiz</a> die speciaal geschikt is om je Spaans actief te trainen.</p>
      
      <p>De quiz helpt je om woorden en zinnen te herkennen die je tijdens het reizen tegenkomt. Je ziet direct wat je al goed beheerst en waar je nog wat extra oefening kunt gebruiken.</p>
      
      <p>Wil je met meer vertrouwen op reis gaan? Oefen dan alvast <a href="/games/quiz" class="text-orange-600 hover:underline font-semibold">hier</a>.</p>
      
      <p>Een paar minuten oefenen per dag kan al een groot verschil maken tijdens je vakantie.</p>

      <h2>Met meer zelfvertrouwen Spaans spreken op reis</h2>
      
      <p>Spaans leren hoeft geen lange studie te zijn. Door spelletjes en quizzen te gebruiken, bereid je jezelf praktisch en ontspannen voor. Je leert wat je nodig hebt, op een manier die leuk blijft.</p>
      
      <p>Zo stap je niet alleen met een koffer, maar ook met meer taalvertrouwen het vliegtuig in — klaar om écht contact te maken tijdens je reis.</p>
    `,
  },
  {
    id: 4,
    title: 'Waarom fout Spaans beter is dan geen Spaans',
    excerpt: 'Veel mensen denken dat ze pas Spaans kunnen spreken als ze het "goed genoeg" beheersen. Maar juist die gedachte zorgt ervoor dat Spaans vaak ongebruikt blijft op reis. Fout Spaans is altijd beter dan geen Spaans.',
    date: '2026-01-06',
    category: 'Spaans leren',
    thumbnail: '/blog/mistakes-are-okay.webp',
    author: 'Jasmijn de Jong',
    slug: 'waarom-fout-spaans-beter-is-dan-geen-spaans',
    content: `
      <p>Veel mensen denken dat ze pas Spaans kunnen spreken als ze het "goed genoeg" beheersen. Zonder fouten. Zonder twijfel. Zonder haperingen.</p>
      
      <p>Maar juist die gedachte zorgt ervoor dat Spaans vaak ongebruikt blijft op reis.</p>
      
      <p>En dat is zonde. Want fout Spaans is altijd beter dan geen Spaans.</p>

      <h2>Op reis gaat het niet om perfectie</h2>
      
      <p>Als je in Spanje of Latijns-Amerika bent, verwacht niemand dat je vloeiend Spaans spreekt. Je hoeft geen ingewikkelde zinnen te maken of alle grammatica te beheersen.</p>
      
      <p>Wat telt, is dat je jezelf verstaanbaar maakt.</p>
      
      <p>Een drankje bestellen, de weg vragen of een simpel praatje maken lukt vaak al met een paar woorden. Zelfs als de zin niet helemaal klopt, is de boodschap meestal duidelijk. En dat is precies waar taal op reis voor bedoeld is.</p>

      <h2>Fouten maken hoort bij leren</h2>
      
      <p>Fouten maken voelt ongemakkelijk, maar het is juist een teken dat je bezig bent met de taal. Door Spaans te gebruiken, ook als het niet perfect is, leer je sneller wat wel en niet werkt.</p>
      
      <p>Elke keer dat je een woord verkeerd uitspreekt of een zin simpel houdt, onthoud je het beter. Je leert door te doen, niet door te wachten tot alles klopt.</p>

      <h2>Spaans wordt pas waardevol als je het gebruikt</h2>
      
      <p>Woorden en zinnen die je alleen in je hoofd kent, helpen je niet op straat of in een restaurant. Spaans komt pas echt tot leven als je het hardop gebruikt.</p>
      
      <p>Door regelmatig woorden te oefenen, bouw je stap voor stap een praktische woordenschat op. Wil je hier gericht mee aan de slag, dan kun je oefenen via de <a href="/woorden" class="text-orange-600 hover:underline font-semibold" title="Bekijk de complete Spaanse woordenlijst voor reizigers">woordenlijst</a>.</p>
      
      <p>Daarnaast helpt het enorm om korte gesprekken te oefenen. Zo raak je gewend aan hoe Spaans klinkt en hoe een gesprek verloopt, zonder druk. Dat kan bijvoorbeeld via de <a href="/gesprekken" class="text-orange-600 hover:underline font-semibold" title="Oefen praktische Spaanse gesprekken voor op reis">gesprekken</a> sectie.</p>

      <h2>Zelfvertrouwen groeit door te proberen</h2>
      
      <p>Hoe vaker je Spaans gebruikt, hoe minder spannend het wordt. Zelfs als het niet perfect gaat. Je merkt dat mensen je begrijpen, dat ze meedenken en vaak zelfs helpen.</p>
      
      <p>Dat moment — wanneer je merkt dat communicatie lukt — geeft vertrouwen. En dat vertrouwen zorgt ervoor dat je de volgende keer sneller iets durft te zeggen.</p>

      <h2>Spaans leren hoeft niet foutloos te zijn</h2>
      
      <p>Je hoeft Spaans niet eerst "af" te leren voordat je het mag gebruiken. Juist door fouten te maken, groeit je taalgevoel. Elk geprobeerd zinnetje brengt je een stap verder.</p>
      
      <p>Dus spreek. Probeer. Lach om je fouten.</p>
      
      <p>Want fout Spaans betekent dat je meedoet.</p>
      
      <p>En geen Spaans betekent dat je kansen laat liggen.</p>
      
      <p>Met een paar woorden, wat durf en een beetje oefening haal je al veel meer uit je reis.</p>
    `,
  },
  {
    id: 5,
    title: 'Hoeveel tijd moet je besteden om Spaans te leren?',
    excerpt: 'Een van de meest gestelde vragen bij het leren van Spaans is: hoeveel tijd kost het eigenlijk? Voor Spaans op reis heb je verrassend weinig tijd nodig.',
    date: '2026-01-09',
    category: 'Spaans leren',
    thumbnail: '/blog/time-to-learn.webp',
    author: 'Pablo Gutierez',
    slug: 'hoeveel-tijd-spaans-leren',
    content: `
      <p>Een van de meest gestelde vragen bij het leren van Spaans is: hoeveel tijd kost het eigenlijk?</p>
      
      <p>Veel mensen denken dat je uren per week moet studeren om resultaat te zien. Dat idee zorgt er vaak voor dat ze helemaal niet beginnen.</p>
      
      <p>Het goede nieuws: voor Spaans op reis heb je verrassend weinig tijd nodig.</p>

      <h2>Het hangt af van je doel</h2>
      
      <p>Hoeveel tijd je moet besteden aan Spaans leren, hangt vooral af van wat je ermee wilt kunnen. Wil je vloeiend discussiëren? Dan is er meer nodig.</p>
      
      <p>Wil je jezelf redden op reis — eten bestellen, de weg vragen, een praatje maken — dan ligt de lat een stuk lager.</p>
      
      <p>Voor dat doel is perfectie niet nodig. Begrijpelijk Spaans is vaak al voldoende.</p>

      <h2>Wat is realistisch voor de meeste mensen?</h2>
      
      <p>Voor veel reizigers werkt dit goed:</p>
      
      <ul>
        <li>5 tot 10 minuten per dag woorden oefenen</li>
        <li>een paar keer per week korte zinnen of gesprekken bekijken</li>
        <li>af en toe herhalen wat je al kent</li>
      </ul>
      
      <p>Met die paar minuten per dag bouw je ongemerkt een praktische basis op. Wil je hier direct mee beginnen, dan kun je oefenen met alledaagse woorden via de <a href="/woorden" class="text-orange-600 hover:underline font-semibold" title="Bekijk de complete Spaanse woordenlijst voor reizigers">woordenlijst</a>.</p>

      <h2>Waarom korte momenten beter werken dan lange studiesessies</h2>
      
      <p>Dagelijks een paar minuten Spaans oefenen is effectiever dan één lange studiesessie per week. Je brein onthoudt woorden beter door herhaling, niet door hoeveelheid.</p>
      
      <p>Door regelmatig woorden en zinnen tegen te komen, herken je ze sneller wanneer iemand Spaans tegen je spreekt.</p>

      <h2>Leren zonder dat het voelt als studeren</h2>
      
      <p>Spaans leren hoeft geen zware taak te zijn. Door te oefenen met korte gesprekken voelt het meer als voorbereiden dan als leren. Je raakt gewend aan hoe Spaans klinkt en hoe een gesprek verloopt.</p>
      
      <p>Wil je oefenen met herkenbare situaties zoals bestellen, begroeten of iets vragen? Dan kun je aan de slag met praktische gesprekken via de <a href="/gesprekken" class="text-orange-600 hover:underline font-semibold" title="Oefen praktische Spaanse gesprekken voor op reis">gesprekken</a> sectie.</p>

      <h2>Wanneer zie je resultaat?</h2>
      
      <p>Resultaat merk je niet ineens, maar stap voor stap:</p>
      
      <ul>
        <li>je herkent woorden op menukaarten</li>
        <li>je begrijpt simpele vragen</li>
        <li>je durft sneller iets te zeggen</li>
      </ul>
      
      <p>Die kleine momenten zorgen voor meer zelfvertrouwen tijdens je reis.</p>

      <h2>Meer tijd besteden mag, maar hoeft niet</h2>
      
      <p>Heb je meer tijd en vind je het leuk? Dan kun je natuurlijk vaker oefenen. Maar het is geen vereiste om Spaans te kunnen gebruiken op reis.</p>
      
      <p>Wat vooral helpt, is oefenen op een manier die leuk blijft. Spelenderwijs leren verlaagt de drempel en zorgt ervoor dat je het volhoudt. Je kunt dit doen met quizzen en andere oefeningen via de <a href="/games" class="text-orange-600 hover:underline font-semibold" title="Leer Spaans met interactieve games en oefeningen">games</a> sectie.</p>

      <h2>Spaans leren past in je dagelijkse leven</h2>
      
      <p>Spaans leren hoeft geen apart project te zijn. Door korte momenten te gebruiken, past het makkelijk in je dag. Even oefenen voor vertrek, in de trein of 's avonds op de bank.</p>
      
      <p>Met een paar minuten per dag kun je al een groot verschil maken. Niet door perfect Spaans te leren, maar door Spaans te blijven gebruiken.</p>
    `,
  },
  {
    id: 6,
    title: '5 Spaanse woorden die elke reiziger moet kennen',
    excerpt: 'Je hoeft geen vloeiend Spaans te spreken om jezelf te redden op reis. Met een handvol essentiële woorden kom je al verrassend ver.',
    date: '2026-01-10',
    category: 'Spaans leren',
    thumbnail: '/blog/essential-words.webp',
    author: 'Jasmijn de Jong',
    slug: '5-spaanse-woorden-die-elke-reiziger-moet-kennen',
    content: `
      <p>Je hoeft geen vloeiend Spaans te spreken om jezelf te redden op reis. Met een handvol essentiële woorden kom je al verrassend ver.</p>
      
      <p>Deze vijf woorden zijn de basis van bijna elk gesprek dat je tijdens je reis zult voeren. Ze zijn simpel, makkelijk te onthouden en direct toepasbaar.</p>

      <h2>1. Hola (Hallo)</h2>
      
      <p>Dit is het meest gebruikte woord in het Spaans. Of je nu een restaurant binnenloopt, iemand tegenkomt op straat of contact maakt met locals — met "hola" begin je elk gesprek op de juiste manier.</p>
      
      <p>Het klinkt vriendelijk, is eenvoudig uit te spreken en wordt altijd gewaardeerd.</p>

      <h2>2. Gracias (Bedankt)</h2>
      
      <p>"Gracias" gebruik je constant op reis. Na een bestelling, een hulpvraag of een kleine dienst — dit woord laat zien dat je beleefd bent en de moeite waardeert.</p>
      
      <p>Wil je extra indruk maken? Zeg dan "muchas gracias" (hartelijk bedankt).</p>

      <h2>3. Por favor (Alstublieft)</h2>
      
      <p>Net als in het Nederlands maakt "por favor" elk verzoek vriendelijker. Of je nu iets bestelt, vraagt om hulp of om informatie — met "por favor" toon je respect.</p>
      
      <p>Bijvoorbeeld: "Un café, por favor" (Een koffie, alstublieft).</p>

      <h2>4. Perdón (Sorry/Excuseer mij)</h2>
      
      <p>"Perdón" gebruik je in meerdere situaties. Als je iemands aandacht wilt, als je langs iemand moet lopen of als je een fout maakt.</p>
      
      <p>Het werkt als een beleefde manier om contact te maken of een gesprek te beginnen.</p>

      <h2>5. ¿Dónde está...? (Waar is...?)</h2>
      
      <p>Dit is misschien wel het handigste zinnetje op reis. Met "¿Dónde está...?" kun je vragen waar iets zich bevindt.</p>
      
      <p>Bijvoorbeeld:</p>
      <ul>
        <li>¿Dónde está el baño? (Waar is het toilet?)</li>
        <li>¿Dónde está la estación? (Waar is het station?)</li>
        <li>¿Dónde está el hotel? (Waar is het hotel?)</li>
      </ul>

      <h2>Met deze vijf woorden kom je al ver</h2>
      
      <p>Deze vijf woorden vormen de basis van beleefd en praktisch communiceren op reis. Ze zijn makkelijk te onthouden en direct toepasbaar.</p>
      
      <p>Wil je meer essentiële woorden en zinnen leren? Bekijk dan de complete <a href="/woorden" class="text-orange-600 hover:underline font-semibold" title="Bekijk de complete Spaanse woordenlijst voor reizigers">woordenlijst</a> voor reizigers.</p>
      
      <p>En oefen ze actief met de <a href="/games/flashcards" class="text-orange-600 hover:underline font-semibold" title="Leer Spaanse woorden met flashcards">flashcards</a> of test je kennis met de <a href="/games/quiz" class="text-orange-600 hover:underline font-semibold" title="Test je Spaanse kennis met de Multiple Choice Quiz">Multiple Choice Quiz</a>.</p>
      
      <p>Met deze basis stap je met meer vertrouwen het vliegtuig in — klaar om écht contact te maken tijdens je reis.</p>
    `,
  },

{
  id: 7,
  title: 'Spaans leren in Guatemala: intensief, betaalbaar en persoonlijk',
  excerpt: 'Guatemala is een van de populairste landen om Spaans te leren in Midden-Amerika. Ontdek hoe taalscholen werken, wat het kost en waarom het zo effectief is.',
  date: '2026-01-07',
  category: 'Spaans leren in het buitenland',
  thumbnail: '/blog/spaans-leren-guatemala.webp',
  author: 'Jasmijn de Jong',
  slug: 'spaans-leren-in-guatemala',
  content: `
    <p>Guatemala staat bekend als een van de beste landen ter wereld om Spaans te leren. Vooral reizigers kiezen massaal voor plekken als Antigua en het Atitlán-meer.</p>

    <p>Dat is niet voor niets. De lessen zijn intensief, persoonlijk en verrassend betaalbaar.</p>

    <h2>Waarom Spaans leren in Guatemala zo goed werkt</h2>
    <p>De meeste taalscholen werken met één-op-één lessen. Dat betekent dat de docent zich volledig aanpast aan jouw niveau en leerdoelen.</p>

    <p>Daarnaast spreken veel Guatemaltekenaren rustig en duidelijk Spaans, wat het leren makkelijker maakt voor beginners.</p>

    <h2>Hoe ziet een lesweek eruit?</h2>
    <ul>
      <li>4 tot 5 uur privéles per dag</li>
      <li>focus op spreken en luisteren</li>
      <li>praktische situaties zoals boodschappen doen en eten bestellen</li>
    </ul>

    <p>Wil je je alvast voorbereiden? Begin dan met de belangrijkste <a href="/woorden" class="text-orange-600 hover:underline font-semibold">Spaanse woorden</a> voor op reis.</p>

    <h2>Wat kost Spaans leren in Guatemala?</h2>
    <p>Gemiddeld betaal je tussen de €150 en €250 per week voor lessen. Vaak kun je ook bij een gastgezin verblijven, inclusief maaltijden.</p>

    <h2>Extra tip</h2>
    <p>Oefen naast je lessen dagelijks korte gesprekken. Dat kan bijvoorbeeld via de <a href="/gesprekken" class="text-orange-600 hover:underline font-semibold">gesprekken</a> sectie, zodat je sneller durft te praten.</p>

    <p>Guatemala is ideaal als je snel vooruitgang wilt boeken en echt Spaans wilt gebruiken in het dagelijks leven.</p>
  `,
},

{
  id: 8,
  title: 'Spaans leren in Bolivia: rustig tempo en lage kosten',
  excerpt: 'Bolivia is perfect voor reizigers die Spaans willen leren in een rustig tempo. Lees hoe het werkt, wat het kost en waar je op moet letten.',
  date: '2026-01-14',
  category: 'Spaans leren in het buitenland',
  thumbnail: '/blog/spaans-leren-bolivia.webp',
  author: 'Jasmijn de Jong',
  slug: 'spaans-leren-in-bolivia',
  content: `
    <p>Bolivia is minder toeristisch dan veel andere landen in Zuid-Amerika, maar juist daardoor ideaal om Spaans te leren.</p>

    <p>Het leven gaat er rustiger en locals nemen vaak de tijd om met je te praten.</p>

    <h2>Waarom Bolivia geschikt is voor beginners</h2>
    <p>Het Spaans wordt er relatief langzaam gesproken. Dat maakt luisteren en begrijpen een stuk makkelijker.</p>

    <h2>Taalscholen en lesvorm</h2>
    <p>Net als in Guatemala werken veel scholen met privélessen of kleine groepen. De focus ligt sterk op spreken.</p>

    <p>Vooraf oefenen helpt enorm. Breid je woordenschat uit via de <a href="/woorden" class="text-orange-600 hover:underline font-semibold">woordenlijst</a>.</p>

    <h2>Kosten en levensonderhoud</h2>
    <p>Bolivia is een van de goedkoopste landen in Zuid-Amerika. Lessen kosten vaak minder dan €200 per week.</p>

    <h2>Praktisch leren buiten de klas</h2>
    <p>Oefen elke dag korte gesprekjes op straat, in de markt of in een café. Combineer dit met oefenen via <a href="/games" class="text-orange-600 hover:underline font-semibold">spelletjes</a> voor extra herhaling.</p>

    <p>Bolivia is perfect als je zonder druk Spaans wilt leren en écht onderdeel wilt worden van het dagelijks leven.</p>
  `,
},
{
  id: 9,
  title: 'Spaans leren in Colombia: duidelijk accent en veel oefenkansen',
  excerpt: 'Colombia staat bekend om zijn duidelijke Spaans en vriendelijke bevolking. Ontdek waarom dit land zo populair is om Spaans te leren.',
  date: '2026-01-13',
  category: 'Spaans leren in het buitenland',
  thumbnail: '/blog/spaans-leren-colombia.webp',
  author: 'Jasmijn de Jong',
  slug: 'spaans-leren-in-colombia',
  content: `
    <p>Colombia is een van de populairste landen om Spaans te leren. Vooral steden als Medellín en Bogotá trekken veel taalstudenten.</p>

    <h2>Het Colombiaanse Spaans</h2>
    <p>Het Spaans in Colombia wordt vaak gezien als een van de duidelijkste varianten van de taal.</p>

    <p>Dat maakt het ideaal voor mensen die hun luistervaardigheid willen verbeteren.</p>

    <h2>Leren in en buiten de school</h2>
    <p>Naast lessen krijg je volop kansen om Spaans te spreken. Colombianen zijn open, vriendelijk en praten graag.</p>

    <p>Oefen veelgebruikte zinnen vooraf via de <a href="/gesprekken" class="text-orange-600 hover:underline font-semibold">gesprekken</a> pagina.</p>

    <h2>Wat kost Spaans leren in Colombia?</h2>
    <p>De prijzen liggen iets hoger dan in Bolivia, maar zijn nog steeds betaalbaar. Reken op €200–€300 per week.</p>

    <h2>Extra leerstrategie</h2>
    <p>Combineer lessen met korte dagelijkse oefeningen. Met <a href="/games" class="text-orange-600 hover:underline font-semibold">spelletjes</a> onthoud je woorden sneller en durf je ze ook te gebruiken.</p>

    <p>Colombia is ideaal als je veel wilt praten en snel zelfvertrouwen wilt opbouwen.</p>
  `,
},
{
  id: 10,
  title: 'Spaans leren in Nicaragua: ontspannen leren op reis',
  excerpt: 'Nicaragua combineert ontspannen reizen met effectief Spaans leren. Ontdek hoe taalscholen werken en hoe je het meeste uit je lessen haalt.',
  date: '2026-01-14',
  category: 'Spaans leren in het buitenland',
  thumbnail: '/blog/spaans-leren-nicaragua.webp',
  author: 'Jasmijn de Jong',
  slug: 'spaans-leren-in-nicaragua',
  content: `
    <p>Nicaragua is een ideale bestemming als je Spaans wilt leren in een ontspannen sfeer.</p>

    <p>De combinatie van natuur, kleine steden en vriendelijke locals maakt oefenen laagdrempelig.</p>

    <h2>Waarom Spaans leren hier prettig is</h2>
    <p>Het tempo ligt laag en mensen zijn geduldig. Dat geeft je de ruimte om te praten, ook als je fouten maakt.</p>

    <h2>Lesstructuur</h2>
    <p>Veel scholen bieden privélessen of kleine groepen. De nadruk ligt op praktische communicatie.</p>

    <p>Bereid je voor door alvast te oefenen met basiswoorden via de <a href="/woorden" class="text-orange-600 hover:underline font-semibold">woordenlijst</a>.</p>

    <h2>Kosten en verblijf</h2>
    <p>Nicaragua is betaalbaar. Lesprijzen liggen rond de €150–€250 per week, vaak met homestay-opties.</p>

    <h2>Blijven oefenen</h2>
    <p>Gebruik naast je lessen korte oefeningen en spellen. Via de <a href="/games" class="text-orange-600 hover:underline font-semibold">games</a> sectie blijf je actief oefenen zonder dat het als studeren voelt.</p>

    <p>Nicaragua is perfect als je leren en reizen wilt combineren zonder stress.</p>
  `,
},{
  id: 11,
  title: 'Spaans leren in Midden- en Zuid-Amerika: hoe het werkt, kosten en tips',
  excerpt: 'Spaans leren tijdens je reis door Midden- en Zuid-Amerika is effectief en leuk. Ontdek hoe taalscholen werken, wat het kost en hoe je je goed voorbereidt.',
  date: '2026-01-16',
  category: 'Spaans leren in het buitenland',
  thumbnail: '/blog/spaans-leren-midden-en-zuid-amerika.webp',
  author: 'Jasmijn de Jong',
  slug: 'spaans-leren-midden-en-zuid-amerika',
  content: `
    <p>Spaans leren in Midden- en Zuid-Amerika is voor veel reizigers een logische stap. Je hoort de taal overal om je heen en kunt wat je leert direct toepassen in het dagelijks leven.</p>

    <p>Of je nu een paar weken op reis bent of langere tijd blijft: leren in het buitenland zorgt vaak voor snellere vooruitgang dan studeren vanuit huis.</p>

    <h2>Hoe werkt Spaans leren in Midden- en Zuid-Amerika?</h2>
    <p>In vrijwel elk land vind je taalscholen die speciaal gericht zijn op reizigers. Deze scholen bieden flexibele programma’s aan, waardoor je leren eenvoudig combineert met reizen.</p>

    <ul>
      <li>privélessen of kleine groepen</li>
      <li>focus op spreken en luisteren</li>
      <li>praktische situaties zoals eten bestellen of de weg vragen</li>
    </ul>

    <p>De meeste lessen zijn direct in het Spaans. Daarom is het slim om vooraf alvast een basis te leggen met veelgebruikte <a href="/woorden" class="text-orange-600 hover:underline font-semibold">Spaanse woorden</a>.</p>

    <h2>Waarom leren in het buitenland zo effectief is</h2>
    <p>Je leert Spaans niet alleen in de klas, maar de hele dag door. Op straat, in restaurants en tijdens gesprekken met locals.</p>

    <p>Dat zorgt ervoor dat je sneller went aan de taal en minder bang wordt om te spreken.</p>

    <h2>Wat kost Spaans leren in Midden- en Zuid-Amerika?</h2>
    <p>De kosten verschillen per land, maar liggen vaak lager dan in Europa. Gemiddeld kun je rekenen op:</p>

    <ul>
      <li>€100 – €200 per week voor groepslessen</li>
      <li>€10 – €20 per uur voor privélessen</li>
      <li>€150 – €300 per week voor een homestay inclusief maaltijden</li>
    </ul>

    <h2>Moet je al Spaans kunnen voordat je vertrekt?</h2>
    <p>Dat is niet verplicht, maar wel aan te raden. Als je vooraf al eenvoudige zinnen en vragen oefent, haal je meer uit je lessen.</p>

    <p>Je kunt dit doen door alvast te oefenen met <a href="/gesprekken" class="text-orange-600 hover:underline font-semibold">praktische gesprekken</a> die je op reis tegenkomt.</p>

    <h2>Spelenderwijs blijven oefenen</h2>
    <p>Naast lessen helpt het om dagelijks kort te oefenen. Spelenderwijs leren verlaagt de drempel en zorgt ervoor dat woorden beter blijven hangen.</p>

    <p>Via de <a href="/games" class="text-orange-600 hover:underline font-semibold">spelletjes</a> kun je op een ontspannen manier blijven herhalen.</p>

    <h2>Welke landen zijn populair om Spaans te leren?</h2>
    <p>Populaire bestemmingen zijn onder andere Guatemala, Bolivia, Colombia en Nicaragua. Elk land heeft zijn eigen voordelen, afhankelijk van je budget, leerstijl en reisplannen.</p>

    <p>Welke bestemming je ook kiest: oefenen, fouten maken en blijven spreken is de sleutel tot succes.</p>

    <p>Met een goede voorbereiding stap je niet alleen met een koffer, maar ook met meer zelfvertrouwen het vliegtuig in.</p>
  `,
},

];

// Generate static params only for published posts
export async function generateStaticParams() {
  const publishedPosts = filterPublishedPosts(allSpaansLerenPosts);
  return publishedPosts.map((post) => ({
    slug: post.slug,
  }));
}

// Generate metadata for each article
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = allSpaansLerenPosts.find((p) => p.slug === slug);

  // Return 404 metadata if post doesn't exist or isn't published yet
  if (!post || !isPostPublished(post.date)) {
    return {
      title: 'Artikel niet gevonden - Spaans op reis',
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  return {
    title: `${post.title} - Spaans Leren | Spaans op reis`,
    description: post.excerpt,
    alternates: {
      canonical: `/spaans-leren/${post.slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.date,
      url: `/spaans-leren/${post.slug}`,
      images: [
        {
          url: post.thumbnail,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: 'summary',
      title: post.title,
      description: post.excerpt,
      images: [post.thumbnail],
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function SpaansLerenPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = allSpaansLerenPosts.find((p) => p.slug === slug);

  // Show 404 if post doesn't exist or if it's not published yet
  if (!post || !isPostPublished(post.date)) {
    notFound();
  }

  const formattedDate = new Date(post.date).toLocaleDateString('nl-NL', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  // Get only published posts for related articles
  const publishedPosts = filterPublishedPosts(allSpaansLerenPosts);

  const siteUrl = getSiteUrl();
  const postUrl = `${siteUrl}/spaans-leren/${post.slug}`;
  const imageUrl = `${siteUrl}${post.thumbnail}`;

  // JSON-LD Schema for the article
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': postUrl,
    },
    url: postUrl,
    headline: post.title,
    description: post.excerpt,
    image: [imageUrl],
    datePublished: post.date,
    author: {
      '@type': 'Person',
      name: post.author,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Spaans op reis',
      logo: {
        '@type': 'ImageObject',
        url: `${siteUrl}/logo.webp`,
      },
    },
    articleSection: post.category,
  };

  return (
    <>
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      <div className="min-h-screen bg-gradient-to-b from-[#F0EBE0] to-white">
        {/* Back to Spaans Leren Link */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 sm:pt-8">
          <Link
            href="/spaans-leren"
            className="inline-flex items-center gap-2 text-orange-600 hover:text-orange-700 font-semibold transition-colors group text-sm sm:text-base"
          >
            <span className="group-hover:-translate-x-1 transition-transform">←</span>
            <span>Terug naar Spaans Leren</span>
          </Link>
        </div>

        {/* Article Header */}
        <header className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          <div className="mb-4 sm:mb-6">
            <span className="inline-block bg-orange-600 text-white text-xs sm:text-sm font-bold px-3 sm:px-4 py-1.5 sm:py-2 rounded-full">
              {post.category}
            </span>
          </div>
          
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-sm sm:text-base text-gray-600">
            <div className="flex items-center gap-2">
              <span className="w-8 h-8 sm:w-10 sm:h-10 bg-orange-100 rounded-full flex items-center justify-center text-orange-600 font-bold text-sm sm:text-base">
                S
              </span>
              <span className="font-medium">{post.author}</span>
            </div>
            <time dateTime={post.date} className="flex items-center gap-2">
              <span>📅</span>
              <span className="text-sm sm:text-base">{formattedDate}</span>
            </time>
            <span className="flex items-center gap-2">
              <span>⏱️</span>
              <span className="text-sm sm:text-base">5 min leestijd</span>
            </span>
          </div>
        </header>

        {/* Featured Image */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 sm:mb-12">
          <div className="relative h-64 sm:h-80 md:h-96 lg:h-[500px] rounded-xl sm:rounded-2xl overflow-hidden shadow-xl">
            <Image
              src={post.thumbnail}
              alt={post.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
              priority
            />
          </div>
        </div>

        {/* Article Content */}
        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
          <div className="prose w-full">
            {post.content ? (
              <div className="w-full" dangerouslySetInnerHTML={{ __html: post.content }} />
            ) : (
              <>
                {/* Placeholder content */}
                <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg mb-8">
                  <p className="text-blue-900 font-semibold mb-2">
                    📝 Artikel in ontwikkeling
                  </p>
                  <p className="text-blue-800 text-sm">
                    Dit is een placeholder pagina. De volledige content wordt hier weergegeven wanneer het artikel is geschreven.
                  </p>
                </div>

                <section className="mb-8">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">Introductie</h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    {post.excerpt}
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    In dit artikel gaan we dieper in op dit onderwerp en delen we praktische tips die je direct kunt toepassen tijdens je reis naar Spanje of Latijns-Amerika.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">Waarom is dit belangrijk?</h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Of je nu een beginner bent in het Spaans leren of al wat ervaring hebt, deze informatie helpt je om je vaardigheden te verbeteren en met meer zelfvertrouwen te reizen.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">Praktische Tips</h2>
                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    <li>Oefen regelmatig met onze interactieve games</li>
                    <li>Leer belangrijke woorden en zinnen uit het dagelijks leven</li>
                    <li>Luister naar native speakers wanneer mogelijk</li>
                    <li>Wees niet bang om fouten te maken - het hoort bij het leerproces!</li>
                  </ul>
                </section>

                <section className="mb-8">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">Conclusie</h2>
                  <p className="text-gray-700 leading-relaxed">
                    Met deze kennis ben je goed voorbereid op je volgende Spaanse avontuur. Vergeet niet om onze andere tools te gebruiken om je Spaans verder te verbeteren!
                  </p>
                </section>
              </>
            )}
          </div>

          {/* Call to Action */}
          <div className="mt-12 p-6 sm:p-8 bg-[#F0EBE0] text-gray-900 rounded-2xl shadow-xl max-w-3xl mx-auto border-2 border-gray-200">
            <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">🎮 Oefen wat je hebt geleerd!</h3>
            <p className="text-gray-700 mb-6 text-sm sm:text-base">
              Gebruik onze interactieve games om je Spaanse vaardigheden te verbeteren
            </p>
            <div className="flex flex-wrap gap-3 sm:gap-4 justify-center sm:justify-start">
              <Link
                href="/games/flashcards"
                className="px-5 sm:px-6 py-2 sm:py-3 bg-orange-600 text-white rounded-full font-bold hover:bg-orange-700 transition-colors text-sm sm:text-base"
              >
                Flashcards
              </Link>
              <Link
                href="/games/quiz"
                className="px-5 sm:px-6 py-2 sm:py-3 bg-orange-600 text-white rounded-full font-bold hover:bg-orange-700 transition-colors text-sm sm:text-base"
              >
                Quiz
              </Link>
              <Link
                href="/woorden"
                className="px-5 sm:px-6 py-2 sm:py-3 bg-orange-600 text-white rounded-full font-bold hover:bg-orange-700 transition-colors text-sm sm:text-base"
              >
                Woordenlijst
              </Link>
            </div>
          </div>
        </article>

        {/* Related Articles - Only show published posts */}
        {publishedPosts.filter((p) => p.id !== post.id).length > 0 && (
          <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">📚 Meer Artikelen</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {publishedPosts
                .filter((p) => p.id !== post.id)
                .slice(0, 2)
                .map((relatedPost) => (
                  <Link
                    key={relatedPost.id}
                    href={`/spaans-leren/${relatedPost.slug}`}
                    className="group bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow p-6"
                  >
                    <span className="inline-block bg-orange-100 text-orange-600 text-xs font-bold px-3 py-1 rounded-full mb-3">
                      {relatedPost.category}
                    </span>
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors">
                      {relatedPost.title}
                    </h3>
                    <p className="text-gray-600 text-sm line-clamp-2">
                      {relatedPost.excerpt}
                    </p>
                  </Link>
                ))}
            </div>
          </section>
        )}
      </div>
    </>
  );
}

