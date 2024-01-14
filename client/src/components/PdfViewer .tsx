import { useState } from 'react'
import { Document, Page, pdfjs } from 'react-pdf'
import pdf from '../assets/pdf/TạNgọcTiệp_CV.pdf'
pdfjs.GlobalWorkerOptions.workerSrc = new URL('pdfjs-dist/build/pdf.worker.min.js', import.meta.url).toString()

const PdfViewer = () => {
  const [numPages, setNumPages] = useState(null)
  const [pageNumber, setPageNumber] = useState(1)
  const [showPdf, setShowPdf] = useState(false)

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages)
  }

  const handleClick = () => {
    setShowPdf(!showPdf)
  }

  return (
    <div>
      <button onClick={handleClick}>{showPdf ? 'Hide PDF' : 'Show PDF'}</button>
      {showPdf && (
        <div>
          <Document file={pdf} onLoadSuccess={onDocumentLoadSuccess}>
            <Page pageNumber={pageNumber} />
          </Document>
          <p>
            Page {pageNumber} of {numPages}
          </p>
        </div>
      )}
    </div>
  )
}

export default PdfViewer
