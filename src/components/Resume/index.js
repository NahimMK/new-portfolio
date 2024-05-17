import React from 'react';
import resume from '../../assets/files/Resume.pdf';
import { Document, Page, pdfjs } from 'react-pdf';
import './index.scss';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const Resume = () => {
    return (
        <div className='res'>
            <h2 className='heading'>Resume</h2>
            <div className="pdf-container">
                <Document
                    file={resume}
                    onLoadError={console.error}
                >
                    <Page pageNumber={1} />
                </Document>
            </div>
        </div>
    );
}

export default Resume;