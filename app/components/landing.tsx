'use client'

import React, { useState } from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Layers, Heart, ExternalLink } from 'lucide-react'
import Link from 'next/link'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism'

const librarySpecs = {
  'shadcn/ui': `name: "@shadcn/ui"
version: "0.1.0"
description: "Beautifully designed components built with Radix UI and Tailwind CSS."
homepage: "https://ui.shadcn.com"
author: "shadcn"
license: "MIT"
components:
  Button:
    description: "A clickable button component."
    props:
      variant:
        description: "The visual style of the button."
        type: string
        enum: ["default", "destructive", "outline", "secondary", "ghost", "link"]
      size:
        description: "The size of the button."
        type: string
        enum: ["default", "sm", "lg", "icon"]
      asChild:
        description: "Change the default rendered element for the one passed as a child."
        type: boolean
  Input:
    description: "An input field for user text entry."
    props:
      type:
        description: "The type of the input field."
        type: string
        enum: ["text", "password", "email", "number", "search", "tel", "url"]
      placeholder:
        description: "Placeholder text for the input."
        type: string
      disabled:
        description: "Whether the input is disabled."
        type: boolean`,
  'Material-UI': `name: "@mui/material"
version: "5.14.0"
description: "React components that implement Google's Material Design."
homepage: "https://mui.com/"
author: "MUI Team"
license: "MIT"
components:
  Button:
    description: "Buttons allow users to take actions, and make choices, with a single tap."
    props:
      variant:
        description: "The variant to use."
        type: string
        enum: ["text", "outlined", "contained"]
      color:
        description: "The color of the component."
        type: string
        enum: ["default", "inherit", "primary", "secondary"]
      size:
        description: "The size of the button."
        type: string
        enum: ["small", "medium", "large"]
  TextField:
    description: "A convenient wrapper for Input with additional functionality."
    props:
      variant:
        description: "The variant to use."
        type: string
        enum: ["standard", "outlined", "filled"]
      type:
        description: "Type of the input element."
        type: string
        enum: ["text", "password", "number", "search", "email"]
      disabled:
        description: "If true, the input element is disabled."
        type: boolean`,
  'Chakra UI': `name: "@chakra-ui/react"
version: "2.8.0"
description: "Simple, Modular & Accessible UI Components for your React Applications."
homepage: "https://chakra-ui.com/"
author: "Segun Adebayo"
license: "MIT"
components:
  Button:
    description: "Button component is used to trigger an action or event."
    props:
      variant:
        description: "The visual style of the button."
        type: string
        enum: ["solid", "outline", "ghost", "link"]
      size:
        description: "The size of the button."
        type: string
        enum: ["xs", "sm", "md", "lg"]
      colorScheme:
        description: "The color scheme of the button."
        type: string
  Input:
    description: "The Input component is a component that is used to get user input in a text field."
    props:
      variant:
        description: "The visual style of the input."
        type: string
        enum: ["outline", "filled", "flushed", "unstyled"]
      size:
        description: "The size of the input."
        type: string
        enum: ["xs", "sm", "md", "lg"]
      type:
        description: "The type of the input field."
        type: string
        enum: ["text", "password", "email", "number"]`,
  'Ant Design': `name: "antd"
version: "5.7.0"
description: "An enterprise-class UI design language and React UI library."
homepage: "https://ant.design/"
author: "Ant Group"
license: "MIT"
components:
  Button:
    description: "To trigger an operation."
    props:
      type:
        description: "Can be set to primary, ghost, dashed, link, text, default."
        type: string
        enum: ["primary", "ghost", "dashed", "link", "text", "default"]
      size:
        description: "Set the size of button."
        type: string
        enum: ["large", "middle", "small"]
      shape:
        description: "Can be set to circle, round or omitted."
        type: string
        enum: ["circle", "round"]
  Input:
    description: "A basic widget for getting the user input is a text field."
    props:
      type:
        description: "The type of input."
        type: string
        enum: ["text", "password", "number", "textarea"]
      size:
        description: "The size of the input box."
        type: string
        enum: ["large", "middle", "small"]
      disabled:
        description: "Whether the input is disabled."
        type: boolean`
}

