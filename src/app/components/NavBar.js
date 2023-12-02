import Link from "next/link";

export default function NavBar() {
    return (
        <nav className="fixed top-0 w-full bg-white z-10">
            <div className="flex items-center justify-between px-14 py-6 md:px-8" style={{ width: "100%" }}>
                {/* Logo or Title aligned to the start */}
                <Link href= "#home"className="font-bold text-xl">KELL EGY OTTHON</Link>
                
                {/* Spacer to expand and push the links */}
                <div className="flex-grow" />
                
                {/* Navigation Links aligned to the right */}
                <div className="flex flex-row items-center space-x-4">
                    <a href="#about">RÓLUNK</a>
                    <a href="#services">SZOLGÁLTATÁSOK</a>
                    <a href="#blog">BLOG</a>
                    <a href="#contact">KAPCSOLAT</a>
                </div>
            </div>
        </nav>
    );
}
