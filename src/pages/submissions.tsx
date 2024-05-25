/* eslint-disable @typescript-eslint/restrict-plus-operands */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import Navbar from "./components/navbar";
import Image from "next/image";
import {
  ArrowSmRightIcon,
  EyeOffIcon,
  ChartSquareBarIcon,
} from "@heroicons/react/solid";
import Link from "next/link";
import Head from "next/head";

interface TeamMember {
  name: string;
  age: string;
  grade: string;
  school: string;
}

interface Team {
  teamName: string;
  teamMembers: string; // This will be parsed into an array of TeamMember
  q11: string;
  q10: string;
  q13: string;
  q12: string;
  q15: string;
  q14: string;
  q17: string;
  q16: string;
  q19: string;
  q18: string;
  email: string;
  q1: string;
  image: string;
  q2: string;
  q3: string;
  q4: string;
  q5: string;
  q6: string;
  q7: string;
  q8: string;
  q9: string;
  started: string;
  q20: string;
  q22: string;
  q21: string;
  q24: string;
  q23: string;
  q25: string;
  username: string;
}

type TeamsData = Record<string, Team[]>;

const SubmissionsTable = () => {
  const { data: session } = useSession();

  const [submissions, setSubmissions] = useState<TeamsData>({});

  useEffect(() => {
    const fetchSubmissions = async () => {
      const res = await fetch("/api/submissions");
      const data: TeamsData = await res.json();
      // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
      setSubmissions(data);
    };
    void fetchSubmissions();
  }, []);

  const totalCorrect = (
    q1,
    q2,
    q3,
    q4,
    q5,
    q6,
    q7,
    q8,
    q9,
    q10,
    q11,
    q12,
    q13,
    q14,
    q15,
    q16,
    q17,
    q18,
    q19,
    q20,
    q21,
    q22,
    q23,
    q24,
    q25
  ) => {
    let totalCorrect = 0;

    if (q1 === '"31"') {
      totalCorrect = totalCorrect + 1;
    }

    if (q2 === '"14"') {
      totalCorrect = totalCorrect + 1;
    }

    if (q3 === '"1/2"') {
      totalCorrect = totalCorrect + 1;
    }

    if (q4 === '"1152"') {
      totalCorrect = totalCorrect + 1;
    }

    if (q5 === '"2940"') {
      totalCorrect = totalCorrect + 1;
    }
    if (q6 === '"39"') {
      totalCorrect = totalCorrect + 1;
    }
    if (q7 === '"3"') {
      totalCorrect = totalCorrect + 1;
    }
    if (q8 === '"44"') {
      totalCorrect = totalCorrect + 1;
    }
    if (q9 === '"14"') {
      totalCorrect = totalCorrect + 1;
    }
    if (q10 === '"1011"') {
      totalCorrect = totalCorrect + 1;
    }
    if (q11 === '"339"') {
      totalCorrect = totalCorrect + 1;
    }
    if (q12 === '"3/7"') {
      totalCorrect = totalCorrect + 1;
    }
    if (q13 === '"18/19"') {
      totalCorrect = totalCorrect + 1;
    }
    if (q14 === '"513"') {
      totalCorrect = totalCorrect + 1;
    }
    if (q15 === '"272"') {
      totalCorrect = totalCorrect + 1;
    }

    if (q16 === '"8"') {
      totalCorrect = totalCorrect + 1;
    }
    if (q17 === '"5426509"') {
      totalCorrect = totalCorrect + 1;
    }
    if (q18 === '"42"') {
      totalCorrect = totalCorrect + 1;
    }
    if (q19 === '"30"') {
      totalCorrect = totalCorrect + 1;
    }
    if (q20 === '"129"') {
      totalCorrect = totalCorrect + 1;
    }
    if (q21 === '"49/25"') {
      totalCorrect = totalCorrect + 1;
    }
    if (q22 === '"8"') {
      totalCorrect = totalCorrect + 1;
    }

    if (q23 === '"2111"') {
      totalCorrect = totalCorrect + 1;
    }
    if (q24 === '"5977/48"') {
      totalCorrect = totalCorrect + 1;
    }
    if (q25 === '"34"') {
      totalCorrect = totalCorrect + 1;
    }

    return `Total correct: ${totalCorrect}`;
  };

  // Get the number of teams
  const numTeams = Object.keys(submissions).length;

  // Calculate the total number of team members
  const totalTeamMembers = Object.values(submissions).reduce((total, teams) => {
    return (
      total +
      teams.reduce((teamTotal, team) => {
        const members: TeamMember[] = JSON.parse(team.teamMembers);
        return teamTotal + members.length;
      }, 0)
    );
  }, 0);

  const getAllEmails = (submissions: TeamsData): string => {
    const emails: string[] = [];
    Object.values(submissions).forEach((teams) => {
      teams.forEach((team) => {
        emails.push(team.email);
      });
    });
    return emails.join(", ");
  };

  return (
    <>
      {session?.user.email === "23evanchang@gmail.com" ||
      session?.user.email === "kk23907751@gmail.com" ||
      session?.user.email === "billchanghaofei@gmail.com" ? (
        <>
          <Head>
            <title>User Submissions</title>
          </Head>
          <main className="min-h-[100vh] overflow-hidden bg-gray-400 font-satoshi duration-150 dark:bg-gray-900">
            <Navbar />
            <div className="z-2 pattern-cross absolute h-[calc(100vh-3.7rem)] w-full duration-150 pattern-bg-gray-300 pattern-gray-500 pattern-opacity-20 pattern-size-8 dark:pattern-gray-700 dark:pattern-bg-gray-900"></div>

            <div className="scrollbar relative z-10 h-[calc(100vh-3.7rem)] overflow-scroll p-4">
              <div className="mb-4 grid w-full border-collapse grid-cols-2 overflow-hidden rounded-2xl bg-gray-200 p-4 dark:divide-gray-800 dark:bg-gray-700">
                <div>
                  <h1 className="flex items-center gap-1 text-lg font-semibold">
                    <ChartSquareBarIcon className="h-8 w-8" /> TEST STATISTICS
                  </h1>
                  <div className="mt-2 flex gap-2">
                    <div className="my-1 rounded-md bg-gray-300 px-2 py-1 dark:bg-gray-800">
                      Total Number of Teams: {numTeams}
                    </div>
                    <div className="my-1 rounded-md bg-gray-300 px-2 py-1 dark:bg-gray-800">
                      Total Number of Team Members: {totalTeamMembers}
                    </div>
                  </div>
                </div>
                <div className="overflow-hidden rounded-md bg-gray-300 shadow-inner dark:bg-gray-800">
                  <p className="scrollbar h-20 overflow-y-scroll p-3 text-sm">
                    {getAllEmails(submissions)}
                  </p>
                </div>
              </div>

              <table className="w-full border-collapse divide-y divide-gray-200 overflow-hidden rounded-2xl border border-gray-300 dark:divide-gray-800 dark:border-gray-600">
                <thead className="bg-gray-200 text-gray-500 dark:bg-gray-800 dark:text-gray-300">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                      User
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider ">
                      Team Members
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider ">
                      Team Name
                    </th>

                    <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider ">
                      # Correct
                    </th>
                    {Array.from({ length: 25 }, (_, i) => i + 1).map((q) => (
                      <th
                        key={"question" + q.toString()}
                        className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider "
                      >
                        Q{q}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200  dark:divide-gray-700 ">
                  {Object.entries<Record<string, Submission[]>>(
                    submissions
                  ).map((user) => (
                    <tr
                      key={user[1][0].username}
                      className="odd:bg-gray-100 even:bg-gray-200 dark:odd:bg-[#2d394a] dark:even:bg-gray-800"
                    >
                      <td className="flex flex-row items-center gap-4 whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">
                        <Image
                          alt="pfp"
                          src={user[1][0].image}
                          className="inline rounded-full"
                          height={50}
                          width={50}
                        />
                        <div className="flex flex-col">
                          <div className="text-lg">{user[1][0].username}</div>
                          <div>{user[1][0].email}</div>
                        </div>
                      </td>
                      <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-800 dark:text-gray-100">
                        {JSON.parse(user[1][0]?.teamMembers).map((members) => (
                          <div key={members.name}>
                            <div className="my-1 rounded-xl bg-gray-300 px-2 py-1 dark:bg-gray-500">
                              <p>
                                <span className="font-semibold">Name:</span>{" "}
                                {members.name}
                              </p>
                              <p>
                                {" "}
                                <span className="font-semibold">Age:</span>{" "}
                                {members.age}
                              </p>
                              <p>
                                {" "}
                                <span className="font-semibold">
                                  Grade:
                                </span>{" "}
                                {members.grade}
                              </p>
                              <p>
                                {" "}
                                <span className="font-semibold">
                                  School:
                                </span>{" "}
                                {members.school}
                              </p>
                            </div>
                          </div>
                        ))}
                      </td>
                      <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-800 dark:text-gray-100">
                        {user[1][0].teamName}
                      </td>

                      <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-800 dark:text-gray-100">
                        {totalCorrect(
                          user[1][0].q1,
                          user[1][0].q2,
                          user[1][0].q3,
                          user[1][0].q4,
                          user[1][0].q5,
                          user[1][0].q6,
                          user[1][0].q7,
                          user[1][0].q8,
                          user[1][0].q9,
                          user[1][0].q10,
                          user[1][0].q11,
                          user[1][0].q12,
                          user[1][0].q13,
                          user[1][0].q14,
                          user[1][0].q15,
                          user[1][0].q16,
                          user[1][0].q17,
                          user[1][0].q18,
                          user[1][0].q19,
                          user[1][0].q20,
                          user[1][0].q21,
                          user[1][0].q22,
                          user[1][0].q23,
                          user[1][0].q24,
                          user[1][0].q25
                        )}
                        /25
                      </td>
                      {Array.from({ length: 25 }, (_, i) => i + 1).map((q) => (
                        <td
                          key={
                            user[1][0].teamName.toString() +
                            user[1][0][`q${q}`].toString()
                          }
                          className="whitespace-nowrap px-6 py-4 text-sm text-gray-800 dark:text-gray-100"
                        >
                          {user[1][0][`q${q}`]
                            .replace('"', "")
                            .replace('"', "")}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </main>
        </>
      ) : (
        <>
          <Head>
            <title>Error 404</title>
          </Head>
          <div className="relative min-h-screen overflow-hidden bg-gradient-to-tr from-red-700 via-red-600 to-red-600 font-general dark:from-red-900 dark:via-red-700 dark:to-red-500">
            <Navbar />
            <div className="z-5 pattern-opacity-90 pattern-dots absolute h-[100vh] w-[100vw] duration-150 pattern-bg-gray-500 pattern-gray-700 pattern-size-6 dark:pattern-bg-gray-700 dark:pattern-gray-900"></div>

            <header className="mx-auto max-w-7xl py-6 px-4 text-center sm:px-6 md:pt-24 md:text-left lg:px-8">
              <div className="relative z-10 grid md:grid-cols-2 md:gap-8">
                <div className="my-auto ">
                  <div className="pb-6 text-3xl font-bold text-white lg:text-4xl ">
                    <EyeOffIcon className="mx-auto my-auto mb-4 h-12 w-12 rounded-2xl bg-gradient-to-tr  from-red-500 via-red-600 to-red-600 p-2 text-white drop-shadow-lg dark:from-red-500 dark:to-red-600 md:mx-0"></EyeOffIcon>
                    {"This page doesn't exist!"}
                  </div>
                  <div className="pb-4 text-lg font-semibold text-gray-100 md:max-w-xl  lg:pb-8 lg:text-2xl">
                    Sorry about that! Please return to the portal.
                  </div>
                  <Link href="/" className=" md:mr-4 ">
                    <button className="mx-auto flex transform select-none rounded-xl border border-transparent bg-red-600 py-3 px-4  text-base font-semibold text-white drop-shadow-lg duration-150 ease-in-out hover:scale-105 hover:bg-red-700 hover:text-gray-100 dark:bg-red-600 dark:text-gray-100 dark:hover:bg-red-700 dark:hover:text-red-400 md:mx-0 md:text-lg dark:lg:bg-red-600">
                      Back to home{" "}
                      <ArrowSmRightIcon className="my-auto ml-2 h-5 w-5"></ArrowSmRightIcon>
                    </button>
                  </Link>
                </div>
                <div className="relative mt-12 md:mt-0">
                  <Image
                    src="/images/error.webp"
                    className="relative z-10 mx-auto w-72 select-none object-contain md:w-96"
                    alt="404"
                    height={400}
                    width={400}
                  />
                  <div className="animate-blob1 absolute inset-0 left-0 right-0 top-0 bottom-0 transform-gpu rounded-full bg-red-400 opacity-[15%] blur-2xl dark:bg-red-500 "></div>
                </div>
              </div>
            </header>
          </div>
        </>
      )}
    </>
  );
};
export default SubmissionsTable;
