# Karteikarten — Flashcards Deutsch ⇄ Română

Aplicație de exersat vocabular german-român, sub formă de PWA (Progressive Web App) instalabilă pe telefon.

## Ce conține

- `index.html` — aplicația
- `vocab-data.js` — baza de vocabular (A1/A2/B1/B2, ~3300 cuvinte)
- `manifest.json` — configurare PWA (nume, iconițe, mod de afișare)
- `sw.js` — service worker (funcționare offline)
- `icon-192.png`, `icon-512.png` — iconițele aplicației

## Funcționalități

- Traducere germană ⇄ română, grilă cu 4 variante de răspuns
- Niveluri selectabile A1–B2, combinabile între ele
- Selector de direcție: DE→RO, RO→DE, sau ambele amestecat
- Mod de exersare "inteligent" (repetiție spațiată bazată pe istoricul de răspunsuri) sau complet aleator
- Pronunție audio a cuvintelor germane (Web Speech API), cu alegere de voce
- Încărcare de liste proprii de vocabular (CSV, TSV sau XLSX)
- Export al listei curente și al statisticilor, ca fișiere CSV
- Statisticile (răspunsuri corecte/greșite per cuvânt) se salvează local, în browser, per dispozitiv — nu sunt trimise nicăieri

## Instalare pe telefon

1. Deschide link-ul GitHub Pages al acestui repository, în Chrome (Android) sau Safari (iOS)
2. Din meniul browserului, alege "Adaugă la ecranul principal" / "Instalează aplicația"
3. Aplicația apare cu propria iconiță și funcționează parțial offline

## Actualizarea aplicației

Pentru a publica o versiune nouă: încarcă fișierele modificate în acest repository (Add file → Upload files → Commit), GitHub Pages redeploy-ează automat în 1-2 minute. Aplicația instalată pe telefon preia schimbările la următoarea deschidere.

## Sursa vocabularului

Cuvintele germane și genul substantivelor provin din [DWDS](https://www.dwds.de/), baza fiind selecția de vocabular pentru certificatele Goethe A1/A2/B1. Traducerile în română sunt realizate separat. Selecția de cuvinte per nivel e menționată de DWDS ca protejată prin drepturi de autor (Goethe-Institut) — acest proiect e destinat strict uzului personal, necomercial.
