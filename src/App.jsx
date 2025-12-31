import { useState } from 'react'
import './App.css'
import toast from 'react-hot-toast'
import { Toaster } from 'react-hot-toast'

function App() {
  const [mode, setMode] = useState('encrypt') // 'encrypt' or 'decrypt'
  const [inputText, setInputText] = useState("")
  const [outputText, setOutputText] = useState("")

  const handleEncrypt = () => {
    if (!inputText.trim()) {
      toast.error("Please enter some text")
      return
    }
    try {
      const encoded = btoa(inputText)
      setOutputText(encoded)
      toast.success("Text encrypted")
    } catch (error) {
      toast.error("Encryption failed")
    }
  }

  const handleDecrypt = () => {
    if (!inputText.trim()) {
      toast.error("Please enter encrypted text")
      return
    }
    try {
      const decoded = atob(inputText)
      setOutputText(decoded)
      toast.success("Text decrypted")
    } catch (error) {
      toast.error("Invalid encrypted text")
    }
  }

  const handleCopy = () => {
    if (!outputText) {
      toast.error("Nothing to copy")
      return
    }
    navigator.clipboard.writeText(outputText)
    toast.success("Copied to clipboard")
  }

  const handleProcess = () => {
    if (mode === 'encrypt') {
      handleEncrypt()
    } else {
      handleDecrypt()
    }
  }

  const handleClear = () => {
    setInputText("")
    setOutputText("")
  }

  return (
    <>
      <Toaster position="top-center" />
      <div className="app-wrapper">
        {/* Header */}
        <header className="header">
          <h1 className="title">Text Converter</h1>
          <p className="subtitle">Encrypt and decrypt text with ease</p>
        </header>

        {/* Mode Toggle */}
        <div className="toggle-container">
          <button
            className={`toggle-btn ${mode === 'encrypt' ? 'active' : ''}`}
            onClick={() => {
              setMode('encrypt')
              setInputText("")
              setOutputText("")
            }}
          >
            Encrypt
          </button>
          <button
            className={`toggle-btn ${mode === 'decrypt' ? 'active' : ''}`}
            onClick={() => {
              setMode('decrypt')
              setInputText("")
              setOutputText("")
            }}
          >
            Decrypt
          </button>
        </div>

        {/* Main Content */}
        <div className="content-wrapper">
          {/* Input Section */}
          <div className="input-section">
            <label className="label">
              {mode === 'encrypt' ? 'Plain Text' : 'Encrypted Text'}
            </label>
            <textarea
              className="textarea input-textarea"
              placeholder={mode === 'encrypt' ? 'Enter text to encrypt...' : 'Enter text to decrypt...'}
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
            />
          </div>

          {/* Output Section */}
          <div className="output-section">
            <label className="label">
              {mode === 'encrypt' ? 'Encrypted Text' : 'Decrypted Text'}
            </label>
            <textarea
              className="textarea output-textarea"
              placeholder="Output will appear here"
              value={outputText}
              readOnly
            />
          </div>
        </div>

        {/* Action Buttons */}
        <div className="button-group">
          <button
            className="btn btn-primary"
            onClick={handleProcess}
          >
            {mode === 'encrypt' ? 'Encrypt' : 'Decrypt'}
          </button>
          <button
            className="btn btn-secondary"
            onClick={handleCopy}
          >
            Copy Result
          </button>
          <button
            className="btn btn-tertiary"
            onClick={handleClear}
          >
            Clear
          </button>
        </div>
      </div>
    </>
  )
}

export default App

