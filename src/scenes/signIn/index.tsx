import InputText from '../../components/Form/index';
import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useHistory } from 'react-router-dom';
import { useCurrentAccount } from '../../hooks/useCurrentAccount';
import styles from './style.module.scss';
import { SignInParams, useSignInPresenter } from './useSignInPresenter';

const SignInPage = () => {
  const { register, handleSubmit } = useForm<SignInParams>();
  const { signIn } = useSignInPresenter();
  const { account } = useCurrentAccount();
  const history = useHistory();

  useEffect(() => {
    if (account) history.push('/');
  }, [account]);

  const onSubmit = (data: SignInParams) => {
    signIn(data);
  };
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <h1>求職者ログイン</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <InputText title="メールアドレス">
            <input
              className={styles.mail}
              name="account.email"
              ref={register}
              placeholder="coadmap@mail.com"
            />
          </InputText>
          <InputText title="パスワード">
            <input
              name="account.password"
              className={styles.password}
              ref={register}
              placeholder="パスワードを入力"
            />
          </InputText>

          <button>ログイン</button>
          <Link to="/">ホームへ</Link>
        </form>
      </div>
    </div>
  );
};

export default SignInPage;
