import useFetch from "../../hooks/fetch";

const Reserve = ({ id }) => {
    const { data } = useFetch(`/hotels/getrooms/${id}`)
    console.log("Data", data);
    return (
        <>
            {data.map((room) => {
                return (< div >
                    
                    <div>{ room.name}</div>
                    <div>{room.name}</div>
                    <div>{ room.city}</div>
                {room.rooms.map()}
                
                </div>







                
                )
            })}

       
        </>
    )
}

export default Reserve;