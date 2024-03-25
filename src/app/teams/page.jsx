"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import React from "react";
import Image from "next/image";

export default function OurTeams() {
  const [team, setTeam] = useState([]);

  const onFetchTeam = async () => {
    const res = await axios.get(`https://randomuser.me/api/?results=6`);
    console.log(res);
    setTeam(res.data.results);
  };

  useEffect(() => {
    onFetchTeam();
  }, []);

  return (
    <section className="h-auto py-6 dark:bg-gray-100 dark:text-gray-800">
      <div className="container mx-auto flex flex-col items-center justify-center space-y-8 p-4 mobile:p-10">
        <h1 className="text-center text-4xl font-bold leading-none mobile:text-5xl">
          Our team
        </h1>
        <p className="max-w-2xl text-center font-sans text-gray-500">
          The talented people behind the scene
        </p>
        <div className="flex flex-row flex-wrap-reverse justify-center">
          {team.map((team, index) => {
            return (
              <div
                className="m-8 flex flex-col justify-center text-center"
                key={index}
              >
                <Image
                  src={team.picture.large}
                  width={100}
                  height={100}
                  loading="lazy"
                  className="mb-4 h-24 w-24 flex-shrink-0 self-center rounded-full bg-cover bg-center dark:bg-gray-500"
                  alt="image"
                />
                <p className="text-xl font-semibold leading-tight">
                  {" "}
                  {team.name.last}{" "}
                </p>
                <p className="dark:text-gray-600">{team.email}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
