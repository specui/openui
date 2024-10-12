import { ExternalLink, Layers } from "lucide-react";
import Link from "next/link";

export function Header() {
  return (
    <header className="bg-white text-black py-6">
      <div className="container flex justify-between items-center mx-auto px-4">
        <h1 className="text-3xl font-bold">
          <Link className="flex items-center" href="/">
            <Layers className="mr-2" /> OpenUI
          </Link>
        </h1>
        <nav>
          <ul className="flex gap-4">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/specs">Specs</Link>
            </li>
            <li>
              <Link
                className="flex gap-2 items-center"
                href="https://github.com/specui/openui"
                target="_blank"
              >
                <span>GitHub</span>
                <ExternalLink size={16} />
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
