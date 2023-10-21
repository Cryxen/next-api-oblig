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
        </ul>
    </nav>
)
}
export default Navigation