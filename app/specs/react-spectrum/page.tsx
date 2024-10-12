import { parse } from "yaml";

import { Spec } from "@/interfaces/Spec";

import specString from "../../../specs/react-spectrum/openui.yaml";
import { Preview } from "@/app/components/preview";
import { SpecTitle } from "@/app/components/spec-title";

const spec = parse(specString) as Spec;

export default function SpecsPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <main className="container mx-auto px-4 py-8">
        <SpecTitle title="React Spectrum" />
        <Preview spec={spec} specString={specString} />
      </main>
    </div>
  );
}
