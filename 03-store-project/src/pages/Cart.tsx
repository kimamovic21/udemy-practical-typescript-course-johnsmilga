import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'

function Cart() {
  return (
    <div>
      <h2 className='text-4xl'>Cart Page</h2>
      <Link to='/' className='text-2xl text-red-900'>
        back home
      </Link>
      <Button asChild size='lg'>
        <Link to='/'>home button</Link>
      </Button>
    </div>
  )
}

export default Cart