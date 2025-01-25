"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export default function LoveOverCoffeeGallery() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  useEffect(() => {
    // Check if user came from the authenticated BFF page
    const checkAuth = () => {
      const auth = sessionStorage.getItem("bff-auth");
      setIsAuthenticated(auth === "true");
    };
    checkAuth();
  }, []);

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl text-white mb-4">
            Please authenticate first
          </h1>
          <Link
            href="/bff"
            className="text-purple-400 hover:text-purple-300 underline"
          >
            Go to login
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-purple-900 p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-4xl font-bold text-white">
            Love over Coffee ☕️
          </h1>
          <Link
            href="/bff"
            className="text-purple-400 hover:text-purple-300 px-4 py-2 rounded-lg border border-purple-400 hover:border-purple-300"
          >
            Back to Gallery
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map((num) => (
            <div
              key={num}
              className="relative aspect-square rounded-lg overflow-hidden group cursor-pointer"
              onClick={() => setSelectedImage(num)}
            >
              <Image
                src={`/images/bff/loc/loc_${num}.jpg`}
                alt={`Love over Coffee ${num}`}
                fill
                className="object-cover transform group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
            </div>
          ))}
        </div>

        {/* Fullscreen Image Modal */}
        {selectedImage && (
          <div
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative w-full max-w-5xl aspect-square">
              <Image
                src={`/images/bff/loc/loc_${selectedImage}.jpg`}
                alt={`Love over Coffee ${selectedImage}`}
                fill
                className="object-contain"
              />
            </div>
            <button
              className="absolute top-4 right-4 text-white text-4xl hover:text-purple-400 transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              ×
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
