import Image from "next/image";

export default function Viktor() {
  return (
    <div className="flex items-center justify-center md:w-full min-h-screen">
      <div className="md:w-full sm:w-3/5 md:px-8 px-10">
        <h1 className="text-3xl text-center md:mb-2 mb-5">Kedves Érdeklődő!</h1>
        <div className="md:px-20">
        <p className="text-xl mb-10 text-center">Örömmel üdvözlöm a Mindenkinek Kell Egy Otthon honlapján!</p> 
<p>Mezei Viktor vagyok, az alapító, több, mint 20 éves szakmai tapasztalattal rendelkezem az ingatlan és pénzügyi területeken. Csapatunkkal küldetésünk, hogy segítsünk Önnek az ingatlanügyleteiben, legyen szó eladásról, vásárlásról, vagy a hozzá tartozó finanszírozásról.</p>

<p className="my-2"><b>Miért érdemes velünk együttműködni?</b></p>

<p>Egyszerűen azért, mert nem csak az ingatlanokat, hanem ügyfeleink boldogságát is szem előtt tartjuk. Úgy értékesítjük az Ön ingatlanát, hogy az az Ön elégedettségére és örömére szolgáljon. Nem a mennyiség, hanem a minőség a fontos számunkra, és mindig arra törekszünk, hogy az ügyfeleink elégedetten távozzanak. Csapatom tagjaival folyamatosan fejlesztjük magunkat, hogy mindig naprakészek és felkészültek legyünk a változó piaci helyzetre.</p>
<p className="my-2">Az ügyfeleinkkel való együttműködés során fontosnak tartjuk az egyéni igények és tervek felmérését, hogy együtt kialakíthassunk egy hatékony értékesítési stratégiát.</p>
<p>Reméljük, hogy hamarosan személyesen is találkozunk, és együtt dolgozhatunk az Ön ingatlanügyleteiben.</p>
<p className="my-2">Bízunk benne, hogy közös együttműködésünk során sikeresen dolgozunk majd együtt.</p>
<p className="my-2">Várjuk érdeklődését!</p>
<p>Tisztelettel,</p>
<p>Mezei Viktor</p>
<p>Mindenkinek Kell Egy Otthon Alapítója</p>
</div>
        <div className="flex items-center justify-center mt-10">
          <button className="border-2 border-darkgrey hover:bg-black hover:bg-opacity-25 text-grey font-bold py-2 px-4 rounded-full transition duration-300">
            <a href="/#contact">Bízzon meg bennünket!</a>
          </button>
        </div>
      </div>
      <div className="hidden md:flex sm:w-2/5">
        {/* <div className="relative" style={{ width: "600px", height: "400px" }}> */}
          <Image
            src="https://cdn.pixabay.com/photo/2015/08/05/10/42/andrew-ronalds-876138_1280.jpg"
            alt="image of Viktor"
            width={600}
            height={400}
            layout="responsive"
          />
        {/* </div> */}
      </div>
    </div>
  );
}
