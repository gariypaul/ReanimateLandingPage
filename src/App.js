import Spline from '@splinetool/react-spline';




function App() {
  return (
    <div className="flex w-screen h-screen min-h-screen flex-col items-center justify-center relative bg-black  pb-20">
    <nav className='w-full px-6 z-50 fixed inset-x-0 top-2 flex justify-center items-center'>
      <div className='w-full md:w-880 bg-transparent p-4 rounded-2xl flex items-center'>

        <p className='textlg text-green-900 text-2xl font-bold align-middle'>Reanimate</p>

        <div className='hidden md:flex items-center gap-6 ml-6 flex-1'>
          <a href='#home' className='text-base text-slate-200 font-medium align-middle hover:text-green-900 cursor-pointer duration-200 ease-in-out' >Home</a>
          {/* <a href='#about' className='text-base text-slate-200 font-medium align-middle hover:text-green-900 cursor-pointer duration-200 ease-in-out'>About</a> */}
        </div>

      </div>
    </nav>
      
    
      <div className="relative w-screen h-screen pointer-events-auto align-middle" id="home">
        
      <Spline scene="https://prod.spline.design/Wygt6Wz5y2vmVoRo/scene.splinecode"  className='pointer-events-auto'/>
      <div className='absolute top-44 left-28 ' >
        <h1 className='text-slate-200 text-7xl font-bold m-0 max-w-screen-m'>Re<span className='text-green-900'>animate</span></h1>

        <p className='text-slate-200 text-5xl leading-normal max-w-m'>Fashion with <span className='text-green-900'>life</span> and a <span className='text-green-900'>story.</span> </p>
        <p className='text-slate-200 text-3xl leading-normal max-w-sm'>Coming soon. </p>

      </div>
      </div>
    </div>
  );
}



  export default App;

