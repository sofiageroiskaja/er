Mina, Sofia Geroiskaja tegin kella näidet. Tegin kolm faili: clock.html, clock.css ja clock.js. 
Minu kell asub keset ekraani ja on teistest elementidest eraldatud borderiga. 
Kell näitab kella, kuupäeva, nädalapäeva ja aastat. 
Kella all on 3 nuppu, vasaku nuppule vajudes randomselt vahetub tausta värv, teisele nuppule vajutades saab teada mitu päeva on möödunud koroona algusest 
ja paremale nupule vajutades saab näha linki kodutöö repositooriumile. Lehe all on kirjutatud et Sofia Geroiskaja on autor. 
Kui hõljutada hiirt kella peale siis tausta värv muutub valgeks ja teksti värv mustaks.
Kui hõljutada hiirt nädalapäeva, kuupäeva, aasta või kella peale siis teksti värv muutub.
Praeguse date selgitamiseks kasutasin new Date() ja pärast getDay(), getMonth() jne.
Olen lisanud EventListeneri
Funktsioonidest on change_source, selleks et nuppu tekst vahetuks repositooriumi lingiks, display_corona et näidata mitu päeva on möödunud koroona algusest  ja change?color et vahetada background color.
CSS failis kirjutasin kui suured, mis värvi, mis borderiga elemendid peavad olema, kus nad peavad asuma, milline peab olema tekst ja kuidas paigutatud. Lisasin natuke interaktivsust nuppudele, nii et kui keegi hõljutab selle peale, siis selle opacity muutub jne.
