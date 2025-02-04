import { PDFViewer } from '@react-pdf/renderer';
import { MyDocument } from './components/PdfRender.jsx'
import './App.css'

function App() {

  return (
    <>
      <h1>Hanzi sheets</h1>
      <PDFViewer className='pdf-rendered'>
        <MyDocument />
      </PDFViewer>
    </>
  )
}

export default App
