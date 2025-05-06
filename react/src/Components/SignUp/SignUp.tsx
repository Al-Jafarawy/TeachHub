import React from 'react'

const SignUp = () => {
  return (
    <div>
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Sign Up</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Join TeachHub today and start your learning journey with us.</p>
          </div>
          
          <div className="max-w-md mx-auto bg-white rounded-lg shadow-md p-6">
            <form>
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Full Name</label>
                <input type="text" id="name" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="John Doe" />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email Address</label>
                <input type="email" id="email" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="johndoe@example.com" />
              </div>
              <div className="mb-4">
                <label htmlFor="password" className="block text-gray-700 font-medium mb-2">Password</label>
                <input type="password" id="password" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="••••••••" />
              </div>
              <div className="mb-6">
                <label htmlFor="confirmPassword" className="block text-gray-700 font-medium mb-2">Confirm Password</label>
                <input type="password" id="confirmPassword" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="••••••••" />
              </div>
              <button type="submit" className="w-full bg-gradient-to-r from-[#C89934] to-indigo-700 text-white py-3 px-4 rounded-lg hover:opacity-90 transition duration-300">Create Account</button>
              
              <div className="mt-4 text-center">
                <p className="text-gray-600">Already have an account? <a href="/login" className="text-blue-600 hover:underline">Log In</a></p>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}

export default SignUp
