# Karteikarten — Flashcards Deutsch ⇄ Română

Aplicație de exersat vocabular german-român, sub formă de PWA (Progressive Web App) instalabilă pe telefon.

## Actualizări recente

**v110 — fontul real al „Cuvinte în pereche" corectat (conflict CSS găsit prin dovadă vizuală)**
- **Cauza reală, confirmată din capturi de ecran**: butoanele aveau simultan două clase (`btn-block` și `pm-left-box`/`pm-right-box`) — la specificitate CSS egală, regula definită mai jos în foaia de stil câștiga silențios, fără nicio eroare vizibilă. `.btn-block` (monospace) era definit mai jos decât regula mea (Literata), deci acela se aplica de fapt, nu ce credeam eu.
- **Corectat la sursă** — clasa `btn-block` eliminată complet de pe aceste butoane; rămâne doar stilizarea dedicată, completă (font, padding, aliniere — identică cu `.opt`, butoanele de răspuns din flashcard-uri).
- **Dezalinierea rândurilor, corectată separat** — restructurare completă din 2 coloane independente (`flex`) într-un singur grid CSS, cu rânduri sincronizate automat în-nălțime — testat programatic, confirmă ordinea corectă stânga/dreapta, cu amestecul din dreapta păstrat intact.

**v109 — zoom funcțional în toată aplicația (bug sistemic real, găsit prin testare directă)**
- **Cauza reală**: `.chip` și `.btn-block` — cele mai folosite clase din toată aplicația (butoane, etichete de nivel, presetări, module, submeniuri) — aveau dimensiunea de font fixă, în `px`, nu relativă (`rem`). Zoom-ul (A−/A+) modifică doar mărimea rădăcinii, care afectează doar `rem` — de-aia funcționa doar întâmplător, pe puținele elemente care se-ntâmplau să folosească deja `rem`.
- **Corectat: toate cele 27 de declarații** găsite, convertite la `rem`, cu matematică exactă (păstrează dimensiunea vizuală identică la zoom 100%, doar acum răspunde corect la orice nivel).
- Verificat cu cascadă CSS reală (nu doar citire de cod): calculat efectiv dimensiunea la 70%, 100%, 130% zoom, într-o structură identică cu un submeniu real (`<details>`) — scalare exactă, proporțională, confirmată matematic.
- **Umbra de lizibilitate**, redusă din nou (0.4→0.3px) — echilibrată corect, după rezolvarea cauzei reale (fontul, nu umbra, era problema de fond).
- **Cursorul de viteză**, recolorat — paleta aplicației (negru + gri deschis), nu albastrul implicit al browser-ului.
- Confirmat, separat: litera „a" lipsă la unele voci Microsoft românești e o limitare a motorului de sinteză, nu ceva reparabil din cod.

**v108 — voce română selectabilă, viteză reglabilă, corecție reală la „Cuvinte în pereche"**
- **Selector de voce română** — nou, în Setări, alături de cel german deja existent: alegi dintre toate vocile românești instalate pe dispozitiv (ex. mai multe Microsoft + Google), cu testare și preselectare inteligentă. Persistă separat de germană.
- **Viteză de rostire reglabilă** (cursor, 0.5x-1.5x) — valabilă la ambele voci, peste tot în aplicație. Utilă mai ales pentru că unele motoare de sinteză (ex. unele voci Microsoft) sună natural mai grăbite decât altele, indiferent de setarea implicită.
- **„Cuvinte în pereche" — cauza reală a afișării/zoom-ului corectată**: modulul folosea dimensiune de font fixă (`px`), nu relativă (`rem`) — de-aia zoom-ul din bara de sus nu se aplica acolo. Corectat, aliniat exact la fontul/dimensiunea din flashcard-uri (`.opt`), acum răspunde corect la zoom.
- **Umbra de lizibilitate**, ajustată din nou (0.6→0.4px) — echilibrată, după corectarea dimensiunii reale a fontului la modulul nou.
- Verificat cu DOM real (jsdom): popularea listei de voci române, filtrare corectă, preselectare, persistență — scenariu realist, cu mai multe voci instalate simultan.

