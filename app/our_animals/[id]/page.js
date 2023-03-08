import Image from "next/image";
import Navbar from "../../components/navbar";

export default function OurAnimals({ params }) {
    if (params.id === 'Tigers') {
        return (
            <div>
                <Navbar />
                <h1>{params.id}</h1>

                <Image src="/tiger.jpg" alt="tiger" width={500} height={333}/>
            </div>
        )
            
    } else if (params.id === 'Rhinos') {
        return (
            <div>
                <h1>{params.id}</h1>
                <Image src="/indian-rhino.jpg" alt="rhino" width={500} height={333}/>
            </div>
        )
    } else {
        return (
            <div>
                <Navbar />
                <h1>{params.id}</h1>
                <Image src="/elephant.jpg" alt="elephant" width={500} height={333}/>
            </div>
        )   
    }
}