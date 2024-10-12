"use client";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { useState } from "react";

import { Spec } from "@/interfaces/Spec";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

function Content({ spec }: { spec: Spec }) {
  const [expanded, setExpanded] = useState<string[]>([]);

  return (
    <>
      <h3 className="text-2xl">{spec.name}</h3>
      <p>{spec.description}</p>
      <div className="flex flex-col gap-4 mt-4">
        {Object.entries(spec.components).map(([componentName, component]) => (
          <div
            className="border border-gray-700 rounded-xl p-4"
            key={componentName}
          >
            <button
              className="block text-left"
              onClick={() => {
                if (expanded.includes(componentName)) {
                  const newExpanded = expanded.slice();
                  newExpanded.splice(newExpanded.indexOf(componentName), 1);
                  setExpanded(newExpanded);
                } else {
                  setExpanded([...expanded, componentName]);
                }
              }}
            >
              <div className="text-lg">{componentName}</div>
              <div className="text-gray-500">{component.description}</div>
            </button>
            {expanded.includes(componentName) && (
              <div className="border-t border-gray-700 flex flex-col gap-4 pt-4 mt-4">
                {Object.entries(component.props).map(([propName, prop]) => (
                  <div className="text-xs" key={propName}>
                    <div className="flex mb-2 gap-4">
                      <div className="font-mono pr-4">{propName}</div>
                      {prop.default && <div>Default: {prop.default}</div>}
                    </div>
                    <td className="text-gray-500">{prop.description}</td>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </>
  );
}

export function Preview({
  spec,
  specString,
}: {
  spec: Spec;
  specString: string;
}) {
  const [tab, setTab] = useState<"preview" | "spec">("preview");

  return (
    <>
      <Tabs
        className="md:hidden"
        value={tab}
        onValueChange={(value) => setTab(value as "preview" | "spec")}
      >
        <TabsList className="mb-4">
          <TabsTrigger
            value="preview"
            className="data-[state=active]:bg-white data-[state=active]:text-black"
          >
            Preview
          </TabsTrigger>
          <TabsTrigger
            value="spec"
            className="data-[state=active]:bg-white data-[state=active]:text-black"
          >
            Spec
          </TabsTrigger>
        </TabsList>
        <TabsContent value="preview">
          <Content spec={spec} />
        </TabsContent>
        <TabsContent value="spec">
          <div className="border border-gray-700 rounded-xl">
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
              {specString}
            </SyntaxHighlighter>
          </div>
        </TabsContent>
      </Tabs>
      <div className="gap-4 hidden md:flex">
        <div className="border border-gray-700 rounded-xl max-h-[calc(100vh-200px)] overflow-scroll w-1/2">
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
            {specString}
          </SyntaxHighlighter>
        </div>
        <div className="max-h-[calc(100vh-200px)] overflow-scroll w-1/2">
          <Content spec={spec} />
        </div>
      </div>
    </>
  );
}
