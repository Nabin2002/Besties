import Card from './shared/Card'
import Form from './shared/Form'
import Button from './shared/Button'
import { Link, useNavigate } from 'react-router-dom'
// import HttpInterceptor from '../lib/HttpInterceptor'
// import { toast } from 'react-toastify'
// import { CatchError } from '../lib/CatchError'
const Signup = () => {
    const navigate = useNavigate()
    // const signup = async (values: FormDataType) => {
    //     try {
    //         await HttpInterceptor.post('/auth/signup', values)
    //         toast.success("Signup successful! Redirecting to the login page…", {
    //             position: "top-center",
    //             autoClose: 2000,
    //             theme: "colored",
    //         });
    //         setTimeout(() => {
    //             navigate("/login")
    //         }, 2000)
    //     }
    //     catch (error: unknown) {
    //         CatchError(error)
    //     }
    // }

    return (
        <div className="min-h-screen bg-gray-100 flex justify-center items-center">
            <div className="w-6/12 ">
                <Card NoPadding>
                    <div className="grid grid-cols-2 rounded-lg overflow-hidden shadow-lg">
                        <div className="bg-white">
                            <div className="p-4">
                                <h1 className="text-xl text-black font-semibold text-center ">Sign Up</h1>
                                <p className="text-sm font-semibold text-center ">Start your first chat now</p>
                            </div>
                            <Form className="space-y-4 px-8" >
                                <input
                                    name="fullname"
                                    placeholder="Full Name"
                                    className="w-full rounded-md border border-gray-300 px-4 py-2 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 outline-none"
                                />
                                <input
                                    name="email"
                                    placeholder="Email"
                                    className="w-full rounded-md border border-gray-300 px-4 py-2 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 outline-none"
                                />
                                <input
                                    name="mobile"
                                    placeholder="Phone Number"
                                    className="w-full rounded-md border border-gray-300 px-4 py-2 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 outline-none"
                                />
                                <input
                                    type="password"
                                    name="password"
                                    placeholder="Set Password"
                                    className="w-full rounded-md border border-gray-300 px-4 py-2 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 outline-none"
                                />
                                <Button icon="arrow-right-up-line" variant="secondary" >
                                    Sign Up
                                </Button>
                            </Form>
                            <div className=" py-8 text-center">
                                Already have an account?
                                <Link to='/login' className="text-blue-400">Login</Link>
                            </div>
                        </div>

                        <div className="overflow-hidden h-[500px] flex items-center justify-center bg-gradient-to-r from-cyan-500 to-blue-500">
                            <img src="/images/Signup.svg" alt="Sign Up Illustration" className="max-h-[80%] animate__animated animate__slideInUp" />
                        </div>
                    </div>
                </Card>
            </div>
        </div>
    )
}

export default Signup