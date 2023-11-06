import { withTheme } from 'styled-components';
import Code, { CodeProps } from './components/Code';

// HELP WANTED: I don't understand why this forced typing is necessary for CopyBlock and Code, but not CodeBlock
export default withTheme(Code) as (props: CodeProps) => JSX.Element;
