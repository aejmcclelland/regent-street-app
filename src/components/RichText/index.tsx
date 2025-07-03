
'use client';

// src/components/RichText/index.tsx
import { RichText as LexicalRichText } from '@payloadcms/richtext-lexical/react'
import { jsxConverter } from './converters'

type Props = {
  data: any // You can replace this with PayloadGeneratedTypes if you're using them
  className?: string
}

export function RichText({ data, className }: Props) {
  return (
    <LexicalRichText
      data={data} // ✅ use `data`, not `value` or `content`
      converters={jsxConverter}
      className={className}
    />
  )
}