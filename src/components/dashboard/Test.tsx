// components/nav-bar.js
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Box } from '@chakra-ui/react'

const navLinks = [
    {
        name: "Home",
        path: "/"
    },
    {
        name: "Media",
        path: "/media",
    },
    {
        name: "Notifications",
        path: "/notifications",
    }
];

const activestyle = {
    color: 'white',
    background: 'green'
}
const nonactivestyle = {
    color: 'green'
}

const Navbar = () => {
    const router = useRouter();
    const currentRoute = router.pathname;
    console.log(currentRoute);

    return (
        <div >
            <ul>
                {navLinks.map((item, index) => {
                    const activeStyle = item.path === currentRoute ? activestyle : nonactivestyle;

                    return (
                        <li style={activeStyle} key={index} >
                            <Link href={item.path}>{item.name}</Link>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};
export default Navbar;

// Navigation Bar
// This component will be used on all pages
// const NavBar = () => {
//     const router = useRouter();
//     const currentRoute = router.pathname;
//     // return <>{router.pathname === "/" ? item : ""}</>;

//     return (
//         <nav>
//             <Link href='/' style={currentRoute === '/' ? activestyle : nonactivestyle}>
//                 Home
//             </Link>

//             <Link
//                 href='/media'
//                 style={currentRoute === '/media' ? activestyle : nonactivestyle}
//             >
//                 About
//             </Link>

//             <Link
//                 href='/notifications'
//                 style={currentRoute === '/notifications' ? activestyle : nonactivestyle}
//             >
//                 Contact
//             </Link>
//         </nav>
//     );
// };

// export default NavBar;

// export default function NavBar() {
//     return (
//         <header>
//             <div className="brand">
//                 <h3>Example</h3>
//             </div>
//             <nav>
//                 {navLinks.map((link, index) => {
//                     return (
//                         <ul key='index'>
//                             <Link href={link.path} style={router.pathname === "/" ? activestyle : nonactivestyle }>
//                                 <li key={index}>{link.name}</li>
//                             </Link>
//                         </ul>
//                     );
//                 })}
//             </nav>
//         </header>
//     );
// }

// const Navbar = ({ item }: any) => {
//     const router = useRouter();
//     const currentRoute = router.pathname;
//     console.log(currentRoute);
//     return (
//         <>
//             <Box>
//                 <div className="brand">
//                     <h3>Example</h3>
//                 </div>
//                 <nav>
//                     {navLinks.map((link, index) => {
//                         return (
//                             <ul key='index'>
//                                 <Link href={link.path}>
//                                     <li key={index} style={router.pathname === currentRoute ? activestyle : nonactivestyle}>{link.name}</li>
//                                 </Link>
//                             </ul>
//                         );
//                     })}
//                 </nav>
//             </Box>
//         </>
//     );
// };

// export default Navbar;