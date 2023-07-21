import Link from "next/link";

export default function Navbar() {
    return (
        <div className="navbar bg-slate-100">
            <div className="flex justify-around">
                <div>
                    <a className="btn btn-ghost text-xl">My Website</a>
                </div>
                <div className="flex justify-between">
                    <ul className="menu flex flex-row px-1">
                        <li>
                            <Link href="/">Home</Link>
                        </li>
                        <li>
                            <Link href="/contact">Contact</Link>
                        </li>
                        <li>
                            <Link href="/about">About</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
