import { useState } from 'react';
import './../styles/main.css';
import QRCode from 'qrcode';

function Home() {
    
  const [text, setText] = useState('');
  const [linkedin, setLinkedin] = useState('');
  const [github, setGithub] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  const urlIp = window.location.origin.toString()
  

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData)
    console.log('handleSubmit', data);
  };

  const generateQrCode = async () => {
    try {
      const url = `${urlIp}/${text}?linkedin=${linkedin}&github=${github}`
      const response = await QRCode.toDataURL(url);
      setImageUrl(response)
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="container h-screen w-screen mx-auto flex flex-col items-center">
      <h1 className="text-3xl text-white font-black mt-16">QR Code Image Generator</h1>
      <div className="mt-10">
        <form className="flex flex-col gap-5" action="" onSubmit={handleSubmit}>
          <div className="flex">
            <label htmlFor="" className="text-white bg-slate-600 rounded-l-md pt-1 w-40 text-center">Name</label>
            <input type="text" name="name" className="py-1 px-4 ml-0 rounded-r-md w-96" onChange={(e) => setText(e.target.value)} />
          </div>
          <div className="flex">
            <label htmlFor="" className="text-white bg-slate-600 rounded-l-md pt-1 w-40 text-center">Linkedin URL</label>
            <input type="text" name="linkedinURL" className="py-1 px-4 ml-0 rounded-r-md w-96" onChange={(e) => setLinkedin(e.target.value)}/>
          </div>
          <div className="flex">
            <label htmlFor="" className="text-white bg-slate-600 rounded-l-md pt-1 w-40 text-center">Github URL</label>
            <input type="text" name="githubURL" className="py-1 px-4 ml-0 rounded-r-md w-96" onChange={(e) => setGithub(e.target.value)}/>
          </div>
          <div className="flex justify-center">
            <button type="submit" className="text-white bg-slate-600 py-2 rounded-md w-40" onClick={() => generateQrCode() }>Generate Image</button>
          </div>
        </form>
        <div className='flex flex-col justify-center items-center mt-4'>
          {imageUrl ? (
            <>
            <a href={imageUrl} download>
              <img src={imageUrl} alt="img" />
            </a>
            <h3 className="text-1xl text-white mt-2">Click to download the image.</h3>
            </>
          ) : null}
        </div>
      </div>
    </div>
  )
}

export default Home
