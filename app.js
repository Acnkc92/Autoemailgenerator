// Predefined Templates in 11 Languages
const templates = {
    'status-update': {
        en: `Kindly confirm if the reported issue that you were experiencing with the HP PC has been resolved or would you need further assistance.

For any further issues or concerns in future you may revert on this email and we shall be able to help you accordingly.

If the information provided was helpful to you, then kindly confirm if we may close the case.

Once again, thank you for contacting HP.`,
        cs: `Laskavě potvrďte, zda byl hlášený problém, který jste měli s počítačem HP vyřešen, nebo byste potřebovali další pomoc.

V případě dalších problémů nebo otázek v budoucnosti se můžete obrátit na tento e-mail a my vám budeme moci pomoci.

Pokud byly poskytnuté informace užitečné, laskavě potvrďte, zda můžeme případ uzavřít.

Děkujeme vám ještě jednou za kontakt s HP.`,
        nl: `Kunt u alstublieft bevestigen of het gemelde probleem met uw HP-computer is opgelost of dat u verdere hulp nodig hebt.

Voor toekomstige problemen of vragen kunt u altijd op deze e-mail reageren en wij helpen u graag verder.

Mocht de verstrekte informatie nuttig voor u zijn, kunt u alstublieft bevestigen of wij de zaak kunnen sluiten.

Hartelijk dank dat u contact hebt opgenomen met HP.`,
        hu: `Kérjük, erősítse meg, hogy a HP számítógépével felmerült probléma megoldódott-e, vagy szükséges-e további segítség.

Bármilyen további probléma vagy kérdés esetén az erre az e-mailre válaszolhat, és szívesen segítünk.

Ha az információ hasznos volt, kérjük, erősítse meg, hogy lezárhatjuk-e az esetet.

Köszönjük, hogy felvette velünk a kapcsolatot.`,
        it: `Si prega di confermare se il problema segnalato con il PC HP è stato risolto o se è necessaria un'assistenza ulteriore.

Per eventuali problemi o dubbi futuri, potete rispondere a questa e-mail e saremo lieti di aiutarvi.

Se le informazioni fornite vi sono state utili, vi preghiamo di confermare se possiamo chiudere il caso.

Grazie ancora per aver contattato HP.`,
        pl: `Proszę potwierdzić, czy zgłoszony problem z komputerem HP został rozwiązany, czy potrzebna jest dalsza pomoc.

W przypadku jakichkolwiek przyszłych problemów lub wątpliwości możesz odpowiedzieć na ten e-mail i chętnie Ci pomożemy.

Jeśli podane informacje okazały się dla Ciebie przydatne, prosimy potwierdzić, czy możemy zamknąć sprawę.

Dziękujemy jeszcze raz za kontakt z HP.`,
        ro: `Vă rugăm să confirmați dacă problema raportată cu PC-ul HP a fost rezolvată sau dacă aveți nevoie de asistență suplimentară.

Pentru eventualele probleme sau îngrijorări viitoare, puteți răspunde la acest e-mail și vom fi bucuroși să vă ajutăm.

Dacă informațiile furnizate v-au fost utile, vă rugăm să confirmați dacă putem închide cazul.

Vă mulțumim din nou pentru contactarea HP.`,
        sr: `Molimo vas da potvrdite da li je problem koji ste prijavili sa HP računarom rešen ili vam je potrebna dalja pomoć.

Za buduće probleme ili nedoumice, možete odgovoriti na ovaj e-mail i sa zadovoljstvom ćemo vam pomoći.

Ako su vam date informacije bile korisne, molimo vas da potvrdite da li možemo zatvoriti slučaj.

Hvala vam ponovo na kontaktu sa HP.`,
        sk: `Laskavo potvrďte, či bol hlásený problém s počítačom HP vyriešený alebo by ste potrebovali ďalšiu pomoc.

V prípade budúcich problémov alebo otázok sa môžete vrátiť na tento e-mail a my vám budeme vedieť pomôcť.

Ak boli poskytnuté informácie pre vás užitočné, laskavo potvrďte, či môžeme prípad zavrieť.

Ďakujeme vám ešte raz za kontakt s HP.`,
        sl: `Prosimo, potrdite, ali je navedena težava z računalnikom HP rešena ali potrebujete dodatno pomoč.

V primeru prihodnih težav ali vprašanj se lahko obrnete na ta e-poštni naslov in vam bomo z veseljem pomagali.

Če vam je podana informacija bila koristna, prosimo, potrdite ali lahko zaključimo primer.

Hvala vam, da ste se obrnili na HP.`,
        es: `Por favor, confirme si el problema reportado con su PC HP ha sido resuelto o si necesita asistencia adicional.

Para cualquier problema futuro, puede responder a este correo electrónico y estaremos encantados de ayudarle.

Si la información proporcionada le ha sido útil, por favor confirme si podemos cerrar el caso.

Gracias nuevamente por contactar a HP.`
    },
    'closure': {
        en: `We have attempted to contact you three times via email but have not received a response.

As we have not heard back, we will proceed with moving the case to closure.

If you require any further assistance, please feel free to contact us using the same case reference ID, and we will be happy to assist you.`,
        cs: `Pokoušeli jsme se s vámi kontaktovat třikrát e-mailem, ale nedostali jsme odpověď.

Protože jsme od vás neslyšeli, budeme pokračovat v uzavření případu.

Pokud budete potřebovat další pomoc, neváhejte nás kontaktovat s použitím stejného čísla případu a budeme vám rádi pomáhat.`,
        nl: `We hebben geprobeerd u drie keer via e-mail te contacteren, maar hebben geen reactie ontvangen.

Aangezien we geen antwoord van u hebben gehoord, zullen we de zaak sluiten.

Mocht u verdere hulp nodig hebben, neem dan gerust contact met ons op met dezelfde zaakreferentie en wij helpen u graag verder.`,
        hu: `Háromszor próbáltunk kapcsolatba lépni Önnel e-mailon keresztül, de nem kaptunk választ.

Mivel nem hallottunk Öntől, folytatjuk az eset lezárásával.

Ha további segítségre van szüksége, kérjük, vegye fel velünk a kapcsolatot ugyanazzal az esetzámmal, és szívesen segítünk.`,
        it: `Abbiamo tentato di contattarvi tre volte via e-mail ma non abbiamo ricevuto risposta.

Poiché non abbiamo ricevuto notizie da voi, procederemo con la chiusura del caso.

Se avete bisogno di ulteriore assistenza, contattateci utilizzando lo stesso numero di riferimento del caso e saremo felici di aiutarvi.`,
        pl: `Próbowaliśmy się z Tobą skontaktować trzy razy za pośrednictwem e-maila, ale nie otrzymaliśmy odpowiedzi.

Ponieważ od Ciebie nie usłyszeliśmy, będziemy kontynuować zamknięcie sprawy.

Jeśli potrzebujesz dalszej pomocy, skontaktuj się z nami, podając ten sam numer referencyjny sprawy, a chętnie Ci pomożemy.`,
        ro: `Am încercat să vă contactez de trei ori prin e-mail, dar nu am primit niciun răspuns.

Deoarece nu am auzit de la dumneavoastră, vom proceda la închiderea cazului.

Dacă aveți nevoie de asistență suplimentară, vă rugăm să ne contactați utilizând același ID de referință a cazului și vom fi bucuroși să vă ajutăm.`,
        sr: `Pokušali smo da vas kontaktiramo tri puta e-poštom, ali nismo dobili odgovor.

Pošto nismo čuli od vas, nastaviće se sa zatvaranjem slučaja.

Ako vam je potrebna dalja pomoć, slobodno nas kontaktirajte koristeći istu referencu slučaja i sa zadovoljstvom ćemo vam pomoći.`,
        sk: `Pokúšali sme sa s vami skontaktovať trikrát e-mailom, ale nedostali sme odpoveď.

Keďže sme od vás neslyšeli, budeme pokračovať v zatváraní prípadu.

Ak budete potrebovať ďalšiu pomoc, neváhajte sa s nami skontaktovať s použitím rovnakého ID prípadu a budeme vám rádi pomáhať.`,
        sl: `Tri krat smo poskušali stopiti v stik z vami prek e-pošte, vendar nismo prejeli odziva.

Ker nismo slišali od vas, bomo nadaljevali z zapiranjem primera.

Če potrebujete dodatno pomoč, nas kontaktirajte z isto referenčno številko primera in vam bomo z veseljem pomagali.`,
        es: `Hemos intentado contactarlo tres veces por correo electrónico pero no hemos recibido respuesta.

Como no hemos recibido noticias suyas, procederemos con el cierre del caso.

Si requiere asistencia adicional, por favor contáctenos utilizando el mismo ID de referencia de caso y estaremos encantados de ayudarle.`
    },
    'part-backordered': {
        en: `The part is back-ordered.

The case has been escalated to our Logistics Team who are working on an ETA for the same.

You will be kept informed via email or phone regarding the ETA and when it would be shipped/delivered.

We appreciate your patience in this regard.`,
        cs: `Součástka je vyprodána.

Případ byl eskalován našemu týmu logistiky, který pracuje na odhadu doby dodání.

Budete informováni e-mailem nebo telefonem ohledně odhadované doby dodání a kdy bude součástka odeslána/doručena.

Oceňujeme vaši trpělivost v tomto ohledu.`,
        nl: `Het onderdeel is niet op voorraad.

Het geval is geëscaleerd naar ons logistieke team dat aan een leveringstijd werkt.

U wordt per e-mail of telefoon geïnformeerd over de leveringstijd en wanneer het onderdeel wordt verzonden/geleverd.

We waarderen uw geduld in dit opzicht.`,
        hu: `Az alkatrész jelenleg nincs készleten.

Az eset eszkalálva lett a logisztikai csapatunkhoz, akik az eljutási időn dolgoznak.

E-mailon vagy telefonon értesítjük Önt az eljutási idő és a szállítás/kézbesítés időpontjáról.

Érékeljük a türelmét ebben a tekintetben.`,
        it: `Il componente è esaurito.

Il caso è stato escalato al nostro team logistico che sta elaborando un ETA.

Verrete informati via e-mail o telefono riguardo all'ETA e quando il componente sarà spedito/consegnato.

Apprezziamo la vostra pazienza a riguardo.`,
        pl: `Część jest niedostępna.

Sprawa została eskalowana do naszego zespołu logistyki, który pracuje nad szacunkowym czasem dostawy.

Będziesz informowany e-mailem lub telefonem dotyczące szacunkowego czasu dostawy i kiedy część będzie wysłana/dostarczona.

Doceniamy Twoją cierpliwość w tej sprawie.`,
        ro: `Componenta este în curs de reaprovizionare.

Cazul a fost escalat către echipa noastră de logistică care lucrează la o estimare a timpului de livrare.

Veți fi informat prin e-mail sau telefon cu privire la ora estimată de livrare și când componenta va fi expediată/livrată.

Apreciem răbdarea dumneavoastră în această privință.`,
        sr: `Deo je nedostupan.

Slučaj je eskaliran našem logističkom timu koji radi na proceni vremena dostave.

Biće vas obavešteni e-poštom ili telefonom u vezi sa vremenom dostave i kada će deo biti poslat/dostavljen.

Cenimo vašu strpljenje u ovom pogledu.`,
        sk: `Diely sú vypredané.

Prípad bol eskalovaný nášmu logistickému tímu, ktorý pracuje na odhade doby dodania.

Budete informovaní e-mailom alebo telefonom o odhadovanej dobe dodania a kedy bude diely odoslané/doručené.

Oceňujeme vašu trpezlivosť v tomto ohľade.`,
        sl: `Del ni na zalogi.

Primer je bil eskaliran našemu logističnemu timu, ki dela na oceni časa dostave.

Obveščeni boste po e-pošti ali telefonu glede na ocenjeni čas dostave in kdaj bo del poslан/dostavljen.

Cenimo vašo potrpežljivost v tem delu.`,
        es: `La pieza está sin existencias.

El caso ha sido escalado a nuestro equipo de logística que está trabajando en una ETA.

Se le informará por correo electrónico o por teléfono sobre la ETA y cuándo se enviará/entregará la pieza.

Agradecemos su paciencia al respecto.`
    },
    'trade': {
        en: `You will shortly receive a quotation for the repair.

The service will commence once we receive your approval and payment is confirmed.`,
        cs: `Brzy obdržíte nabídku na opravu.

Služba začne, jakmile obdržíme vaše schválení a budeme si jisti platbou.`,
        nl: `U ontvangt binnenkort een offerte voor de reparatie.

De service wordt gestart zodra we uw goedkeuring hebben ontvangen en de betaling is bevestigd.`,
        hu: `Hamarosan megkapja a javítás költségvetési ajánlatát.

A szolgáltatás akkor kezdődik, amikor megkapjuk az Ön jóváhagyását és a fizetés megerősítésre kerül.`,
        it: `Riceverete a breve un preventivo per la riparazione.

Il servizio avrà inizio una volta che riceveremo la vostra approvazione e la conferma del pagamento.`,
        pl: `Wkrótce otrzymasz wycenę na naprawę.

Usługa rozpocznie się po otrzymaniu Twojej zgody i potwierdzeniu płatności.`,
        ro: `Veți primi în curând o ofertă pentru reparație.

Serviciul va fi pornit odată ce primim aprobarea dumneavoastră și se confirmă plata.`,
        sr: `Uskoro ćete primiti ponudu za popravku.

Servis će početi čim primimo vašu odobrenje i potvrdi se plaćanje.`,
        sk: `Čoskoro dostanete ponuku na opravu.

Služba začne, keď dostaneme vašu schválenie a potvrdí sa platba.`,
        sl: `Kmalu boste prejeli ponudbo za popravilo.

Storitev se bo začela, ko bomo prejeli vašo odobritev in potrditev plačila.`,
        es: `Pronto recibirá un presupuesto para la reparación.

El servicio comenzará una vez que recibamos su aprobación y se confirme el pago.`
    },
    'reconnect': {
        en: `My name is [Advisor Name] and I'm from the HP Live Chat Support Team.

I see you've been disconnected from the live chat session.

If you would like to proceed further and request assistance, please contact us with the case number [Case Ref#] and we'll be happy to assist you further.

Feel free to contact us via chat at https://support.hp.com/contact.

Our support hours are Monday through Friday, 8:00 AM to 6:00 PM.`,
        cs: `Jmenuji se [Advisor Name] a jsem z týmu HP Live Chat Support.

Vidím, že jste byli odpojeni z relace živého chatu.

Pokud byste chtěli pokračovat a požádat o pomoc, kontaktujte nás s číslem případu [Case Ref#] a budeme vám rádi pomáhat.

Neváhejte nás kontaktovat prostřednictvím chatu na adrese https://support.hp.com/contact.

Naše pracovní doba je pondělí až pátek od 8:00 do 18:00.`,
        nl: `Mijn naam is [Advisor Name] en ik ben van het HP Live Chat Support Team.

Ik zie dat u uit de live chat-sessie bent verbroken.

Mocht u verder willen gaan en hulp nodig hebben, neem dan contact met ons op met casenummer [Case Ref#] en wij helpen u graag verder.

Neem gerust via chat contact met ons op via https://support.hp.com/contact.

Onze ondersteuningsuren zijn maandag tot en met vrijdag, van 8:00 tot 18:00 uur.`,
        hu: `A nevem [Advisor Name], és a HP Live Chat Support Csapat tagja vagyok.

Látom, hogy le lett szakítva az élő csevegés munkamenetből.

Ha szeretne folytatni és segítséget kérni, lépjen velünk kapcsolatba az [Case Ref#] esetzámmal, és szívesen segítünk.

Bátran vegye fel velünk a kapcsolatot chaten keresztül a https://support.hp.com/contact oldalon.

Támogatási időnk hétfőtől péntekig 8:00 és 18:00 között van.`,
        it: `Il mio nome è [Advisor Name] e sono parte del team HP Live Chat Support.

Vedo che siete stati disconnessi dalla sessione di live chat.

Se desiderate procedere ulteriormente e richiedere assistenza, contattateci con il numero di caso [Case Ref#] e saremo felici di assistervi.

Non esitate a contattarci tramite chat su https://support.hp.com/contact.

Il nostro orario di supporto è dal lunedì al venerdì, dalle 8:00 alle 18:00.`,
        pl: `Moje imię to [Advisor Name] i jestem z zespołu HP Live Chat Support.

Widzę, że zostałeś rozłączony z sesji czatu na żywo.

Jeśli chciałbyś kontynuować i poprosić o pomoc, skontaktuj się z nami pod numerem sprawy [Case Ref#], a chętnie Ci pomożemy.

Nie wahaj się skontaktować z nami na czacie na https://support.hp.com/contact.

Nasze godziny wsparcia to poniedziałek do piątku, od 8:00 do 18:00.`,
        ro: `Mă numesc [Advisor Name] și sunt din echipa HP Live Chat Support.

Văd că ați fost deconectat din sesiunea de chat live.

Dacă doriți să continuați și să solicitați asistență, contactați-ne cu numărul de caz [Case Ref#] și vom fi bucuroși să vă ajutăm.

Nu ezitați să ne contactați prin chat la https://support.hp.com/contact.

Orele noastre de suport sunt luni până vineri, de la 8:00 la 18:00.`,
        sr: `Moje ime je [Advisor Name] i ja sam iz HP Live Chat Support tima.

Vidim da ste bili isključeni iz sesije živog čata.

Ako želite da nastavite i tražite pomoć, kontaktirajte nas sa brojem slučaja [Case Ref#] i sa zadovoljstvom ćemo vam pomoći.

Slobodno nas kontaktirajte preko čata na https://support.hp.com/contact.

Naše radno vreme je od ponedeljka do petka, od 8:00 do 18:00.`,
        sk: `Moje meno je [Advisor Name] a som zo tímu HP Live Chat Support.

Vidím, že ste boli odpojení z relácie živého chatu.

Ak chcete pokračovať a požiadať o pomoc, kontaktujte nás s číslom prípadu [Case Ref#] a budeme vám radi pomáhať.

Neváhajte nás kontaktovať prostredníctvom chatu na https://support.hp.com/contact.

Naše pracovné hodiny sú pondelok až piatok, od 8:00 do 18:00.`,
        sl: `Moje ime je [Advisor Name] in sem del tima HP Live Chat Support.

Vidim, da ste bili prekinjena iz seje živega klepeta.

Če želite nadaljevati in zaprositi za pomoč, nas kontaktirajte s številko primera [Case Ref#] in z veseljem vam bomo pomagali.

Nas prosim kontaktirajte prek klepeta na https://support.hp.com/contact.

Naš čas podpore je od ponedeljka do petka, od 8:00 do 18:00.`,
        es: `Mi nombre es [Advisor Name] y soy parte del equipo HP Live Chat Support.

Veo que ha sido desconectado de la sesión de chat en vivo.

Si desea continuar y solicitar asistencia, contáctenos con el número de caso [Case Ref#] y estaremos encantados de ayudarle.

No dude en contactarnos a través del chat en https://support.hp.com/contact.

Nuestro horario de soporte es de lunes a viernes, de 8:00 a 18:00.`
    }
};

