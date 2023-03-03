import Image from 'next/image';
import Navbar from '../components/navbar';

export default function Panda() {
    return (
        <div>
            <Navbar />
            <div>
                <h1>Pandas</h1>
                <Image src="/panda.jpg" alt="Panda" width={500} height={333} />
                <p>One the main reasons that panda populations have declined is habitat destruction. As the human population in China continues to grow, pandas’ habitat gets taken over by development, pushing them into smaller and less livable areas. Habitat destruction also leads to food shortages. Pandas feed on several varieties of bamboo that bloom at different times of the year. If one type of bamboo is destroyed by development, it can leave the pandas with nothing to eat during the time it normally blooms, increasing the risk of starvation.</p>
            </div>
        </div>
    )
}