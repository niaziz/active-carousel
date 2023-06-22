"use client";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/outline";
import Image from "next/image";
import image1 from "@/public/Suri_There_is_no_pair_real_on_the_virtual_for_Fu_view_book.jpg";
import image2 from "@/public/Suri_There_is_no_pair_real_on_the_virtual_for_Fu_view_book_1.jpg";
import image3 from "@/public/Suri_There_is_no_pair_real_on_the_virtual_for_Fu_view_book._The_96251220-2d7a-48b8-893b-7c5820e59679.jpeg";
import image4 from "@/public/image-4.jpeg";
import image5 from "@/public/image-5.jpeg";
import image6 from "@/public/image-6.jpeg";
import image7 from "@/public/image-7.jpeg";
import { useState } from "react";
import { motion, AnimatePresence, MotionConfig } from "framer-motion";

const imgs = [image1, image2, image3, image4, image5, image6, image7];
export default function Home() {
  const [index, setIndex] = useState(0);
  return (
    <MotionConfig transition={{ duration: 0.7, ease: [0.32, 0.72, 0, 1] }}>
      <main className=" bg-black">
        <div className="lg:px-52 bg-black h-[100vh] py-10">
          <div className="h-[80vh] mx-auto flex flex-col mx-w-7xl justify-center items-center object-cover">
            <div className="relative overflow-hidden">
              <motion.div animate={{ x: `-${index * 100}%` }} className="flex">
                {imgs.map((image) => (
                  <Image
                    src={image}
                    key="image"
                    alt="images"
                    className="h-full aspect-[3/2] object-cover"
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
            <div className="flex inset-x-0 h-14 absolute bottom-2 justify-center overflow-hidden">
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
                      className={`h-full  object-cover w-auto
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
