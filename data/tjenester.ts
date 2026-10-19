import type { Tjeneste } from './types'

export const tjenester: Tjeneste[] = [
  {
    slug: 'snobroyting',
    navn: 'Snøbrøyting',
    kortBeskrivelse:
      'Maskinell brøyting av innkjørsler, gårdsplasser, parkeringsplasser og veier – automatisk utrykning når snøen kommer.',
    metaTittel: 'Snøbrøyting – Fast brøyteavtale med automatisk utrykning',
    metaBeskrivelse:
      'Slik fungerer en brøyteavtale: utløsningshøyde, automatisk utrykning og skånsom maskinell brøyting for privat, borettslag og bedrift. Moderne maskinpark – få uforpliktende tilbud.',
    heroTittel: 'Snøbrøyting med automatisk utrykning',
    ingress:
      'Når snøen legger seg, er vi allerede på vei. Med fast brøyteavtale overvåker vi været, rykker ut når snøfallet passerer avtalt utløsningshøyde, og sørger for at du våkner til ryddet innkjørsel – uten at du trenger å løfte en finger.',
    bilde: '/bilder/traktor-skjaer-fres.jpg',
    bildeAlt: 'Traktor med skjær og fres brøyter snø i Gjerdrum',
    seksjoner: [
      {
        tittel: 'Hvordan fungerer en brøyteavtale?',
        avsnitt: [
          'En brøyteavtale er en fast avtale der vi overvåker været og rykker ut automatisk når snøfallet passerer en avtalt utløsningshøyde – typisk 5–10 cm. Snøbrøyting – eller snøbrøying, som mange skriver – handler altså ikke om å bestille hjelp når det snør, men om at hjelpen allerede er avtalt: vi følger værradar og lokale forhold døgnet rundt i sesongen, og du trenger aldri ringe oss når snøen kommer.',
          'Vi brøyter med traktorer utstyrt med skjær og fres, tilpasset alt fra smale private innkjørsler til store parkeringsarealer. Sjåførene våre kjenner rutene sine og vet hvor kantstein, belegningsstein og plenkanter ligger – det gir skånsom brøyting og færre skader når snøen smelter.',
        ],
      },
      {
        tittel: 'Hva vi brøyter',
        avsnitt: [
          'Vi håndterer alle typer arealer i Gjerdrum og omegn – med riktig maskin til riktig jobb:',
        ],
        punkter: [
          'Private innkjørsler og gårdsplasser – ryddet før du skal på jobb',
          'Borettslag og sameier – gangveier, parkering, snuplasser og adkomst for renovasjon',
          'Parkeringsplasser for næring og offentlige bygg – klare før åpningstid',
          'Private veier og velveier – faste ruter gjennom hele vinteren',
          'Gårdstun og landbrukseiendommer – lange innkjørsler er hverdagskost',
        ],
      },
      {
        tittel: 'Prioritert rekkefølge og responstid',
        avsnitt: [
          'Rutene våre er planlagt slik at kritiske arealer tas først: adkomst for utrykningskjøretøy, bratte partier og arealer med åpningstider. Ved normale snøfall er faste kunder i Gjerdrum normalt ferdig brøytet innen få timer etter at snøfallet har passert utløsningshøyden – og ved store snøfall kjører vi kontinuerlig til alt er ryddet.',
          'Med base sentralt i Gjerdrum har vi kort utrykningstid til hele kommunen og nabotettstedene – fra Ask til Kløfta, Frogner og Skedsmokorset.',
        ],
      },
    ],
    faq: [
      {
        sp: 'Når rykker dere ut etter snøfall?',
        svar: 'Vi overvåker været døgnet rundt i sesongen og rykker ut automatisk når snøfallet passerer avtalt utløsningshøyde, vanligvis 5–10 cm. Ved snøfall om natten prioriterer vi at kundene har ryddet adkomst til morgenen.',
      },
      {
        sp: 'Må jeg ringe når det snør?',
        svar: 'Nei. Med fast brøyteavtale er utrykningen automatisk – det er hele poenget. Du kan selvfølgelig alltid ringe eller sende SMS hvis du har spesielle behov en dag, for eksempel besøk eller varelevering.',
      },
      {
        sp: 'Hva koster en brøyteavtale?',
        svar: 'Prisen avhenger av arealets størrelse, hvor ofte det skal brøytes og responstidskrav. En sesongavtale for en vanlig privat innkjørsel er rimeligere enn de fleste tror – kontakt oss for et konkret og uforpliktende tilbud på ditt areal.',
      },
      {
        sp: 'Brøyter dere også enkeltoppdrag uten avtale?',
        svar: 'Ja, ved kapasitet tar vi enkeltoppdrag – for eksempel etter store snøfall. Faste avtalekunder prioriteres alltid først, så vi anbefaler å tegne avtale før sesongen starter.',
      },
      {
        sp: 'Kan brøytingen skade plen eller belegningsstein?',
        svar: 'Vi kjører med erfarne sjåfører som kjenner rutene sine, og stiller skjæret riktig for underlaget. Vi anbefaler at brøytestikker settes ut langs kanter før sesongen, for å beskytte plen og belegningsstein.',
      },
      {
        sp: 'Hvor stort område dekker dere?',
        svar: 'Vi har base i Gjerdrum og dekker hele kommunen samt nabotettstedene på Romerike – blant annet Ask, Kløfta, Frogner, Lindeberg, Eltonåsen og Skedsmokorset.',
      },
      {
        sp: 'Heter det snøbrøyting eller snøbrøying?',
        svar: 'Begge deler brukes – «snøbrøyting» er den vanligste skrivemåten, mens mange sier og skriver «snøbrøying». Tjenesten er uansett den samme: maskinell rydding av snø fra innkjørsler, veier og plasser, hos oss alltid med automatisk utrykning.',
      },
    ],
    relaterteTjenester: ['stroing-og-salting', 'bortkjoring-av-sno', 'vintervedlikehold-borettslag'],
  },
  {
    slug: 'stroing-og-salting',
    navn: 'Strøing og salting',
    kortBeskrivelse:
      'Forebyggende strøing og salting som hindrer glatte flater – basert på kontinuerlig værovervåking.',
    metaTittel: 'Strøing og salting i Gjerdrum – Iskontroll for trygg ferdsel',
    metaBeskrivelse:
      'Profesjonell strøing og salting i Gjerdrum og på Romerike. Forebyggende iskontroll av parkeringsplasser, gangveier og bratte partier. Døgnbemanning i sesong – få tilbud i dag.',
    heroTittel: 'Strøing og salting før det blir glatt',
    ingress:
      'Ett fall på glatt is kan koste langt mer enn en hel sesong med strøing. Vi overvåker temperatur og værforhold kontinuerlig og strør før isen får satt seg – med salt, sand eller grus tilpasset underlaget og forholdene.',
    bilde: '/bilder/stroing.jpg',
    bildeAlt: 'Strøing av grus for trygg fremkommelighet på vinterføre',
    seksjoner: [
      {
        tittel: 'Forebyggende iskontroll – ikke brannslukking',
        avsnitt: [
          'Den beste strøingen er den som skjer før noen sklir. Vi bruker værvarslingsdata og lokalkunnskap til å forutse når det blir glatt – ved temperatursvingninger rundt null, underkjølt regn eller kalde klarværsnetter – og rykker ut i forkant. Det er forskjellen på iskontroll og brannslukking.',
          'Utstyret vårt doserer salt, sand og grus etter forholdene. Vi bruker ikke mer salt enn nødvendig: riktig dosering beskytter både miljøet, betongen og asfalten – og gir likevel full friksjon.',
        ],
      },
      {
        tittel: 'Arealer vi sikrer',
        avsnitt: ['Vi strør og salter alle typer trafikkerte arealer:'],
        punkter: [
          'Parkeringsplasser – friksjon for både biler og fotgjengere',
          'Gangveier, fortau og inngangspartier – der fallulykker skjer oftest',
          'Kjøreramper og bratte partier – kritiske punkter som krever maksimalt grep',
          'Trapper og adkomst til fellesarealer i borettslag',
          'Varemottak og lasteramper for næringsbygg',
        ],
      },
      {
        tittel: 'Ansvar og dokumentasjon',
        avsnitt: [
          'Som gårdeier, styreleder eller driftsansvarlig har du ansvar for at ferdselsarealer er forsvarlig sikret mot glatt føre. Med en strøavtale hos oss er det vi som følger med på forholdene – og du kan dokumentere at området er profesjonelt vedlikeholdt. Det gir trygghet både juridisk og praktisk.',
        ],
      },
    ],
    faq: [
      {
        sp: 'Strør dere automatisk, eller må jeg bestille hver gang?',
        svar: 'Med fast avtale overvåker vi forholdene og strør automatisk når det er behov – typisk ved temperatursvingninger rundt null og etter snøfall. Du kan også bestille enkeltutrykninger.',
      },
      {
        sp: 'Bruker dere salt eller grus?',
        svar: 'Begge deler, tilpasset arealet: salt der isen skal bort raskt og underlaget tåler det, grus og sand der friksjon er viktigst eller salt er uønsket. Vi doserer nøkternt for å skåne miljø og dekke.',
      },
      {
        sp: 'Kan salt skade asfalt eller betong?',
        svar: 'Riktig dosert salt skader normalt ikke asfalt. Overdreven salting kan bidra til frostsprengning i eldre dekker og betong – derfor doserer vi etter forholdene og bruker alternativer der det er fornuftig.',
      },
      {
        sp: 'Hvem har ansvaret hvis noen sklir på min eiendom?',
        svar: 'Eier eller driftsansvarlig har som hovedregel ansvar for forsvarlig sikring mot glatt føre. En fast strøavtale med profesjonell aktør er både den beste forebyggingen og god dokumentasjon på at ansvaret er ivaretatt.',
      },
      {
        sp: 'Kombineres strøing med brøyting?',
        svar: 'Ja, de fleste kundene våre har kombinert avtale: vi brøyter når det snør og strør når det er glatt – én avtale, ett ansvarspunkt, trygg ferdsel hele vinteren.',
      },
    ],
    relaterteTjenester: ['snobroyting', 'vintervedlikehold-bedrift', 'vintervedlikehold-borettslag'],
  },
  {
    slug: 'bortkjoring-av-sno',
    navn: 'Bortkjøring av snø',
    kortBeskrivelse:
      'Blir snøhaugene for store, fjerner vi dem – lastet opp og kjørt bort til godkjent deponi.',
    metaTittel: 'Bortkjøring av snø i Gjerdrum – Fjerning av snøhauger',
    metaBeskrivelse:
      'Bortkjøring av snø i Gjerdrum og på Romerike. Vi laster opp og fjerner store snømengder fra parkeringsplasser, borettslag og næringsarealer. Rask utrykning – be om tilbud.',
    heroTittel: 'Bortkjøring når snøhaugene tar plassen',
    ingress:
      'I snørike vintre spiser haugene opp parkeringsplasser, sikt og fremkommelighet. Vi laster opp snøen og kjører den bort – slik at arealene dine kan brukes til det de er ment for, hele vinteren.',
    bilde: '/bilder/bortkjoring-sno.jpg',
    bildeAlt: 'Hjullaster laster snø for bortkjøring fra parkeringsplass',
    seksjoner: [
      {
        tittel: 'Når trenger du bortkjøring?',
        avsnitt: [
          'Brøyting flytter snøen – men på arealer med begrenset plass er det til slutt ikke mer å flytte den til. Da vokser haugene inn i parkeringsplasser, blokkerer sikt i utkjørsler og gjør gangveier trange og utrygge. Smelter og fryser haugene om igjen, blir de i tillegg til is som ligger langt inn i april.',
          'Vi laster opp snøen med hjullaster og kjører den bort med lastebil. For borettslag og næringskunder planlegger vi gjerne bortkjøring som fast del av vinteravtalen, slik at arealene aldri gror igjen.',
        ],
      },
      {
        tittel: 'Typiske oppdrag',
        avsnitt: ['Bortkjøring er mest etterspurt for:'],
        punkter: [
          'Parkeringsplasser hvor hver plass teller – handel, kontor og borettslag',
          'Snuplasser og adkomst for renovasjon og utrykningskjøretøy',
          'Utkjørsler hvor snøhauger stjeler sikt mot veien',
          'Gårdsrom og bakgårder uten egnet lagringsplass',
          'Forberedelse til vårsmeltingen – mindre snø betyr mindre is og søle',
        ],
      },
    ],
    faq: [
      {
        sp: 'Hvor raskt kan dere fjerne en snøhaug?',
        svar: 'Avtalekunder prioriteres fortløpende, og enkeltoppdrag tar vi normalt innen få dager – raskere ved akutt behov, for eksempel blokkert sikt eller adkomst. Ring oss, så finner vi en løsning.',
      },
      {
        sp: 'Hvor blir det av snøen?',
        svar: 'Snøen kjøres til egnet og godkjent deponiplass. Vi håndterer hele logistikken – opplasting, transport og deponering.',
      },
      {
        sp: 'Hva koster bortkjøring av snø?',
        svar: 'Prisen avhenger av volum og tilgjengelighet på stedet. Vi gir fastpris per oppdrag eller inkluderer bortkjøring i vinteravtalen for borettslag og bedrifter – be om et uforpliktende tilbud.',
      },
      {
        sp: 'Kan bortkjøring inngå i en fast vinteravtale?',
        svar: 'Ja, og det anbefaler vi for arealer med begrenset lagringsplass: da avtaler vi kriterier på forhånd, og du slipper både haugene og bestillingen.',
      },
    ],
    relaterteTjenester: ['snobroyting', 'vintervedlikehold-bedrift', 'varfeiing'],
  },
  {
    slug: 'takrydding',
    navn: 'Takrydding og istappfjerning',
    kortBeskrivelse:
      'Sikker fjerning av snø og istapper fra tak – med fallsikring, lift og sperringer på bakkenivå.',
    metaTittel: 'Takrydding i Gjerdrum – Fjerning av snø og istapper fra tak',
    metaBeskrivelse:
      'Sikker takrydding i Gjerdrum og på Romerike. Vi fjerner snølast og farlige istapper fra tak på borettslag, næringsbygg og offentlige bygg – med godkjent fallsikring. Ring for befaring.',
    heroTittel: 'Takrydding før snølasten blir farlig',
    ingress:
      'Tunge snømengder på taket truer konstruksjonen – og istapper over inngangspartier truer dem som ferdes under. Vi fjerner begge deler, sikkert og skånsomt, før det blir et problem.',
    bilde: '/bilder/takrydding.jpg',
    bildeAlt: 'Skånsom fjerning av snø fra tak i vintersesongen',
    seksjoner: [
      {
        tittel: 'Sikkerhet i alle ledd',
        avsnitt: [
          'Takarbeid om vinteren er risikoarbeid, og vi tar det på alvor: mannskapet bruker godkjent fallsikringsutstyr, vi benytter lift der det gir tryggere og mer effektiv jobb, og vi sperrer av på bakkenivå slik at hverken folk eller biler er i faresonen mens vi jobber.',
          'Vi rydder skånsomt: taktekkingen skal tåle jobben, og vi lar alltid et beskyttende snølag ligge igjen mot selve taket der det er riktig fremgangsmåte.',
        ],
      },
      {
        tittel: 'Hvem trenger takrydding?',
        avsnitt: [
          'Behovet er størst der mange ferdes og takflatene er store:',
        ],
        punkter: [
          'Borettslag og sameier – gårdsrom og inngangspartier med ferdsel under takutspring',
          'Næringsbygg – store, flate takflater hvor snølast bygger seg opp',
          'Skoler, barnehager og offentlige bygg – der sikkerhetskravene er strengest',
          'Eldre bygg med kaldloft – hvor istappdannelse er et gjentakende problem',
        ],
      },
      {
        tittel: 'Når bør du bestille?',
        avsnitt: [
          'Ikke vent til istappene henger over døra. Tegn på at taket bør ryddes: snødybde over 30–50 cm våt snø, synlig nedbøyning, knirk i konstruksjonen, eller istapper og ising langs takutspring. Ved mildvær etter store snøfall øker vekten raskt – våt snø veier opptil tre ganger mer enn tørr. Vi tilbyr også overvåking som del av vinteravtalen for borettslag og næringsbygg.',
        ],
      },
    ],
    faq: [
      {
        sp: 'Hvor mye snø tåler et tak?',
        svar: 'Det varierer med konstruksjon og byggeår, men våt snø er alltid verstingen – den kan veie over 300 kg per kubikkmeter. Er snødybden over 30–50 cm våt snø, eller du ser nedbøyning eller hører knirk, bør taket vurderes ryddet.',
      },
      {
        sp: 'Hvem har ansvar for istapper som faller ned?',
        svar: 'Gårdeier har ansvar for å sikre mot snø- og isras fra tak. Faller det istapper på noen, kan eier bli erstatningsansvarlig. Regelmessig kontroll og rydding er den eneste trygge løsningen.',
      },
      {
        sp: 'Skader ryddingen taket?',
        svar: 'Nei – vi rydder skånsomt med riktig verktøy og lar et beskyttende snølag ligge igjen mot tekkingen der det er korrekt metode. Mannskapet vårt er trent på vinterarbeid på tak.',
      },
      {
        sp: 'Kan dere rykke ut akutt?',
        svar: 'Ja, ved akutt fare – for eksempel store istapper over inngangsparti – prioriterer vi utrykning. Ring oss direkte, så gjør vi en vurdering samme dag.',
      },
    ],
    relaterteTjenester: ['snobroyting', 'vintervedlikehold-borettslag', 'vintervedlikehold-bedrift'],
  },
  {
    slug: 'vintervedlikehold-borettslag',
    navn: 'Vintervedlikehold for borettslag og sameier',
    kortBeskrivelse:
      'Én avtale som dekker alt: brøyting, strøing, bortkjøring og takrydding – med styret som slipper å tenke på vinteren.',
    metaTittel: 'Vintervedlikehold for borettslag og sameier – Gjerdrum og Romerike',
    metaBeskrivelse:
      'Komplett vinterdrift for borettslag og sameier i Gjerdrum og på Romerike: brøyting, strøing, bortkjøring og takrydding i én avtale. Trygge fellesarealer hele vinteren – be om tilbud.',
    heroTittel: 'Vinterdrift som styret aldri trenger å purre på',
    ingress:
      'Et borettslag skal fungere hver eneste vinterdag: beboere til jobb, barn til skole, renovasjon og hjemmetjeneste frem – og ingen som sklir på gangveien. Vi tar totalansvaret, så styret slipper både purring og bekymring.',
    bilde: '/bilder/hero-broyting.jpg',
    bildeAlt: 'Maskinell snøbrøyting av fellesarealer i borettslag',
    seksjoner: [
      {
        tittel: 'Én avtale – helt ansvar',
        avsnitt: [
          'Vi setter opp en vinteravtale tilpasset deres arealer: brøyting av veier, parkering og snuplasser, håndrydding og strøing av gangveier og trapper, bortkjøring når haugene tar plassen, og kontroll av tak og istapper. Alt med automatisk utrykning – styret trenger aldri ringe når det snør.',
          'Faste ruter og faste sjåfører betyr at den som brøyter hos dere, kjenner anlegget: hvor sandkassene står, hvor det pleier å bli glatt, og hvor det må håndmåkes. Det gir jevn kvalitet gjennom hele sesongen.',
        ],
      },
      {
        tittel: 'Det styret får dokumentert',
        avsnitt: [
          'Styret har ansvar for at fellesarealene er forsvarlig sikret. Med profesjonell vinterdrift kan dere dokumentere at ansvaret er ivaretatt – viktig både overfor beboere, forsikring og ved eventuelle fallulykker.',
        ],
        punkter: [
          'Avtalt utløsningshøyde og responstid – forutsigbart for beboerne',
          'Prioritering av kritisk adkomst: utrykning, renovasjon, HC-parkering',
          'Strøing av gangveier og trapper der fallrisikoen er størst',
          'Fast kontaktpunkt for styret gjennom hele vinteren',
          'Fast pris per sesong – enkelt å budsjettere',
        ],
      },
    ],
    faq: [
      {
        sp: 'Hva bør en vinteravtale for borettslag inneholde?',
        svar: 'Minimum: brøyting med avtalt utløsningshøyde, strøing av gangarealer, og en plan for snøopplag eller bortkjøring. Vi anbefaler også takkontroll for bygg med ferdsel under takutspring. Vi setter opp avtalen etter en gratis befaring.',
      },
      {
        sp: 'Kan dere prise per sesong slik at budsjettet blir forutsigbart?',
        svar: 'Ja, de fleste borettslag velger fastpris per sesong. Da vet styret nøyaktig hva vinteren koster, uansett hvor mye det snør.',
      },
      {
        sp: 'Hvordan håndterer dere parkerte biler?',
        svar: 'Vi planlegger rutene sammen med styret og brøyter parkeringsarealer på tidspunkter med minst biler, eller i soner etter varsling. Erfaringen vår er at god kommunikasjon med beboerne løser det meste.',
      },
      {
        sp: 'Hva med håndmåking av trapper og smale gangveier?',
        svar: 'Inngår i avtalen der maskinene ikke kommer til. Vi kombinerer maskinell brøyting med manuell rydding og strøing av trapper, inngangspartier og smale passasjer.',
      },
      {
        sp: 'Når bør styret tegne avtale?',
        svar: 'Før sesongen – helst i september–oktober. Da rekker vi befaring, ruteplanlegging og anbefaling om utsetting av at brøytestikker bør settes ut før første snøfall, og dere er sikret kapasitet hos oss.',
      },
    ],
    relaterteTjenester: ['snobroyting', 'stroing-og-salting', 'takrydding'],
  },
  {
    slug: 'vintervedlikehold-bedrift',
    navn: 'Vintervedlikehold for bedrifter',
    kortBeskrivelse:
      'Skreddersydd vinterdrift for næringseiendom: åpne arealer før åpningstid, dokumentert sikring og ett kontaktpunkt.',
    metaTittel: 'Vintervedlikehold for bedrifter – Snøbrøyting av næringseiendom',
    metaBeskrivelse:
      'Vinterdrift for bedrifter i Gjerdrum og på Romerike: brøyting og strøing av parkering, varemottak og adkomst – ferdig før åpningstid. Skreddersydde avtaler med døgnberedskap.',
    heroTittel: 'Åpent, trygt og fremkommelig – hver eneste driftsdag',
    ingress:
      'Stengt varemottak, glatte kundeparkeringer og ansatte som ikke kommer frem koster penger fra minutt én. Vi sørger for at virksomheten din går som normalt uansett vær – med brøyting og strøing ferdig før arbeidsdagen starter.',
    bilde: '/bilder/beredskap.jpg',
    bildeAlt: 'Brøytemaskin i beredskap for næringskunder, klar døgnet rundt',
    seksjoner: [
      {
        tittel: 'Skreddersydd for driften din',
        avsnitt: [
          'Ingen næringseiendommer er like. En dagligvarebutikk trenger ryddet kundeparkering før 09:00, en logistikkterminal trenger fri manøvrering for vogntog hele døgnet, og et kontorbygg trenger trygge gangsoner og HC-plasser. Vi kartlegger driften din og setter opp en avtale med prioriteringer, responstider og faste rapporteringspunkter.',
          'Vi tar hele ansvaret for værovervåkingen. Dere skal aldri måtte følge med på meldingene eller ringe oss når det snør – tiltakene skjer automatisk, og dere merker bare at arealene alltid er i orden.',
        ],
      },
      {
        tittel: 'Kundesegmenter vi betjener',
        avsnitt: ['Vi drifter vintervedlikehold for blant annet:'],
        punkter: [
          'Butikker og kjøpesentre – kundeparkering og inngangspartier klare før åpning',
          'Kontorbygg og næringsparker – adkomst, parkering og gangsoner',
          'Logistikk og transport – snuplasser og ramper med plass til vogntog',
          'Offentlige bygg, skoler og barnehager – strenge krav til sikkerhet og dokumentasjon',
          'Gårdeiere med flere eiendommer – én avtale, samlet rapportering',
        ],
      },
      {
        tittel: 'HMS og dokumentasjon',
        avsnitt: [
          'Fallulykker på jobb og hos kunder er både et menneskelig og juridisk ansvar. Med fast avtale får dere dokumentert profesjonell vinterdrift – et konkret HMS-tiltak som står seg overfor forsikring, verneombud og tilsyn.',
        ],
      },
    ],
    faq: [
      {
        sp: 'Kan dere garantere at parkeringen er ryddet før åpningstid?',
        svar: 'Ja – det er selve kjernen i næringsavtalene våre. Vi planlegger rutene etter åpningstidene deres, og ved snøfall om natten prioriteres arealer med tidlig åpning først.',
      },
      {
        sp: 'Håndterer dere store arealer og vogntog-logistikk?',
        svar: 'Ja, maskinparken vår er dimensjonert for store flater, og vi planlegger brøytingen slik at manøvreringsarealer for vogntog og varelevering holdes åpne gjennom hele døgnet ved behov.',
      },
      {
        sp: 'Hva koster vinterdrift for en bedrift?',
        svar: 'Prisen settes etter areal, åpningstider, responstidskrav og tjenesteomfang. Vi gir fastpris per sesong eller per utrykning – be om befaring, så får dere et konkret tilbud innen kort tid.',
      },
      {
        sp: 'Kan avtalen omfatte flere eiendommer?',
        svar: 'Ja, gårdeiere og kjeder med flere adresser får én samlet avtale med ett kontaktpunkt og samlet fakturering – og lik kvalitet på alle eiendommene.',
      },
    ],
    relaterteTjenester: ['stroing-og-salting', 'bortkjoring-av-sno', 'takrydding'],
  },
  {
    slug: 'varfeiing',
    navn: 'Vårfeiing og vårrengjøring',
    kortBeskrivelse:
      'Når snøen er borte, fjerner vi grus, strøsand og vinterstøv – og gjør uteområdene klare for våren.',
    metaTittel: 'Vårfeiing i Gjerdrum – Feiing av grus og strøsand',
    metaBeskrivelse:
      'Vårfeiing og vårrengjøring i Gjerdrum og på Romerike. Vi feier bort grus, strøsand og vinterstøv fra parkeringsplasser, gangveier og gårdsrom. Bestill feiing før 17. mai.',
    heroTittel: 'Vårfeiing – vinterens siste jobb',
    ingress:
      'En hel vinter med strøing etterlater seg tonnevis av grus og sand. Vi feier parkeringsplasser, gangveier og gårdsrom rene – støvbundet og skånsomt – slik at uteområdene er klare for vår og sommer.',
    bilde: '/bilder/varfeiing.jpg',
    bildeAlt: 'Maskinell vårfeiing av uteområder etter vintersesongen',
    seksjoner: [
      {
        tittel: 'Hvorfor profesjonell feiing?',
        avsnitt: [
          'Strøgrus som blir liggende, støver i tørt vær, tetter sluk og følger med inn i oppganger og butikklokaler. Maskinell feiing med støvbinding fjerner massene effektivt uten støvskyer – og grusen håndteres forsvarlig etterpå.',
          'For borettslag og næringskunder er vårfeiingen den naturlige avslutningen på vinteravtalen: samme leverandør som strødde ut grusen, fjerner den – og uteområdene overleveres klare til sesongen.',
        ],
      },
      {
        tittel: 'Hva vi feier',
        avsnitt: ['Typiske feieoppdrag om våren:'],
        punkter: [
          'Parkeringsplasser og kjørearealer',
          'Gangveier, fortau og inngangspartier',
          'Gårdsrom og lekeplasser i borettslag',
          'Private gårdsplasser og innkjørsler',
        ],
      },
    ],
    faq: [
      {
        sp: 'Når bør vårfeiingen bestilles?',
        svar: 'Så snart snøen er borte og faren for nye snøfall er over – normalt april til midten av mai. Mange vil ha det ryddig til 17. mai, så bestill i god tid.',
      },
      {
        sp: 'Støver ikke feiingen fælt?',
        svar: 'Nei, vi feier med støvbinding – arealene fuktes slik at støvet bindes før det virvles opp. Det er både triveligere og bedre for naboer og forbipasserende.',
      },
      {
        sp: 'Tar dere med grusen etterpå?',
        svar: 'Ja, oppsamlede masser tas med og håndteres forsvarlig som en del av oppdraget.',
      },
      {
        sp: 'Kan feiing inngå i vinteravtalen?',
        svar: 'Ja, mange av kundene våre har vårfeiing som fast avslutning på vinteravtalen – da er uteområdene garantert klare til våren uten ekstra bestilling.',
      },
    ],
    relaterteTjenester: ['snobroyting', 'stroing-og-salting', 'bortkjoring-av-sno'],
  },
]

export function getTjeneste(slug: string): Tjeneste | undefined {
  return tjenester.find((t) => t.slug === slug)
}
