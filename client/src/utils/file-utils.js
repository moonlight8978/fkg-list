const FileUtils = {
  download(url, fileName) {
    let a = document.createElement('a')
    a.href = url
    a.download = fileName
    document.body.appendChild(a)
    a.click()

    document.body.removeChild(a)
    URL.revokeObjectURL(url)
  },

  read(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader()
      reader.onload = event => resolve(event.target.result)
      reader.onerror = event => reject(0)

      reader.readAsText(file, 'UTF-8')
    })
  },

  createBlob(data, type) {
    const blob = new Blob([data], { type: type })
    const url = URL.createObjectURL(blob)

    return { blob, url }
  }
}

export default FileUtils
