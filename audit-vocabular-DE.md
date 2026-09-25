# Auditul vocabularului Karteikarten

Vocabularul verificat: `vocab-data.js` din Karteikarten, după v140. Ambele faze sunt încheiate și livrate în v141.

## Faza 1: aplicată

Rezultat: **7.133 → 7.072 de intrări**. Validare de integritate trecută: zero ID-uri duplicate, zero câmpuri goale, genuri valide, zero dubluri în nivelurile A1–B2 și EXT.

Metodă: verificări automate pe toate intrările; articolele comparate cu datele de substantive din Wiktionary (pachetul Python `german-nouns`, peste 100.000 de substantive); pozițiile din nivelurile de bază comparate cu lista de frecvență `de_50k` (hermitdave). Fiecare semnalare a fost verificată manual înainte de corectare.

Corecturi aplicate:

- A1-0003: „der, das Kajak” -> das = asta
- A1-0026: „für/gegen etwas sprechen” -> für = pentru
- EXT-1293: der Burnout -> das Burnout
- A1-0116: Leute -> die Leute (substantiv folosit doar la plural)
- A1-0354: Eltern -> die Eltern (substantiv folosit doar la plural)
- A2-0175: Kosten -> die Kosten (substantiv folosit doar la plural)
- A2-0230: Daten -> die Daten (substantiv folosit doar la plural)
- EXT-0111: Großeltern -> die Großeltern (substantiv folosit doar la plural)
- EXT-0605: Fachleute -> die Fachleute (substantiv folosit doar la plural)
- EXT-1717: „der” (genitiv feminin) mutat din campul de articol in expresie
- EXT-1741: der Dreißigjähriger Krieg -> der Dreißigjährige Krieg
- PFLEGE-0409: der theoretischer Unterricht -> der theoretische Unterricht
- PFLEGE-0497: der ehrenamtlicher Helfer -> der ehrenamtliche Helfer
- EXT-3384: „a trece pe langa, a trece in vizita” -> „a trece pe lângă, a trece în vizită”
- EXT-3386: „a se aseza” -> „a se așeza”
- EXT-3388: „a manca tot, a termina de mancat” -> „a mânca tot, a termina de mâncat”
- eliminate 61 dubluri (se pastreaza intrarea de pe nivelul mai mic)

Păstrate intenționat: 59 de cuvinte care apar atât într-un nivel de bază, cât și în lista tematică Pflege (o listă tematică trebuie să rămână completă pentru cine o exersează separat); numele de regiuni fără articol (Baden-Württemberg etc.), cum se folosesc în mod normal.

Fals-pozitive confirmate (articolele sunt corecte): pluralele („die Treibhausgase”, „die Kosten”), verbele substantivizate („das Skaten”), adjectivele și participiile substantivizate („das Unbekannte”, „der Teilnehmende”), potrivirile greșite pentru cuvinte compuse („Beanstandung” recunoscut prin „Dung”).

## Faza 2: aplicată (v141)

Rezultat: **7.072 → 7.060 de intrări**. Validare de integritate trecută după fiecare lot: zero ID-uri duplicate, zero câmpuri goale, genuri valide, zero perechi german–română identice în A1–B2 și EXT.

Metodă: toate intrările verificate pe loturi (A1, A2, B1, B2, EXT, Pflege), pentru traducere, sens cel mai comun și potrivirea articolului cu sensul. Suspiciunile de frecvență au fost verificate în `de_50k`, iar omografele lipsă au fost căutate automat cu `german-nouns` (Wiktionary).

Ce s-a schimbat:

- **Substantive lipsă, omografe ale unui verb, adjectiv sau adverb existent (29)**: lista de frecvență are doar litere mici, așa că „der Weg” fusese absorbit de „weg”, „das Leben” de „leben” etc. Adăugate la nivelul omografului: Weg, Leben, Morgen, Paar, Recht, Essen, Dank, Treffen, Schuld, Fest, Wert, Vertrauen, Klasse, Stolz, Arm, Versprechen, Glaube, Bitte, Leid (A1); Reich, Vergnügen, Unternehmen, Schaden, Verhalten, Schulden, Nutzen, Deutsch, Englisch (A2); Wurst (B2). Plus verbul „wissen” (A1-0055, înregistrat greșit ca substantiv) și „die Ehre” (A1-0630).
- **Al doilea sens frecvent, intrare separată (circa 70)**: regula aprobată e ca un cuvânt al cărui al doilea sens e și el frecvent să primească două intrări, nu o traducere cu virgulă.
- **Traduceri și articole corectate (circa 275)**: sensul principal, traduceri greșite, articole nepotrivite cu traducerea (der Fremde, der Erwachsene, der Verwandte, der Tote, der Verdächtige etc.), note rămase în traducere, sinonime românești suprapuse, pluraluri scrise în câmpul german.
- **Eliminate (111)**: variante ortografice și regionale cu aceeași traducere (gerne, alleine, selber, nützen, nochmals, Frisör, Phantasie, Photograph, Circus, Spass, anderseits…), forme flexionate (eure, deine, meine, seine, blöde, verfiel), greșeli de scriere (siebenzig, wieder holen, Wandrung, Langweile, weltenweit, glücklicheweise), o intrare coruptă („en”), artefacte de manual (secolul al XIV-lea î.Hr. etc.) și intrări feminine separate deja incluse în intrarea combinată masculin/feminin.
- **Mutate în EXT (7)**: cuvinte ajunse la nivel prea mic din cauza frecvenței altui cuvânt: fällen (de la „gefällt”), der Rum (de la colocvialul „rum” = herum), der Brauch (de la „ich brauch'”), der Untertitel (corpus de subtitrări), vergnügen (de la substantiv), rege (rang 19.659), einigen (de la determinantul „einigen”).

Modificare în aplicație legată de audit: la exercițiul cu variante, toate răspunsurile corecte pentru textul afișat sunt excluse din variantele greșite. Testat pe 6.000 de întrebări, cu zero variante greșite care să fie de fapt corecte.

## Reguli de păstrat la orice modificare viitoare

- Un singur sens pe intrare. Dacă al doilea sens e și el frecvent, se adaugă o intrare separată.
- Articolul corespunde sensului tradus.
- Fără paranteze sau note explicative în traducere.
- Diacritice românești complete (ș, ț cu virgulă).
- Forma de bază (infinitiv, singular). Excepție: adjectivele participiale uzuale (verheiratet, ausgezeichnet, interessiert).
- Omografele substantiv/verb se verifică separat, pentru că lista de frecvență nu distinge majusculele.
- Zero perechi german–română identice, validare de integritate după fiecare lot.
