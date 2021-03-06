import { ISimpleOptions } from '../Options';
import { RefinerValue } from '../Values';
import { RefinerType } from './RefinerType';

export interface IBaseRefiner {
	type?: RefinerType;
	title?: string;
	slug?: string;
	isOpen?: boolean;
	isExpanded?: boolean;
	showCount?: number;
	options?: ISimpleOptions<any, any>;
	value?: RefinerValue;
}
