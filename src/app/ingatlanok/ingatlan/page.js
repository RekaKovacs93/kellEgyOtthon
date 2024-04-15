import NavBar from "@/app/components/NavBar"
import Head from "next/head"
import Listaelem from "@/app/components/Listaelem"
import Contact from "@/app/components/Contact"


const lakasok = [
  {
    cim: "Mátyás tér, XVI",
    ker: "XVI",
    ar: "20.5M",
    szobak: 4,
    alapterulet: "149",
    telekterulet: "1200",
    kepek: [
      "/Matyas09-min.jpg",
      "/Matyas06-min.jpg",
      "/Matyas10-min.jpg",
      "/Matyas12-min.jpg",
      "/Matyas04-min.jpg",
      "/Matyas11-min.jpg",
      "/Matyas05-min.jpg",
      "/Matyas02-min.jpg",
      "/Matyas08-min.jpg",
      "/Matyas01-min.jpg",
      "/Matyas03-min.jpg",
      "/Matyas07-min.jpg"
    ],
    seta: "https://ths.li/PSWyMGc",
    tipus: "újépítésű",
    allapot:	"nincs megadva",
    epites:	"2024",
    szintjei:	"2",
    leiras: "Már csak az egyik fele elérhető! Eladó Budapest, 16. kerület Mátyásföld Petőfikertben egy új építésű, garázsos,149 nm-es, 5 szobás /A/ ikerház saját, 450 nm-es telken. Az építkezés május végére befejeződik, ezért ideális azoknak, akik hamarosan költözni szeretnének. A tervező arra törekedett, hogy a helyiségek mérete, elosztása a legideálisabb legyen. A házak csak a garázsnál kapcsolódnak, amiből a kertre és a lakásra is nyílik ajtó. A földszinti tágas közösségi terek mellett, helyet kapott egy kis szoba, és zuhanyozós fürdőszoba. A 40 nm-es amerikai konyhás nappali, az innen nyíló burkolt terasz, kényelmes élettér nagyobb családnak is. Az itt lakók kényelmét szolgálja az emeleti 3 hálószoba, gardróbszoba és háztartási helyiség, a fürdő és külön WC. A ház mennyezeti hűtés-fűtése, padlófűtése, meleg víz ellátása energiatakarékos Daikin hőszivattyúról történik. A beruházó nagy múlttal rendelkezik, magas színvonalon dolgozik, referencia munkái megtekinthetők. A 16. kerület híres kiváló gyermekintézményeiről, sok zöldterületéről és sportolási lehetőségeiről. Teljeskörű hitelügyintézésével állunk az eladók és a vevők rendelkezésére, bármely, nem csak a nálunk vásárolt ingatlanok esetében is! Az ingatlan finanszírozásához CSOK, Babváró, illetve kedvezményes hitelkonstrukciókat kínálunk. Az adásvételi szerződés megkötéséhez igény szerint megbízható ügyvédi közreműködést biztosítunk, és segítséget nyújtunk az adásvételhez kapcsolódó ügyek intézéséhez. Hívjon a hét bármely napján!"
  
  
  },
  {
    cim: "Mátyás tér, XVI",
    ker: "XVI",
    ar: "20.5M",
    szobak: 4,
    alapterulet: "149",
    telekterulet: "1200",
    kepek: [
      "/Matyas09-min.jpg",
      "/Matyas06-min.jpg",
      "/Matyas10-min.jpg",
      "/Matyas12-min.jpg",
      "/Matyas04-min.jpg",
      "/Matyas11-min.jpg",
      "/Matyas05-min.jpg",
      "/Matyas02-min.jpg",
      "/Matyas08-min.jpg",
      "/Matyas01-min.jpg",
      "/Matyas03-min.jpg",
      "/Matyas07-min.jpg"
    ],
    seta: "https://ths.li/PSWyMGc",
    tipus: "újépítésű",
    allapot:	"nincs megadva",
    epites:	"2024",
    szintjei:	"2",
    leiras: "Már csak az egyik fele elérhető! Eladó Budapest, 16. kerület Mátyásföld Petőfikertben egy új építésű, garázsos,149 nm-es, 5 szobás /A/ ikerház saját, 450 nm-es telken. Az építkezés május végére befejeződik, ezért ideális azoknak, akik hamarosan költözni szeretnének. A tervező arra törekedett, hogy a helyiségek mérete, elosztása a legideálisabb legyen. A házak csak a garázsnál kapcsolódnak, amiből a kertre és a lakásra is nyílik ajtó. A földszinti tágas közösségi terek mellett, helyet kapott egy kis szoba, és zuhanyozós fürdőszoba. A 40 nm-es amerikai konyhás nappali, az innen nyíló burkolt terasz, kényelmes élettér nagyobb családnak is. Az itt lakók kényelmét szolgálja az emeleti 3 hálószoba, gardróbszoba és háztartási helyiség, a fürdő és külön WC. A ház mennyezeti hűtés-fűtése, padlófűtése, meleg víz ellátása energiatakarékos Daikin hőszivattyúról történik. A beruházó nagy múlttal rendelkezik, magas színvonalon dolgozik, referencia munkái megtekinthetők. A 16. kerület híres kiváló gyermekintézményeiről, sok zöldterületéről és sportolási lehetőségeiről. Teljeskörű hitelügyintézésével állunk az eladók és a vevők rendelkezésére, bármely, nem csak a nálunk vásárolt ingatlanok esetében is! Az ingatlan finanszírozásához CSOK, Babváró, illetve kedvezményes hitelkonstrukciókat kínálunk. Az adásvételi szerződés megkötéséhez igény szerint megbízható ügyvédi közreműködést biztosítunk, és segítséget nyújtunk az adásvételhez kapcsolódó ügyek intézéséhez. Hívjon a hét bármely napján!"
  
  
  },
  {
    cim: "Mátyás tér, XVI",
    ker: "XVI",
    ar: "20.5M",
    szobak: 4,
    alapterulet: "149",
    telekterulet: "1200",
    kepek: [
      "/Matyas09-min.jpg",
      "/Matyas06-min.jpg",
      "/Matyas10-min.jpg",
      "/Matyas12-min.jpg",
      "/Matyas04-min.jpg",
      "/Matyas11-min.jpg",
      "/Matyas05-min.jpg",
      "/Matyas02-min.jpg",
      "/Matyas08-min.jpg",
      "/Matyas01-min.jpg",
      "/Matyas03-min.jpg",
      "/Matyas07-min.jpg"
    ],
    seta: "https://ths.li/PSWyMGc",
    tipus: "újépítésű",
    allapot:	"nincs megadva",
    epites:	"2024",
    szintjei:	"2",
    leiras: "Már csak az egyik fele elérhető! Eladó Budapest, 16. kerület Mátyásföld Petőfikertben egy új építésű, garázsos,149 nm-es, 5 szobás /A/ ikerház saját, 450 nm-es telken. Az építkezés május végére befejeződik, ezért ideális azoknak, akik hamarosan költözni szeretnének. A tervező arra törekedett, hogy a helyiségek mérete, elosztása a legideálisabb legyen. A házak csak a garázsnál kapcsolódnak, amiből a kertre és a lakásra is nyílik ajtó. A földszinti tágas közösségi terek mellett, helyet kapott egy kis szoba, és zuhanyozós fürdőszoba. A 40 nm-es amerikai konyhás nappali, az innen nyíló burkolt terasz, kényelmes élettér nagyobb családnak is. Az itt lakók kényelmét szolgálja az emeleti 3 hálószoba, gardróbszoba és háztartási helyiség, a fürdő és külön WC. A ház mennyezeti hűtés-fűtése, padlófűtése, meleg víz ellátása energiatakarékos Daikin hőszivattyúról történik. A beruházó nagy múlttal rendelkezik, magas színvonalon dolgozik, referencia munkái megtekinthetők. A 16. kerület híres kiváló gyermekintézményeiről, sok zöldterületéről és sportolási lehetőségeiről. Teljeskörű hitelügyintézésével állunk az eladók és a vevők rendelkezésére, bármely, nem csak a nálunk vásárolt ingatlanok esetében is! Az ingatlan finanszírozásához CSOK, Babváró, illetve kedvezményes hitelkonstrukciókat kínálunk. Az adásvételi szerződés megkötéséhez igény szerint megbízható ügyvédi közreműködést biztosítunk, és segítséget nyújtunk az adásvételhez kapcsolódó ügyek intézéséhez. Hívjon a hét bármely napján!"
  
  
  },
  {
    cim: "Mátyás tér, XVI",
    ker: "XVI",
    ar: "20.5M",
    szobak: 4,
    alapterulet: "149",
    telekterulet: "1200",
    kepek: [
      "/Matyas09-min.jpg",
      "/Matyas06-min.jpg",
      "/Matyas10-min.jpg",
      "/Matyas12-min.jpg",
      "/Matyas04-min.jpg",
      "/Matyas11-min.jpg",
      "/Matyas05-min.jpg",
      "/Matyas02-min.jpg",
      "/Matyas08-min.jpg",
      "/Matyas01-min.jpg",
      "/Matyas03-min.jpg",
      "/Matyas07-min.jpg"
    ],
    seta: "https://ths.li/PSWyMGc",
    tipus: "újépítésű",
    allapot:	"nincs megadva",
    epites:	"2024",
    szintek:	"2",
    leiras: "Már csak az egyik fele elérhető! Eladó Budapest, 16. kerület Mátyásföld Petőfikertben egy új építésű, garázsos,149 nm-es, 5 szobás /A/ ikerház saját, 450 nm-es telken. Az építkezés május végére befejeződik, ezért ideális azoknak, akik hamarosan költözni szeretnének. A tervező arra törekedett, hogy a helyiségek mérete, elosztása a legideálisabb legyen. A házak csak a garázsnál kapcsolódnak, amiből a kertre és a lakásra is nyílik ajtó. A földszinti tágas közösségi terek mellett, helyet kapott egy kis szoba, és zuhanyozós fürdőszoba. A 40 nm-es amerikai konyhás nappali, az innen nyíló burkolt terasz, kényelmes élettér nagyobb családnak is. Az itt lakók kényelmét szolgálja az emeleti 3 hálószoba, gardróbszoba és háztartási helyiség, a fürdő és külön WC. A ház mennyezeti hűtés-fűtése, padlófűtése, meleg víz ellátása energiatakarékos Daikin hőszivattyúról történik. A beruházó nagy múlttal rendelkezik, magas színvonalon dolgozik, referencia munkái megtekinthetők. A 16. kerület híres kiváló gyermekintézményeiről, sok zöldterületéről és sportolási lehetőségeiről. Teljeskörű hitelügyintézésével állunk az eladók és a vevők rendelkezésére, bármely, nem csak a nálunk vásárolt ingatlanok esetében is! Az ingatlan finanszírozásához CSOK, Babváró, illetve kedvezményes hitelkonstrukciókat kínálunk. Az adásvételi szerződés megkötéséhez igény szerint megbízható ügyvédi közreműködést biztosítunk, és segítséget nyújtunk az adásvételhez kapcsolódó ügyek intézéséhez. Hívjon a hét bármely napján!"
  
  
  },
  {
    cim: "Mátyás tér, XVI",
    ker: "XVI",
    ar: "20.5M",
    szobak: 4,
    alapterulet: "149",
    telekterulet: "1200",
    kepek: [
      "/Matyas09-min.jpg",
      "/Matyas06-min.jpg",
      "/Matyas10-min.jpg",
      "/Matyas12-min.jpg",
      "/Matyas04-min.jpg",
      "/Matyas11-min.jpg",
      "/Matyas05-min.jpg",
      "/Matyas02-min.jpg",
      "/Matyas08-min.jpg",
      "/Matyas01-min.jpg",
      "/Matyas03-min.jpg",
      "/Matyas07-min.jpg"
    ],
    seta: "https://ths.li/PSWyMGc",
    tipus: "újépítésű",
    allapot:	"nincs megadva",
    epites:	"2024",
    szintjei:	"2",
    leiras: "Már csak az egyik fele elérhető! Eladó Budapest, 16. kerület Mátyásföld Petőfikertben egy új építésű, garázsos,149 nm-es, 5 szobás /A/ ikerház saját, 450 nm-es telken. Az építkezés május végére befejeződik, ezért ideális azoknak, akik hamarosan költözni szeretnének. A tervező arra törekedett, hogy a helyiségek mérete, elosztása a legideálisabb legyen. A házak csak a garázsnál kapcsolódnak, amiből a kertre és a lakásra is nyílik ajtó. A földszinti tágas közösségi terek mellett, helyet kapott egy kis szoba, és zuhanyozós fürdőszoba. A 40 nm-es amerikai konyhás nappali, az innen nyíló burkolt terasz, kényelmes élettér nagyobb családnak is. Az itt lakók kényelmét szolgálja az emeleti 3 hálószoba, gardróbszoba és háztartási helyiség, a fürdő és külön WC. A ház mennyezeti hűtés-fűtése, padlófűtése, meleg víz ellátása energiatakarékos Daikin hőszivattyúról történik. A beruházó nagy múlttal rendelkezik, magas színvonalon dolgozik, referencia munkái megtekinthetők. A 16. kerület híres kiváló gyermekintézményeiről, sok zöldterületéről és sportolási lehetőségeiről. Teljeskörű hitelügyintézésével állunk az eladók és a vevők rendelkezésére, bármely, nem csak a nálunk vásárolt ingatlanok esetében is! Az ingatlan finanszírozásához CSOK, Babváró, illetve kedvezményes hitelkonstrukciókat kínálunk. Az adásvételi szerződés megkötéséhez igény szerint megbízható ügyvédi közreműködést biztosítunk, és segítséget nyújtunk az adásvételhez kapcsolódó ügyek intézéséhez. Hívjon a hét bármely napján!"
  
  
  },
  {
    cim: "Mátyás tér, XVI",
    ker: "XVI",
    ar: "20.5M",
    szobak: 4,
    alapterulet: "149",
    telekterulet: "1200",
    kepek: [
      "/Matyas09-min.jpg",
      "/Matyas06-min.jpg",
      "/Matyas10-min.jpg",
      "/Matyas12-min.jpg",
      "/Matyas04-min.jpg",
      "/Matyas11-min.jpg",
      "/Matyas05-min.jpg",
      "/Matyas02-min.jpg",
      "/Matyas08-min.jpg",
      "/Matyas01-min.jpg",
      "/Matyas03-min.jpg",
      "/Matyas07-min.jpg"
    ],
    seta: "https://ths.li/PSWyMGc",
    tipus: "újépítésű",
    allapot:	"nincs megadva",
    epites:	"2024",
    szintjei:	"2",
    leiras: "Már csak az egyik fele elérhető! Eladó Budapest, 16. kerület Mátyásföld Petőfikertben egy új építésű, garázsos,149 nm-es, 5 szobás /A/ ikerház saját, 450 nm-es telken. Az építkezés május végére befejeződik, ezért ideális azoknak, akik hamarosan költözni szeretnének. A tervező arra törekedett, hogy a helyiségek mérete, elosztása a legideálisabb legyen. A házak csak a garázsnál kapcsolódnak, amiből a kertre és a lakásra is nyílik ajtó. A földszinti tágas közösségi terek mellett, helyet kapott egy kis szoba, és zuhanyozós fürdőszoba. A 40 nm-es amerikai konyhás nappali, az innen nyíló burkolt terasz, kényelmes élettér nagyobb családnak is. Az itt lakók kényelmét szolgálja az emeleti 3 hálószoba, gardróbszoba és háztartási helyiség, a fürdő és külön WC. A ház mennyezeti hűtés-fűtése, padlófűtése, meleg víz ellátása energiatakarékos Daikin hőszivattyúról történik. A beruházó nagy múlttal rendelkezik, magas színvonalon dolgozik, referencia munkái megtekinthetők. A 16. kerület híres kiváló gyermekintézményeiről, sok zöldterületéről és sportolási lehetőségeiről. Teljeskörű hitelügyintézésével állunk az eladók és a vevők rendelkezésére, bármely, nem csak a nálunk vásárolt ingatlanok esetében is! Az ingatlan finanszírozásához CSOK, Babváró, illetve kedvezményes hitelkonstrukciókat kínálunk. Az adásvételi szerződés megkötéséhez igény szerint megbízható ügyvédi közreműködést biztosítunk, és segítséget nyújtunk az adásvételhez kapcsolódó ügyek intézéséhez. Hívjon a hét bármely napján!"
  
  
  },
  {
    cim: "Mátyás tér, XVI",
    ker: "XVI",
    ar: "20.5M",
    szobak: 4,
    alapterulet: "149",
    telekterulet: "1200",
    kepek: [
      "/Matyas09-min.jpg",
      "/Matyas06-min.jpg",
      "/Matyas10-min.jpg",
      "/Matyas12-min.jpg",
      "/Matyas04-min.jpg",
      "/Matyas11-min.jpg",
      "/Matyas05-min.jpg",
      "/Matyas02-min.jpg",
      "/Matyas08-min.jpg",
      "/Matyas01-min.jpg",
      "/Matyas03-min.jpg",
      "/Matyas07-min.jpg"
    ],
    seta: "https://ths.li/PSWyMGc",
    tipus: "újépítésű",
    allapot:	"nincs megadva",
    epites:	"2024",
    szintjei:	"2",
    leiras: "Már csak az egyik fele elérhető! Eladó Budapest, 16. kerület Mátyásföld Petőfikertben egy új építésű, garázsos,149 nm-es, 5 szobás /A/ ikerház saját, 450 nm-es telken. Az építkezés május végére befejeződik, ezért ideális azoknak, akik hamarosan költözni szeretnének. A tervező arra törekedett, hogy a helyiségek mérete, elosztása a legideálisabb legyen. A házak csak a garázsnál kapcsolódnak, amiből a kertre és a lakásra is nyílik ajtó. A földszinti tágas közösségi terek mellett, helyet kapott egy kis szoba, és zuhanyozós fürdőszoba. A 40 nm-es amerikai konyhás nappali, az innen nyíló burkolt terasz, kényelmes élettér nagyobb családnak is. Az itt lakók kényelmét szolgálja az emeleti 3 hálószoba, gardróbszoba és háztartási helyiség, a fürdő és külön WC. A ház mennyezeti hűtés-fűtése, padlófűtése, meleg víz ellátása energiatakarékos Daikin hőszivattyúról történik. A beruházó nagy múlttal rendelkezik, magas színvonalon dolgozik, referencia munkái megtekinthetők. A 16. kerület híres kiváló gyermekintézményeiről, sok zöldterületéről és sportolási lehetőségeiről. Teljeskörű hitelügyintézésével állunk az eladók és a vevők rendelkezésére, bármely, nem csak a nálunk vásárolt ingatlanok esetében is! Az ingatlan finanszírozásához CSOK, Babváró, illetve kedvezményes hitelkonstrukciókat kínálunk. Az adásvételi szerződés megkötéséhez igény szerint megbízható ügyvédi közreműködést biztosítunk, és segítséget nyújtunk az adásvételhez kapcsolódó ügyek intézéséhez. Hívjon a hét bármely napján!"
  
  
  },
  {
    cim: "Mátyás tér, XVI",
    ker: "XVI",
    ar: "20.5M",
    szobak: 4,
    alapterulet: "149",
    telekterulet: "1200",
    kepek: [
      "/Matyas09-min.jpg",
      "/Matyas06-min.jpg",
      "/Matyas10-min.jpg",
      "/Matyas12-min.jpg",
      "/Matyas04-min.jpg",
      "/Matyas11-min.jpg",
      "/Matyas05-min.jpg",
      "/Matyas02-min.jpg",
      "/Matyas08-min.jpg",
      "/Matyas01-min.jpg",
      "/Matyas03-min.jpg",
      "/Matyas07-min.jpg"
    ],
    seta: "https://ths.li/PSWyMGc",
    tipus: "újépítésű",
    allapot:	"nincs megadva",
    epites:	"2024",
    szintjei:	"2",
    leiras: "Már csak az egyik fele elérhető! Eladó Budapest, 16. kerület Mátyásföld Petőfikertben egy új építésű, garázsos,149 nm-es, 5 szobás /A/ ikerház saját, 450 nm-es telken. Az építkezés május végére befejeződik, ezért ideális azoknak, akik hamarosan költözni szeretnének. A tervező arra törekedett, hogy a helyiségek mérete, elosztása a legideálisabb legyen. A házak csak a garázsnál kapcsolódnak, amiből a kertre és a lakásra is nyílik ajtó. A földszinti tágas közösségi terek mellett, helyet kapott egy kis szoba, és zuhanyozós fürdőszoba. A 40 nm-es amerikai konyhás nappali, az innen nyíló burkolt terasz, kényelmes élettér nagyobb családnak is. Az itt lakók kényelmét szolgálja az emeleti 3 hálószoba, gardróbszoba és háztartási helyiség, a fürdő és külön WC. A ház mennyezeti hűtés-fűtése, padlófűtése, meleg víz ellátása energiatakarékos Daikin hőszivattyúról történik. A beruházó nagy múlttal rendelkezik, magas színvonalon dolgozik, referencia munkái megtekinthetők. A 16. kerület híres kiváló gyermekintézményeiről, sok zöldterületéről és sportolási lehetőségeiről. Teljeskörű hitelügyintézésével állunk az eladók és a vevők rendelkezésére, bármely, nem csak a nálunk vásárolt ingatlanok esetében is! Az ingatlan finanszírozásához CSOK, Babváró, illetve kedvezményes hitelkonstrukciókat kínálunk. Az adásvételi szerződés megkötéséhez igény szerint megbízható ügyvédi közreműködést biztosítunk, és segítséget nyújtunk az adásvételhez kapcsolódó ügyek intézéséhez. Hívjon a hét bármely napján!"
  
  }

]

export default function Elem(slug) {


  slug = lakasok[0].cim.toLowerCase();
  slug = slug.replace(/\s+/g, '_');
  slug = slug.replace(/[^a-z0-9-_]/g, '');


    return (
      <main className="flex min-h-screen flex-col items-center">
  
          <Head>
          
          {lakasok.map((lakas) => (
            lakas.kepek.map((image, index) => (
            <link key={index} rel="preload" href={image} as="image"/>
          ))))}
          </Head> 
  
          <NavBar class="flex flex-col items-end md:flex-row md:items-center"></NavBar>
          <Listaelem lakas={lakasok[0]}></Listaelem>
          <div className="w-full justify-center" id="contact"><Contact></Contact></div>
  
      </main>
    )
  }