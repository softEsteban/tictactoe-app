import Link from "next/link";
import Game from "../components/Game";

export default function Home() {
  return (
    <div>
      <h2>Home page</h2>

      <Game />

      <ul>
        <li>
          <Link href="/about">About Us</Link>
        </li>
        <li>
          <Link href="/blog/hello-world">Blog Post</Link>
        </li>
      </ul>
    </div>
  );
}
