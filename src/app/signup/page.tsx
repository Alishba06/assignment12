import Link from "next/link";
import React from "react";

export default function SignUp() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <form
                action="/submit-signup"
                method="POST"
                className="w-full max-w-md space-y-8 bg-white p-8 rounded-lg shadow-lg"
            >
                <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">Sign Up</h2>

                <div className="mb-4">
                    <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">Full Name:</label>
                    <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        required
                        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-400"
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-400"
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password:</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        required
                        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-400"
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">Confirm Password:</label>
                    <input
                        type="password"
                        id="confirmPassword"
                        name="confirmPassword"
                        required
                        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-400"
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number (Optional):</label>
                    <input
                        type="tel"
                        id="phone"
                        name="phone"
                        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-400"
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="gender" className="block text-sm font-medium text-gray-700">Gender:</label>
                    <div className="flex space-x-4">
                        <div>
                            <input
                                type="radio"
                                id="male"
                                name="gender"
                                value="male"
                                className="mr-2"
                            />
                            <label htmlFor="male" className="text-sm">Male</label>
                        </div>
                        <div>
                            <input
                                type="radio"
                                id="female"
                                name="gender"
                                value="female"
                                className="mr-2"
                            />
                            <label htmlFor="female" className="text-sm">Female</label>
                        </div>
                        <div>
                            <input
                                type="radio"
                                id="other"
                                name="gender"
                                value="other"
                                className="mr-2"
                            />
                            <label htmlFor="other" className="text-sm">Other</label>
                        </div>
                    </div>
                </div>

                <div className="mb-4">
                    <label htmlFor="dob" className="block text-sm font-medium text-gray-700">Date of Birth:</label>
                    <input
                        type="date"
                        id="dob"
                        name="dob"
                        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-400"
                    />
                </div>

                <div className="mb-4">
                    <label className="flex items-center space-x-2">
                        <input
                            type="checkbox"
                            name="terms"
                            required
                            className="text-cyan-400"
                        />
                        <span className="text-sm text-gray-700">I agree to the <a href="#" className="text-cyan-400 hover:underline">Terms and Conditions</a></span>
                    </label>
                </div>

                <div className="mb-6">
                    <button
                        type="submit"
                        className="w-full bg-cyan-400 hover:bg-cyan-500 text-white py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-400 transition duration-200 ease-in-out"
                    >
                        Sign Up
                    </button>
                </div>
                <br />
                <Link className="mt-5" href={'/'}>Already have an account? <span>Login</span></Link>
            </form>
        </div>
    );
}
