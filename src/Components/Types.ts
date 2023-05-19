export type ButtonProps = {
    label: string;
    backgroundColor?: string;
    backgroundColorHover?: string;
    colorHover?: string;
    sx?: object;
    onClick?: (() => void) | ((event: React.MouseEvent<HTMLElement>) => void);
    disabled?: boolean;
  }

  export type TextProps = {
    text: string | undefined,
    sx?: object,
    onClick?: () => void;
  }

  export type MovieCardProps = {
    title: string,
    description?: string,
    picture?: string,
    onClick?: () => void;
  }

  export type ReviewCardProps = {
    username: string,
    profilePic?: string,
    reviewRating: string,
    reviewText: string,
  }