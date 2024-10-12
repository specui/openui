"use client";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { useState } from "react";

import { Spec } from "@/interfaces/Spec";

export function Preview({
  spec,
  specString,
}: {
  spec: Spec;
  specString: string;
}) {
  const [expanded, setExpanded] = useState<string[]>([]);

  return (
    <div className="flex gap-4">
      <div className="border border-gray-700 rounded-lg max-h-[calc(100vh-200px)] overflow-scroll w-1/2">
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
        <h3 className="text-2xl">{spec.name}</h3>
        <p>{spec.description}</p>
        <div className="flex flex-col gap-4 mt-4">
          {Object.entries(spec.components).map(([componentName, component]) => (
            <div key={componentName}>
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
                <div className="text-gray-600">{component.description}</div>
              </button>
              {expanded.includes(componentName) && (
                <table width="100%">
                  {Object.entries(component.props).map(([propName, prop]) => (
                    <tr className="text-xs" key={propName}>
                      <td className="font-mono pr-4">{propName}</td>
                      <td className="pr-4">{prop.default}</td>
                      <td>{prop.description}</td>
                    </tr>
                  ))}
                </table>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
