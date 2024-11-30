"use client"

import { signIn } from "next-auth/react"

export default function SignInGitHub() {
  return (
    
      <div> 
        <button
          className="w-full px-4 py-2 mb-4 text-white bg-cyan-400 rounded-lg hover:bg-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500"
          onClick={() => signIn('github')}
        >
          Sign In with GitHub
        </button>
        
        <button
          className="w-full px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          onClick={() => signIn('google')}
        >
          Sign In with Google
        </button>
      </div>
  )
}
