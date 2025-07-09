
import { NavLink } from "react-router-dom";
import './Navbar.css'
function Navbar() {
    const navItems = [
        { name: "Home", path: "/" },
        { name: "About", path: "/about" },
        { name: "Projects", path: "/projects" },
        // { name: "Skills", path: "/skills" },
        { name: "Contact", path: "/contact" },
        { name: "Blog", path: "/blog" },
        // { name: "Resume", path: "/resume" },
    ];

    return (
        <nav className="sticky top-0">
            <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center grid grid-cols-6 gap-4 ">
                <div className="">
                    <h1 className="text-xl font-bold text-gray-800 text-white">Jaykant</h1>
                </div>
                <div className="hidden md:flex space-x-6 p-2 font-light px-4 col-start-3 col-span-2 text-center justify-around Navbar-items">
                    {navItems.map((item) => (
                        <NavLink 
                            key={item.path}
                            to={item.path}
                            className={({ isActive }) =>
                                `font-medium ${isActive
                                    ? "text-blue-600 underline underline-offset-4"
                                    : "text-gray-700 hover:text-blue-600"
                                }`
                            }
                        >
                            <p className="text-slate-300 text-sm">{item.name}</p>
                        </NavLink>
                    ))}

                </div>

                <div className="col-start-6 col-end-8 flex justify-end space-x-4 text-center">
                    <a
                        href="/resume.pdf"
                        download
                        className="bg-blue-600 text-white px-4 py-1 rounded hover:bg-blue-700 transition-all"
                    >
                        Resume
                    </a>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;