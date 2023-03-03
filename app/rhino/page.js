import Image from 'next/image';
import Navbar from '../components/Navbar';

export default function Rhino() {
    return (
        <div>
        <Navbar />
        <div>
          <h1>Rhinos</h1>
          <Image src="/indian-rhino.jpg" alt="Indian rhino" width={500} height={333} />
          <p>By 1970, rhino numbers dropped to 70,000, and today, around 27,000 rhinos remain in the wild. Very few rhinos survive outside national parks and reserves due to persistent poaching and habitat loss over many decades. Three species of rhino—black, Javan, and Sumatran—are critically endangered.</p>
        </div>
      </div>
  
    )
}