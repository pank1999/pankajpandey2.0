"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export default function SkyBeachGallery() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

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
            Sky Beach Memories 🌅
          </h1>
          <Link
            href="/bff"
            className="text-purple-400 hover:text-purple-300 px-4 py-2 rounded-lg border border-purple-400 hover:border-purple-300"
          >
            Back to Gallery
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map((num) => (
            <div
              key={num}
              className="relative aspect-square rounded-lg overflow-hidden group"
            >
              <Image
                src={`/images/bff/skybeach/skybeach_pvr_${num}.jpg`}
                alt={`Sky Beach Memory ${num}`}
                fill
                className="object-cover transform group-hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
