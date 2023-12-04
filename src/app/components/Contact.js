import Image from "next/image";

export default function Contact() {
  return (
    <div className="mt-20">
      <h1 className="text-center text-2xl m-12">Lépjen kapcsolatba cegünk képviselőjével</h1>
      <div className="flex justify-center items-center gap-20">
        <div className="items-center text-center">
        <div
          className="w-48 h-48 rounded-full overflow-hidden"
          style={{
            border: "5px solid #fff", // Border around the circle
          }}
        >
        <Image
            src="https://cdn.pixabay.com/photo/2017/02/16/12/08/business-woman-2071334_1280.jpg"
            alt="Contact"
            width={1900} // Specify the width
            height={1900} // Specify the height
            // layout="fill"
            objectFit="cover"
            // className="rounded-full"
        />
        
        </div>
        <h3 className="text-center text-xl mt-10"><b>Vezetek Kereszt</b></h3>
        <a href="mailto:email@gmail.com" className="text-center underline">email@gmail.com</a>
        <p className="text-base">+36 20 9876543</p>
        </div>
        
      </div>
    </div>
  );
}
