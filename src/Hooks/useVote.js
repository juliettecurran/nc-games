import { useEffect, useState } from 'react';

const useVote = (actualVote = 0) => {
  const [vote, setVote] = useState(0);
  console.log(actualVote);

  useEffect(() => {
    /*  setVote(actualVote); */
    console.log(actualVote, 'useEffect running');
  }, [actualVote]);

  const incrementVote = () => {
    setVote((currentVote) => currentVote + 1);
    console.log(vote, '<< vote');
    /*  patch request */
  };
  return { vote, incrementVote };
};

export default useVote;
