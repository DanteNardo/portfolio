'use client'

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { nightOwl } from 'react-syntax-highlighter/dist/cjs/styles/prism'
import Typist from 'react-typist-component'

export default function CodeSample({
  language = 'javascript',
  children,
}: {
  language?: string
  children: string
}) {
  return (
    <div className="flex-none w-xl max-w-full min-h-[49px] max-h-md overflow-auto rounded-b-md font-mono text-sm">
      <Typist typingDelay={20} cursor={<span className="">|</span>}>
        <SyntaxHighlighter
          language={language}
          style={nightOwl}
          customStyle={{
            borderBottomLeftRadius: '0.375rem',
            borderBottomRightRadius: '0.375rem',
            background: '#18181b',
            fontSize: '0.75rem',
            overflow: 'visible',
            margin: '0px 0px',
          }}
          codeTagProps={{
            style: {
              fontFamily: '!var(--font-space-mono)',
              borderBottomLeftRadius: '0.375rem',
              borderBottomRightRadius: '0.375rem',
            },
          }}
        >
          {children}
        </SyntaxHighlighter>
      </Typist>
    </div>
  )
}
