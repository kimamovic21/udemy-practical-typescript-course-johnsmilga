import { useState } from 'react'
import { useLoaderData, type LoaderFunction } from 'react-router-dom'
import { customFetch, formatAsDollars, type SingleProductResponse } from '@/utils'

export const loader: LoaderFunction = async ({ params }):Promise<SingleProductResponse> => {
  const response = await customFetch<SingleProductResponse>(`/products/${params.id}`)

  return { ...response.data }
}

function SingleProduct() {
  const { data: product } = useLoaderData() as SingleProductResponse
  const { image, title, price, description, colors, company } = product.attributes
  const dollarsAmount = formatAsDollars(price)

  const [productColor, setProductColor] = useState(colors[0])
  const [amount, setAmount] = useState(1)

  const addToCart = () => {
    console.log('add to cart')
  }

  return (
    <div>SingleProduct</div>
  )
}

export default SingleProduct