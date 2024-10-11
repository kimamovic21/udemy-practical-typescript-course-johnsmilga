import { useLoaderData, type LoaderFunction } from 'react-router-dom'
import { customFetch, type ProductsResponse } from '@/utils'
import { FeaturedProducts, Hero } from '@/components'

const url = '/products?featured=true'

export const loader: LoaderFunction = async (): Promise<ProductsResponse> => {
  const response = await customFetch<ProductsResponse>(url)
  return { ...response.data }
}

function Landing() {
  const result = useLoaderData() as ProductsResponse
  console.log(result)

  return (
    <>
      <Hero />
      <FeaturedProducts />
    </>
  )
}

export default Landing