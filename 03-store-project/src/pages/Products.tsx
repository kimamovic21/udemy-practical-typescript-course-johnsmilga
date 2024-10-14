import { type LoaderFunction } from 'react-router-dom'
import { customFetch, type ProductsResponse } from '../utils'
import { Filters, ProductsContainer, PaginationContainer } from '@/components'

const url = '/products'

export const loader: LoaderFunction = async ({ 
  request 
}): Promise<ProductsResponse> => {

  const params = Object.fromEntries([
    ...new URL(request.url).searchParams.entries()
  ])
  console.log(params)
  
  const response = await customFetch<ProductsResponse>(url, {
    params, 
  })
  console.log(response)

  return { ...response.data }
}

function Products() {
  return (
    <>
      <Filters />
      <ProductsContainer />
      <PaginationContainer />
    </>
  )
}

export default Products