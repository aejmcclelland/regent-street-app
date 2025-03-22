// src/components/GroupCards/index.ts

import ChildrenCard from '@/components/ChildrenCard';
import ScoutsGroupCard from '@/components/ScoutsGroupCard';
import GuidesGroupCard from '@/components/GuidesGroupCard';

export const groupCardComponents: Record<string, React.FC<{ group: any }>> = {
	scouts: ScoutsGroupCard,
	guides: GuidesGroupCard,
	// Add more overrides as needed
	default: ChildrenCard,
};
