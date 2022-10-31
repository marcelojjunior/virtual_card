import './../styles/main.css';
import {
  useParams, useLocation
} from "react-router-dom";
import queryString from 'query-string';


function Profile() {
    let { name }:any = useParams();

    const {search} = useLocation()
    const values = queryString.parse(search)

    const urlLinkedin = values.linkedin
    const urlGithub = values.github

    return (
      <div className="container mt-5 w-auto mx-4">
        <p className="text-white text-2xl font-medium">Hello, my name is {name}</p>
        <p className="text-white text-4xl font-black mt-6">My History</p>
        <p className="text-white text-2xl font-normal mt-6">To share my good experiences, follow me on social media:</p>
        <div className="flex my-6 gap-3">
            <a href={urlLinkedin}><button type="submit" className="text-white font-medium bg-slate-600 py-3 rounded-md w-44">Linkedin</button></a> 
            <a href={urlGithub}><button type="submit" className="text-white font-medium bg-slate-600 py-3 rounded-md w-44">Github</button></a> 
        </div>
      </div>
    );
  }
export default Profile