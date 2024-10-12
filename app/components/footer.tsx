import { Heart } from "lucide-react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-white text-black py-6 mt-12">
      <div className="container mx-auto px-4 text-center">
        <p>
          Made with <Heart className="inline-block h-4 w-4 text-red-500" /> by{" "}
          <Link
            href="https://ctate.dev"
            className="underline hover:text-gray-600"
            target="_blank"
          >
            Chris Tate
          </Link>
        </p>
      </div>
    </footer>
  );
}
