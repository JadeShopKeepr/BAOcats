import React from 'react';
import { Button } from '../../common/buttons';
import { Input } from '../../common/fields';
import './loginPage.css';
export const LoginPage = () => {
  const [formValue, setFormValue] = React.useState({ username: '', password: '' });
  return (
    <div className='loginPage'>
      <div className='loginPage_container'>
        <div>header</div>
        <div className='loginPage_form_container'>
          <div className='loginPage_input_container'>
            <Input
              isError={true}
              helperText='упс, перевірте дані'
              value={formValue.username}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                setFormValue({ ...formValue, username: event.target.value })
              }
              placeholder='Ім`я користувача'
            />
          </div>
          <div className='loginPage_input_container'>
            <Input
              helperText='Пароль'
              value={formValue.password}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                setFormValue({ ...formValue, password: event.target.value })
              }
              placeholder='Пароль'
            />
          </div>
          <Button>Увійти</Button>
        </div>
      </div>
    </div>
  );
};
