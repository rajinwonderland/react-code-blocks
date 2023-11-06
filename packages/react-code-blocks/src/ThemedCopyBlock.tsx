import { withTheme } from 'styled-components';
import CopyBlock, { CopyBlockProps } from './components/CopyBlock';

// HELP WANTED: I don't understand why this forced typing is necessary for CopyBlock and Code, but not CodeBlock
export default withTheme(CopyBlock) as (props: CopyBlockProps) => JSX.Element;
