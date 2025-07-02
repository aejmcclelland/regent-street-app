// src/components/GroupCards.ts

import ChildrenCard from '@/components/ChildrenCard';
import GroupCard from '@/components/GroupCard';

export const groupCardComponents: Record<string, React.FC<{ group: any; basePath: string }>> = {
	scouting: GroupCard,
	guiding: GroupCard,
	// Add more overrides as needed
	default: ChildrenCard,
};
