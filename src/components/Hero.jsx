import beaches from '../assets/beachVid.mp4'

const Hero = () => {
  return (
    <div className='w-full h-screen relative'>
      <video
        className='w-full h-full object-cover'
        src={beaches}
        autoPlay
        loop
        muted
      />
      <div className='absolute w-full h-full top-0 left-0 bg-gray-900/30'></div>
      <div className='absolute top-0 w-full h-full flex flex-col justify-center text-center text-white p-4'>
        <h1 className='text-2xl text-black font-bold'>"A serene space where ideas flow as naturally as the wind and inspiration is just a thought away. Immerse yourself in a world of creativity, reflection, and discovery, where every moment is an opportunity to explore new perspectives and enrich your mind."</h1>
      </div>
    </div>
  )
}

export default Hero