**v107 — ajustări fine, după testare directă: viteză, paranteze, umbră, lățime**
- **Viteza de rostire** — redusă din nou (0.8→0.5), mai lentă, mai clară.
- **„Cuvinte în pereche" — explicațiile din paranteze eliminate complet** (ex. "dank (Präposition)" → "dank"), atât din rostire cât și din text afișat — nu doar parantezele, tot conținutul lor.
- **Umbra de lizibilitate, dublată** (0.3→0.6px) — la text mic (butoane, ~13px), aceeași umbră mică se vedea mult mai puțin decât la textul mare — nu era efect placebo, avea o cauză reală de dimensiune.
- **Lățimea maximă a conținutului, crescută** (640→760px) — 640px era gândit pentru text dens de citit, nu pentru-o interfață cu butoane, care are nevoie de puțin mai mult spațiu. Fără efect pe telefon (limita nu se activează sub 760px CSS, mult sub lățimea tipică a unui telefon).

**v106 — corecții găsite prin testare: viteză, buton, layout, lizibilitate**
- **Viteza de rostire** (0.9→0.8) — mai lentă, mai clară, la toate funcțiile de ascultare din aplicație, nu doar la modulul nou.
- **„Cuvinte în pereche" — butonul ascuns** — doar 🔊 (fără text), apăsare scurtă rămâne comportamentul obișnuit; ținut apăsat peste ~350ms arată temporar și textul cuvântului, ca hint, dispare la eliberare.
- **Layout centrat, pe ecrane late** — panourile ȚI ecranul principal (bară de sus, zona de card) au acum o lățime maximă (640px), centrate — spațiul gol rămâne pe margini, nu mai lungește butoanele pe tot ecranul. Fără efect pe telefon (limita nu se activează sub 640px).
- **Lizibilitate** — o umbră simetrică, foarte subtilă, pe tot textul din aplicație, care „îngroașă" ușor literele fără să schimbe dimensiunea sau greutățile deja setate — ajută pe fundalul cu textură fină.

**v105 — modul nou: „🔗 Cuvinte în pereche" (exersare de consolidare, fără AI)**
- 10 cuvinte, într-o coloană ascunse (doar ascultate, text-to-speech), în cealaltă traducerile lor, amestecate — apeși un cuvânt ascuns ca să-l asculți, apoi alegi corespondentul; corect, se dezvăluie și rămâne marcat; greșit, butonul apăsat se-nroșește scurt, poți încerca din nou. Fără scor.
- **Sinteză vocală și pentru română** — adăugată separat de cea germană (voci diferite pe dispozitiv), cu detectare reală de disponibilitate, nu presupusă.
- **Comutator de direcție** — alegi ce limbă e ascunsă (germană sau română).
- **Comutator de sursă** — cuvinte deja exersate (favorizează pe cele mai puțin consolidate, folosind mecanismul de ponderare deja existent, strict citire) sau complet aleator (fără ponderare, ca să difere real).
- **Cuvintele ratate reapar** — orice cuvânt nenimerit din prima are prioritate la runda următoare, până-l nimerești fără greșeală o singură dată; urmărire doar în memorie, pe durata sesiunii, fără nicio scriere pe stelute sau progres.
- Complet separat de restul aplicației — panou propriu, nu-n interiorul secțiunii AI, nicio legătură cu Claude sau costuri.
- Verificat cu DOM real (jsdom): mecanismul complet de potrivire (selecție, greșeală, succes, completare rundă) și logica de prioritizare a cuvintelor ratate, pe scenariul exact descris în cerere.

