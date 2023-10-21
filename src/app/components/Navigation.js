import Link from "next/link"

const Navigation = () => {

return(
    <nav>
        <ul>
            <li>
                <Link href={"/"}>Hjem</Link>
            </li>
            <li>
                <Link href={"/poll"}>Spørreøndersøkelse</Link>
            </li>
            <li>
                <Link href={"/createuser"}>Opprett bruker</Link>
            </li>
            <li>
                <Link href={"/createpoll"}>Opprett spørreundersøkelse</Link>
            </li>
        </ul>
    </nav>
)
}
export default Navigation