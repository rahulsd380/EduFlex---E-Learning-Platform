import { useForm } from 'react-hook-form';
import resetPassword from "../../assets/Icons/reset-password.svg"
import Label from '../FormComponents/Label';
import { TSignupLoginModalTypes } from './Signup';

const ResetPassword: React.FC<TSignupLoginModalTypes> = ({setModalType}) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();

    return (
        <div>
            <div className='flex items-center justify-center'>
            <img src={resetPassword} alt="" className='size-[200px]' />
            </div>
            {/* Password */}
        <div className="flex flex-col gap-1 w-full relative">
            <Label htmlFor="reset_password">Password</Label>
          <input
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 8,
                message: "Password must be at least 8 characters",
              },
            })}
            type="password"
            id="password"
            className="bg-dark-5/20 border border-dark-10/30 p-2 focus:border-primary-10 transition duration-300 focus:outline-none rounded w-full"
            placeholder="Password must be at least 8 characters"
          />
          {errors.password && (
            <span className="text-warning-10 text-start">
              {errors.password.message as string}
            </span>
          )}
        </div>

        {/* Log in button */}
      <button
        type="submit"
        className="bg-primary-10 text-white font-medium w-full px-4 py-3 rounded-lg focus:outline-none mt-6"
      >
        {"Submit"}
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

export default ResetPassword;