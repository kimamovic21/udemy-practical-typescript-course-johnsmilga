import { Form, Link, ActionFunction, redirect } from 'react-router-dom'
import { AxiosError } from 'axios'
import { customFetch } from '@/utils'
import { toast } from '@/hooks/use-toast'
import { FormInput } from '@/components'
import { Card, CardHeader, CardContent, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

export const action: ActionFunction = async ({ request }): Promise<Response | null> => {
  const formData = await request.formData()
  const data = Object.fromEntries(formData)

  try {
    const result = await customFetch.post('/auth/local/register', data)
    console.log(result)

    toast({ description: 'Registered' })
    return redirect('/login')
  } catch (error) {
    console.error(error)

    const errorMsg = error instanceof AxiosError ? error.response?.data.error.message : 'Registration Failed'
    toast({ description: errorMsg })
    return null
  }
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
            <FormInput type='text' name='username' />
            <FormInput type='email' name='email' />
            <FormInput type='password' name='password' />

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