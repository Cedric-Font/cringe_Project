import { useEffect } from "react";
import BlaguesAPI from "blagues-api";

export default function Api({ setJoke, setAnswer, categories, nextJoke }) {
  useEffect(() => {
    console.log(categories);
    let response = [];
    async function funcBlague() {
      const blagues = new BlaguesAPI(
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiMzQzMTA2NTg0MjE1NDIwOTI4IiwibGltaXQiOjEwMCwia2V5IjoiYTU1U2NIYUNjMXBRUzZvRnJGT0pNSHhzSmVSbjJWWDczdG82MTNVcEZIRkU4V1htMzciLCJjcmVhdGVkX2F0IjoiMjAyMy0xMS0yM1QxMDoyNzo1NSswMDowMCIsImlhdCI6MTcwMDczNTI3NX0.E3o0oZialuzdEhuLpEfQPEqv1sA9Z82b8Je3C9-ugJo"
      );
      if (categories === "ENTRE AMIS") {
        const blague = await blagues.random({
          disallow: [
            blagues.categories.DARK,
            blagues.categories.LIMIT,
            blagues.categories.BLONDES,
          ],
        });
        setJoke(blague.joke);
        setAnswer(blague.answer);
        console.log(blague.type);
      } else if (categories === "EN AMOUREUX") {
        const blague = await blagues.random({
          disallow: [
            blagues.categories.DARK,
            blagues.categories.GLOBAL,
            blagues.categories.DEV,
          ],
        });
        setJoke(blague.joke);
        setAnswer(blague.answer);
        console.log(blague.answer);
      } else if (categories === "ENTRE COLLEGUES") {
        const blague = await blagues.random({
          disallow: [
            blagues.categories.BLONDES,
            blagues.categories.GLOBAL,
            blagues.categories.DEV,
          ],
        });
        setJoke(blague.joke);
        setAnswer(blague.answer);
        console.log(blague.answer);
      } else if (categories === "EN PUBLIC") {
        const blague = await blagues.random({
          disallow: [
            blagues.categories.BLONDES,
            blagues.categories.DARK,
            blagues.categories.DEV,
            blagues.categories.LIMIT,
          ],
        });
        setJoke(blague.joke);
        setAnswer(blague.answer);
        console.log(blague.answer);
      } else if (categories === "EN PRIVEE") {
        const blague = await blagues.random({
          disallow: [blagues.categories.DEV, blagues.categories.GLOBAL],
        });
        setJoke(blague.joke);
        setAnswer(blague.answer);
        console.log(blague.answer);
      }
    }
    funcBlague();
    console.log(response);
  }, [nextJoke]);

  return;
}
