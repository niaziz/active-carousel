"use client";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/outline";
import Image from "next/image";
import image1 from "@/public/1873.png";
import image2 from "@/public/1876.png";
import image3 from "@/public/3969 1.png";
import image4 from "@/public/1305448.jpg";

import { useState } from "react";
import { motion, AnimatePresence, MotionConfig } from "framer-motion";

const imgs = [image1, image2, image3, image4];
export default function Home() {
  const [index, setIndex] = useState(0);
  return (
    <MotionConfig transition={{ duration: 0.7, ease: [0.32, 0.72, 0, 1] }}>
      <main className=" bg-black">
        <div className="lg:px-24 bg-black h-[100vh] py-10">
          <div className="h-[79vh] mx-auto flex flex-col mx-w-7xl justify-center items-center object-fill">
            <div className="relative overflow-hidden">
              <motion.div animate={{ x: `-${index * 100}%` }} className="flex">
                {imgs.map((image) => (
                  <Image
                    src={image}
                    key="image"
                    alt="images"
                    className="h-full aspect-video object-cover"
                  />
                ))}
              </motion.div>
              <AnimatePresence initial={false}>
                {index > 0 && (
                  <motion.button
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.7 }}
                    exit={{ opacity: 0, pointerEvents: "none" }}
                    whileHover={{ opacity: 1 }}
                    className="absolute flex justify-center items-center left-4 top-1/2 rounded-full h-10 w-10 bg-white"
                    onClick={(e) => setIndex(index - 1)}
                  >
                    <ChevronLeftIcon className="h-6 w-6" />
                  </motion.button>
                )}
              </AnimatePresence>
              <AnimatePresence initial={false}>
                {index + 1 < imgs.length && (
                  <motion.button
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.7 }}
                    exit={{ opacity: 0, pointerEvents: "none" }}
                    whileHover={{ opacity: 1 }}
                    className="absolute flex justify-center items-center right-4 top-1/2 rounded-full h-10 w-10 bg-white"
                    onClick={(e) => setIndex(index + 1)}
                  >
                    <ChevronRightIcon className="h-6 w-6" />
                  </motion.button>
                )}
              </AnimatePresence>
            </div>
            <div className="flex inset-x-0 h-20 absolute bottom-2 justify-center overflow-hidden">
              <motion.div
                animate={{ x: `-${index * 100}%` }}
                className="flex aspect-[3/2]"
              >
                {imgs.map((image, i) => (
                  <motion.button
                    key="image"
                    className={` shrink-0`}
                    onClick={() => setIndex(i)}
                  >
                    <Image
                      src={image}
                      alt="images"
                      className={`h-full  object-cover w-auto ${
                        i !== index ? "aspect-[3/2]" : "aspect-[3/1]"
                      }`}
                    />
                  </motion.button>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </main>
    </MotionConfig>
  );
}
