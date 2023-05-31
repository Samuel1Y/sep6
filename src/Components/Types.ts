export type ButtonProps = {
    label: string;
    sx?: object;
    onClick?: (() => void) | ((event: React.MouseEvent<HTMLElement>) => void);
    disabled?: boolean;
  }

  export type TextProps = {
    text: string | undefined,
    sx?: object,
  }

  export type MovieCardProps = {
    id: number,
    title: string,
    description?: string,
    picture?: string,
    onClick?: () => void;
  }

  export type ReviewCardProps = {
    movieId: number,
    username: string,
    profilePic?: string,
    reviewRating: string,
    reviewText: string,
  }

  export type DropdownMenuProps = {
  }

  export type HeaderProps = {
  }