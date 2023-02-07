import React, { FC } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import validators from "../../validators";
import { connect } from "react-redux";
import { loginRequestAction } from "../../redux/user/actions";
import Layout from "../../components/Layout";
import { UserAccountInterface } from "../../redux/interface";
import { AppState } from "../../interfaces";
import { css } from "@emotion/core";
import ClipLoader from "react-spinners/ClipLoader";

const mapStateToProps = (state: AppState) => ({ isLogging: state.users.loading });

const Login: FC = ({ onSignin, isLogging }: any) => {
  const { register, handleSubmit, errors } = useForm<UserAccountInterface>({
    resolver: yupResolver(validators)
  });
  const override = css`
    margin: auto;
    position: absolute;
    top: 0; 
    left: 0; 
    bottom: 0; 
    right: 0;
    border-color: #3930e3;
    border-width: 4px;
`;
  return (
    <Layout>
      <div className="relative bg-blue-700 my-24 p-5 rounded text-center w-80 m-auto shadow">
        <h1 className="text-white py-5">SIGN IN</h1>
        <form onSubmit={handleSubmit(onSignin)}>
          <div className="text-grey-darkest my-4 mx-5">
            <input
              className="rounded p-3 focus:outline-none focus:ring focus:border-gray-700 w-full"
              name="username"
              ref={register}
              placeholder="Username"
            />
            <p className="flex text-left font-medium tracking-wide text-white text-sm mt-1 ml-1">{errors.username?.message}</p>
          </div>

          <div className="text-grey-darkest my-4 mx-5">
            <input
              type="password"
              className="rounded p-3 focus:outline-none focus:ring focus:border-blue-300 w-full"
              name="password"
              ref={register}
              placeholder="Password"
            />
            <p className="flex text-left font-medium tracking-wide text-white text-sm mt-1 m-1">{errors.password?.message}</p>
          </div>

          <div className="text-center py-4">
            <input
              type="submit"
              disabled={isLogging}
              value={"Login"}
              className="px-6 py-1 rounded bg-gray-800 cursor-pointer hover:bg-gray-900 text-white"
            />
          </div>
        </form>
        <ClipLoader loading={isLogging} css={override} size={60} />
      </div>
    </Layout>
  );
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    onSignin: (data: UserAccountInterface) => {
      dispatch(loginRequestAction(data));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
