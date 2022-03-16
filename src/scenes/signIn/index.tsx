import InputText from '../../components/Form/index';
import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useHistory } from 'react-router-dom';
import { useCurrentAccount } from '../../hooks/useCurrentAccount';
import styles from './style.module.scss';
import { SignInParams, useSignInPresenter } from './useSignInPresenter';
import Eye from './Vector';

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
              type="text"
              className={styles.mail}
              name="account.email"
              ref={register}
              placeholder="coadmap@mail.com"
            />
          </InputText>
          <InputText title="パスワード">
            <input
              type="password"
              name="account.password"
              className={styles.password}
              ref={register}
              placeholder="パスワードを入力"
            />
            <Eye />
          </InputText>

          <button className={styles.loginButton}>ログイン</button>
          <a className={styles.aTag} href="">
            パスワードを忘れた方はこちら
          </a>
          <button className={styles.registerButton}>新規登録はこちら</button>
        </form>
      </div>
    </div>
  );
};

export default SignInPage;
