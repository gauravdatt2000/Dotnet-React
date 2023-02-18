export default function Student(props){
    return (
                <div className="d-flex  bg-secondary text-white" >    
                    <div className="d-flex flex-column">
                        <img src={props.url} width="90" height="100"  className="p-2"></img>
                        <p className="text-center">{props.name}</p>
                    </div>
                    <div className="container-fluid justify-content-center ">
                        <div className="p-2">{props.comment}</div>
                    </div>                   
                </div>
        )
}