import BlogPost from "./BlogPost"

const posts = [
    {
        title: "Hogy kell hazat venni?",
        date: "2023/12/02",
        imageURL: "https://cdn.pixabay.com/photo/2022/04/14/13/36/bedroom-7132434_1280.jpg",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    }
]

export default function Blog(){
    console.log(posts[0].imageURL, "blogbol")
    return(
        <div className="mt-20">
            <h1 className="text-center text-2xl m-12">BLOG</h1>
            <div className="flex flex-wrap gap-4">
            {posts.map((post, index) => (
                <BlogPost key={index} post={post} />
            ))}
            </div>
        </div>
    )
}