export default function OpenUILandingPage() {
  const [activeLibrary, setActiveLibrary] = useState('shadcn/ui')

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="bg-yellow-400 text-black py-2 px-4 text-center">
        <p className="text-sm">
          This is a rough draft of OpenUI and is still in active development. 
          <Link href="https://github.com/specui/openui" className="underline ml-2 inline-flex items-center" target="_blank">
            Submit a proposal
            <ExternalLink className="h-4 w-4 ml-1" />
          </Link>
        </p>
      </div>

      <header className="bg-white text-black py-6">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold flex items-center">
            <Layers className="mr-2" /> OpenUI
          </h1>
          <p className="mt-2">Open. Standard. Universal.</p>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">What is OpenUI?</h2>
          <p className="max-w-2xl">
            OpenUI is a specification for standardizing UI components across different libraries and frameworks. 
            It promotes interoperability and consistent user experiences by defining common properties and behaviors for UI elements.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">OpenUI Component Specifications</h2>
          <p className="mb-4">
            Toggle between different UI libraries to see how OpenUI standardizes their component specifications:
          </p>
          <Tabs value={activeLibrary} onValueChange={setActiveLibrary}>
            <TabsList className="mb-4">
              {Object.keys(librarySpecs).map((library) => (
                <TabsTrigger key={library} value={library} className="data-[state=active]:bg-white data-[state=active]:text-black">
                  {library}
                </TabsTrigger>
              ))}
            </TabsList>
            {Object.entries(librarySpecs).map(([library, spec]) => (
              <TabsContent key={library} value={library}>
                <div className="bg-white rounded-lg overflow-hidden">
                  <SyntaxHighlighter 
                    language="yaml" 
                    style={atomDark}
                    customStyle={{
                      margin: 0,
                      padding: '1rem',
                      backgroundColor: 'black',
                    }}
                    wrapLongLines={false}
                  >
                    {spec}
                  </SyntaxHighlighter>
                </div>
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
          <h2 className="text-2xl font-semibold mb-4">Introduction to OpenUI</h2>
          <div className="space-y-6">
            <p>
              OpenUI is a specification format for defining User Interface (UI) components in an abstract, implementation-agnostic manner. Inspired by specifications like OpenAPI, OpenUI describes UI components, their properties, and behaviors in a way that can be used across various UI libraries and frameworks.
            </p>
            <p>
              With OpenUI, developers can define a UI library&apos;s components and props without enforcing a specific implementation, making it easier to standardize and document UIs for any project.
            </p>

            <div>
              <h3 className="text-xl font-semibold mb-2">Overview</h3>
              <p>
                OpenUI enables developers and designers to document the structure of UI libraries in a machine-readable format. By defining the components and their props, OpenUI provides a universal language for UI design, similar to how OpenAPI standardizes the description of REST APIs.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">Why OpenUI?</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Consistency: OpenUI ensures that UI components are described uniformly across various libraries, reducing confusion and improving communication between developers.</li>
                <li>Framework Agnostic: Whether you&apos;re using React, Vue, or Angular, OpenUI abstracts the components, making it easy to understand and port them between frameworks.</li>
                <li>Standardization: This specification promotes standardization in UI libraries, helping developers create better documentation and design systems.</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">Specification Structure</h3>
              <p>
                An OpenUI specification is written in either YAML or JSON. It describes UI components, their properties (props), and optional behaviors or events. Each component is defined by:
              </p>
              <ol className="list-decimal pl-6 space-y-2 mt-2">
                <li>Description: A brief overview of the component&apos;s purpose.</li>
                <li>Props: The configurable properties for the component, including the prop type, description, and optional enums (if the property accepts a limited set of values).</li>
                <li>Optional Events: Actions that can be triggered by the component (e.g., onClick).</li>
              </ol>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">Best Practices</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Use Descriptive Names: Clearly describe each component and prop.</li>
                <li>Enum Where Possible: Use enums to limit possible values for props when necessary.</li>
                <li>Event Descriptions: If a component has user-triggered events (e.g., onClick), ensure they are clearly documented with event names and descriptions.</li>
                <li>Maintain Consistency: Ensure that all component descriptions and prop definitions follow the same structure.</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">Future Plans</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Add support for describing component state changes and lifecycle events.</li>
                <li>Introduce tooling to automatically generate code from OpenUI specifications.</li>
                <li>Build integrations with popular component libraries and frameworks.</li>
                <li>Expand OpenUI to support complex UI patterns, such as modal dialogs, forms, and dynamic content loading.</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">Contributing</h3>
              <p>
                OpenUI is an open-source specification. Contributions are welcome from developers, designers, and documentation writers. If you want to contribute:
              </p>
              <ol className="list-decimal pl-6 space-y-2 mt-2">
                <li>Fork the <Link href="https://github.com/specui/openui" target="_blank"></Link>.</li>
                <li>Follow the contribution guidelines.</li>
                <li>Submit a pull request with your proposed changes or new component definitions.</li>
              </ol>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-white text-black py-6 mt-12">
        <div className="container mx-auto px-4 text-center">
          <p>
            Made with <Heart className="inline-block h-4 w-4 text-red-500" /> by{' '}
            <Link href="https://ctate.dev" className="underline hover:text-gray-600" target="_blank">
              Chris Tate
            </Link>
          </p>
        </div>
      </footer>
    </div>
  )
}
