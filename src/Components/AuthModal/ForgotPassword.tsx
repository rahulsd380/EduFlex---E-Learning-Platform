import { useForm } from 'react-hook-form';
import forgotPasswordIcon from "../../assets/Icons/forgot-password.svg"
import { TSignupLoginModalTypes } from './Signup';
import Label from '../FormComponents/Label';

const ForgotPassword: React.FC<TSignupLoginModalTypes> = ({setModalType}) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();
    return (
        <div>
            <div className='flex items-center justify-center'>
            <img src={forgotPasswordIcon} alt="" className='size-[200px]' />
            </div>
            {/* Email */}
        <div className="flex flex-col gap-1 w-full">
        <Label htmlFor="email">Email</Label>
          <input
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                message: "Invalid email address",
              },
            })}
            type="email"
            id="email"
            className="bg-dark-5/40 border border-dark-10/30 p-2 focus:border-primary-10 transition duration-300 focus:outline-none rounded w-full"
            placeholder="Enter your e-mail"
          />
          {errors.email && (
            <span className="text-warning-10 text-start">
              {errors.email.message as string}
            </span>
          )}
        </div>

        {/* Log in button */}
      <button
      onClick={() => setModalType("ResetPassword")}
        type="submit"
        className="bg-primary-10 text-white font-medium w-full px-4 py-3 rounded-lg focus:outline-none mt-6"
      >
        {"Send Reset Link"}
      </button>

      <p className="text-center mt-4">
          Back to{" "}
          <button onClick={() => setModalType("Login")} className="text-primary-10 font-medium">
            Login
          </button>
        </p>
        </div>
    );
};

export default ForgotPassword;