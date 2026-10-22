/*
 * THE PAPPAPPERO — CONFIGURAZIONE CENTRALE
 * ------------------------------------------------------------------
 * Questo è l'unico file da modificare per aggiornare dati, recapiti e link.
 * Homepage, pagine sede, footer, modulo di prenotazione e dati strutturati
 * (Schema.org) leggono tutti da qui.
 *
 * Regole:
 *  - Un campo vuoto ('' / null / []) significa "dato non disponibile":
 *    il sito lo nasconde e non genera mai link non funzionanti.
 *  - Per vedere i dati mancanti evidenziati, apri il sito aggiungendo
 *    ?bozza=1 all'indirizzo (es. /frascati/?bozza=1). Gli utenti normali non li vedono.
 *  - WhatsApp: formato internazionale, solo cifre, senza + e senza spazi.
 *    Esempio: '393331234567'
 *  - Orari: per ogni giorno un elenco di fasce ['HH:MM','HH:MM'].
 *    Giorno con [] = chiuso. Lascia hours: null finché gli orari non sono confermati.
 *    Esempio: hours: { mon: [], tue: [['12:30','15:00'], ['19:30','23:00']], ... }
 *  - menu: la parte fissa del menu, diversa per ogni sede. Ogni sezione ha un titolo e
 *    un elenco di piatti { name, desc, price }. price: numero (es. 12) o testo (es. 'S.Q.').
 *    Le sezioni senza piatti non vengono mostrate. La nota sui piatti del giorno è fissa
 *    nelle pagine sede e compare sempre.
 *    Esempio: { title: 'Primi', items: [{ name: 'Rigatoni alla gricia', desc: 'Guanciale, pecorino romano, pepe', price: 12 }] }
 *  - service: 'walk-in' = senza prenotazione (nessun pulsante "Prenota", CTA "Vieni a trovarci")
 *             'booking' = prenotazione via WhatsApp (modulo + pulsante "Prenota un tavolo")
 */
window.PAPPAPPERO = {
  site: {
    brand: 'THE PAPPAPPERO',
    category: 'Hosteria — Cucina Romana',
    // Dominio definitivo, senza "/" finale. Es. 'https://www.tuodominio.it'
    url: '',
    email: '',
    social: {
      instagram: '',
      facebook: '',
      tiktok: ''
    },
    // Titolare del sito e del trattamento dei dati (pagine legali e footer)
    owner: {
      ragioneSociale: '',
      indirizzo: '',
      partitaIva: '',
      codiceFiscale: '',
      rea: '',
      email: '',
      pec: ''
    },
    legalUpdated: '' // data ultimo aggiornamento testi legali, es. '14 ottobre 2026'
  },

  // Strumenti di analisi: lasciare provider '' finché non si decide di attivarli.
  // Valori supportati: '' (nessuno) | 'ga4'. Con 'ga4' compilare ga4Id e aggiornare la CSP (vedi documentazione).
  analytics: {
    provider: '',
    ga4Id: ''
  },

  // Aumentare il numero di versione quando cambiano gli strumenti soggetti a consenso:
  // il banner verrà mostrato di nuovo a tutti.
  consentVersion: 1,

  sedi: [
    {
      id: 'casal-palocco-acilia',
      path: 'casal-palocco-acilia/index.html',
      number: '01',
      name: 'THE PAPPAPPERO',
      area: 'Casal Palocco · Acilia',
      areaShort: 'Casal Palocco',
      region: 'Roma',
      city: 'Roma',
      postalCode: '00124',
      province: 'RM',
      country: 'IT',
      addressRelation: 'stessa-sede',
      service: 'booking',
      serviceNote: 'Si mangia comodi, in sala. Prenoti con un messaggio su WhatsApp e ti rispondiamo noi per confermare il tavolo.',
      addresses: [
        { street: 'Via di Macchia Palocco 186', note: '' }
      ],
      whatsapp: '',
      phone: '',
      googleMapsUrl: '',
      googleBusinessUrl: '',
      directionsUrl: '',
      geo: { lat: null, lng: null },
      hours: null,
      menuUrl: '',
      menu: [
        { title: 'Antipasti', items: [] },
        { title: 'Primi', items: [] },
        { title: 'Secondi', items: [] },
        { title: 'Contorni', items: [] },
        { title: 'Dolci', items: [] }
      ],
      photos: [
        { src: 'assets/img/pizza-prosciutto-1152.webp', alt: 'Pizza bianca con pomodoro fresco e prosciutto crudo su un tavolo di legno' },
        { src: 'assets/img/polpette-taglio-1152.webp', alt: 'Polpette al sugo tagliate con forchetta e coltello' },
        { src: 'assets/img/montanarina-mano-1152.webp', alt: 'Una mano prende una pizzetta fritta con pomodoro, parmigiano e basilico' },
        { src: 'assets/img/prosciutto-dettaglio-1152.webp', alt: 'Dettaglio di prosciutto crudo, pomodoro e olio su pizza bianca' }
      ]
    },
    {
      id: 'frascati',
      path: 'frascati/index.html',
      number: '02',
      name: 'THE PAPPAPPERO',
      area: 'Frascati',
      areaShort: 'Frascati',
      region: 'Castelli Romani',
      city: 'Frascati',
      postalCode: '00044',
      province: 'RM',
      country: 'IT',
      // ATTENZIONE: non è ancora confermato se i due indirizzi appartengano alla stessa sede
      // o a due sedi distinte. Valori: 'da-confermare' | 'stessa-sede' | 'sedi-distinte'.
      // Se risultano sedi distinte: duplicare questo blocco, assegnare un id/path nuovo
      // e lasciare un solo indirizzo per blocco (vedi documentazione/GUIDA-TECNICA.md).
      addressRelation: 'da-confermare',
      service: 'walk-in',
      serviceNote: '',
      addresses: [
        { street: 'Via Giuseppe Lunati 8', note: '' },
        { street: 'Via Padre Campana 3', note: 'Due ingressi' }
      ],
      whatsapp: '',
      phone: '',
      googleMapsUrl: '',      // link ufficiale alla sede su Google Maps (se vuoto viene generata una ricerca per indirizzo)
      googleBusinessUrl: '',  // link al profilo Google Business ufficiale
      directionsUrl: '',      // link diretto alle indicazioni (se vuoto viene generato dall'indirizzo)
      geo: { lat: null, lng: null },
      hours: null,
      menuUrl: '',
      menu: [
        { title: 'Antipasti', items: [] },
        { title: 'Primi', items: [] },
        { title: 'Secondi', items: [] },
        { title: 'Contorni', items: [] },
        { title: 'Dolci', items: [] }
      ],
      // DA CONFERMARE: quali foto appartengono a quale sede
      photos: [
        { src: 'assets/img/rigatoni-guanciale-1152.webp', alt: 'Rigatoni al guanciale con pecorino in un piatto fondo bianco' },
        { src: 'assets/img/bistecca-1152.webp', alt: 'Bistecca alla griglia con sale grosso, prezzemolo e limone' },
        { src: 'assets/img/tagliere-1152.webp', alt: 'Tagliere di salumi e formaggi con mozzarella, mortadella e miele' },
        { src: 'assets/img/montanarine-1152.webp', alt: 'Pizzette fritte con pomodoro, parmigiano e basilico' }
      ]
    }
  ]
};
