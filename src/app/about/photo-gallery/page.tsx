"use client";

import { useLanguage } from "@/context/language-context";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ChevronLeft, 
  ChevronRight, 
  X, 
  Image as ImageIcon,
  Calendar,
  MapPin
} from "lucide-react";
import Image from "next/image";
import { useState, useEffect, useCallback } from "react";

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

  return (
    <div className="min-h-screen bg-stone-50">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/banners/gallery.jpg"
            alt="Photo Gallery"
            fill
            className="object-cover brightness-[0.7]"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/20 to-stone-50/90" />
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-6 drop-shadow-lg">
              {locale === 'en' ? 'Photo Gallery' : '校園剪影'}
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto font-light leading-relaxed drop-shadow-md">
              {locale === 'en' 
                ? 'Capturing the precious moments of growth, joy, and discovery.' 
                : '記錄成長、喜悅與探索的珍貴時刻。'}
            </p>
          </motion.div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        <AnimatePresence mode="wait">
          {!selectedAlbum ? (
            /* Album Grid */
            <motion.div
              key="albums"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
            >
              {albums.map((album, index) => (
                <motion.div
                  key={album.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="group cursor-pointer bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-stone-100"
                  onClick={() => setSelectedAlbum(album.id)}
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={album.coverImage}
                      alt={album.title[locale]}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
                    
                    <div className="absolute bottom-0 left-0 p-6 w-full text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                      <span className="inline-block px-3 py-1 bg-amber-500/90 backdrop-blur-sm rounded-full text-xs font-medium mb-3">
                        {album.subtitle[locale]}
                      </span>
                      <h3 className="text-2xl font-serif font-bold mb-2">{album.title[locale]}</h3>
                      <div className="flex items-center gap-4 text-sm text-white/80">
                        <span className="flex items-center gap-1">
                          <ImageIcon size={14} />
                          {album.photoCount}
                        </span>
                        <span className="flex items-center gap-1">
                          <Calendar size={14} />
                          {album.date}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-stone-600 leading-relaxed line-clamp-2">
                      {album.description[locale]}
                    </p>
                    <div className="mt-4 flex items-center text-amber-600 font-medium group-hover:translate-x-2 transition-transform">
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
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5 }}
            >
              {/* Header */}
              <div className="mb-12">
                <button
                  onClick={() => setSelectedAlbum(null)}
                  className="group flex items-center text-stone-500 hover:text-amber-600 transition-colors mb-6"
                >
                  <div className="w-8 h-8 rounded-full bg-stone-100 flex items-center justify-center mr-2 group-hover:bg-amber-100 transition-colors">
                    <ChevronLeft size={16} />
                  </div>
                  {locale === 'en' ? 'Back to Albums' : '返回相簿'}
                </button>

                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-stone-200 pb-8">
                  <div>
                    <h2 className="text-4xl font-serif font-bold text-stone-800 mb-3">
                      {currentAlbum?.title[locale]}
                    </h2>
                    <p className="text-xl text-stone-600 max-w-2xl">
                      {currentAlbum?.description[locale]}
                    </p>
                  </div>
                  <div className="flex gap-4 text-stone-500">
                    <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm border border-stone-100">
                      <Calendar size={16} className="text-amber-500" />
                      <span>{currentAlbum?.date}</span>
                    </div>
                    <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm border border-stone-100">
                      <MapPin size={16} className="text-amber-500" />
                      <span>{currentAlbum?.location}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Grid */}
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {currentAlbum &&
                  Array.from({ length: currentAlbum.photoCount }, (_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: i * 0.05 }}
                      className="group relative aspect-square cursor-pointer overflow-hidden rounded-xl bg-stone-200"
                      onClick={() => openLightbox(i)}
                    >
                      <Image
                        src={`/images/gallery/${currentAlbum.folder}/${i + 1}.webp`}
                        alt={`Photo ${i + 1}`}
                        fill
                        sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, 20vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/20" />
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="w-10 h-10 bg-white/90 rounded-full flex items-center justify-center text-stone-800 shadow-lg transform scale-75 group-hover:scale-100 transition-transform">
                          <ImageIcon size={20} />
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
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm"
          >
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 z-50 p-2 text-white/70 hover:text-white hover:bg-white/10 rounded-full transition-colors"
            >
              <X size={32} />
            </button>

            {/* Navigation */}
            <button
              onClick={(e) => { e.stopPropagation(); prevPhoto(); }}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-50 p-3 text-white/70 hover:text-white hover:bg-white/10 rounded-full transition-colors"
            >
              <ChevronLeft size={40} />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); nextPhoto(); }}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-50 p-3 text-white/70 hover:text-white hover:bg-white/10 rounded-full transition-colors"
            >
              <ChevronRight size={40} />
            </button>

            {/* Main Image */}
            <div className="relative w-full h-full max-w-7xl max-h-[90vh] p-4 flex items-center justify-center">
              <motion.div
                key={selectedPhotoIndex}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className="relative w-full h-full"
              >
                <Image
                  src={`/images/gallery/${currentAlbum.folder}/${selectedPhotoIndex + 1}.webp`}
                  alt={`Photo ${selectedPhotoIndex + 1}`}
                  fill
                  className="object-contain"
                  priority
                />
              </motion.div>
            </div>

            {/* Footer Info */}
            <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black/80 to-transparent text-white">
              <div className="container mx-auto flex justify-between items-end">
                <div>
                  <h3 className="text-xl font-bold mb-1">{currentAlbum.title[locale]}</h3>
                  <p className="text-white/70 text-sm">{currentAlbum.subtitle[locale]}</p>
                </div>
                <div className="text-white/90 font-mono">
                  {selectedPhotoIndex + 1} / {currentAlbum.photoCount}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
