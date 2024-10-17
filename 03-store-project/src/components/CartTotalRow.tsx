import { formatAsDollars } from '@/utils'
import { Separator } from '@/components/ui/separator'

function CartTotalRow({ label, amount, lastRow } : {
  label: string
  amount: number
  lastRow?: boolean
}) {
  
  return (
    <>
      <p className='flex justify-between text-sm'>
        <span>{label}</span>
        <span>{formatAsDollars(amount)}</span>
      </p>
      {lastRow ? null : <Separator className='my-2' />}
    </>
  )
}

export default CartTotalRow