// Translations for static labels and greetings
const translations = {
    'hello': {
        en: 'Hello',
        cs: 'Dobrý den',
        nl: 'Hallo',
        hu: 'Tisztelt',
        it: 'Salve',
        pl: 'Cześć',
        ro: 'Bună',
        sr: 'Zdravo',
        sk: 'Ahoj',
        sl: 'Zdravo',
        es: 'Hola'
    },
    'issueReported': {
        en: 'Issue Reported',
        cs: 'Hlášený problém',
        nl: 'Gemelde probleem',
        hu: 'Bejelentett probléma',
        it: 'Problema segnalato',
        pl: 'Zgłoszony problem',
        ro: 'Problemă raportată',
        sr: 'Prijavljen problem',
        sk: 'Hlásený problém',
        sl: 'Prijavljeni problem',
        es: 'Problema reportado'
    },
    'caseRefLabel': {
        en: 'Case Ref#',
        cs: 'Číslo případu',
        nl: 'Zaakref#',
        hu: 'Eset száma',
        it: 'Rif. caso#',
        pl: 'Nr sprawy#',
        ro: 'Ref. caz#',
        sr: 'Broj slučaja#',
        sk: 'Číslo prípadu#',
        sl: 'Ref. primera#',
        es: 'Ref. caso#'
    },
    'serialLabel': {
        en: 'HP Serial#',
        cs: 'Sériové číslo HP',
        nl: 'HP Serienummer#',
        hu: 'HP sorozatszám#',
        it: 'N. seriale HP#',
        pl: 'Nr seryjny HP#',
        ro: 'Nr. serial HP#',
        sr: 'Serijat broj HP#',
        sk: 'Sériové číslo HP#',
        sl: 'Serijsko št. HP#',
        es: 'N. serie HP#'
    },
    'regards': {
        en: 'Regards',
        cs: 'S pozdravem',
        nl: 'Met vriendelijke groeten',
        hu: 'Üdvözlettel',
        it: 'Cordiali saluti',
        pl: 'Pozdrawiam',
        ro: 'Cu plăcere',
        sr: 'Pozdrav',
        sk: 'Pozdravy',
        sl: 'Spoštljivo',
        es: 'Saludos cordiales'
    },
    'trustedAdvisor': {
        en: 'HP Trusted Advisor',
        cs: 'HP Důvěryhodný poradce',
        nl: 'HP Vertrouwde adviseur',
        hu: 'HP megbízott tanácsadó',
        it: 'Consulente di fiducia HP',
        pl: 'Zaufany doradca HP',
        ro: 'Consultant de încredere HP',
        sr: 'HP Poverljivi savetnik',
        sk: 'HP Dôveryhodný poradca',
        sl: 'HP zaupanja vredni svetovalec',
        es: 'Asesor de confianza de HP'
    },
    'customerSupport': {
        en: 'HP Customer Support',
        cs: 'Zákaznická podpora HP',
        nl: 'HP Customer Support',
        hu: 'HP Ügyfélszolgálat',
        it: 'Assistenza clienti HP',
        pl: 'Obsługa klienta HP',
        ro: 'Suport pentru clienți HP',
        sr: 'HP korisničko podrška',
        sk: 'HP podpora zákazníkom',
        sl: 'Podpora za stranke HP',
        es: 'Asistencia al cliente de HP'
    },
    'supportLink': {
        en: 'HP Geo link for support options',
        cs: 'HP geolokační odkaz pro možnosti podpory',
        nl: 'HP geografische link voor ondersteuningsopties',
        hu: 'HP geo-link a támogatási lehetőségekhez',
        it: 'Collegamento geo HP per le opzioni di supporto',
        pl: 'Link geo HP dla opcji wsparcia',
        ro: 'Link geo HP pentru opțiuni de suport',
        sr: 'HP geo veza za opcije podrške',
        sk: 'HP geo-odkaz na možnosti podpory',
        sl: 'HP geo povezava za možnosti podpore',
        es: 'Enlace geo de HP para opciones de soporte'
    }
};

