export interface IButton {
  type: string;
  children: React.ReactNode;
  paddingX?: string;
  paddingY?: string;
  onClick?: () => void;
}
