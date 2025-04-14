export interface AuthProps {
    e : React.FormEvent<HTMLFormElement>
    email : string,
    password : string
}

export type HandleAuthSubmit = (props: AuthProps) => void | Promise<void>;

export interface AuthFormProps {
    handleSubmit: HandleAuthSubmit;
  }
  