import Image from "next/image"

export default function Choose(){
    return(
        <div className="flex gap-5">
          <div>
            <button className="border border-darkgrey hover:bg-black hover:bg-opacity-25 text-grey font-bold py-2 px-4 rounded-full transition duration-300">
              <a href="/#about">Eladó vagyok</a>
            </button>
          </div>
          <div>
            <button className="border border-darkgrey hover:bg-black hover:bg-opacity-25 text-grey font-bold py-2 px-4 rounded-full transition duration-300">
              <a href="/#about">Vevő vagyok</a>
            </button>
          </div>
        </div>
    )
}