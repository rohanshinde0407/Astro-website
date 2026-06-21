import React from 'react';

interface SchemaMarkupProps {
  schema: Record<string, any> | Array<Record<string, any>>;
}

/**
 * Injects a JSON-LD schema object into the document head/body safely.
 * Optimized for LLM and search crawler extraction.
 */
export default function SchemaMarkup({ schema }: SchemaMarkupProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
