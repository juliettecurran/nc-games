import Badge from 'react-bootstrap/Badge';
import { useState } from 'react';
import { patchVotes } from '../../utils/api';

const Voter = ({ votes, id, vote_type }) => {
  const [hasVoted, setHasVoted] = useState(false);

  const handleClick = () => {
    setHasVoted((currentVote) => {
      const newVote = !currentVote;
      patchVotes(id, newVote, vote_type);
      return newVote;
    });
  };

  return (
    <Badge className='voteBadge' pill bg='primary' onClick={handleClick}>
      {hasVoted ? votes + 1 : votes}
    </Badge>
  );
};

export default Voter;
