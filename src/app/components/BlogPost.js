import Image from "next/image"

export default function BlogPost (props){
    console.log(props.post.imageURL)
    return (
        <div className="border rounded-lg flex flex-col items-center justify-center">
            <div className="h-48 w-48 md:h-64 md:w-64 relative">
                <Image
                  src={props.post.imageURL}
                  alt={props.post.title}
                  layout="fill"
                  className="rounded-lg object-cover"
                />
            </div>
            <h2 className="text-xl">{props.post.title}</h2>
            <p className="text-xs"><i>{props.post.date}</i></p>
        </div>
        
    )
    
}