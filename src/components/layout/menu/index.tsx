import React from "react"
import Link from 'next/Link'

export default function Menu() {
    return (
        <>
            <aside className="column is-2 is-narrow-mobile is-fullheight section is-hidden-mobile">
                <p className="menu-label is-hidden-touch">
                    Minhas Vendas
                </p>
                <ul className="menu-list">

                    <MenuItem href="/" label="Home" />
                    <MenuItem href="/" label="Cadastros" />
                    <MenuItem href="/" label="Config"/>
                    <MenuItem href="/" label="Sair" />

                </ul>
            </aside>
        </>
    )
}
interface MenuItemProps {
    href: string;
    label: string;
}

const MenuItem: React.FC<MenuItemProps> = (props: MenuItemProps) => {
    return (
        <li>
            <Link href={props.href}>
                <a href="">
                    <samp className="icon"></samp>{props.label}
                </a>
            </Link>
        </li>

    )
}