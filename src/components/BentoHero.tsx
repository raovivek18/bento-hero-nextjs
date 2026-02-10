"use client";

import React, { useState } from "react";
import {
    Home,
    Heart,
    Image as ImageIcon,
    LayoutGrid,
    Settings,
    LogOut,
    Search,
    Plus,
    Download,
    Sparkles,
    CheckCircle2,
    ChevronRight,
    RefreshCw
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function BentoHero() {
    const [activeStyle, setActiveStyle] = useState("DIGITAL");
    const [prompt, setPrompt] = useState("");
    const [activeNav, setActiveNav] = useState("home");
    const [isGenerating, setIsGenerating] = useState(false);
    const [downloaded, setDownloaded] = useState(false);

    const screenshots = [
        "/images/Screenshot 2026-02-10 160738.png",
        "/images/Screenshot 2026-02-10 160755.png",
        "/images/Screenshot 2026-02-10 160802.png",
        "/images/Screenshot 2026-02-10 160810.png",
        "/images/Screenshot 2026-02-10 160818.png",
        "/images/Screenshot 2026-02-10 160825.png"
    ];

    const [heroImage, setHeroImage] = useState(screenshots[5]);
    const [imageStack, setImageStack] = useState([
        { id: 1, src: screenshots[0], label: "01" },
        { id: 2, src: screenshots[1], label: "02" },
        { id: 3, src: screenshots[3], label: "03" }
    ]);

    const avatarImage = screenshots[2];
    const inspireMain = screenshots[4];

    const styles = [
        "MYTHOLOGICAL", "ANIME", "FANTASY",
        "PHOTOGRAPHY", "SKETCH", "DIGITAL",
        "PIXEL ART", "ILLUSTRATION", "3D STYLES"
    ];

    const swapFromStack = (index: number) => {
        const selected = imageStack[index];
        const oldHero = heroImage;
        setHeroImage(selected.src);
        const newStack = [...imageStack];
        newStack[index] = { ...selected, src: oldHero };
        setImageStack(newStack);
    };

    const handleGenerate = (e: React.FormEvent) => {
        e.preventDefault();
        if (!prompt) return;
        setIsGenerating(true);
        setTimeout(() => {
            setIsGenerating(false);
            const currentHero = heroImage;
            setHeroImage(imageStack[0].src);
            const newStack = [...imageStack];
            newStack[0].src = currentHero;
            setImageStack(newStack);
            setPrompt("");
        }, 1500);
    };

    return (
        <div className="hidden lg:flex bg-[#000000] h-screen w-screen p-6 items-center justify-center font-sans overflow-hidden">

            <div className="lg:hidden fixed inset-0 bg-black flex items-center justify-center text-center p-10 z-[100]">
                <div className="space-y-4">
                    <Sparkles size={48} className="mx-auto text-white" />
                    <h2 className="text-2xl font-bold">Desktop Only</h2>
                    <p className="text-zinc-500">Please view on a desktop device.</p>
                </div>
            </div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="w-full h-full bg-[#0a0a0a] rounded-[60px] p-6 flex gap-6 border border-white/5 shadow-2xl overflow-hidden"
            >

                {/* PANEL 1: LEFT SIDEBAR (Profile, Nav, Inspo) */}
                <div className="w-[320px] h-full flex flex-col gap-6">

                    {/* PROFILE & NAV SECTION */}
                    <div className="flex-1 bg-white rounded-[50px] p-8 flex flex-col items-center justify-between">
                        <div className="flex flex-col items-center gap-6 w-full">
                            <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center shadow-lg">
                                <Sparkles size={32} className="text-white fill-white" />
                            </div>

                            <div className="w-full flex flex-col gap-4 mt-8">
                                {[
                                    { id: 'home', icon: Home, label: 'Home' },
                                    { id: 'images', icon: ImageIcon, label: 'Gallery' },
                                    { id: 'heart', icon: Heart, label: 'Favorites' },
                                    { id: 'grid', icon: LayoutGrid, label: 'Layouts' },
                                    { id: 'settings', icon: Settings, label: 'Settings' }
                                ].map(({ id, icon: Icon, label }) => (
                                    <button
                                        key={id}
                                        onClick={() => setActiveNav(id)}
                                        className={`flex items-center gap-4 px-6 py-4 rounded-full transition-all duration-300 ${activeNav === id ? 'bg-black text-white shadow-lg' : 'text-black/30 hover:bg-black/5 hover:text-black'}`}
                                    >
                                        <Icon size={22} strokeWidth={activeNav === id ? 2 : 1.5} />
                                        <span className="font-bold text-sm tracking-wide">{label}</span>
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className="w-full flex flex-col gap-6">
                            <div className="h-px bg-black/5 w-full"></div>
                            <div className="flex items-center gap-4 group cursor-pointer bg-black/5 p-3 rounded-full hover:bg-black/10 transition-colors">
                                <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-white">
                                    <img src={avatarImage} alt="User" className="w-full h-full object-cover" />
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-black font-bold text-sm">Vivek Rao</span>
                                    <span className="text-black/40 text-xs font-semibold">Pro Plan</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* GET INSPIRED WIDGET (Moved to Sidebar Bottom) */}
                    <div className="h-[200px] bg-[#f4f4f6] rounded-[50px] p-6 relative overflow-hidden group">
                        <h3 className="text-black/40 font-bold text-[10px] tracking-widest uppercase mb-4">Get Inspired</h3>
                        <div className="flex items-center gap-4 relative z-10">
                            <div className="w-20 h-28 rounded-[24px] overflow-hidden shadow-2xl border-4 border-white rotate-[-5deg] group-hover:rotate-0 transition-transform duration-500">
                                <img src={inspireMain} className="w-full h-full object-cover" />
                            </div>
                            <button className="bg-black text-white p-3 rounded-full shadow-lg hover:scale-110 transition-transform">
                                <RefreshCw size={18} />
                            </button>
                        </div>
                        <div className="absolute top-[-20px] right-[-20px] w-32 h-32 bg-orange-500 rounded-full blur-3xl opacity-20"></div>
                    </div>

                </div>

                {/* PANEL 2: CENTER HERO (Massive) */}
                <div className="flex-1 h-full relative">
                    <div className="w-full h-full bg-zinc-900 rounded-[60px] overflow-hidden border border-white/10 relative group">
                        <AnimatePresence mode="wait">
                            <motion.img
                                key={heroImage}
                                initial={{ opacity: 0, scale: 1.05 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                transition={{ duration: 1, ease: "circOut" }}
                                src={heroImage}
                                className="w-full h-full object-cover"
                            />
                        </AnimatePresence>

                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

                        {/* Float Widgets on Hero */}
                        <div className="absolute top-8 right-8 flex gap-4">
                            <motion.button
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                onClick={() => setDownloaded(true)}
                                className={`p-4 rounded-full shadow-2xl transition-all duration-300 ${downloaded ? 'bg-green-500 text-white' : 'bg-white/10 backdrop-blur-xl text-white border border-white/20'}`}
                            >
                                {downloaded ? <CheckCircle2 size={24} /> : <Download size={24} />}
                            </motion.button>
                        </div>

                        <div className="absolute bottom-10 left-10 right-10 flex flex-col gap-6">
                            <AnimatePresence>
                                {isGenerating && (
                                    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="bg-black/80 backdrop-blur-xl border border-white/20 rounded-2xl p-4 w-fit flex items-center gap-4">
                                        <RefreshCw className="text-white animate-spin" size={20} />
                                        <span className="text-white font-bold text-xs tracking-widest uppercase">Synthesizing image...</span>
                                    </motion.div>
                                )}
                            </AnimatePresence>

                            <form onSubmit={handleGenerate} className="bg-white/10 backdrop-blur-3xl border border-white/20 rounded-full h-[84px] flex items-center px-4 w-full max-w-2xl shadow-2xl">
                                <button type="submit" className="bg-white text-black p-4 rounded-full hover:scale-105 transition-transform shadow-lg">
                                    <Plus size={28} />
                                </button>
                                <input
                                    type="text"
                                    value={prompt}
                                    onChange={(e) => setPrompt(e.target.value)}
                                    placeholder="Describe your imagination..."
                                    className="bg-transparent outline-none ml-6 text-white font-medium text-lg w-full placeholder:text-white/40"
                                />
                            </form>
                        </div>
                    </div>
                </div>

                {/* PANEL 3: RIGHT UTILITIES (Search, Styles, Stack) */}
                <div className="w-[360px] h-full flex flex-col gap-6">

                    {/* SEARCH WIDGET (Top Right) */}
                    <div className="bg-white rounded-[40px] h-[84px] flex items-center px-8 gap-4 shadow-xl">
                        <Search className="text-black/30" size={26} />
                        <input
                            type="text"
                            placeholder="Search..."
                            className="bg-transparent outline-none w-full text-black font-bold text-lg placeholder:text-black/30"
                        />
                    </div>

                    {/* STYLE SELECTOR (Middle Right) */}
                    <div className="bg-white rounded-[50px] p-8 flex-1 flex flex-col justify-between shadow-xl">
                        <div className="space-y-6">
                            <h3 className="text-black/40 font-bold text-xs tracking-widest uppercase">Choose Style</h3>
                            <div className="grid grid-cols-2 gap-3">
                                {styles.slice(0, 8).map((style) => (
                                    <motion.button
                                        key={style}
                                        onClick={() => setActiveStyle(style)}
                                        whileTap={{ scale: 0.95 }}
                                        className={`px-4 py-3 border rounded-2xl text-[10px] font-bold tracking-widest transition-all
                                ${activeStyle === style ? 'bg-black text-white border-black shadow-lg' : 'text-black/60 border-black/5 hover:bg-black/5'}
                            `}
                                    >
                                        {style}
                                    </motion.button>
                                ))}
                            </div>
                        </div>

                        <div className="bg-black/5 rounded-2xl p-4 flex flex-col gap-3">
                            <div className="flex justify-between text-[10px] font-bold text-black/40">
                                <span>QUALITY</span>
                                <span>8K ULTRA</span>
                            </div>
                            <div className="h-1 w-full bg-black/10 rounded-full overflow-hidden">
                                <motion.div animate={{ width: '85%' }} className="h-full bg-black" />
                            </div>
                        </div>
                    </div>

                    {/* IMAGE STACK (Bottom Right) */}
                    <div className="h-[240px] relative mt-4 group/stack">
                        <div className="absolute inset-0 flex items-center justify-center">
                            {imageStack.map((item, idx) => (
                                <motion.div
                                    key={item.id}
                                    layout
                                    onClick={() => swapFromStack(idx)}
                                    className="absolute w-[85%] h-full bg-zinc-900 rounded-[40px] border border-white/10 overflow-hidden shadow-2xl cursor-pointer"
                                    style={{
                                        left: `${idx * 20}px`,
                                        zIndex: 30 - idx,
                                        scale: 1 - (idx * 0.08),
                                        opacity: 1 - (idx * 0.2),
                                        translateX: idx * 10
                                    }}
                                    whileHover={{ y: -10, rotate: idx === 0 ? -2 : 0 }}
                                >
                                    <img src={item.src} className="w-full h-full object-cover grayscale group-hover/stack:grayscale-0 transition-all duration-700" alt={item.label} />
                                    <div className="absolute bottom-6 right-6 w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/30 text-white font-bold">
                                        {item.label}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                </div>

            </motion.div>
        </div>
    );
}
