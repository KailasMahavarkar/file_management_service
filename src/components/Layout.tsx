import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faImage, faMoon, faPager, faSun } from '@fortawesome/free-solid-svg-icons'
import Link from "next/link"
import { useTheme, ThemeProvider } from "next-themes"

const navbarData = [
    {
        header: "Media",
        icon: faImage,
        link: "/media"
    },
]

const SideBar = () => {
    return (
        <ul className="menu ">
            {
                navbarData.map((item, index) => {
                    return (
                        <li key={index} >

                            <Link
                                href={item.link}
                            >
                                <FontAwesomeIcon
                                    icon={item.icon}
                                />
                                <span className="hidden sm:inline">
                                    {item.header}
                                </span>
                            </Link>
                        </li>
                    )
                })
            }
        </ul>
    )
}

const NavBar = () => {

    const { theme, setTheme } = useTheme();

    return (
        <div className="navbar bg-base-100">
            <div className="flex-1">
                <a className="btn btn-ghost normal-case text-xl">
                    {process.env.NEXT_PUBLIC_SITE_NAME}
                </a>
            </div>
            <div className="navbar-end">
                <div className="btn btn-circle "
                    onClick={() => {
                        theme === 'dark' ? setTheme('light') : setTheme('dark')
                    }}
                >
                    <FontAwesomeIcon
                        icon={theme === 'dark' ? faSun : faMoon}
                    />
                </div>
            </div>

        </div>


    )
}

const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <ThemeProvider>
            <div className='shadow mb-1'>
                <NavBar />
            </div>
            <div className="flex child:p-2 h-full child:m-2 shadow-md ">
                {children}
            </div>
        </ThemeProvider>
    )
}

export default Layout