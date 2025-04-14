
import { AuthFormProps } from '../types/auth';
import { signup } from './signup/actions';


export default function AuthForm() {
   

    return (
        <form action={signup}>
        <label htmlFor="email">Email:</label>
        <input id="email" name="email" type="email" required />
        <label htmlFor="password">Password:</label>
        <input id="password" name="password" type="password" required />
      
        <button type='submit'>Sign up</button>
      </form>
    )
}
