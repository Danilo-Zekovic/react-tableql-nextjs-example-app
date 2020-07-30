import dynamic from 'next/dynamic'

const TableQL = dynamic(() => import('react-tableql'), { ssr: false })

export default function TableQLExample() {
  return (
    <div>
      <h1>TableQL</h1>
      <TableQL data={[{ id: 1, name: 'Foo' }, { id: 2, name: 'Bar' }]} sort />
    </div>
  )
}
