import { Form, ActionFunction } from 'react-router-dom'
import { ReduxStore } from '@/store'
import FormInput from './FormInput'
import SubmitBtn from './SubmitBtn'

export const action = (store: ReduxStore): ActionFunction => async ({ request }): Promise<null> => {
  return null
}

function CheckoutForm() {
  return (
    <Form method='post' className='flex flex-col gap-y-4'>
      <h4 className='font-medium text-xl mb-4'>Shipping Information</h4>
      <FormInput label='first name' name='name' type='text' />
      <FormInput label='address' name='address' type='text' />
      <SubmitBtn text='Place Your Order' className='mt-4' />
    </Form>
  )
}

export default CheckoutForm