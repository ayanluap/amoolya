import Auth from '../layouts/Auth';

const Login = () => {
  return (
    <Auth>
      <h2 className="h2 u-center">Login</h2>
      <form className="form" style={{ width: '100%' }}>
        <div className="form__group" style={{ width: '100%' }}>
          <label htmlFor="user" className="form__label">
            Username
          </label>
          <input
            type="text"
            name="user"
            id="user"
            className="form__input"
            placeholder="Username"
            required
          />
        </div>
        <div className="form__group" style={{ width: '100%' }}>
          <label htmlFor="pwd" className="form__label">
            password
          </label>
          <input
            type="password"
            name="pwd"
            id="pwd"
            className="form__input"
            placeholder="password"
            required
          />
        </div>
        <button
          type="submit"
          className="btn btn--blue"
          style={{ width: '100%' }}
        >
          login
        </button>
      </form>
    </Auth>
  );
};

export default Login;
