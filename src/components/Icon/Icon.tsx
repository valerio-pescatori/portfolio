import { ICONS } from './constants/icons';
import type { IconsEnum } from './types/IconsEnum';

export type IconProps = {
	iconName: IconsEnum;
	class?: string;
};

export default function Icon(props: IconProps) {
	return <span class={props.class}>{ICONS[props.iconName]}</span>;
}
