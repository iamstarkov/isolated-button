import { create as createJss } from 'jss';
import { create as createInjectSheet } from 'react-jss';
import presetDefault from 'jss-preset-default';
import increaseIdSpecificity from 'jss-increase-id-specificity';

const jss = createJss();

jss
  .setup(presetDefault())
  .use(increaseIdSpecificity())

const injectSheet = createInjectSheet(jss);

export default injectSheet;
