import { useState } from 'react'
import './signin.css'
import { useDispatch } from 'react-redux'
import { signIn } from '../redux/slices/userSlice'

function SignIn() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')

  const dispatch = useDispatch()

  const RegisterData = { firstName: 'prem ', lastName: 'biswss', mobile: '1233435775', email: 'govindbiswas079@gmail.com', password: 'Prem_2@@1' }

  const signin = e => {
    e.preventDefault()
    dispatch(signIn({ profile: { name, email }, RegisterData: RegisterData }))
  }

  return (
    <div className='center'>
      <div className='signin'>
        <h1>Sign In</h1>
        <form onSubmit={signin} name='signin_form'>
          <input
            type='text'
            value={name}
            required
            placeholder="Enter your name"
            onChange={e => setName(e.target.value)} />

          <input
            type='text'
            value={email}
            required
            placeholder="Enter your email"
            onChange={e => setEmail(e.target.value)} />

          <button type='submit'>Sign in</button>
        </form>
      </div>
    </div>
  )
}

export default SignIn