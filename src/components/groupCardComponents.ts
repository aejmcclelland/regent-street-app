// src/components/GroupCards.ts

import ChildrenCard from '@/components/ChildrenCard';
import GroupCard from '@/components/GroupCard';

export const groupCardComponents: Record<string, React.FC<{ group: any }>> = {
	scouts: GroupCard,
	guides: GroupCard,
	// Add more overrides as needed
	default: ChildrenCard,
};
