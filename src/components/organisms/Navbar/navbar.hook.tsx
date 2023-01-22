import { useState } from 'react';

export const useNavbar = () => {
  const [isExpanded, setIsExpanded] = useState(true);
  const toggleExpand = () => setIsExpanded(!isExpanded);

  return {
    isExpanded,
    toggleExpand,
  };
};
