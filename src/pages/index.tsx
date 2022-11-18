import { type NextPage } from "next";
import Head from "next/head";
import { useState } from "react";

const Home: NextPage = () => {
  const [processing, setProcessing] = useState(false);
  const [fiveWords, setfiveWords] = useState("");
  const [predictedWord, setPredictedWord] = useState("");

  return (
    <>
      <Head>
        <title>Next word predictor</title>
      </Head>
      <main className="container mx-auto flex min-h-screen flex-col items-center justify-center p-4">
        <div className="relative flex flex-col items-center gap-8">
          <div className="flex flex-col items-center gap-2">
            <h1 className="text-[24px] font-bold text-blue-700">
              Welcome to THE next word predictor
            </h1>
            <p className="text-center text-black">
              Enter any 5 words and click predict to see what our wizard
              predicts to be the next word
            </p>
          </div>

          <form className="flex gap-8">
            <div>
              <input
                type="text"
                name="words"
                id="words"
                value={fiveWords}
                onChange={(e) => {
                  setfiveWords(e.target.value);
                  setPredictedWord("");
                }}
                placeholder="Enter 5 words"
                className="min-w-[300px] rounded-lg border-2 border-gray-300 px-4 py-2 text-sm focus:border-blue-500 focus:outline-none"
              />
            </div>
            <button
              onClick={(e) => {
                e.preventDefault();
                setProcessing(true);
                setTimeout(() => {
                  setPredictedWord("sunny");
                  setProcessing(false);
                }, 3000);
              }}
              disabled={processing || fiveWords.split(" ").length !== 5}
              className="flex min-w-[150px] items-center justify-center rounded-md bg-blue-600 px-8 py-2 font-bold text-white transition-all duration-300 ease-in disabled:opacity-50"
            >
              {processing ? (
                <svg
                  className="flex h-[25px] w-[25px] animate-spin items-center justify-center text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="transparent"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className=""
                    fill="#fff"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
              ) : (
                "Predict"
              )}
            </button>
          </form>
          {predictedWord && (
            <div className="absolute -bottom-20 rounded-md bg-[#1C2B36] px-4 py-2 font-semibold text-white">
              <p>
                {fiveWords}{" "}
                <span className="font-bold text-[#DD430C]">
                  {predictedWord}
                </span>
              </p>
            </div>
          )}
        </div>
      </main>
    </>
  );
};

export default Home;
