"use client";
import styles from "./dynamic.module.css"
import { useParams } from 'next/navigation';

const toolDetails = {
    stone: {
        description: "A curling stone is made of granite and slides on the ice.",
        material: "Granite",
        weight: "44lbs",
    },
    broom: {
        description: "A curling broom is used to sweep the ice to reduce friction and control the stone's path.",
        material: "Synthetic Fabric",
        weight: "1.3lbs",
    },
    shoes: {
        description: "Curling shoes have one slippery sole for sliding and one grippy sole for stability.",
        material: "Leather",
        weight: "2lbs",
    }

};


export default function Tool() {
    const { toolName } = useParams(); 
    const tool = toolDetails[toolName]
    return (
        <main>
            <div className={styles.container}>
            <h1 className={styles.title}>Curling Tool: {toolName}</h1>
            <ul className={styles.list}>
                <li><span>Description:</span>{tool.description}</li>
                <li><span>Material:</span>{tool.material}</li>
                <li><span>Weight:</span>{tool.weight}</li>
            </ul>
            </div>
            
        </main>
    );
}