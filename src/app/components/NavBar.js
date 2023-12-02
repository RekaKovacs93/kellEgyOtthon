import Link from "next/link";

export default function NavBar() {
    return (
        <nav className="fixed top-0 w-full bg-white z-10">
            <div className="flex items-center justify-between px-6 md:px-8 py-3 md:py-6"> {/* Keeping the original layout */}
                {/* Logo or Title aligned to the start */}
                <Link href="/" className="font-bold text-xl">KELL EGY OTTHON</Link>
                
                {/* Navigation Links */}
                <div className="hidden md:flex flex-grow items-center justify-end space-x-4">
                    <a href="/#about">RÓLUNK</a>
                    <a href="/#services">SZOLGÁLTATÁSOK</a>
                    <a href="/blogPage">BLOG</a>
                    <a href="/#contact">KAPCSOLAT</a>
                </div>
                
                {/* Hamburger Icon for Mobile */}
                <div className="md:hidden relative">
                    <input type="checkbox" id="toggle" className="hidden" />
                    <label htmlFor="toggle">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                        </svg>
                    </label>
                    
                    {/* Navigation Links for Mobile */}
                    <div className="menu bg-white absolute top-full left-1/2 transform -translate-x-1/2 mt-2 rounded-md border shadow-md hidden">
                        <a href="/#about">RÓLUNK</a>
                        <a href="/#services">SZOLGÁLTATÁSOK</a>
                        <a href="/blogPage">BLOG</a>
                        <a href="/#contact">KAPCSOLAT</a>
                    </div>
                </div>
            </div>
        </nav>
    );
}
