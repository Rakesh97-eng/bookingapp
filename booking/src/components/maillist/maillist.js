import "./maillist.css"

const Mail = ()=>{
    return (
        <div className="mailcontainer">
            <h1>Save time,save money</h1>
            <span>sign up and we'll send email</span>
            <div>
                <input typeof="text" placeholder="enter youremail"></input>
                <button>Subscribe</button>
            </div>
        </div>
    )
}
export default Mail