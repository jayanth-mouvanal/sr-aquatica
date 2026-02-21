import * as Icons from 'lucide-react';

export const getIcon = (name: string) => {
  const Icon = (Icons as any)[name];
  return Icon || Icons.HelpCircle;
};
