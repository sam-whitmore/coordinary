import jsPDF from 'jspdf'
import 'jspdf-autotable'

interface Donation {
  id: number
  valueInNZD: number
  itemName: string
  itemPriceNZD: number
  registerName: string
  charityName: string
  charitySlug: string
  datetime: string
  anonymous: boolean
}

interface Props {
  data: Donation[]
}

const ExportToPdfButton = ({ data }: Props) => {
  const generatePDF = () => {
    const doc = new jsPDF()
    doc.text('Donation History', 14, 20)
    const options: AutoTableOptions = {
      startY: 30,
      head: [
        [
          'Donation Value',
          'Item',
          'Item Value',
          'Register',
          'Charity',
          'Date',
          'Anonymous',
        ],
      ],
      body: data.map((donation) => [
        `$${donation.valueInNZD}`,
        donation.itemName,
        `$${donation.itemPriceNZD}`,
        donation.registerName,
        donation.charityName,
        new Date(donation.datetime).toLocaleDateString(),
        donation.anonymous ? 'Yes' : 'No',
      ]),
    }
    doc.autoTable(options)
    doc.save('donation-history.pdf')
  }

  return (
    <button
      onClick={generatePDF}
      className="mb-4 mt-4 inline-flex items-center justify-center rounded-md bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
    >
      Export to PDF
    </button>
  )
}

export default ExportToPdfButton
