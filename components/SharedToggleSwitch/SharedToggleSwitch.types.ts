export type TSizeToggleSwitch = 'l'| 'm'

export interface ISharedToggleSwitchProps {
  size?: TSizeToggleSwitch
}

export type TToggleSwitchClass = Record<TSizeToggleSwitch, string>