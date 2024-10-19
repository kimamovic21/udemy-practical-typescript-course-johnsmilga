import { Form, Link, useNavigate } from 'react-router-dom'
import { AxiosResponse } from 'axios'
import { toast } from '@/hooks/use-toast'
import { customFetch } from '@/utils'
import { useAppDispatch } from '@/hooks'
import { loginUser } from '@/features/user/userSlice'
import { FormInput, SubmitBtn } from '@/components'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

function Login() {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  
  const loginAsGuestUser = async (): Promise<void> => {
    try {
      const response: AxiosResponse = await customFetch.post('/auth/local', {
        identifier: 'test@test.com',
        password: 'secret',
      })

      const username = response.data.user.username
      const jwt = response.data.jwt

      dispatch(loginUser({ username, jwt }))
      toast({ description: 'Welcome Guest User' })
      navigate('/')
    } catch (error) {
      console.error(error)
      toast({ description: 'Login Failed' })
    }
  }

  return (
    <section className='h-screen grid place-items-center'>
      <Card className='w-96 bg-muted'>
        <CardHeader>
          <CardTitle className='text-center'>Login</CardTitle>
        </CardHeader>
        <CardContent>
          <Form method='post'>
            <FormInput type='email' label='email' name='identifier' />
            <FormInput type='password' name='password' />

            <SubmitBtn text='Login' className='w-full mt-4' />

            <Button
              type='button'
              variant='outline'
              onClick={loginAsGuestUser}
              className='w-full mt-4'
            >
              Guest User
            </Button>

            <p className='text-center mt-4'>
              Not a member yet?
              <Button type='button' asChild variant='link'>
                <Link to='/register'>Register</Link>
              </Button>
            </p>
          </Form>
        </CardContent>
      </Card>
    </section>
  )
}

export default Login