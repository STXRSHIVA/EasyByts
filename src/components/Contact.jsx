import React from 'react'

const Contact = () => {
    return (
        <div id="contact" name='contact' className='w-full  h-screen mt-20'>
            <div className='flex flex-col p-4 justify-center max-w-screen-md mx-auto h-full'>
            <p className='text-4xl font-bold  border-b-4 border-purple-500 p-2  text-white'><center>Contact</center></p>
            <p className='py-6 text-white'><center>Submit the form below to get int touch with me</center></p>

                <div className='pb-8 flex justify-center items-center'>
                    <form action="https://getform.io/f/ajjeyqza" method='POST' className='flex flex-col  w-full md:w-1/2' >

                    <input type="text" name='name' placeholder='Enter your name' className='p-4 bg-transparent border-2 text-white focus:outline-none' />
                        <input type="text" name='name' placeholder='Enter your email' className='p-4 my-4 bg-transparent border-2 text-white focus:outline-none' />

                        <textarea name="message"rows="10" className='p-2 my-4 bg-transparent border-2 rounded-md text-white focus:outline-none' ></textarea>

                        <button className='text-white  px-6 py-3 rounded-xl my-8 flex items-center  bg-gradient-to-r from-purple-500 to-black'>let's talk</button>


                    </form>
                </div>

            </div>
        </div>
    )
}

export default Contact
