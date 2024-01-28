
function App() {
  return (
    <>
     <h1 className=' bg-green-500 text-black text-4xl'>Tailwind and props learning</h1>

     <p>Here in this we will learn how to import Tailwind css into your project and use props(properties) in your project</p>

<br /><br />
     <h3 className='text-3xl bg-teal-300' >Tailwind</h3>
     <p>Tailwind: For this go to tailwind official website and write some command to import its files we are doing it for vite so goto vite installation of tailwind</p>
     <p>Now you can see the config file do some changes what website is saying to do on it now import tailwind in index.css file</p>

<br />
<br />  

     <h3 className=" text-3xl bg-teal-400">Props</h3>
     <p>Lets say aapko flipkart banana hai aur usme dher saare cards me aapko different product show krna hai </p>
     <p>Now uske liye aapko har card ka different component banana hoga aur use main.jsx me import krna hoga</p>
     <p>But ye to koi baat nhi hui mera kaam to bahut jyada ho jayega to iske liye hum ek hi card component banayenge and usi me har product ki details send kr denge aur har card main.jsx me defined hoga with uski individual details</p>
<br /><br />

<h3 className=" text-4xl" > Making Cards by passing props</h3>

    </>

  )
}

export default App
