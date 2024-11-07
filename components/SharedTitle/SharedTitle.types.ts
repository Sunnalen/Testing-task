export type TSizeTitle = 'l' | 'm'

export interface IsharedTitleProps {
  size?: TSizeTitle
}

export type TTitleSizeClass = Record<TSizeTitle, string>