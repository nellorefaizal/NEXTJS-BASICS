import React from "react";
import Link from "next/link";
import image from "@/images/banner.svg";
import Image from "next/image";

export default function Coursepage() {
  return (
    <>
        <main>
            <h1>Course page</h1>
        </main>
        <main>
            <ul>
                <li>
                    <Link href={`/course/course-details/course-1`}>course 1</Link>
                </li>
                <li>
                    <Link href={'/course/course-details/course-2'}>course 2</Link>
                </li>
                <li>
                    <Link href={'/course/course-details/course-3'}>course 3</Link>
                </li>
                <li>
                    <Link href={'/course/course-details/course-4'}>course 4</Link>
                </li>
                <li>
                    <Link href={'/course/course-details/course-5'}> course 5</Link>
                </li>
            </ul>
    



            {/* <div
                style={{
                height: 500,
                width: 500,
                position: "relative",
                }}
            > */}
                {/* <Image fill  alt='course image' src={image.src}/> */}
                {/* <Image
                src="https://storage.googleapis.com/fir-auth-1c3bc.appspot.com/1692255251854-xbox.jpg"
                fill
                alt="gamming"
                /> */}
            {/* </div> */}
            {/* <img src={image.src}/> */}
        </main>
    </>
  );
}
