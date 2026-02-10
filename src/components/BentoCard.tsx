"use client";

import { motion } from "framer-motion";

type BentoCardProps = {
    title: string;
    description: string;
    className?: string;
};

export default function BentoCard({
    title,
    description,
    className,
}: BentoCardProps) {
    return (
        <div
            className={`rounded-3xl 
bg-white/5 
backdrop-blur-xl 
border border-white/10 
shadow-[0_20px_50px_rgba(0,0,0,0.6)] 
p-6 
hover:bg-white/10 
transition-all duration-300 
${className}`}
        >
            <h3 className="text-xl font-semibold mb-2">{title}</h3>
            <p className="text-zinc-400 text-sm">{description}</p>
        </div>
    );
}
