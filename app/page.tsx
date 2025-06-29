import React from 'react'
import { Button } from "@/components/ui/button"


const Page = () => {
  return (
    <div className='flex flex-col items-center justify-center h-screen space-y-4'>
      <h1 className='text-2xl'>Welcome to my saas App </h1>
      
      <Button> Let&apos; s get started </Button>
    </div>
  )
}

export default Page