import ReactDOM from "react-dom"

var root = ReactDOM.createRoot(document.getElementById("root"));

function Header(){
 
    return (
        <div>
            <h2>
            This is header 
            </h2>
        </div>
    )  

}

function Footer(){
 
    return (
        <div>
            <h2>
                This is footer .
            </h2>
        </div>
    )  

}

function Main(){
 
    return (
        <div>
            <p1>
                <ol>
                    <li>This is Content-1</li>
                    <li>This is Content-2</li>
                    <li>This is Content-3</li>
                    <li>This is Content-4</li>
                </ol>
            </p1>
        </div>
    )  

}

root.render(
    <div>
        <Header/>
        <Main/>
        <Footer/>
    </div>
)
