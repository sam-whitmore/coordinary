declare module 'jspdf' {
  interface jsPDF {
    autoTable: (options: AutoTableOptions) => jsPDF
  }

  interface AutoTableOptions {
    startY?: number
    head?: Array<Array<string>>
    body?: Array<Array<string | number | boolean>>
  }
}
