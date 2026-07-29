# Karteikarten — pachet PWA

Acest folder conține tot ce trebuie pentru instalarea aplicației ca PWA (Progressive Web App) pe telefon:

- `index.html` — aplicația (varianta optimizată pentru mobil)
- `manifest.json` — numele, iconițele și modul de afișare al aplicației instalate
- `sw.js` — service worker-ul care permite funcționarea offline
- `icon-192.png`, `icon-512.png` — iconițele aplicației

## De ce nu se poate instala direct de pe telefon, din fișier local

Android/iOS cer ca un PWA să fie servit prin **HTTPS** (sau `localhost`) ca să poată înregistra service worker-ul și să devină instalabil. Deschiderea directă a `index.html` ca fișier local (`file://...`) va afișa aplicația normal, dar Chrome/Safari NU vor oferi opțiunea completă de instalare cu iconiță + funcționare offline — cel mult un shortcut simplu, fără cache real.

**Soluție: găzduiește folderul undeva gratuit, apoi deschide acel link pe telefon.**

## Opțiunea cea mai simplă: GitHub Pages (gratuit, ~5 minute)

1. Creează un cont gratuit pe [github.com](https://github.com) dacă nu ai deja.
2. Creează un repository nou (poate fi public), ex. numit `karteikarten`.
3. Încarcă cele 4 fișiere din acest folder direct în repository (buton "Add file" → "Upload files" din interfața web GitHub, fără să ai nevoie de linia de comandă).
4. Mergi la Settings → Pages, la secțiunea "Source" alege branch-ul `main` și folderul `/ (root)`, apoi Save.
5. După 1-2 minute, GitHub îți dă un link de genul:
   `https://numele-tau.github.io/karteikarten/`
6. Deschide acel link pe telefon, în Chrome → apare automat un banner "Adaugă la ecranul principal" (sau din meniul ⋮ → "Instalează aplicația" / "Adaugă la ecranul principal").

## Alternativă și mai rapidă: Netlify Drop (fără cont)

1. Deschide [app.netlify.com/drop](https://app.netlify.com/drop) pe calculator.
2. Trage tot folderul (cele 4 fișiere) peste pagină.
3. Primești instant un link public (`https://ceva-random.netlify.app`).
4. Deschide linkul pe telefon și instalează la fel ca mai sus.

Notă: linkul Netlify Drop e temporar dacă nu-ți faci cont; pentru ceva permanent, GitHub Pages e opțiunea stabilă pe termen lung.

## După instalare

Aplicația apare cu propria iconiță pe ecranul principal, se deschide fullscreen (fără bara Chrome), și funcționează parțial offline (interfața și vocabularul intern A1-B2 rămân disponibile fără internet, o dată ce ai deschis-o măcar o dată cu conexiune). Încărcarea de fișiere CSV/XLSX proprii funcționează la fel ca înainte, direct din telefon.
