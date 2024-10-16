import { type LoaderFunction } from 'react-router-dom'

export const loader: LoaderFunction = async ({ params }) => {
  console.log(params)
  return null
}

function SingleProduct() {
  return (
    <div>SingleProduct</div>
  )
}

export default SingleProduct