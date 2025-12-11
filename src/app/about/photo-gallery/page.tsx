"use client";

import { useLanguage } from "@/context/language-context";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { 
  ChevronLeft, 
  ChevronRight, 
  X, 
  Image as ImageIcon,
  Calendar,
  MapPin,
  Maximize2
} from "lucide-react";
import Image from "next/image";
import { useState, useEffect, useCallback, useRef } from "react";

// Album data with bilingual support
const albums = [
  {
    id: "classroom",
    title: { en: "Our Classroom", zh: "我們的教室" },
    subtitle: { en: "Learning Environments", zh: "學習環境" },
    description: { 
      en: "A glimpse into our vibrant learning spaces designed to spark curiosity and creativity.", 
      zh: "一窺我們充滿活力、旨在激發好奇心和創造力的學習空間。" 
    },
    coverImage: "/images/gallery/center/1.webp",
    photoCount: 40,
    folder: "center",
    date: "2024",
    location: "Sunny Child Care"
  },
  {
    id: "halloween",
    title: { en: "Halloween Party", zh: "萬聖節派對" },
    subtitle: { en: "Events & Celebrations", zh: "節慶活動" },
    description: { 
      en: "Spooky fun, creative costumes, and festive celebrations with our little ones.", 
      zh: "充滿樂趣的裝扮、創意服裝，以及與孩子們共度的歡樂節慶。" 
    },
    coverImage: "/images/gallery/halloween/1.webp",
    photoCount: 79,
    folder: "halloween",
    date: "Oct 2024",
    location: "Sunny Child Care"
  },
  {
    id: "easter",
    title: { en: "Easter Party", zh: "復活節派對" },
    subtitle: { en: "Events & Celebrations", zh: "節慶活動" },
    description: { 
      en: "Spring joy, egg hunts, and exciting activities celebrating new beginnings.", 
      zh: "春天的喜悅、尋蛋遊戲，以及慶祝新開始的精彩活動。" 
    },
    coverImage: "/images/gallery/easter/8.webp",
    photoCount: 65,
    folder: "easter",
    date: "Apr 2024",
    location: "Sunny Child Care"
  },
];

