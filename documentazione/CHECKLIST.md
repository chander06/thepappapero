# Checklist dati e verifiche prima della pubblicazione

Tutti i dati si inseriscono in `assets/js/config.js`, salvo dove indicato.
Apri il sito con `?bozza=1` per vedere cosa manca, pagina per pagina.

## Da decidere / confermare
- [ ] **Indirizzi di Frascati**: Via Giuseppe Lunati 8 e Via Padre Campana 3 sono la stessa sede o due sedi distinte?
      Cosa significano i "due ingressi" di Via Padre Campana 3? → `addressRelation` (vedi GUIDA-TECNICA, "Sedi").
- [ ] Dominio definitivo → README, "Collegare il dominio definitivo".
- [ ] CAP inseriti (00044 Frascati, 00124 Casal Palocco): verificarli.

## Per ogni sede
- [ ] Numero WhatsApp di Casal Palocco (formato `393331234567`) → `whatsapp` (Frascati non prenota: non serve)
- [ ] Telefono → `phone`
- [ ] Link ufficiale Google Business Profile → `googleBusinessUrl`
- [ ] Link Google Maps della scheda ufficiale → `googleMapsUrl` (finché vuoto si usa una ricerca per indirizzo)
- [ ] Coordinate → `geo.lat`, `geo.lng`
- [ ] Orari ufficiali → `hours`
- [ ] Piatti fissi del menu (diversi per sede) → `menu` (sezioni Antipasti/Primi/Secondi/Contorni/Dolci; la nota "piatti del giorno" è già presente)
- [ ] Facoltativo: menu PDF in `assets/menu/` o URL → `menuUrl`
- [x] Fotografie della sede → `photos` (11 foto dei piatti caricate, 4 per sede)

## Brand e contenuti
- [ ] Logo vettoriale originale (in uso: tracciato estratto dal PDF fornito "Insegna")
- [x] Fotografie dei piatti (sostituite alle vecchie foto di sala/insegna/dettaglio)
- [ ] Prezzi del menu, se da pubblicare
- [ ] Profili social ufficiali → `site.social`
- [ ] Confermare la ripartizione delle foto tra Frascati e Casal Palocco (ora assegnate in modo provvisorio)

## Legale
- [ ] Ragione sociale, indirizzo, P. IVA, C.F., REA, e-mail, PEC → `site.owner`
- [ ] Data aggiornamento testi legali → `site.legalUpdated`
- [ ] Revisione di Privacy Policy, Cookie Policy e Termini da parte di un professionista
- [ ] Indicare fornitore di hosting e periodo di conservazione delle chat WhatsApp (Privacy Policy)
- [ ] Recapito reale per `.well-known/security.txt`

## Verifiche da fare dopo la pubblicazione
- [ ] Ogni pagina si apre (home, 2 sedi, 3 legali, una pagina inesistente → 404)
- [ ] Ogni pulsante "Prenota" apre WhatsApp sul numero di Casal Palocco, con il messaggio corretto
- [ ] Nessun pulsante di prenotazione compare per Frascati; "Vieni a trovarci" apre le indicazioni corrette
- [ ] Ogni link Google Maps / Google Business porta alla scheda della sede giusta
- [ ] Test su iPhone e Android reali (modulo, selettori data/ora, barra in basso)
- [ ] Rich Results Test di Google sulle pagine sede (dati strutturati Restaurant)
- [ ] Invio della sitemap in Google Search Console
- [ ] Lighthouse (prestazioni, accessibilità, SEO) su mobile
- [ ] `https://DOMINIO/.well-known/security.txt` raggiungibile