**v104 — emoji eliminate complet din „Exersează vorbitul" (găsit prin testare reală)**
- Modelul (persona „prietenoasă") adăuga adesea un emoji la finalul răspunsului — browser-ul îl "rostea" ciudat, la sinteza vocală, un sunet nepotrivit, greu de identificat ca fiind chiar asta. Confirmat direct dintr-o conversație reală, salvată și analizată.
- Eliminate acum complet, o singură dată, la sursă — nu doar din ce se rostește, ci și din text (afișare + salvare), consecvent, în toate modurile (local/Claude, bilingv/simplu).

**v103 — „Exersează vorbitul": conversație bilingvă (RO/DE), text fără sunet, salvare, câmp de scris**
- **API-uri dedicate, locale** (Translator + Language Detector, separate de „Prompt API") — dacă disponibile, poți scrie sau vorbi în română SAU germană; textul tău și răspunsul partenerului apar traduse 1-la-1, în ambele limbi. Dacă nu-s disponibile, modulul rămâne funcțional în forma simplă (doar germană), fără să blocheze nimic.
- **Câmp de text**, alături de microfon — utilizabil oricând, nu doar dacă microfonul lipsește.
- **Buton de mut** (🔊/🔇) — conversație complet în text, fără sunet, dacă preferi (util pe calculator).
- **Salvare conversație** — descarcă tot schimbul, într-un fișier text, cu dată și modul folosit (local/Claude) menționate.
- Modul prin Claude rămâne neschimbat (simplu, doar germană) — bilingvismul se aplică doar motorului local, cu unelte dedicate.
- Verificat: pipeline-ul bilingv complet (detectare + traducere + răspuns + traducere înapoi), izolat, cu ambele cazuri (intrare română, intrare germană).

**v102 — mic tutorial pliabil, la „Exersează vorbitul", pentru activarea AI-ului local în Chrome**
- Dacă detectarea automată nu găsește suport local, apare acum un ghid pas-cu-pas (pliabil, opțional) pentru activarea manuală din `chrome://flags` — cu mențiunea onestă că pe versiuni mai noi de Chrome s-ar putea să nici nu fie nevoie.
- Activarea flag-urilor **nu** se poate face programatic, din nicio aplicație web — barieră de securitate a browser-ului, nu limitare proprie; tutorialul rămâne singura cale posibilă de-a ajuta utilizatorul.

**v101 — modul nou: „🗣️ Exersează vorbitul" (partener de conversație vocală)**
- **Implicit, 100% local/offline** — rulează direct pe dispozitiv, prin AI-ul integrat în Chrome (Gemini Nano, „Prompt API"), fără cheie, fără cost. Vorbești în germană, un partener simplu (nivel A2-B1) răspunde scurt (1-2 propoziții) și pune o întrebare, ca să continue conversația — cu o corectură scurtă, în română, între paranteze, dacă apare o greșeală gravă.
- **Doar Chrome de pe calculator** — pe Android, Google exclude explicit suportul, indiferent de performanța telefonului (limitare de software, nu de putere — verificat direct în documentația oficială).
- **Opțiune de rezervă, prin Claude** — dacă AI-ul local nu-i disponibil (majoritatea cazurilor, mai ales pe telefon), poți alege să continui aceeași conversație prin cheia ta Claude, cost mic per schimb — aceeași interfață, doar alt model în spate.
- Complet izolat de restul funcțiilor AI — nu atinge pipeline-ul Claude existent, buton propriu, exclus din verificarea de cheie (rămâne mereu accesibil).
- Verificat: sintaxa API curentă (nu cea învechită, `window.ai.languageModel`), construcția istoricului de conversație pentru Claude (alternanță corectă user/assistant, necesară dat fiind că API-ul Claude nu ține minte singur conversația, spre deosebire de sesiunea locală).

**v100 — arhitectura în 2 pași (generare + traducere separate) extinsă la încă 3 module**
- **Descrie o poză**, **Simplifică**, și **Exersează ce ai învățat** trec de la generare combinată (germană + română, într-un singur apel) la **2 pași dedicați** — aceeași abordare aplicată deja la „Cuvinte noi în context", care a arătat, prin testare extinsă, o traducere mai consecventă și mai fidelă.
- La „Exersează ce ai învățat" (singurul modul bidirecțional — poate genera în germană SAU română), traducerea Pasului 2 se adaptează automat la direcția corectă, oricare-ar fi ea.
- **Traducere liberă** și **Corectură** rămân neschimbate — nu au aceeași structură (traducere de conținut dat de utilizator, respectiv corectare fără traducere), deci separarea în 2 pași nu li se aplică.
- Curățare: o funcție de prompt veche, devenită neapelată, a fost eliminată complet din cod.
- Verificat: sintaxă validă pe tot fișierul, ambele prompturi noi (generare exercițiu, traducere cu direcție parametrizată) testate izolat pentru ambele direcții (DE→RO și RO→DE).

**v99 — "Cuvinte noi în context" trece la generare în 2 pași separați (germană, apoi traducere)**
- Generarea combinată (germană + română, într-un singur apel) e înlocuită cu **doi pași dedicați**: Pasul 1 generează strict textul german (cu persona de profesor de germanistică și o rutină de auto-verificare internă, în 3 etape); Pasul 2, separat, traduce liniile germane deja finalizate, cu un prompt dedicat exclusiv acurateței traducerii (consecvență pe concepte repetate, fără informații adăugate/omise, ortografie română atentă).
- Motivul schimbării: testare extinsă, manuală, a arătat că traducerea produsă în același apel cu generarea germană tindea să fie inconsecventă (același concept tradus diferit de două ori) sau să adauge/omită nuanțe — separarea completă a eliminat aceste probleme, în testele făcute, fără cost suplimentar semnificativ.
- Restul mecanismului (marcarea cuvintelor, evidențierea roșie, istoricul) rămâne neschimbat — se leagă direct de rezultatul celor 2 pași noi.
- Verificat programatic: recombinarea corectă a perechilor [DE]/[RO] după cei 2 pași, inclusiv plasa de siguranță dacă traducerea eșuează (rămâne doar germana, nu se amestecă nimic greșit).

**v98 — renunțare la nivelurile de calitate AI (cost real mult mai mare la Sonnet, fără câștig observabil), plus 2 corecții confirmate**
- **Selectorul de calitate (Rapid/Îmbunătățită/Superioară) eliminat complet** — verificare de cost real a arătat consum considerabil mai mare la Sonnet, fără diferență observată în calitate/corectitudine, și texte de fapt mai simple decât la Haiku. Rămâne doar pipeline-ul Haiku (Rapid), cu escaladarea țintită către Sonnet deja existentă, doar când chiar e nevoie (acorduri nesigure, sau divergență de sens confirmată la texte mai lungi).
- **Buton flotant persistent** — bug real confirmat: la confirmarea selecției, panoul se închidea printr-o cale care uita să ascundă butonul flotant. Corectat.
- **Player audio, simplificat la un singur buton Redă/Oprește** — Pauză/Reluare eliminate: `speechSynthesis.pause()`+`resume()` are un bug documentat, pe scară largă, în browsere/Android (reluarea nu funcționează fiabil) — aceeași limitare care exclusese și derularea cu secunde.
- Verificat cu DOM real (jsdom): toggle Redă↔Oprește, izolare corectă între playere multiple.

**v97 — corecții critice la nivelul de calitate AI, plus mini-player audio**
- **Eroarea de generare la Calitate îmbunătățită/superioară** (`effort: Extra inputs are not permitted`) — corectată: parametrul de efort trebuia încadrat în `output_config`, nu trimis direct.
- **Mesaje rămase la "3 texte"** — actualizate peste tot la 2, inclusiv cele trimise efectiv către API.
- **Butonul flotant de validare** — mutat în afara panoului de listă (era copil al unui element cu `transform`, ceea ce-i rupea poziționarea fixă reală); acum rămâne vizibil corect, indiferent de scroll.
- **Selectorul de calitate** — mutat din hub, direct lângă fiecare buton „Generează"/„Tradu"/„Descrie", ca alegerea să fie clară, la locul unde se folosește.
- **Mini-player audio (Redă/Pauză/Oprește)** — la toate rezultatele mai lungi (traducere, exerciții, descriere poză, cuvinte noi în context); fără derulare cu secunde (Web Speech API nu expune nicio poziție de timp în vorbire).
- Verificat cu DOM real (jsdom): ciclul complet Redă→Pauză→Reia→Oprește, izolare corectă între playere multiple.

**v96 — 3 niveluri de calitate AI, verificare de fidelitate prin retraducere independentă, mini-player audio**
- **Nivel de calitate ales de utilizator** — ⚡ Rapid / ✨ Calitate îmbunătățită / 💎 Calitate superioară, selectabil direct din panoul AI. Diferențele de cost sunt mici, explicat clar la fiecare alegere și în Ajutor.
- **Rapid** (implicit) — pipeline complet: traducere, verificare gramaticală, și (doar la texte mai lungi, peste 3 perechi de propoziții) o verificare suplimentară de fidelitate — un model retraduce independent traducerea română înapoi în germană, fără să vadă originalul, apoi se compară obiectiv dacă sensul (cauzalitate, sentiment, timp) s-a păstrat; doar diferențele reale se corectează, țintit.
- **Calitate îmbunătățită/superioară** — un singur model, mai atent, generează direct rezultatul final.
- „Cuvinte noi în context" generează acum **2 texte**, nu 3.
- Verificat programatic: toate cele 3 niveluri de dispecerizare, pragul de lungime pentru verificarea de fidelitate, parsarea (inclusiv un bug real de regex evitat din start), și cazurile cu/fără divergență de sens.

**v95 — căutare și buton flotant în „Cuvintele mele exersate"**
- **Câmp de căutare** — filtrează instant lista, răspunde atât la cuvinte germane cât și românești, insensibil la majuscule.
- **Buton flotant de validare** — la selecția manuală de cuvinte, un buton cu poziție fixă (jos, centrat) rămâne vizibil indiferent cât ai derulat lista, arătând numărul curent de cuvinte alese (X/5) — nu mai trebuie să revii sus pentru a confirma.

**v94 — 5 corecții suplimentare la „Cuvinte noi în context", găsite prin testare intensivă**
- **Generarea eșua complet** (toate cele 3 texte „lipsă"), atât la selecție automată cât și manuală — cauza probabilă: o instrucțiune de prompt care invita modelul să scrie vizibil verificarea lui, stricând formatul strict așteptat. Simplificat, cu interdicție explicită de comentarii vizibile în răspuns.
- **Plasă de siguranță nouă la parsare** — dacă formatul `[TEXT1]/[TEXT2]/[TEXT3]` ar lipsi complet din răspuns (orice motiv), aplicația recuperează acum liniile de traducere existente și le împarte aproximativ în 3, în loc să afișeze „text lipsă" la toate.
- **Cuvinte compuse/expresii** (ex. „Chef, -s / Chefin", „dank (Präposition)") — în loc să fie excluse din selecție, se extrage acum forma utilizabilă (până la primul spațiu sau `/`), păstrând afișarea completă către utilizator neschimbată.
- **Nivelul dedus din cuvintele alese nu ajungea explicit în prompt** — era folosit doar indirect (restrângerea vocabularului), fără să i se spună clar modelului „scrie la nivel A1-A2/B1-B2". Corectat — nivelul e acum menționat explicit, cu instrucțiune și despre complexitatea gramaticală potrivită.
- Verificat programatic: toate cele 5 corecții testate izolat, cu exemple reale din date.

**v93 — 5 corecții la „Cuvinte noi în context", găsite prin testare**
- **Roșu pierdut în Istoric** — corectat: se salvează acum textul final (marcat + revizuit), nu ciorna brută; parserul comun recunoaște marcajele oriunde apar, inclusiv la redeschiderea unei intrări vechi.
- **Cuvinte inconsistente între cele 3 texte** — regulă de prompt mai fermă, plus verificare programatică (dacă un text nu conține toate cuvintele-țintă, se reîncearcă generarea o singură dată).
- **Nivel dedus automat** — textul folosește acum nivelul (A1-A2/B1-B2) determinat de majoritatea cuvintelor-țintă alese, nu tot vocabularul cunoscut nediferențiat.
- **Generare manuală separată de selecție** — butoane distincte („Generează — Cuvinte alese aleatoriu" / „Generează — Cuvinte alese manual"); alegerea cuvintelor nu mai declanșează automat generarea.
- **Panouri suprapuse, în ambele sensuri** — corectat: fundalul întunecat rămâne continuu pe durata tranziției (nu mai dispare și reapare), tranziția calibrată exact la durata reală CSS (250ms).

**v92 — corecție critică la backup (combinare reală, nu suprascriere), plus selecție manuală de cuvinte**
- **Backup general** (cuvinte exersate, stelute, cuvinte proprii): la import, acum se **combină** cu progresul deja existent pe dispozitiv, nu-l mai suprascrie — dacă exersezi și pe telefon și pe PC, nu mai pierzi progresul niciunuia. Cuvintele exersate pe ambele: încercările se adună, starea curentă (stelute, greșeli) vine din activitatea cea mai recentă. Setările (nivel selectat, voce) rămân cele locale ale dispozitivului, nu se suprascriu.
- **Listă nouă, „📋 Cuvintele mele exersate"** — în Setări, toate cuvintele la care ai răspuns până acum, sortabile după stelute/alfabetic, sau filtrate doar pe cele cu greșeală activă.
- **Selecție manuală în „Cuvinte noi în context"** — „✋ Alege manual cuvintele" deschide aceeași listă, în mod selecție (până la 5 cuvinte, ca niște etichete, nu bife) — alegi și nivelul (A1-A2/B1-B2) care determină restul vocabularului folosit în text.
- Verificat programatic: scenariu realist de combinare progres telefon+PC, sortare/filtrare listă.

**v91 — modul nou (AI): „🆕 Cuvinte noi în context"**
- Alege automat până la 5 cuvinte văzute abia o dată sau de două ori (indiferent dacă răspunsul a fost corect) — selecția se face direct în cod, din progresul local, fără niciun apel AI, gratuit și instant.
- Generează 3 texte scurte, independente, fiecare cu temă proprie, în care cele 5 cuvinte apar natural — conjugate/declinate cum cere gramatica reală, nu forțate la forma de bază.
- Cuvintele țintă sunt evidențiate cu roșu, oriunde apar, indiferent de forma exactă folosită — un al treilea pas dedicat (după generare și revizuire gramaticală) cere modelului să marcheze el însuși formele exacte folosite, cu verificare de siguranță pe fiecare linie, ca marcarea să nu poată altera și textul.
- Traducere română vizibilă direct (nu ascunsă), ascultare disponibilă imediat pentru fiecare text.

**v90 — extindere majoră: 3 timpuri noi, verbe separabile marcate vizual, 37 verbe noi, plus corecții acumulate**
- Modulul de conjugare primește 3 timpuri noi: **Plusquamperfekt** (mai mult ca perfectul), **Futur I** (viitor), **Konjunktiv II** (condițional — formă sintetică pentru verbele foarte comune precum sein/haben/modalele, formă analitică cu „würde" pentru restul).
- Verbele separabile (ex. „aufhören") sunt acum marcate vizual: infinitiv cu punct median (`auf·hören`, convenția din dicționare), prefix colorat oriunde apare în răspunsuri, etichetă discretă pe card.
- Modulul de conjugare crește de la 100 la **137 de verbe** (4110 întrebări, față de 1200 inițial) — 24 verbe separabile suplimentare, deja existente în vocabular, plus „fernsehen" și încă 12 verbe complet noi.
- Vocabularul general crește cu 13 cuvinte noi (7120→7133): „fernsehen" la A1, restul la Suplimentar.
- Verificat programatic: 4110 combinații testate exhaustiv (137 verbe × 5 timpuri × 6 persoane), 0 eșecuri.
- Text de susținere (Ko-fi) reformulat mai general — „susții întreținerea și dezvoltarea" în loc de o mențiune tehnică prea specifică.

**v88 — text generat mai fidel temei cerute, plus opțiune discretă de susținere**
- „Exersează ce ai învățat": textul generat rămâne acum clar legat de tema cerută, chiar cu vocabular limitat — găsit prin testare că teme ca „Anul Nou" sau „vacanță de vară" puteau aluneca spre ceva generic ("o zi nouă", "vacanță" fără mențiunea sezonului), fără nicio legătură recognoscibilă cu ce s-a cerut.
- Buton discret de susținere (Ko-fi), în Setări, sub semnătură — aplicația rămâne complet gratuită, opțiunea ajută doar cine vrea să susțină întreținerea și dezvoltarea ei în continuare; menționat și în Ajutor, ca reper.

**v87 — calitate traducere îmbunătățită, plus escaladare rară către model mai avansat**
- Agentul 2 (revizuire) verifică acum și acordul participiilor, fidelitatea de sens (nu doar gramatica), și expresiile idiomatice traduse mecanic, greșit — găsite prin testare pe text real.
- Regulă nouă, critică: dacă Agentul 2 nu e sigur de un cuvânt/expresie, NU mai inventează sau ghicește — marchează explicit acea bucată, iar aplicația trimite **doar acel fragment**, cu context, către un model mai avansat (Sonnet), care-l rezolvă. Cost suplimentar doar rar, când chiar e nevoie, nu la fiecare traducere.
- Verificat programatic: extragerea și recombinarea fragmentelor marcate, cu fallback sigur dacă escaladarea eșuează sau nu se potrivește numeric.

**v86 — corecție critică: prăbușire silențioasă la selectarea combinată de niveluri, descoperită la aplicația-soră franceză**
- Dacă erau selectate simultan cel puțin un nivel normal de vocabular ȘI cel puțin unul dintre nivelurile „virtuale" (Antonime & Sinonime, Conjugare verbe), generarea rundei putea eșua silențios, intermitent — pagina rămânea aproape goală, fără mesaj de eroare, în funcție de ce cuvinte ieșeau aleatoriu în eșantion. Cauza: funcția de clasificare gramaticală era apelată și pe intrări din nivelurile virtuale, care au altă structură de date (fără câmpul folosit pentru clasificare).
- Corectat: intrările din nivelurile virtuale sunt acum excluse explicit din grupul folosit la generarea distractorilor.
- Verificat programatic: 200/200 simulări eșuau înainte de corecție, 0/200 după.

**v85 — două module noi (AI): „Simplifică" și „Descrie o poză"**
- **📖 Simplifică** — al treilea mod în panoul de traducere (lângă Traducere/Corectură): lipești un text german greu, alegi nivelul țintă (A1-A2/B1-B2), primești o versiune simplificată, cu vocabular tipic acelui nivel general (CEFR), plus traducere română.
- **📷 Descrie o poză** — modul separat, în hub: încarci o poză personală, Claude o descrie în germană, strict din cuvintele tale exersate cu succes la nivelul ales (ca la „Exersează ce ai învățat"), cu traducere română alături.
- Ambele refolosesc integral infrastructura existentă — formatul `[DE]`/`[RO]`, Agentul 2 de revizuire, ascultare, istoric.

**v84 — mod nou: „✓ Corectură germană" (AI), portat din aplicația-soră franceză**
- Chip nou în panoul de traducere ("🔄 Traducere" / "✓ Corectură germană") — comută modul, în același panou, fără buton separat.
- Scrii (sau dictezi, sau fotografiezi) propriul tău text în germană — Claude corectează doar greșeli reale (ortografie, acorduri, conjugări, topică, cratime), fără să reformuleze stilul; afișează și o listă de explicații, în română, pentru fiecare greșeală găsită.
- Agentul 2 de revizuire (folosit la traducere) a primit și el verificări suplimentare, portate din franceză: punctuație completă, poziția verbului/topică germană.

**v83 — verificare gramaticală în doi pași (AI), pentru traducere și exerciții**
- Fiecare traducere/generare trece acum printr-un al doilea apel automat, un "corector" separat — verifică acorduri de gen/număr (română), cazuri gramaticale (germană), ortografie, și dacă sensul s-a păstrat corect.
- Plasă de siguranță: dacă verificarea ar produce un număr diferit de perechi `[DE]`/`[RO]` decât originalul (semn de pierdere de conținut), se păstrează traducerea inițială, nerevizuită — niciodată un rezultat trunchiat.
- Cost: aproximativ dublu per traducere (2 apeluri, nu 1) — rămâne sub un cent per traducere scurtă cu modelul Haiku.

**v75 — modul nou: „Exersează ce ai învățat" (AI)**
- Claude generează un text scurt, pe o temă dată de tine, folosind strict cuvintele la care ai răspuns corect de cel puțin 2 ori (nu tot vocabularul disponibil, nici cuvintele abia atinse o singură dată) — alegi nivelul (A1-A2, max 60 cuvinte, sau B1-B2, max 100 cuvinte) și limba în care apare textul.
- Traducerea rămâne ascunsă până apeși „Arată traducerea"; poți scrie întâi propria încercare, într-un câmp liber, ca autotestare.
- Fiecare exercițiu se salvează automat în Istoric (tag `[exc]`), cu propria încercare afișată alături de traducerea corectă la redeschidere.

**v69 — corecții de izolare/layout, descoperite la aplicația-soră de greacă:**
- Toate cele 10 chei `localStorage` (progres, istoric AI, cuvinte proprii, cheie API etc.) sunt acum prefixate cu `karteikarten_`, ca să nu se mai amestece cu datele aplicațiilor-soră (franceză, greacă) găzduite pe același domeniu GitHub Pages. **Progresul salvat anterior versiunii asta nu mai e citit** — compromis necesar pentru a rezolva amestecul definitiv.
- Zoom (A−/A+) rămâne mereu vizibil și accesibil pe orice lățime de ecran; doar procentul afișat și butonul de resetare se ascund pe ecrane foarte înguste (sub ~420px).
- Numele aplicației se trunchiază cu „…" pe ecrane foarte înguste, în loc să împingă butonul de Setări pe un rând nou.

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
- **Presetări rapide** (Începător / Conversație / Avansat / La job) — setează nivelurile dintr-un tap
- **Progres pe niveluri** — procent de cuvinte exersate și rată de răspunsuri corecte, per nivel
- **Mod „Doar greșeli"** — revizuiește exclusiv cuvintele la care ai greșit recent, cu contor dinamic
- **Serie de zile (streak)** — afișată în linia de rezumat, calculată din activitatea zilnică
- **Căutare vocală** (🎤, unde browserul o suportă) — rostești un cuvânt în română sau germană, aplicația îl caută în listă și afișează + pronunță rezultatul; tolerantă la lipsa diacriticelor și la articolele germane rostite din reflex
- **Adaugă cuvinte care lipsesc din listă** — dacă o căutare scrisă nu găsește nimic, poți verifica traducerea pe dict.cc și adăuga cuvântul manual, cu ajutor de lipire din clipboard; rămâne salvat permanent, ca nivel separat ("Cuvintele mele"), exportabil CSV
- **Antonime & Sinonime** — nivel nou, exclusiv în germană (213 perechi, 426 de întrebări, generate automat în ambele sensuri): vezi un cuvânt, alegi opusul sau apropiatul ca sens, din 4 variante tot germane, cu ascultare și dict.cc disponibile pe fiecare după ce răspunzi
- **Conjugare verbe** — nivel extins (137 verbe germane comune, incluzând 41 verbe separabile, cu prefix marcat vizual — punct median în infinitiv, prefix colorat în răspunsuri, etichetă pe card): vezi infinitivul, alegi forma corectă la Präsens, Perfekt, Plusquamperfekt, Futur I, sau Konjunktiv II, pentru persoana cerută (4110 de întrebări); distractorii sunt mereu alte forme ale aceluiași verb
- **🤖 AI (Claude) — traducere liberă, experimental** — funcție opțională, separată de restul aplicației: folosește propria ta cheie API de la Anthropic pentru a traduce orice text (nu doar cele ~7000 de cuvinte din listă), dictat sau scris, cu detectare automată română/germană și traducere naturală (nu cuvânt-cu-cuvânt); acceptă și imagini cu text (poze, screenshot-uri); text lung se aliniază automat propoziție-cu-propoziție; rezultatul se descarcă ca `.txt` sau `.pdf` (prin funcția de printare a telefonului). Cheia rămâne salvată doar pe dispozitiv, costul folosirii se plătește direct către Anthropic — detalii complete și pașii de obținere a cheii, în tab-ul de Ajutor din aplicație.
- **Backup complet** — exportă/restaurează tot progresul (statistici, preferințe, greșeli, streak) ca fișier `.json`
- **Prompt de instalare** — banner automat pe Android/Chrome (instalare cu un tap) și instrucțiuni clare pe iOS Safari (unde Apple nu permite instalare programatică)
- Panou de setări organizat pe secțiuni pliabile (Vocabular / Exersare / Date & fișiere / Voce)

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
- Câteva perechi de cuvinte germane des confundate cu cuvinte românești similare la scris (ex. `kalt`/"cald", `tot`/"tot") au fost identificate cu ajutorul [Wiktionary — Appendix: False friends between German and Romanian](https://en.wiktionary.org/wiki/Appendix:False_friends_between_German_and_Romanian) (licență CC BY-SA). Am preluat doar faptul lingvistic obiectiv (care cuvinte se aseamănă), nu text sau exprimare de-a lor — notele de atenție din aplicație sunt scrise integral de la zero.
- Acest proiect e o resursă personală de studiu, nu revendică nicio afiliere cu Goethe-Institut, DWDS, hermitdave, Wiktionary, Anthropic sau alte instituții/persoane menționate.

## Notă despre conținut

Vocabularul de nivel B1/B2 provine parțial dintr-un corpus de subtitrări de film (OpenSubtitles), deci include ocazional cuvinte cu tematică mai matură (infracțiuni, conflict, violență fictivă) — tratate ca vocabular dicționar neutru, fără conținut explicit intenționat. Dacă găsești ceva ce consideri nepotrivit, poate fi eliminat ușor din `vocab-data.js`.

## Confidențialitate

Aplicația nu colectează, nu transmite și nu stochează nicio dată pe niciun server. Tot ce ține de progres (statistici, preferințe) rămâne local, în browser-ul dispozitivului tău. Singurele conexiuni externe sunt: Google Fonts (fonturi), dict.cc (doar dacă apeși linkul respectiv) și motorul de sinteză vocală al telefonului. **Excepție:** funcția de căutare vocală (🎤) trimite sunetul către serverele browserului (ex. Google, pentru Chrome) ca să fie transformat în text — o limitare a tehnologiei din browser, nu ceva controlat de noi. Nu apare deloc pe iOS/Safari (Apple nu oferă acest API acolo).

## Licență

Codul aplicației (`index.html`, `sw.js`, `manifest.json`) e liber de refolosit, adaptat, sau folosit ca bază pentru alte proiecte — cu o singură condiție: **menționează sursa**. O mențiune simplă, vizibilă undeva (README, footer, secțiune de credite), e suficientă:

> Bazat pe Karteikarten, de tomitaro25 — github.com/tomitaro25

Vocabularul urmează atribuirile separate de mai sus (MIT pentru selecția de frecvență din hermitdave/FrequencyWords; traducerile românești sunt muncă originală, libere de refolosit cu aceeași condiție de atribuire).

## Disclaimer

Vocabularul și traducerile pot conține ocazional imprecizii; verifică independent (ex. dict.cc, linkul din aplicație) orice cuvânt de care nu ești sigur. Aplicația nu oferă consultanță de niciun fel — e strict un instrument de exersare, oferit "ca atare", fără nicio garanție.

## Donații / susținere

Aplicația **nu costă nimic** și rămâne liberă de folosit — dar dacă vrei să susții întreținerea și dezvoltarea ei în continuare, poți lăsa o mică donație, complet opțională:

- **Ko-fi** — [ko-fi.com/tomitaro25](https://ko-fi.com/tomitaro25) — 0% comision pe planul gratuit, nu-ți cere niciun cont special
- **GitHub Sponsors** — direct de pe [github.com/tomitaro25](https://github.com/tomitaro25), dacă preferi

Nimic din aplicație nu depinde de donații — toate funcțiile rămân complet gratuite, indiferent dacă susții sau nu proiectul.
