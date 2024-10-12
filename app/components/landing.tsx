"use client";

import React, { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from "next/link";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";

import shadcnSpec from "../../specs/shadcn/openui-sample.yaml";
import muiSpec from "../../specs/material-ui/openui-sample.yaml";
import chakraSpec from "../../specs/chakra-ui/openui-sample.yaml";
import spectrumSpec from "../../specs/react-spectrum/openui.yaml";

const librarySpecs = {
  "shadcn/ui": {
    spec: shadcnSpec,
    url: "/specs/shadcn-ui",
  },
  "Material UI": {
    spec: muiSpec,
    url: "/specs/material-ui",
  },
  "Chakra UI": {
    spec: chakraSpec,
    url: "/specs/chakra-ui",
  },
  Spectrum: {
    spec: spectrumSpec,
    url: "/specs/react-spectrum",
  },
};

export default function OpenUILandingPage() {
  const [activeLibrary, setActiveLibrary] = useState("shadcn/ui");

  return (
    <div className="min-h-screen bg-black text-white">
      <main className="container mx-auto px-4 py-8">
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">What is OpenUI?</h2>
          <p className="max-w-2xl">
            OpenUI is a specification for standardizing UI components across
            different libraries and frameworks. It promotes interoperability and
            consistent user experiences by defining common properties and
            behaviors for UI elements.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Sample OpenUI Specs</h2>
          <p className="mb-4">
            Toggle between different UI libraries to see how OpenUI standardizes
            their component specifications:
          </p>
          <Tabs value={activeLibrary} onValueChange={setActiveLibrary}>
            <TabsList className="mb-4">
              {Object.keys(librarySpecs).map((library) => (
                <TabsTrigger
                  key={library}
                  value={library}
                  className="data-[state=active]:bg-white data-[state=active]:text-black"
                >
                  {library}
                </TabsTrigger>
              ))}
            </TabsList>
            <Link className="ml-4" href="/specs">
              View All
            </Link>
            {Object.entries(librarySpecs).map(([libraryName, library]) => (
              <TabsContent key={libraryName} value={libraryName}>
                <div className="bg-white rounded-lg overflow-hidden">
                  <SyntaxHighlighter
                    language="yaml"
                    style={atomDark}
                    customStyle={{
                      fontSize: 12,
                      margin: 0,
                      padding: "1rem",
                      backgroundColor: "black",
                    }}
                    wrapLongLines={false}
                  >
                    {library.spec}
                  </SyntaxHighlighter>
                </div>
                <Link className="ml-4" href={library.url}>
                  Show Full Spec
                </Link>
              </TabsContent>
            ))}
          </Tabs>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Goals of OpenUI</h2>
          <ul className="space-y-4">
            <li className="flex items-start">
              <span className="font-bold mr-2">1.</span>
              <span>Standardize UI component libraries</span>
            </li>
            <li className="flex items-start">
              <span className="font-bold mr-2">2.</span>
              <span>Interoperability across frameworks</span>
            </li>
            <li className="flex items-start">
              <span className="font-bold mr-2">3.</span>
              <span>Built-in accessibility and validation</span>
            </li>
            <li className="flex items-start">
              <span className="font-bold mr-2">4.</span>
              <span>Support web and native platforms</span>
            </li>
            <li className="flex items-start">
              <span className="font-bold mr-2">5.</span>
              <span>Doc + test + code generation</span>
            </li>
          </ul>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold mb-4">
            Introduction to OpenUI
          </h2>
          <div className="space-y-6">
            <p>
              OpenUI is a specification format for defining User Interface (UI)
              components in an abstract, implementation-agnostic manner.
              Inspired by specifications like OpenAPI, OpenUI describes UI
              components, their properties, and behaviors in a way that can be
              used across various UI libraries and frameworks.
            </p>
            <p>
              With OpenUI, developers can define a UI library&apos;s components
              and props without enforcing a specific implementation, making it
              easier to standardize and document UIs for any project.
            </p>

            <div>
              <h3 className="text-xl font-semibold mb-2">Overview</h3>
              <p>
                OpenUI enables developers and designers to document the
                structure of UI libraries in a machine-readable format. By
                defining the components and their props, OpenUI provides a
                universal language for UI design, similar to how OpenAPI
                standardizes the description of REST APIs.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">Why OpenUI?</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  Consistency: OpenUI ensures that UI components are described
                  uniformly across various libraries, reducing confusion and
                  improving communication between developers.
                </li>
                <li>
                  Framework Agnostic: Whether you&apos;re using React, Vue, or
                  Angular, OpenUI abstracts the components, making it easy to
                  understand and port them between frameworks.
                </li>
                <li>
                  Standardization: This specification promotes standardization
                  in UI libraries, helping developers create better
                  documentation and design systems.
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">
                Specification Structure
              </h3>
              <p>
                An OpenUI specification is written in either YAML or JSON. It
                describes UI components, their properties (props), and optional
                behaviors or events. Each component is defined by:
              </p>
              <ol className="list-decimal pl-6 space-y-2 mt-2">
                <li>
                  Description: A brief overview of the component&apos;s purpose.
                </li>
                <li>
                  Props: The configurable properties for the component,
                  including the prop type, description, and optional enums (if
                  the property accepts a limited set of values).
                </li>
                <li>
                  Optional Events: Actions that can be triggered by the
                  component (e.g., onClick).
                </li>
              </ol>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">Best Practices</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  Use Descriptive Names: Clearly describe each component and
                  prop.
                </li>
                <li>
                  Enum Where Possible: Use enums to limit possible values for
                  props when necessary.
                </li>
                <li>
                  Event Descriptions: If a component has user-triggered events
                  (e.g., onClick), ensure they are clearly documented with event
                  names and descriptions.
                </li>
                <li>
                  Maintain Consistency: Ensure that all component descriptions
                  and prop definitions follow the same structure.
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">Future Plans</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  Add support for describing component state changes and
                  lifecycle events.
                </li>
                <li>
                  Introduce tooling to automatically generate code from OpenUI
                  specifications.
                </li>
                <li>
                  Build integrations with popular component libraries and
                  frameworks.
                </li>
                <li>
                  Expand OpenUI to support complex UI patterns, such as modal
                  dialogs, forms, and dynamic content loading.
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">Contributing</h3>
              <p>
                OpenUI is an open-source specification. Contributions are
                welcome from developers, designers, and documentation writers.
                If you want to contribute:
              </p>
              <ol className="list-decimal pl-6 space-y-2 mt-2">
                <li>
                  Fork the{" "}
                  <Link
                    href="https://github.com/specui/openui"
                    target="_blank"
                  ></Link>
                  .
                </li>
                <li>Follow the contribution guidelines.</li>
                <li>
                  Submit a pull request with your proposed changes or new
                  component definitions.
                </li>
              </ol>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
