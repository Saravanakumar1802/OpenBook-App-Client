import { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

//! ReactIcons
import { FaBarsStaggered, FaBlog, FaXmark } from "react-icons/fa6";
import { AuthContext } from '../context/AuthProvider';

const Navbar = () => {
    const [ismenuOpen, setMenuOpen] = useState(false);
    const [isStickey, setIsStickey] = useState(false);

    const { user } = useContext(AuthContext);
    // console.log(user);

    const toggleMenu = () => {
        setMenuOpen(!ismenuOpen);
    }

    useEffect(() => {
        const handleScroll = () => {

            if (window.scrollY > 100) {
                setIsStickey(true);
            } else {
                setIsStickey(false)
            }
        }

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.addEventListener("scroll", handleScroll);
        }
    }, [])

    //Nav Items

    const navItems = [
        { link: "Home", path: "/" },
        { link: "About", path: "/about" },
        { link: "Shop", path: "/shop" },
        { link: "sell your Book", path: "/admin/dashboard" },
        { link: "Blog", path: "/#" },
        { link: <b className='text-red-600'>Login</b>, path: "/login" },
    ]
    return (
        <header className='w-full bg-transparent fixed top-0 left-0 right-0 transition-all ease-in duration-300'>
            <nav className={`py-4 lg:px-24 px-4 ${isStickey ? "sticky top-0 left-0 right-0 bg-blue-300" : ""}`}>
                <div className='flex justify-between items-center text-base gap-8'>
                    {/* {logo} */}
                    <Link to="/"
                        className='text-2xl font-bold text-blue-700 flex items-center gap-2'>
                        <FaBlog className='inline-block' /> OpenBooks </Link>

                    {/* nav item for large systems */}

                    <ul className='md:flex space-x-12 hidden'>
                        {
                            navItems.map(({ link, path }) => <Link key={path} to={path}
                                className='block text-base text-black uppercase cursor-pointer hover:text-blue-700'>
                                {link}
                            </Link>)
                        }
                    </ul>

                    {/* {button for lg divices} */}
                    <div className='space-x-12 hidden lg:flex items-center'>
                        <button><FaBarsStaggered className='w-5 hover:text-blue-700' /></button> &nbsp;
                        <p className='text-1xl font-bold text-blue-700'>{user ? user.email : ""}</p>

                    </div>


                    {/* menuBG for mobile divices */}
                    <div className='md:hidden '>
                        <button onClick={toggleMenu} className='text-black focus:outline-none'>
                            {
                                ismenuOpen ? <FaXmark className='h-5 w-5 text-black' /> : <FaBarsStaggered className='h-5 w-5 text-black' />
                            }
                        </button>
                    </div>
                </div>

                {/* navigation for sm divices */}
                <div className={`space-y px-4 mt-16 py-7 bg-blue-700 ${ismenuOpen ? "block fixed top-0 right-0 left-0" : "hidden"}`}>
                    {
                        navItems.map(({ link, path }) => <Link key={path} to={path}
                            className='block text-base text-white uppercase cursor-pointer'>
                            {link}
                        </Link>)
                    }
                </div>
            </nav>
        </header>
    )
}

export default Navbar