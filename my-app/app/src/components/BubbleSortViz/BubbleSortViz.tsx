import { useState, useEffect, useRef } from "react"
import './BubbleSortViz.css'

const randomArray = (n: number, max: number): number[] =>
  Array.from({ length: n }, () => Math.floor(Math.random() * max) + 1);

function BubbleSortViz() {
  // graph state
  const [values, setValues] = useState<number[]>(() =>
    randomArray(50, 100));

  const [activePair, setActivePair] = useState<[number, number] | null>(null);

    // refs for bubble pointers + time
    const iRef = useRef(0);
    const jRef = useRef(0);

    useEffect(() => {
    const timer = window.setInterval(() => {
        const j = jRef.current;
        
        setActivePair([j, j+1]);

        setValues((prev) => {
        const n = prev.length;
        if (j+1 > n) return prev;
        if (n < 2) return prev;

        // finished one full sort -> start over with new random data
        if (iRef.current >= n - 1) {
            window.clearInterval(timer);
            console.log("sorted", prev);
            setActivePair(null);

            window.setTimeout(() => {
                jRef.current = 0;
                iRef.current = 0;
                setValues(randomArray(50,100));
            return prev;
            }, 1500)

        }

        const next = [...prev];

        if (next[j] >= next[j + 1]) {
            [next[j], next[j + 1]] = [next[j + 1], next[j]];
        }

        jRef.current += 1;
        if (jRef.current >= n - 1 - iRef.current) {
            jRef.current = 0;
            iRef.current += 1;
        }

        return next;
        });
    }, 500);

    return () => window.clearInterval(timer);
    }, []);

    return (
        <div className='visualizer'>
            {values.map((value, index) => {
               return <div key={index} className={`bar ${
                activePair?.[0] === index ? "active-left" : 
                activePair?.[1] === index ? "active-right" :
                ""
                }`} 
                style={{height:`${value*3}px`}}></div>
            })}
        </div>
    )
}

export default BubbleSortViz