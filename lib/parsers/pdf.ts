import { PDFParse } from "pdf-parse"
import path from "path"

// pdfjs-dist needs the worker file path explicitly set in Next.js's bundled ESM runtime.
// Without this, the auto-detection fails and pdf.getText() throws.
const WORKER_PATH = path.join(
  process.cwd(),
  "node_modules/pdf-parse/dist/worker/pdf.worker.mjs"
)
PDFParse.setWorker(WORKER_PATH)

export async function parsePDF(file: File): Promise<string> {
  const arrayBuffer = await file.arrayBuffer()
  const buffer = Buffer.from(arrayBuffer)
  const pdf = new PDFParse({ data: buffer })
  const result = await pdf.getText()
  return result.text
}
