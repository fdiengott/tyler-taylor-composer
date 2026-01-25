export const CATEGORIES = ['orchestral', 'chamber', 'mixed ensemble', 'wind band', 'solo', 'installation'] as const;
export type CategoryType = (typeof CATEGORIES)[number];
