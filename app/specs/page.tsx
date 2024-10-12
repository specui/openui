import Link from "next/link";

const specs = [
  {
    title: "Ant Design",
    url: "/specs/ant-design",
  },
  {
    title: "Chakra UI",
    url: "/specs/chakra-ui",
  },
  {
    title: "Material UI",
    url: "/specs/material-ui",
  },
  {
    title: "React Spectrum",
    url: "/specs/react-spectrum",
  },
  {
    title: "shadcn/ui",
    url: "/specs/shadcn-ui",
  },
];

export default function SpecsPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <main className="container mx-auto px-4 py-8">
        <h2 className="text-4xl font-semibold mb-4">Specs</h2>
        <ul className="gap-4 grid grid-cols-3">
          {specs.map((spec) => (
            <li className="border border-gray-700 rounded-xl" key={spec.title}>
              <Link className="block px-4 py-12 text-center" href={spec.url}>
                {spec.title}
              </Link>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}
