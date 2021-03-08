<img width="1347" alt="clock" src="https://user-images.githubusercontent.com/70939482/110291125-3c93d080-7ff4-11eb-9b14-017d52820834.png">
<img width="1264" alt="clock1" src="https://user-images.githubusercontent.com/70939482/110291130-3d2c6700-7ff4-11eb-922d-e9b56d291818.png">
Mina, Sofia Geroiskaja tegin kella näidet. Tegin kolm faili: clock.html, clock.css ja clock.js. 
Minu kell asub keset ekraani ja on teistest elementidest eraldatud borderiga. 
Kell näitab kella, kuupäeva, nädalapäeva ja aastat. 
Kella all on 2 nuppu ja 1 link, vasaku nuppule vajutades randomselt vahetub tausta värv, teisele nuppule vajutades saab teada mitu päeva on möödunud koroona algusest 
ja lingile klõpsates minnakse kodutöö repositooriumile. Lehe all on kirjutatud et Sofia Geroiskaja on autor. 
Kui hõljutada hiirt kella peale siis tausta värv muutub valgeks ja teksti värv mustaks.
Kui hõljutada hiirt nädalapäeva, kuupäeva, aasta või kella peale siis teksti värv muutub.
Praeguse date selgitamiseks kasutasin new Date() ja pärast getDay(), getMonth() jne.
Olen lisanud EventListeneri
Funktsioonidest on display_corona et näidata mitu päeva on möödunud koroona algusest  ja change_color et vahetada background color.
CSS failis kirjutasin kui suured, mis värvi, mis borderiga elemendid peavad olema, kus nad peavad asuma, milline peab olema tekst ja kuidas paigutatud. Lisasin natuke interaktivsust nuppudele, nii et kui keegi hõljutab nende peale, siis nende opacity muutub jne.
