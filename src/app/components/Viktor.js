import Image from "next/image";

export default function Viktor() {
  return (
    <div className="flex items-center justify-center md:w-full min-h-screen mt-20">
    <div className="hidden md:block sm:w-2/5">
    <Image
            src="/Viktor.png"
            alt="image of Viktor"
            width={300}
            height={300}
            className="mb-10 ml-20 rounded-lg"
          />
      <Image
            src="/Zsuzsa.png"
            alt="image of Zsuzsa"
            width={300}
            height={300}
            
            className="mb-10 ml-20 rounded-lg"
          />

      </div>
      <div className="md:w-full sm:w-3/5 md:px-8 px-10">
        <h1 className="text-3xl text-center md:mb-2 mb-5">Kedves Érdeklődő!</h1>
        <div className="md:px-20">
        <p className="text-xl mb-10 text-center">Örömmel üdvözöljük a Mindenkinek Kell Egy Otthon honlapján!</p> 
<p>Mezei Viktor és Küri Zsuzsanna vagyunk, az alapítók. Több, mint 20
éves szakmai tapasztalattal rendelkezünk az ingatlan és pénzügyi
területeken. Csapatunkkal küldetésünk, hogy segítsünk Önnek az
ingatlanügyleteiben, legyen szó eladásról, vásárlásról, vagy a
hozzá tartozó finanszírozásról.</p>

<p className="my-2"><b>Miért érdemes velünk együttműködni?</b></p>

<p>Egyszerűen azért, mert nem csak az ingatlanokat, hanem
ügyfeleink boldogságát is szem előtt tartjuk. Úgy értékesítjük az Ön
ingatlanát, hogy az az Ön elégedettségére és örömére szolgáljon.
Nem a mennyiség, hanem a minőség a fontos számunkra, és
mindig arra törekszünk, hogy az ügyfeleink elégedetten távozzanak.
Csapatunk tagjaival folyamatosan fejlesztjük magunkat, hogy
mindig naprakészek és felkészültek legyünk a változó piaci
helyzetre.</p>
<p className="my-2">Az ügyfeleinkkel való együttműködés során fontosnak tartjuk az
egyéni igények és tervek felmérését, hogy együtt kialakíthassunk
egy hatékony értékesítési stratégiát.</p>
<p>Reméljük, hogy hamarosan személyesen is találkozunk, és együtt
dolgozhatunk az Ön ingatlanügyleteiben.</p>
<p className="my-2">Bízunk benne, hogy sikeres lesz az együttműködésünk.</p>
<p className="my-2">Várjuk érdeklődését!</p>
<p>Tisztelettel:</p>
<p className="my-2"><b>Mezei Viktor és Küri Zsuzsanna</b></p>
<p>A Mindenkinek Kell Egy Otthon Alapítói</p>
</div>
<div className="md:hidden flex justify-center mt-10">
      <Image
            src="/Viktor.png"
            alt="image of Viktor"
            width={130}
            height={130}
            className="mr-5 rounded-full"
          />
      <Image
            src="/Zsuzsa.png"
            alt="image of Zsuzsa"
            width={130}
            height={130}
            
            className=" rounded-full"
          />

      </div>
        <div className="flex items-center justify-center mt-10">
          <button className="border-2 border-darkgrey hover:bg-black hover:bg-opacity-25 text-grey font-bold py-2 px-4 rounded-full transition duration-300">
            <a href="./kapcsolat">Bízzon meg bennünket!</a>
          </button>
        </div>
      </div>
      
    </div>
  );
}
