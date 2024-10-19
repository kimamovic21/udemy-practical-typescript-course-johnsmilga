import { Form, Link, ActionFunction } from 'react-router-dom'
import { FormInput } from '@/components'
import { Card, CardHeader, CardContent, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

export const action: ActionFunction = async ({ request }): Promise<null> => {
  console.log(request)
  const formData = await request.formData()
  console.log(formData)
  const data = Object.fromEntries(formData)
  console.log(data)

  return null
}

function Register() {
  return (
    <section className='h-screen grid place-items-center'>
      <Card className='w-96 bg-muted'>
        <CardHeader>
          <CardTitle className='text-center'>Register</CardTitle>
        </CardHeader>
        <CardContent>
          <Form method='post' action=''>
            <FormInput type='text' name='username' defaultValue='test' />
            <FormInput type='email' name='email' defaultValue='test@test.com' />
            <FormInput type='password' name='password' defaultValue='secret' />

            <Button type='submit' variant='default' className='w-full mt-4'>
              Submit
            </Button>

            <p className='text-center mt-4'>
              Already a member?
              <Button type='button' asChild variant='link'>
                <Link to='/login'>Login</Link>
              </Button>
            </p>
          </Form>
        </CardContent>
      </Card>
    </section>
  )
}

export default Register