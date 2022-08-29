import { useContext } from "react";

import { ChallengesContext } from "../contexts/ChallengesContext";

export const useChallenges = () => {
  const value = useContext(ChallengesContext);

  return value;
}
