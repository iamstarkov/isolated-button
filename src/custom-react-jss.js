import { create as createJss } from 'jss';
import { create as createInjectSheet } from 'react-jss';
import presetDefault from 'jss-preset-default';
import increaseSpecificity from 'jss-increase-specificity';

const jss = createJss();

jss
  .setup(presetDefault())
  .use(increaseSpecificity())

const injectSheet = createInjectSheet(jss);

export default injectSheet;
