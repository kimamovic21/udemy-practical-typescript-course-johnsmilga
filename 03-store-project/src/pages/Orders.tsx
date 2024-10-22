import { LoaderFunction, redirect, useLoaderData } from 'react-router-dom'
import { customFetch } from '@/utils'
import { ReduxStore } from '@/store'
import { type OrdersResponse } from '@/utils'
import { toast } from '@/hooks/use-toast'
import { OrdersList, ComplexPaginationContainer, SectionTitle } from '@/components'

export const loader = (store: ReduxStore): LoaderFunction => async ({ request }): Promise<OrdersResponse | Response | null> => {
  const user = store.getState().userState.user

  if (!user) {
    toast({ description: 'Please login to continue' })
    return redirect('/login')
  }

  const params = Object.fromEntries([
    ...new URL(request.url).searchParams.entries(),
  ])

  try {
    const response = await customFetch.get<OrdersResponse>('/orders', {
      params,
      headers: {
        Authorization: `Bearer ${user.jwt}`,
      },
    })

    return { ...response.data }
  } catch (error) {
    console.error(error)
    toast({ description: 'Failed to fetch orders' })
    return null
  }
}

const Orders = () => {
  const { meta, data } = useLoaderData() as OrdersResponse
  console.log(meta)
  console.log(data)

  return (
    <>
      <SectionTitle text='Your Orders' />
      <OrdersList />
      <ComplexPaginationContainer />
    </>
  )
}

export default Orders