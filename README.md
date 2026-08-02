# Karteikarten — Flashcards Deutsch ⇄ Română

Aplicație de exersat vocabular german-român, sub formă de PWA (Progressive Web App) instalabilă pe telefon.

## Ce conține

- `index.html` — aplicația
- `vocab-data.js` — baza de vocabular (A1/A2/B1/B2 + Suplimentar, ~6570 cuvinte)
- `manifest.json` — configurare PWA (nume, iconițe, mod de afișare)
- `sw.js` — service worker (funcționare offline)
- `icon-192.png`, `icon-512.png` — iconițele aplicației

## Funcționalități

- Traducere germană ⇄ română, grilă cu 4 variante de răspuns, cu distractori din aceeași categorie gramaticală (substantiv/verb/expresie/cuvânt funcțional)
- Niveluri selectabile A1–B2 + Suplimentar + **Îngrijire** (vocabular de specialitate pentru asistenți medicali/îngrijitori în azile de bătrâni), combinabile între ele
- Selector de direcție: DE→RO, RO→DE, sau ambele amestecat
- Mod de exersare "inteligent" (repetiție spațiată bazată pe istoricul de răspunsuri) sau complet aleator
- Pronunție audio a cuvintelor germane (Web Speech API), cu alegere de voce
- Link direct către dict.cc pentru fiecare cuvânt german, ca sursă suplimentară
- Buton "Sari peste" pentru a trece la următorul cuvânt fără să conteze ca greșeală
- Încărcare de liste proprii de vocabular (CSV, TSV sau XLSX)
- Export al listei curente și al statisticilor, ca fișiere CSV
- Preferințele (niveluri, direcție, mod) și statisticile se salvează local, în browser, per dispozitiv

## Instalare pe telefon

1. Deschide link-ul GitHub Pages al acestui repository, în Chrome (Android) sau Safari (iOS)
2. Din meniul browserului, alege "Adaugă la ecranul principal" / "Instalează aplicația"
3. Aplicația apare cu propria iconiță și funcționează parțial offline

## Actualizarea aplicației

Pentru a publica o versiune nouă: încarcă fișierele modificate în acest repository (Add file → Upload files → Commit), GitHub Pages redeploy-ează automat în 1-2 minute. Aplicația instalată pe telefon preia schimbările la următoarea deschidere.

## Surse și atribuiri

- **Selecția și nivelizarea cuvintelor A1–B2** sunt construite **integral și independent** din rangul de frecvență reală de utilizare a limbii germane, pe baza listei [hermitdave/FrequencyWords](https://github.com/hermitdave/FrequencyWords) (`content/2018/de/de_50k.txt`, derivată din corpus OpenSubtitles), licență **MIT**. Cuvintele au fost lematizate (formă de bază + tip gramatical) cu spaCy (`de_core_news_sm`), verificate manual pentru a elimina nume proprii, forme flexionate duplicate și zgomot din subtitrări, apoi împărțite pe niveluri A1–B2 exclusiv după poziția lor în clasamentul de frecvență. Nicio parte din selecția A1–B2 nu depinde de curriculumul vreunei instituții de examinare.
- Etichetele CEFR (A1, A2, B1, B2) sunt un standard public, deschis, al Consiliului Europei — nu proprietatea vreunei organizații.
- Categoria **"Suplimentar"** conține cuvinte adiționale (multe provenind din compilații publice ale [DWDS](https://www.dwds.de/) și dintr-un glosar public „Deutsch Online B2", © 2021 Goethe-Institut e.V., folosite ca punct de plecare istoric) care nu se încadrează în nivelizarea principală A1–B2 bazată pe frecvență — nu sunt etichetate CEFR și sunt oferite ca material suplimentar opțional.
- Categoria **"Îngrijire"** (455 termeni) e un vocabular de specialitate, compilat manual, pentru asistenți medicali/îngrijitori în azile de bătrâni — relația cu colegii, cu rezidenții, cu aparținătorii, cu medicii, situații de urgență, programul de lucru, acte/fluturaș de salariu, vocabular de igienă/funcții corporale (clinic și colocvial), expresii din perspectiva rezidentului, roluri de specialitate (`Praxisanleiter`, `Alltagsbegleiter`) și termeni din software-ul de documentare MEDIFOX DAN, folosit frecvent în azilele germane. Nu e legat de frecvența generală a limbii, e curatoriat pe relevanță profesională.
- Categoria **"Îngrijire — auxiliar"** (55 termeni) conține obiecte și instrumentar folosite în azil/spital (dispozitive de ridicare, scutece, instrumentar medical, mobilier, bucătărie/baie) — utilă și în context spitalicesc general, nu doar azil.
- Traducerile în limba română sunt muncă originală.
- Acest proiect e o resursă personală de studiu, nu revendică nicio afiliere cu Goethe-Institut, DWDS, hermitdave, Anthropic sau alte instituții/persoane menționate.

## Notă despre conținut

Vocabularul de nivel B1/B2 provine parțial dintr-un corpus de subtitrări de film (OpenSubtitles), deci include ocazional cuvinte cu tematică mai matură (infracțiuni, conflict, violență fictivă) — tratate ca vocabular dicționar neutru, fără conținut explicit intenționat. Dacă găsești ceva ce consideri nepotrivit, poate fi eliminat ușor din `vocab-data.js`.

## Confidențialitate

Aplicația nu colectează, nu transmite și nu stochează nicio dată pe niciun server. Tot ce ține de progres (statistici, preferințe) rămâne local, în browser-ul dispozitivului tău. Singurele conexiuni externe sunt: Google Fonts (fonturi), dict.cc (doar dacă apeși linkul respectiv) și motorul de sinteză vocală al telefonului.

## Licență

Codul aplicației (`index.html`, `sw.js`, `manifest.json`) e disponibil liber pentru refolosire și modificare personală. Vocabularul urmează atribuirile de mai sus (MIT pentru selecția de frecvență; traducerile românești sunt libere de folosit, fără garanții).

## Disclaimer

Vocabularul și traducerile pot conține ocazional imprecizii; verifică independent (ex. dict.cc, linkul din aplicație) orice cuvânt de care nu ești sigur. Aplicația nu oferă consultanță de niciun fel — e strict un instrument de exersare, oferit "ca atare", fără nicio garanție.

## Donații / susținere

Aplicația **nu are** (deocamdată) niciun buton de donații (Ko-fi, Buy Me a Coffee etc.) și nu e monetizată în niciun fel. E un proiect personal, făcut pentru uz propriu și distribuit liber. Dacă asta se schimbă vreodată, va fi menționat explicit aici, cu actualizarea corespunzătoare a acestei secțiuni.
