"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export default function FunTimesGallery() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

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

  const videos = [
    {
      title: "Fun Video 1",
      src: "/videos/fun_video_1.mp4",
      thumbnail: "/videos/fun_video_1.jpg",
    },
    {
      title: "Fun Video 2",
      src: "/videos/fun_video_2.mp4",
      thumbnail: "/videos/fun_video_2.jpg",
    },
    {
      title: "Fun Video 3",
      src: "/videos/fun_video_3.mp4",
      thumbnail: "/videos/fun_video_3.jpg",
    },
    {
      title: "Fun Video 4",
      src: "/videos/fun_video_4.mp4",
      thumbnail: "/videos/fun_video_4.jpg",
    },
    // Add more videos here
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-purple-900 p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-4xl font-bold text-white">Fun Times Videos 🎥</h1>
          <Link
            href="/bff"
            className="text-purple-400 hover:text-purple-300 px-4 py-2 rounded-lg border border-purple-400 hover:border-purple-300"
          >
            Back to Gallery
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {videos.map((video, index) => (
            <div
              key={index}
              className="bg-white/10 p-4 rounded-lg backdrop-blur-sm group"
            >
              <h2 className="text-xl font-semibold text-white mb-4">
                {video.title}
              </h2>
              <div className="aspect-video relative rounded-lg overflow-hidden">
                {selectedVideo === video.src ? (
                  <video
                    controls
                    autoPlay
                    className="w-full h-full"
                    onEnded={() => setSelectedVideo(null)}
                  >
                    <source src={video.src} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                ) : (
                  <div
                    className="relative w-full h-full cursor-pointer"
                    onClick={() => setSelectedVideo(video.src)}
                  >
                    {/* <Image
                      src={video.thumbnail}
                      alt={video.title}
                      fill
                      className="object-cover transform group-hover:scale-105 transition-transform duration-300"
                    /> */}
                    <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/40 transition-colors">
                      <span className="text-4xl">▶️</span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
