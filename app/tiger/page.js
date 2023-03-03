import Image from 'next/image';
import Navbar from '../components/navbar';


export default function Tiger() {
    return (
        <div>
            <Navbar />
            <div>
                <h1>Tigers</h1>
                <Image src="/tiger.jpg" alt="Tiger" width={500} height={333} />
                <p>Tigers are endangered due to habitat loss and poaching.</p>
            </div>
        </div>
    )
}