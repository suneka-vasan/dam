import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

const menu = [
    { title: 'Home', path: '/all-apps' },
    { title: 'Media', path: '/media' },
    { title: 'Notifications', path: '/notifications' },
]

const Sidebar = () => {
    const router = useRouter()

    return (
        <div>
            {menu.map((item, index) => {
                return (
                    <Link key={index} href={item.path} legacyBehavior>
                        <a
                            className={
                                router.pathname === item.path
                                    ? '#728c69' : '#000000'
                            }
                        >
                            {item.title}
                        </a>
                    </Link>
                )
            })}
        </div >
    )
}

export default Sidebar