// Show/hide custom notes section based on template selection
document.addEventListener('DOMContentLoaded', function() {
    const templateSelect = document.getElementById('template');
    const customNotesSection = document.getElementById('customNotesSection');

    templateSelect.addEventListener('change', function() {
        if (this.value === 'custom') {
            customNotesSection.style.display = 'flex';
        } else {
            customNotesSection.style.display = 'none';
        }
    });
});

// Translate text using MyMemory API
async function translateText(text, targetLanguage) {
    if (targetLanguage === 'en' || !text) {
        return text;
    }

    try {
        const response = await fetch('https://api.mymemory.translated.net/get?q=' + encodeURIComponent(text) + '&langpair=en|' + targetLanguage);
        const data = await response.json();

        if (data.responseStatus === 200 && data.responseData.translatedText) {
            return data.responseData.translatedText;
        }
    } catch (error) {
        console.error('Translation error:', error);
    }

    return text;
}

// Main email generation function
async function generateEmail() {
    const language = document.getElementById('language').value;
    const template = document.getElementById('template').value;
    const customerName = document.getElementById('customerName').value?.trim() || '[Customer Name]';
    const advisorName = document.getElementById('advisorName').value?.trim() || '[Advisor Name]';
    const caseRef = document.getElementById('caseRef').value?.trim() || '[Case Reference Number]';
    const serialNumber = document.getElementById('serialNumber').value?.trim() || '[HP Serial Number]';
    const issueDetails = document.getElementById('issueDetails').value?.trim() || '[Issue Details]';
    const additionalContext = document.getElementById('additionalContext').value?.trim();
    const customNotes = document.getElementById('customNotes').value?.trim();

    // Show loading state
    const previewElement = document.getElementById('emailPreview');
    previewElement.innerHTML = '<div class="placeholder">Generating email...</div>';

    try {
        let emailBody = '';

        // Select template body
        if (template === 'custom') {
            emailBody = customNotes || '[Please enter custom email notes]';
            if (additionalContext) {
                emailBody += '\n\n' + additionalContext;
            }
        } else {
            emailBody = templates[template][language] || templates[template]['en'];
        }

        // Get translated labels
        const hello = translations['hello'][language];
        const issueReportedLabel = translations['issueReported'][language];
        const caseRefLabel = translations['caseRefLabel'][language];
        const serialLabel = translations['serialLabel'][language];
        const regardsLabel = translations['regards'][language];
        const trustedAdvisor = translations['trustedAdvisor'][language];
        const customerSupport = translations['customerSupport'][language];
        const supportLink = translations['supportLink'][language];

        // Translate issue details if needed
        let translatedIssueDetails = issueDetails;
        if (language !== 'en' && issueDetails !== '[Issue Details]') {
            translatedIssueDetails = await translateText(issueDetails, language);
        }

        // Translate additional context if custom template and needed
        let translatedAdditionalContext = additionalContext || '';
        if (language !== 'en' && additionalContext && template === 'custom') {
            translatedAdditionalContext = await translateText(additionalContext, language);
        }

        // Replace advisor name and case reference in reconnect template
        emailBody = emailBody.replace(/\[Advisor Name\]/g, advisorName);
        emailBody = emailBody.replace(/\[Case Ref#\]/g, caseRef);

        // Build the final email
        const email = `${hello} ${customerName},\n\n${issueReportedLabel}: ${translatedIssueDetails}\n${caseRefLabel}: ${caseRef}\n${serialLabel}: ${serialNumber}\n\n${emailBody}\n\nRegards,\n${advisorName}\n${trustedAdvisor}\n${customerSupport}\nhttps://support.hp.com/contact`;

        // Display email in preview
        previewElement.textContent = email;

    } catch (error) {
        console.error('Error generating email:', error);
        previewElement.innerHTML = '<div class="placeholder">Error generating email. Please try again.</div>';
    }
}

// Copy to clipboard function
function copyToClipboard() {
    const emailContent = document.getElementById('emailPreview').textContent;

    if (!emailContent || emailContent.includes('Generated email will appear here') || emailContent.includes('Generating email')) {
        alert('Please generate an email first!');
        return;
    }

    navigator.clipboard.writeText(emailContent).then(() => {
        const feedback = document.getElementById('copyFeedback');
        feedback.classList.add('show');
        setTimeout(() => {
            feedback.classList.remove('show');
        }, 3000);
    }).catch(err => {
        alert('Failed to copy to clipboard: ' + err);
    });
}

// Reset form function
function resetForm() {
    document.getElementById('language').value = 'en';
    document.getElementById('template').value = 'status-update';
    document.getElementById('customerName').value = '';
    document.getElementById('advisorName').value = '';
    document.getElementById('caseRef').value = '';
    document.getElementById('serialNumber').value = '';
    document.getElementById('issueDetails').value = '';
    document.getElementById('additionalContext').value = '';
    document.getElementById('customNotes').value = '';
    document.getElementById('emailPreview').innerHTML = '<div class="placeholder">Generated email will appear here...</div>';
    document.getElementById('customNotesSection').style.display = 'none';
}