"use client";

import Image from "next/image";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

// Album data
const albums = [
  {
    id: "classroom",
    title: "Our Classroom",
    subtitle: "我們的教室",
    description: "A glimpse into our vibrant learning spaces",
    coverImage: "/images/gallery/center/1.webp",
    photoCount: 40,
    folder: "center",
  },
  {
    id: "halloween",
    title: "Halloween Party",
    subtitle: "萬聖節派對",
    description: "Spooky fun and festive celebrations",
    coverImage: "/images/gallery/halloween/1.webp",
    photoCount: 79,
    folder: "halloween",
  },
  {
    id: "easter",
    title: "Easter Party",
    subtitle: "復活節派對",
    description: "Spring joy and egg-citing activities",
    coverImage: "/images/gallery/easter/8.webp",
    photoCount: 65,
    folder: "easter",
  },
];

export default function PhotoGalleryPage() {
  const [selectedAlbum, setSelectedAlbum] = useState<string | null>(null);
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number>(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const currentAlbum = albums.find((album) => album.id === selectedAlbum);

  const openLightbox = (albumId: string, photoIndex: number) => {
    setSelectedAlbum(albumId);
    setSelectedPhotoIndex(photoIndex);
    setIsLightboxOpen(true);
  };

  const closeLightbox = () => {
    setIsLightboxOpen(false);
  };

  const nextPhoto = () => {
    if (currentAlbum) {
      setSelectedPhotoIndex(
        (prev) => (prev + 1) % currentAlbum.photoCount
      );
    }
  };

  const prevPhoto = () => {
    if (currentAlbum) {
      setSelectedPhotoIndex(
        (prev) =>
          (prev - 1 + currentAlbum.photoCount) % currentAlbum.photoCount
      );
    }
  };

  // Handle keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowRight") nextPhoto();
    if (e.key === "ArrowLeft") prevPhoto();
    if (e.key === "Escape") closeLightbox();
  };

  return (
    <div className="container mx-auto px-4 py-16">
      {/* Header */}
      <div className="mb-12 text-center">
        <h1 className="mb-4 text-4xl font-bold text-navy md:text-5xl">
          Photo Gallery
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-gray-600">
          校園剪影 | Explore our photo albums showcasing daily activities,
          special events, and memorable moments at Sunny Child Care.
        </p>
      </div>

      {/* Album Grid */}
      {!selectedAlbum ? (
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {albums.map((album) => (
            <Card
              key={album.id}
              className="group cursor-pointer overflow-hidden transition-all duration-300 hover:shadow-xl"
              onClick={() => setSelectedAlbum(album.id)}
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={album.coverImage}
                  alt={album.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-0 left-0 p-6 text-white">
                  <h3 className="mb-1 text-2xl font-bold">{album.title}</h3>
                  <p className="text-sm text-gray-200">{album.subtitle}</p>
                </div>
              </div>
              <CardContent className="p-6">
                <p className="mb-2 text-gray-600">{album.description}</p>
                <p className="text-sm font-semibold text-amber">
                  {album.photoCount} photos
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      ) : (
        <>
          {/* Back Button */}
          <Button
            variant="outline"
            onClick={() => setSelectedAlbum(null)}
            className="mb-8"
          >
            <ChevronLeft className="mr-2 h-4 w-4" />
            Back to Albums
          </Button>

          {/* Album Header */}
          <div className="mb-8 text-center">
            <h2 className="mb-2 text-3xl font-bold text-navy">
              {currentAlbum?.title}
            </h2>
            <p className="text-lg text-gray-600">{currentAlbum?.subtitle}</p>
          </div>

          {/* Photo Grid */}
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {currentAlbum &&
              Array.from({ length: currentAlbum.photoCount }, (_, i) => (
                <div
                  key={i}
                  className="group relative aspect-square cursor-pointer overflow-hidden rounded-lg"
                  onClick={() => openLightbox(currentAlbum.id, i)}
                >
                  <Image
                    src={`/images/gallery/${currentAlbum.folder}/${i + 1}.webp`}
                    alt={`${currentAlbum.title} ${i + 1}`}
                    fill
                    sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, 20vw"
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/20" />
                </div>
              ))}
          </div>
        </>
      )}

      {/* Lightbox Dialog */}
      <Dialog open={isLightboxOpen} onOpenChange={setIsLightboxOpen}>
        <DialogContent
          className="max-w-7xl p-0"
          onKeyDown={handleKeyDown}
        >
          <DialogTitle className="sr-only">
            {currentAlbum?.title} - Photo {selectedPhotoIndex + 1}
          </DialogTitle>
          <div className="relative">
            {/* Close Button */}
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-4 top-4 z-10 bg-black/50 text-white hover:bg-black/70"
              onClick={closeLightbox}
            >
              <X className="h-6 w-6" />
            </Button>

            {/* Navigation Buttons */}
            <Button
              variant="ghost"
              size="icon"
              className="absolute left-4 top-1/2 z-10 -translate-y-1/2 bg-black/50 text-white hover:bg-black/70"
              onClick={prevPhoto}
            >
              <ChevronLeft className="h-8 w-8" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-4 top-1/2 z-10 -translate-y-1/2 bg-black/50 text-white hover:bg-black/70"
              onClick={nextPhoto}
            >
              <ChevronRight className="h-8 w-8" />
            </Button>

            {/* Image */}
            {currentAlbum && (
              <div className="relative aspect-[4/3] w-full bg-black">
                <Image
                  src={`/images/gallery/${currentAlbum.folder}/${selectedPhotoIndex + 1}.webp`}
                  alt={`${currentAlbum.title} ${selectedPhotoIndex + 1}`}
                  fill
                  sizes="100vw"
                  className="object-contain"
                  priority
                />
              </div>
            )}

            {/* Photo Counter */}
            <div className="absolute bottom-4 left-1/2 z-10 -translate-x-1/2 rounded-full bg-black/70 px-4 py-2 text-sm text-white">
              {selectedPhotoIndex + 1} / {currentAlbum?.photoCount}
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
