import Image from "next/image"

export default function BlogPost (post){
    console.log(post.imageURL)
    return (
        <div className="border rounded-lg flex flex-col items-center justify-center">
            <div className="h-48 w-48 md:h-64 md:w-64 relative">
                <Image
                  src={post.imageURL}
                  alt={post.title}
                  layout="fill"
                  className="rounded-lg object-cover"
                />
            </div>
            <h1>{post.title}</h1>
            <p><i>{post.date}</i></p>
        </div>
        
    )
    
}