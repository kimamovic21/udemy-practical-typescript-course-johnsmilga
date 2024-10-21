import { LoaderFunction } from 'react-router-dom'
import { type ReduxStore } from '@/store'
import { useAppSelector } from '@/hooks'
import { CheckoutForm, SectionTitle, CartTotals } from '@/components'

export const loader = (store: ReduxStore): LoaderFunction => async (): Promise<Response | null> => {
  console.log(store)

  return null
}

const Checkout = () => {
  const cartTotal = useAppSelector((state) => state.cartState.cartTotal)

  if (cartTotal === 0) {
    return <SectionTitle text='Empty Cart ☹️' />
  }

  return (
    <>
      <SectionTitle text='Place your order' />
      <div className='mt-8 grid gap-8  md:grid-cols-2 items-start'>
        <CheckoutForm />
        <CartTotals />
      </div>
    </>
  )
}

export default Checkout