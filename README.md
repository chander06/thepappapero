# THE PAPPAPPERO — sito web

Sito statico (HTML, CSS e JavaScript senza dipendenze) per THE PAPPAPPERO — Hosteria, Cucina Romana.
Nessun build, nessun server, nessun database. Pubblicato su **Cloudflare Pages** dal repository GitHub
`chander06/thepappapero`.

## Struttura del repository

```
site/            ← CARTELLA PUBBLICATA (tutto il sito)
documentazione/  Checklist e guida tecnica (NON pubblicata)
README.md        Questo file (NON pubblicato)
```

## Deploy su Cloudflare Pages

1. Cloudflare → *Workers & Pages* → *Create* → scheda **Pages** → *Connect to Git* → repository `chander06/thepappapero`.
2. Impostazioni di build — **sono le uniche da inserire**:
   - Production branch: `main`
   - Framework preset: **None**
   - Build command: **vuoto**
   - Build output directory: **`site`**
   - Root directory: vuoto (default)
3. *Save and Deploy*. Ogni push su `main` ripubblica il sito in automatico; ogni altro branch crea un'anteprima.
4. Il sito è online su `https://NOME-PROGETTO.pages.dev`.

Cloudflare Pages legge da `site/`:
- `_headers` → header di sicurezza (CSP, HSTS, ecc.) e cache.
- `404.html` → pagina di errore per qualsiasi indirizzo inesistente.
- Gli URL `…/index.html` vengono reindirizzati automaticamente alla forma pulita (`/frascati/`).

### Impostazioni Cloudflare da NON attivare
Il sito usa una Content Security Policy rigorosa (nessuno script inline). Nel pannello del dominio lasciare
**disattivati**: *Rocket Loader*, *Email Address Obfuscation*, *Zaraz* e l'iniezione automatica di *Web Analytics*
(se servono statistiche, vedi `documentazione/GUIDA-TECNICA.md`, sezione Analytics). Queste funzioni iniettano script
che la CSP blocca.

### Collegare il dominio definitivo
1. Progetto Pages → *Custom domains* → *Set up a custom domain* (se il dominio è già su Cloudflare, il DNS si configura da solo).
2. Sostituisci in tutto il repository `https://www.dominio-da-definire.it` con il dominio reale.
   File coinvolti: tutte le pagine `index.html` (tag Open Graph), `site/robots.txt`, `site/sitemap.xml`,
   `site/.well-known/security.txt`.
3. Inserisci lo stesso dominio in `site/assets/js/config.js` → `site.url` (serve ai dati strutturati Schema.org).

## Dove si modificano i dati

**Un solo file: `site/assets/js/config.js`.** Numeri WhatsApp, telefoni, link Google Maps e Google Business, orari,
foto, menu delle due sedi, social e dati del titolare. Un campo vuoto viene nascosto: il sito non mostra mai link non funzionanti.

Per vedere evidenziati i dati mancanti apri qualsiasi pagina con `?bozza=1` (es. `/frascati/?bozza=1`).

## Struttura di `site/`

```
index.html                      Homepage
casal-palocco-acilia/index.html Sede 01 · Casal Palocco · Acilia (su prenotazione WhatsApp)
frascati/index.html             Sede 02 · Frascati (senza prenotazione)
privacy/ cookie/ termini/       Pagine legali (bozze da verificare)
404.html                        Pagina non trovata
assets/js/config.js             ← DATI CENTRALIZZATI (sedi, menu, foto, recapiti)
assets/js/main.js               Interazioni (prenotazione, menu, consenso, Schema.org)
assets/css/style.css            Stile
assets/img/ assets/icons/       Immagini ottimizzate (WebP + JPG) e icone
assets/fonts/                   Caratteri ospitati localmente
robots.txt  sitemap.xml  site.webmanifest  .well-known/security.txt  _headers
```

Leggi `documentazione/CHECKLIST.md` prima della pubblicazione.
