export default function copyToClipboard(text: string) {
  // Use the Async Clipboard API when available. Requires a secure browing context (i.e. HTTPS)
  if ((navigator as any).clipboard) {
    return (navigator as any).clipboard.writeText(text)
  }

  // ...Otherwise, use document.execCommand() fallback

  // Put the text to copy into a <span>
  const span = document.createElement('span')
  span.textContent = text

  // Preserve consecutive spaces and newlines
  span.style.whiteSpace = 'pre'

  // Add the <span> to the page
  document.body.appendChild(span)

  // Make a selection object representing the range of text selected by the user
  const selection = window.getSelection()
  const range = window.document.createRange()
  
  if (!selection) {
    return Promise.reject()
  }

  selection.removeAllRanges()
  range.selectNode(span)
  selection.addRange(range)

  // Copy text to the clipboard
  let success = false
  try {
    success = window.document.execCommand('copy')
  } catch (err) {
    console.log('Failed to copy text. Error: ', err)
  }

  // Cleanup
  selection.removeAllRanges()
  window.document.body.removeChild(span)

  // The Async Clipboard API returns a promise that may reject with `undefined`
  // so we match that here for consistency.
  return success
    ? Promise.resolve()
    : Promise.reject()
}