export default function PhotoGalleryPage() {
  const { locale } = useLanguage();
  const [selectedAlbum, setSelectedAlbum] = useState<string | null>(null);
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number>(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const currentAlbum = albums.find((album) => album.id === selectedAlbum);

  const openLightbox = (index: number) => {
    setSelectedPhotoIndex(index);
    setIsLightboxOpen(true);
  };

  const closeLightbox = () => {
    setIsLightboxOpen(false);
  };

  const nextPhoto = useCallback(() => {
    if (currentAlbum) {
      setSelectedPhotoIndex((prev) => (prev + 1) % currentAlbum.photoCount);
    }
  }, [currentAlbum]);

  const prevPhoto = useCallback(() => {
    if (currentAlbum) {
      setSelectedPhotoIndex(
        (prev) => (prev - 1 + currentAlbum.photoCount) % currentAlbum.photoCount
      );
    }
  }, [currentAlbum]);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isLightboxOpen) return;
      if (e.key === "ArrowRight") nextPhoto();
      if (e.key === "ArrowLeft") prevPhoto();
      if (e.key === "Escape") closeLightbox();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isLightboxOpen, nextPhoto, prevPhoto]);

  // Lock body scroll when lightbox is open
  useEffect(() => {
    if (isLightboxOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isLightboxOpen]);

  // Scroll to top when album is selected
  useEffect(() => {
    if (selectedAlbum) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [selectedAlbum]);

  return (
    <div className="min-h-screen bg-stone-50" ref={containerRef}>
      {/* Hero Section with Parallax */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <motion.div 
          style={{ y, opacity }}
          className="absolute inset-0 z-0"
        >
          <Image
            src="/images/banners/gallery.jpg"
            alt="Photo Gallery"
            fill
            className="object-cover brightness-[0.6]"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-stone-50" />
        </motion.div>

        <div className="relative z-10 container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <span className="inline-block py-1 px-3 border border-white/30 rounded-full text-white/80 text-sm tracking-widest uppercase mb-4 backdrop-blur-sm">
              {locale === 'en' ? 'Memories' : '美好回憶'}
            </span>
            <h1 className="text-5xl md:text-8xl font-serif font-bold text-white mb-6 drop-shadow-2xl tracking-tight">
              {locale === 'en' ? 'Photo Gallery' : '校園剪影'}
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto font-light leading-relaxed drop-shadow-lg">
              {locale === 'en' 
                ? 'Capturing the precious moments of growth, joy, and discovery.' 
                : '記錄成長、喜悅與探索的珍貴時刻。'}
            </p>
          </motion.div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16 -mt-20 relative z-20">
        <AnimatePresence mode="wait">
          {!selectedAlbum ? (
            /* Album Grid */
            <motion.div
              key="albums"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="grid gap-10 md:grid-cols-2 lg:grid-cols-3"
            >
              {albums.map((album, index) => (
                <motion.div
                  key={album.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.15, duration: 0.6 }}
                  className="group cursor-pointer bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 ease-out transform hover:-translate-y-2"
                  onClick={() => setSelectedAlbum(album.id)}
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={album.coverImage}
                      alt={album.title[locale]}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover transition-transform duration-1000 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 transition-opacity duration-300" />
                    
                    <div className="absolute bottom-0 left-0 p-8 w-full text-white">
                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                      >
                        <span className="inline-block px-3 py-1 bg-amber-500/90 backdrop-blur-md rounded-full text-xs font-medium mb-3 tracking-wide shadow-sm">
                          {album.subtitle[locale]}
                        </span>
                        <h3 className="text-3xl font-serif font-bold mb-3 tracking-wide">{album.title[locale]}</h3>
                        <div className="flex items-center gap-6 text-sm text-white/90 font-medium">
                          <span className="flex items-center gap-2">
                            <ImageIcon size={16} className="text-amber-400" />
                            {album.photoCount} {locale === 'en' ? 'Photos' : '張照片'}
                          </span>
                          <span className="flex items-center gap-2">
                            <Calendar size={16} className="text-amber-400" />
                            {album.date}
                          </span>
                        </div>
                      </motion.div>
                    </div>
                  </div>
                  <div className="p-8 bg-white relative">
                    <p className="text-stone-600 leading-relaxed line-clamp-2 text-lg font-light">
                      {album.description[locale]}
                    </p>
                    <div className="mt-6 flex items-center text-amber-600 font-medium group-hover:translate-x-2 transition-transform uppercase tracking-wider text-sm">
                      {locale === 'en' ? 'View Album' : '查看相簿'} 
                      <ChevronRight size={16} className="ml-1" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          ) : (
            /* Photo Grid */
            <motion.div
              key="photos"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-3xl shadow-xl p-8 md:p-12 min-h-[80vh]"
            >
              {/* Header */}
              <div className="mb-12 border-b border-stone-100 pb-8">
                <button
                  onClick={() => setSelectedAlbum(null)}
                  className="group flex items-center text-stone-500 hover:text-amber-600 transition-colors mb-8 font-medium"
                >
                  <div className="w-10 h-10 rounded-full bg-stone-50 flex items-center justify-center mr-3 group-hover:bg-amber-50 transition-colors border border-stone-200 group-hover:border-amber-100">
                    <ChevronLeft size={20} />
                  </div>
                  {locale === 'en' ? 'Back to Albums' : '返回相簿'}
                </button>

                <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
                  <div>
                    <motion.h2 
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-4xl md:text-5xl font-serif font-bold text-stone-800 mb-4"
                    >
                      {currentAlbum?.title[locale]}
                    </motion.h2>
                    <motion.p 
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 }}
                      className="text-xl text-stone-500 max-w-3xl font-light leading-relaxed"
                    >
                      {currentAlbum?.description[locale]}
                    </motion.p>
                  </div>
                  <motion.div 
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                    className="flex flex-wrap gap-4 text-stone-500"
                  >
                    <div className="flex items-center gap-2 bg-stone-50 px-5 py-2.5 rounded-full border border-stone-100">
                      <Calendar size={18} className="text-amber-500" />
                      <span className="font-medium">{currentAlbum?.date}</span>
                    </div>
                    <div className="flex items-center gap-2 bg-stone-50 px-5 py-2.5 rounded-full border border-stone-100">
                      <MapPin size={18} className="text-amber-500" />
                      <span className="font-medium">{currentAlbum?.location}</span>
                    </div>
                  </motion.div>
                </div>
              </div>

              {/* Grid */}
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {currentAlbum &&
                  Array.from({ length: currentAlbum.photoCount }, (_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0.9, y: 20 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      transition={{ delay: i * 0.03, duration: 0.4 }}
                      className="group relative aspect-square cursor-pointer overflow-hidden rounded-xl bg-stone-100 shadow-sm hover:shadow-md transition-all"
                      onClick={() => openLightbox(i)}
                    >
                      <Image
                        src={`/images/gallery/${currentAlbum.folder}/${i + 1}.webp`}
                        alt={`${currentAlbum.title.en} photo ${i + 1}`}
                        fill
                        sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, 20vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/30" />
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white border border-white/30 transform scale-75 group-hover:scale-100 transition-transform">
                          <Maximize2 size={24} />
                        </div>
                      </div>
                    </motion.div>
                  ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {isLightboxOpen && currentAlbum && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/98 backdrop-blur-xl"
          >
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 z-50 p-3 text-white/50 hover:text-white hover:bg-white/10 rounded-full transition-all duration-300"
            >
              <X size={32} />
            </button>

            {/* Navigation */}
            <button
              onClick={(e) => { e.stopPropagation(); prevPhoto(); }}
              className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-50 p-4 text-white/50 hover:text-white hover:bg-white/10 rounded-full transition-all duration-300"
            >
              <ChevronLeft size={48} strokeWidth={1} />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); nextPhoto(); }}
              className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-50 p-4 text-white/50 hover:text-white hover:bg-white/10 rounded-full transition-all duration-300"
            >
              <ChevronRight size={48} strokeWidth={1} />
            </button>

            {/* Main Image */}
            <div className="relative w-full h-full max-w-[90vw] max-h-[85vh] p-4 flex items-center justify-center">
              <motion.div
                key={selectedPhotoIndex}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="relative w-full h-full"
              >
                <Image
                  src={`/images/gallery/${currentAlbum.folder}/${selectedPhotoIndex + 1}.webp`}
                  alt={`${currentAlbum.title.en} photo ${selectedPhotoIndex + 1}`}
                  fill
                  className="object-contain"
                  priority
                  sizes="90vw"
                />
              </motion.div>
            </div>

            {/* Footer Info */}
            <div className="absolute bottom-0 left-0 w-full p-8 bg-gradient-to-t from-black via-black/50 to-transparent text-white">
              <div className="container mx-auto flex flex-col md:flex-row justify-between items-end gap-4">
                <div>
                  <motion.h3 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-2xl font-serif font-bold mb-2"
                  >
                    {currentAlbum.title[locale]}
                  </motion.h3>
                  <p className="text-white/70 text-sm tracking-wide uppercase">{currentAlbum.subtitle[locale]}</p>
                </div>
                <div className="text-white/50 font-mono text-sm tracking-widest border border-white/20 px-4 py-1 rounded-full">
                  {String(selectedPhotoIndex + 1).padStart(2, '0')} / {currentAlbum.photoCount}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
