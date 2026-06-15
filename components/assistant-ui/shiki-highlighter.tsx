"use client";

import type { FC } from "react";

/**
 * Minimal SyntaxHighlighter stub — the `@assistant-ui/react-markdown` library
 * uses this as the code-block renderer. We provide a styled `<pre><code>`
 * block instead of pulling in the full Shiki dependency.
 */
export const SyntaxHighlighter: FC<{ language?: string; code?: string }> = ({
  language,
  code,
}) => {
  return (
    <pre className="bg-muted/50 my-3 overflow-x-auto rounded-lg border p-4">
      {language && (
        <div className="text-muted-foreground mb-2 text-xs font-medium">
          {language}
        </div>
      )}
      <code className="text-sm">{code}</code>
    </pre>
  );
};
