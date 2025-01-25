"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";

export default function BFFPage() {
  const [code, setCode] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (code === "MJ") {
      setIsAuthenticated(true);
      // Store authentication state
      sessionStorage.setItem("bff-auth", "true");
    } else {
      alert("Invalid code! Try again.");
      setCode("");
    }
  };

  useEffect(() => {
    // Check if already authenticated
    const auth = sessionStorage.getItem("bff-auth");
    if (auth === "true") {
      setIsAuthenticated(true);
    }
  }, []);

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center relative">
        <BackgroundBeamsWithCollision>
          <div className="relative z-10 bg-black/10 p-8 rounded-lg backdrop-blur-sm">
            <h1 className="text-3xl font-bold mb-6 text-center text-white">
              BFF Access
            </h1>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="password"
                value={code}
                onChange={(e) => setCode(e.target.value)}
                placeholder="Enter the secret code"
                className="w-full p-2 rounded border bg-white/10 text-white border-white/20"
              />
              <button
                type="submit"
                className="w-full bg-purple-600 text-white p-2 rounded hover:bg-purple-700 transition"
              >
                Enter
              </button>
            </form>
          </div>
        </BackgroundBeamsWithCollision>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-purple-900 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-white mb-8 text-center">
          Welcome, bestie! 💖
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Link href="/bff/sky-beach" className="block">
            <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm transform hover:scale-105 transition-transform duration-300">
              <h2 className="text-xl font-semibold text-white mb-4">
                Sky-beach
              </h2>
              <div className="aspect-video relative rounded-lg overflow-hidden">
                <Image
                  src="/images/bff/skybeach/skybeach_pvr_15.jpg"
                  alt="Sky Beach Preview"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </Link>

          <Link href="/bff/fun-times" className="block">
            <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm transform hover:scale-105 transition-transform duration-300">
              <h2 className="text-xl font-semibold text-white mb-4">
                Fun Times
              </h2>
              <div className="aspect-video relative rounded-lg overflow-hidden">
                {/* <Image
                  src="/videos/fun_video_1.jpg"
                  alt="Fun Times Preview"
                  fill
                  className="object-cover"
                /> */}
                <div className="absolute inset-0 flex items-center justify-center bg-black/30 hover:bg-black/40 transition-colors">
                  <span className="text-4xl">🎥</span>
                </div>
              </div>
            </div>
          </Link>

          {/* Love over coffee */}
          <Link href="/bff/love-over-coffee" className="block">
            <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm transform hover:scale-105 transition-transform duration-300">
              <h2 className="text-xl font-semibold text-white mb-4">
                Love over coffee
              </h2>
              <div className="aspect-video relative rounded-lg overflow-hidden">
                <Image
                  src="/images/bff/loc/loc_1.jpg"
                  alt="Love over coffee Preview"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
